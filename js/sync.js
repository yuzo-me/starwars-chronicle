// Синхронизация прогресса через Supabase (вход через GitHub, таблица progress).
// Если js/supabase-config.js не заполнен, сайт работает только с локальным хранением.
import { supabaseConfig } from "./supabase-config.js?v=20261120j";

const ready = (api) => {
  window.SWCloud = api;
  window.dispatchEvent(new CustomEvent("cloud-ready", { detail: api }));
};

if (!supabaseConfig || !supabaseConfig.url || !supabaseConfig.anonKey) {
  ready(null);
} else {
  try {
    const { createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/+esm");
    const sb = createClient(supabaseConfig.url, supabaseConfig.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" }
    });
    let user = null;
    const back = () => location.origin + location.pathname;

    ready({
      provider: "GitHub",
      onAuth(cb) {
        sb.auth.getSession().then(({ data }) => { user = data.session?.user || null; cb(user ? { uid: user.id } : null); });
        sb.auth.onAuthStateChange((ev, session) => {
          const u = session?.user || null;
          if ((u?.id || null) === (user?.id || null) && ev !== "SIGNED_IN") return;
          user = u; cb(u ? { uid: u.id } : null);
        });
      },
      userName: () => user?.user_metadata?.user_name || user?.user_metadata?.full_name || "",
      signIn: () => sb.auth.signInWithOAuth({ provider: "github", options: { redirectTo: back() } }).then(r => { if (r.error) throw r.error; }),
      // вход по почте: письмо со ссылкой, без пароля
      signInEmail: (email) => sb.auth.signInWithOtp({ email, options: { emailRedirectTo: back(), shouldCreateUser: true } }).then(r => { if (r.error) throw r.error; }),
      signOut: () => sb.auth.signOut(),
      subscribe(uid, next, err) {
        let alive = true;
        const load = async () => {
          const { data, error } = await sb.from("progress").select("w,theme").eq("user_id", uid).maybeSingle();
          if (!alive) return;
          if (error) { err && err(error); return; }
          next(data ? { w: data.w || [], theme: data.theme } : null);
        };
        load();
        // живое обновление с других устройств + перечитывание при возвращении на вкладку
        const ch = sb.channel("progress-" + uid)
          .on("postgres_changes", { event: "*", schema: "public", table: "progress", filter: "user_id=eq." + uid }, load)
          .subscribe();
        const onVis = () => { if (document.visibilityState === "visible") load(); };
        document.addEventListener("visibilitychange", onVis);
        return () => { alive = false; sb.removeChannel(ch); document.removeEventListener("visibilitychange", onVis); };
      },
      async save(uid, data) {
        const { error } = await sb.from("progress").upsert({ user_id: uid, w: data.w, theme: data.theme, updated_at: new Date().toISOString() });
        if (error) throw error;
      }
    });
  } catch (e) {
    console.error("Supabase не загрузился", e);
    ready(null);
  }
}
