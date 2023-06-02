export default function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose border p-10 rounded-md mb-4">{children}</div>
  );
}
