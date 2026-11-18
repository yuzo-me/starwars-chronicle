// Синхронизация прогресса через Firebase (Auth + Firestore).
// Если js/firebase-config.js не заполнен, сайт работает только с локальным хранением.
import { firebaseConfig } from "./firebase-config.js";

const ready = (api) => {
  window.SWCloud = api;
  window.dispatchEvent(new CustomEvent("cloud-ready", { detail: api }));
};

if (!firebaseConfig || !firebaseConfig.apiKey) {
  ready(null);
} else {
  try {
    const V = "10.12.2";
    const [{ initializeApp }, authM, fsM] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
    ]);
    const app = initializeApp(firebaseConfig);
    const auth = authM.getAuth(app);
    const db = fsM.getFirestore(app);
    const provider = new authM.GoogleAuthProvider();
    authM.getRedirectResult(auth).catch(() => {});

    ready({
      onAuth: (cb) => authM.onAuthStateChanged(auth, cb),
      userName: () => auth.currentUser?.displayName || "",
      async signIn() {
        try { await authM.signInWithPopup(auth, provider); }
        catch (e) {
          if (e && (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment"))
            await authM.signInWithRedirect(auth, provider);
          else throw e;
        }
      },
      signOut: () => authM.signOut(auth),
      subscribe(uid, next, err) {
        return fsM.onSnapshot(fsM.doc(db, "users", uid),
          (s) => next(s.exists() ? s.data() : null), err);
      },
      save: (uid, data) => fsM.setDoc(fsM.doc(db, "users", uid), { ...data, updatedAt: fsM.serverTimestamp() }),
    });
  } catch (e) {
    console.error("Firebase не загрузился", e);
    ready(null);
  }
}
