export default function LiveLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="bg-stone-900 min-h-screen p-20">
      <div className="shadow-lx rounded overflow-hidden p-10 bg-background">
        {children}
      </div>
      {modal}
    </div>
  );
}
