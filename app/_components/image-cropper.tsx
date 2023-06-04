'use client';

import { Button } from '@/app/_components/button';
import Modal from '@/app/_components/modal';
import { Slider } from '@/app/_components/slider';
import { cn } from '@/lib/utils';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone, { useDropzone } from 'react-dropzone';

type Props = {
  aspectRatio?: number;
  width: number;
};

export default function ImageCropper({ aspectRatio = 1, width }: Props) {
  const editor = useRef<AvatarEditor>(null);
  const [preview, setPreview] = useState<string>();
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    noKeyboard: true,
    maxSize: 1024 * 1024 * 2,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDropAccepted: (dropped) => {
      setImage(dropped[0]);
      setOpen(true);
    },
  });
  const [image, setImage] = useState<File>();
  const [scale, setScale] = useState(1.0);
  const [open, setOpen] = useState(false);

  const cropImage = () => {
    const dataUrl = editor.current?.getImage().toDataURL();
    setOpen(false);
    setPreview(dataUrl);
  };

  return (
    <div>
      <div
        className={cn(
          'border overflow-hidden cursor-pointer rounded-md grid place-content-center relative',
          isDragAccept ? 'bg-primary scale-150' : 'bg-muted'
        )}
        style={{
          aspectRatio,
        }}
        {...getRootProps()}
      >
        {!preview && (
          <PhotoIcon className="w-10 h-10 text-muted-foreground/30" />
        )}
        {preview && (
          <img
            className="absolute inset-0 object-cover block w-full h-full"
            src={preview}
            alt=""
          />
        )}
        <input {...getInputProps()} className="hidden" />
      </div>

      {preview && (
        <Button className="mt-4" variant="ghost" onClick={() => setPreview('')}>
          削除
        </Button>
      )}

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="grid border">
          {image && (
            <AvatarEditor
              className="w-full h-auto m-auto"
              scale={scale}
              ref={editor}
              width={width}
              height={width / aspectRatio}
              image={image}
            />
          )}
        </div>

        <div className="my-4">
          <Slider
            max={2}
            step={0.01}
            min={1}
            defaultValue={[1]}
            onValueChange={([value]) => setScale(value)}
          />
        </div>

        <div className="text-right">
          <Button onClick={cropImage}>切り取る</Button>
        </div>
      </Modal>
    </div>
  );
}
