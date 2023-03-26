import Button from "@/components/atoms/Button";
import LoadingScreen from "@/components/organisms/LoadingScreen";
import DefaultLayout from "@/components/templates/DefaultLayout";
import { getCourse } from "@/services/course.service";
import { CourseType } from "@/types/course";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Course() {
  const [Loading, setLoading] = useState(true);
  const router = useRouter();
  const [course, setCourse] = useState<CourseType | null>(null);

  useEffect(() => {
    if (!router.query.slug) return;
    setLoading(true);
    const fetchData = async () => {
      const { data } = await getCourse(router.query.slug as string);
      setCourse(data as CourseType);
      setLoading(false);
    };
    fetchData();
  }, [router.query]);

  if (!course || Loading) return <LoadingScreen />;

  return (
    <DefaultLayout dynamic title={course.name}>
      <div className="flex min-h-screen w-full">
        <div className="relative flex justify-center h-screen object-cover w-full overflow-hidden">
          <Image
            src="/images/background_write.jpg"
            alt={course.name}
            width={1920}
            height={1080}
            blurDataURL="/images/background_write.jpg"
            className="object-cover w-full"
          />
          <div className="absolute bg-gray-800 bg-opacity-60 min-h-screen w-full"></div>
          <div className="absolute flex min-h-screen pt-20 lg:pt-0 w-full items-start lg:items-center px-4">
            <div className="custom-container">
              <div className="flex flex-col gap-y-6 lg:max-w-xl">
                <h1 className="text-white text-4xl font-bold">
                  {course.headline}
                </h1>
                <p className="text-white">{course.description}</p>
                <div className="block">
                  <Button className="px-8 py-3 font-medium rounded text-sm">
                    Daftar Kelas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
