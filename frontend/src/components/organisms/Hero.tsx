import SearchBar from "@/components/molecules/SearchBar";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex px-4 pt-20 pb-8 md:min-h-screen bg-grayed">
      <div className="flex items-center custom-container">
        <div className="grid w-full h-full grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col justify-center max-w-md gap-4 md:items-center">
            <h1 className="text-xl font-bold leading-snug text-gray-800 md:text-4xl">
              Temukan Program yang Kamu{" "}
              <span className="text-primary">Butuhkan</span>
            </h1>
            <p className="text-sm text-gray-700 md:text-base">
              Pelajari keterampilan yang paling banyak dibutuhkan untuk
              pekerjaan hari ini dan masa depan dengan harga kompetitif
            </p>
            <SearchBar placeholder="Cari program yang tepat untukmu" />
          </div>
          <div className="items-center justify-end hidden md:flex">
            {/* <div className="flex justify-center object-cover w-full h-full max-w-lg overflow-hidden"> */}
            <Image
              src="/images/banner_school-list.png"
              alt="Hero study image"
              // className="object-cover w-full"
              width={500}
              height={500}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
