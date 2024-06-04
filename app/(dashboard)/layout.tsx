import DahboardSidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen gap-8">
      <DahboardSidebar />
      {children}
    </div>
  );
}
