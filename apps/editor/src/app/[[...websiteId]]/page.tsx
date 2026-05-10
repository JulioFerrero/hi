"use client";

import { useParams, useRouter } from "next/navigation";
import { Editor, Dashboard, createApiFetch } from "@wb/editor";
import { schema } from "../../schemas";

const api = createApiFetch();

export default function AppPage() {
  const params = useParams<{ websiteId?: string[] }>();
  const router = useRouter();

  const siteId = params.websiteId?.[0];

  if (!siteId) {
    return <Dashboard api={api} onSelectSite={(id) => router.push(`/${id}`)} />;
  }

  return <Editor siteId={siteId} schema={schema} api={api} />;
}
