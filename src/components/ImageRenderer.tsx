"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { toast } from "./ui/use-toast";
interface MediaType {
  name: string;
  type: string;
  size?: number;
}
interface Media {
  files: File[] | [];
}

export default function ImageRenderer(props: Media) {
  const { files } = props;
  const [mediaFiles, setMediaFiles] = useState<unknown[]>([]);
  const [deletedMedia, setDeletedMedia] = useState<string[]>([]);

  const medias: MediaType[] = [
    { name: "file1.png", type: "image" },
    { name: "file2.mp4", type: "video" },
    { name: "file3.png", type: "image" },
    { name: "file4.mp4", type: "video" },
  ];
  const handleDelete = (index: number) => {
    const file = files?.filter((file, id) => id !== index);

    const media = medias?.filter((file, id) => id != index);
    const fileNames = file?.map((file) => file.name);
    console.log("file is", file);
    const uniqueFile = new Set(fileNames);
    console.log("unqi", uniqueFile, Array.from(uniqueFile));
    const name = Array.from(uniqueFile);
    setDeletedMedia((prev) => [...prev, ...name]);
    // setDeletedMedia((prev) => [...prev]);
  };

  //   const result = handleDelete(2);
  console.log("the result is", deletedMedia);
  return (
    <div>
      {files && files.length > 0 ? (
        <>
          {files.map((file, index) => {
            return (
              <React.Fragment key={index}>
                <div className="relative my-4 py-2 shadow-md rounded-md w-[400px]">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Image"
                    width={400}
                    height={200}
                  />
                  <X
                    className="cursor-pointer absolute top-0 right-0 text-white text-xl bg-red-600 rounded-full p-1"
                    onClick={() => {
                      handleDelete(index);
                      toast({
                        title: "The selected id is",
                        description: (
                          <pre className="bg-slate-800">
                            <code className="text-white">
                              {JSON.stringify(deletedMedia.toString(), null, 2)}
                            </code>
                          </pre>
                        ),
                      });
                    }}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <Button onClick={() => handleDelete(2)}>Show the Result</Button>
      )}
    </div>
  );
}
