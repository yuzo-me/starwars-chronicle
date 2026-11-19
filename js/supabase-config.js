// Адрес проекта и публичный (publishable) ключ из Supabase: Project Settings → API Keys.
// Эти значения публичные по задумке Supabase; доступ к данным ограничивают правила RLS из supabase.sql.
// Секретный ключ (service_role / sb_secret_…) сюда класть НЕЛЬЗЯ.
export const supabaseConfig = {
  url: "https://empqylzlmcusqanjmetl.supabase.co",
  anonKey: "sb_publishable_vikTwx7FbGw5K5utcRZY2A_GvUd6MhM"
};
