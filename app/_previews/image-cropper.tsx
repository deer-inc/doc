import ImageCropper from '@/app/_components/image-cropper';

export default function ImageCropperDemo() {
  return (
    <div className="mx-auto max-w-[140px]">
      <ImageCropper width={400} aspectRatio={1} />
    </div>
  );
}
