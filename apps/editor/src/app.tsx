import { useState, useEffect } from "react";
import { createApiFetch, Dashboard, Editor, CmsView, CmsProvider, AuthGate, UsersPage, AccountPage, AssetsPage } from "@hi/editor";
import { schema, websiteRenderer } from "@hi/website";

const api = createApiFetch();

type View = "dashboard" | "editor" | "content" | "users" | "account" | "assets";

function parsePath(): { view: View; siteId: string | null } {
  const segments = globalThis.location.pathname.split("/").filter(Boolean);
  if (segments[0] === "content") { return { view: "content", siteId: segments[1] ?? null }; }
  if (segments[0] === "admin" && segments[1] === "users") { return { view: "users", siteId: null }; }
  if (segments[0] === "account") { return { view: "account", siteId: null }; }
  if (segments[0] === "assets") { return { view: "assets", siteId: null }; }
  return { view: segments[0] ? "editor" : "dashboard", siteId: segments[0] || null };
}

export function App() {
  const [{ view, siteId }, setRoute] = useState(parsePath);

  useEffect(() => {
    function onPopState() {
      setRoute(parsePath());
    }
    globalThis.addEventListener("popstate", onPopState);
    return () => globalThis.removeEventListener("popstate", onPopState);
  }, []);

  function navigateToSite(id: string) {
    globalThis.history.pushState({}, "", `/${id}`);
    setRoute({ view: "editor", siteId: id });
  }

  function navigateToEditor() {
    if (siteId) {
      globalThis.history.pushState({}, "", `/${siteId}`);
      setRoute({ view: "editor", siteId });
    }
  }

  function navigateTo(path: string) {
    globalThis.history.pushState({}, "", path);
    setRoute(parsePath());
  }

  return (
    <AuthGate api={api}>
      {view === "content" && siteId ? (
        <CmsProvider api={api} siteId={siteId} schema={schema}>
          <CmsView siteId={siteId} onBack={navigateToEditor} />
        </CmsProvider>
      ) : view === "users" ? (
        <UsersPage onBack={() => navigateTo("/")} />
      ) : view === "account" ? (
        <AccountPage onBack={() => navigateTo("/")} />
      ) : view === "assets" ? (
        <AssetsPage onBack={() => navigateTo("/")} />
      ) : view === "editor" && siteId ? (
        <Editor siteId={siteId} schema={schema} api={api} renderer={websiteRenderer} />
      ) : (
        <Dashboard api={api} onSelectSite={navigateToSite} />
      )}
    </AuthGate>
  );
}
