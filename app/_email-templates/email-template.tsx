export default function EmailTemplate({
  name,
  product,
}: {
  name: string;
  product: string;
}) {
  return (
    <div>
      <div>
        <h1>ようこそ, {name}さん!</h1>
        <p>{product}についてご連絡いただきありがとうございます.</p>
      </div>
    </div>
  );
}
