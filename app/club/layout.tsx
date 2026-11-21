
import { obtenerAuthCloudflare } from "@/lib/auth-cloudflare";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function ClubLayout({
  children,
}: {
  children: ReactNode;
}) {
  const auth = await obtenerAuthCloudflare();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return <>{children}</>;
}
