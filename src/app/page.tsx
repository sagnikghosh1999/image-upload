"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function Home() {
  const value: string[] = [];
  const uploadPreset = "";
  const handleUpload = useCallback(
    (result: any) => {
      value.push(result.info.secure_url);
    },
    [value]
  );
  console.log(value);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={uploadPreset}
        options={{
          maxFiles: 4,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
            >
              <TbPhotoPlus size={50} />
              <div className="font-semibold text-lg">Click to upload</div>
              {value && (
                <div className="h-40 w- grid grid-cols-2">
                  {value.map((img, i) => (
                    <div className="  col-span-1">
                      <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={img}
                        alt=""
                      />
                    </div>
                  ))}
                  {/* {value} */}
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </main>
  );
}
