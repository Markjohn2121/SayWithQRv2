import QrArtStudioV2 from '@/components/qr-art-studio-v2';

export default function QrPage({ params }: { params: { id: string } }) {
  // URL-decode the id parameter
  const decodedId = decodeURIComponent(params.id);

  return (
    <main className="container mx-auto p-4 md:p-8">
      <QrArtStudioV2 qrId={decodedId} />
    </main>
  );
}
