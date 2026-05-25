export function navigate(path: string) {
  globalThis.history.pushState({}, "", path);
  globalThis.dispatchEvent(new PopStateEvent("popstate"));
}
