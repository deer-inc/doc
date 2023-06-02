'use client';

import Modal from '@/app/_components/modal';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

type Props = {
  aspectRatio?: number;
  width: number;
};

export default function ImageCropper({ aspectRatio = 1, width }: Props) {
  const editor = useRef<AvatarEditor>(null);
  const [preview, setPreview] = useState<string>();
  const [image, setImage] = useState<File>();
  const [scale, setScale] = useState(1);
  const [open, setOpen] = useState(false);

  const cropImage = () => {
    const dataUrl = editor.current?.getImage().toDataURL();
    setPreview(dataUrl);
  };

  return (
    <div>
      <Dropzone
        onDrop={(dropped) => {
          setImage(dropped[0]);
          setOpen(true);
        }}
        noKeyboard
        accept={{
          'image/jpeg': [],
          'image/png': [],
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            className="border bg-muted overflow-hidden cursor-pointer rounded-md grid place-content-center relative"
            style={{
              aspectRatio,
            }}
            {...getRootProps()}
          >
            <PhotoIcon className="w-10 h-10 text-muted-foreground/30" />
            {preview && (
              <img
                className="absolute inset-0 object-cover"
                src={preview}
                alt=""
              />
            )}
            <input {...getInputProps()} className="hidden" />
          </div>
        )}
      </Dropzone>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            aspectRatio,
          }}
          className="grid border"
        >
          {image && (
            <AvatarEditor
              className="w-full h-auto m-auto"
              scale={scale}
              ref={editor}
              image={image}
            />
          )}
        </div>

        <div className="my-4">
          <input
            type="range"
            max="2"
            step="0.01"
            min="1"
            defaultValue="1"
            onChange={(e) => setScale(parseFloat(e.target.value))}
          />
        </div>

        <button className="bg-primary rounded-md px-3 py-2" onClick={cropImage}>
          切り取る
        </button>
      </Modal>
    </div>
  );
}
