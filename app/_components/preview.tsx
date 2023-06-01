export default function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="aspect-video prose-none overflow-auto py-10 border p-10 rounded-md flex items-center justify-center mb-4">
      <div className="m-auto">{children}</div>
    </div>
  );
}
