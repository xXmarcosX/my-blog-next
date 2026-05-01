import { MenuAdmin } from "@/components/Admin/MenuAdmin";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <MenuAdmin />
      </Suspense>
      <main>
        {children}
      </main>
    </>
  );
}
