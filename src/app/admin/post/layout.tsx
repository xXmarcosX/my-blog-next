import { MenuAdmin } from "@/components/Admin/MenuAdmin";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
