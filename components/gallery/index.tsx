// frontend-app/components/gallery.tsx
"use client";

import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="aspect-square flex items-center justify-center text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id} className="focus:outline-none">
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt={`Product image ${image.id}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority={images[0].id === image.id} // Optimize first image
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;