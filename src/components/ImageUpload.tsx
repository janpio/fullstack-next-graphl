"use client";
import React, { useEffect, useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { app, storage } from "@/firebase";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

import Image from "next/image";
export default function ImageUpload() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: "",
    },
  });
  const [image, setImage] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>();

  const [progress, setProgress] = useState<number>(0);
  const { toast } = useToast();

  // console.log("image is", image);

  const date = new Date();
  // const storageRef = ref(storage, `uploads/${image?.name}`);
  const storageRef = ref(
    storage,
    `uploads/${date.getTime()}-${image?.name?.replace(/\s/g, "_")}`
  );

  const uploadTask = uploadBytesResumable(storageRef, image as Blob);
  const formData = new FormData();
  formData.append("image", image as Blob);

  // useEffect(() => {
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       alert(error);
  //       console.log("error is", error);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("download url is", downloadURL);
  //         setImage(downloadURL);
  //         setImageUrl(downloadURL);
  //       });
  //     }
  //   );
  // }, []);
  const handleImageUpload = async () => {
    try {
      if (image) {
        const res = await uploadBytes(storageRef, image);
        console.log("response for image is", res.ref);
        console.log("response for image is", res.metadata);

        toast({ title: "success", description: res.metadata.fullPath });
      }
    } catch (err: any) {
      console.log("error", err);
      toast({ title: err.message, description: err.message });
    }
  };

  // gs://cloud-store-78972.appspot.com/images

  const onSubmit = (data: any) => {
    // console.log("data is", data);
    // console.log("formData is", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="file"
          {...register("image")}
          onChange={(e) => setImage(e.target?.files?.[0])}
        />
        <Button onClick={handleImageUpload}>submit</Button>
      </form>

      {imageUrl && (
        <Image
          className="flex item-center px-2 absolute top-0 right-1 my-6 ml-6"
          src={imageUrl}
          alt="image"
          width={200}
          height={200}
        />
      )}

      {!image && (
        <div className="my-2 py-6">
          <Progress value={20} />
        </div>
      )}

      <Button
        className="my-4"
        onClick={() => {
          toast({ title: "success", description: "The hustle academy" });
        }}
      >
        Show Toast
      </Button>
      <TableDemo />

      <h1 className="text-center text-blue-600">Hello husler</h1>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
