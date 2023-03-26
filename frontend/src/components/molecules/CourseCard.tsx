import { CourseType } from "@/types/course";
import { formatRupiah } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookOpen, FaClock, FaTerminal } from "react-icons/fa";

type CourseCardProps = {
  data: CourseType;
};

export default function CourseCard({ data }: CourseCardProps) {
  return (
    <Link href={`/course/${data.slug}`}>
      <div className="flex flex-col rounded hover:shadow-2xl border border-gray-200">
        <div className="relative h-56 flex rounded-t justify-center object-cover w-full overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            width={900}
            height={600}
            className="object-cover w-full"
          />
          <span className="px-2 py-1 bg-white rounded text-xs text-gray-700 absolute right-3 top-3">
            {data.category}
          </span>
        </div>
        <div className="flex flex-col p-3 gap-6">
          <h6 className="font-bold">{data.name}</h6>
          <div className="flex flex-row gap-x-3 text-xs text-gray-700">
            <div className="flex items-center space-x-1">
              <FaBookOpen className="w-3 h-3 text-primary" />
              <span>{data?.curriculums?.length ?? 0} Materi</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaClock className="w-3 h-3 text-primary" />
              <span>{data.duration} Bulan</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaTerminal className="w-3 h-3 text-primary" />
              <span>Batch {data.batch}</span>
            </div>
          </div>
          <p className="text-primary font-bold text-right">
            {formatRupiah(data.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
