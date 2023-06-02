import BackButton from '@/app/_components/back-button';

export default function Page() {
  return (
    <div className="fixed top-10 right-20 p-20 bg-white">
      <BackButton />
      <div>Page</div>
    </div>
  );
}
