export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-100 p-4">{/* Sidebar */}</aside>
      <main className="flex‐1">{children}</main>
    </div>
  );
}
