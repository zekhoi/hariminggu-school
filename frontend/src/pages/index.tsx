import Button from "@/components/atoms/Button";
import CourseCard from "@/components/molecules/CourseCard";
import Hero from "@/components/organisms/Hero";
import DefaultLayout from "@/components/templates/DefaultLayout";
import { descriptions } from "@/constants/course";
import { getAllCourses } from "@/services/course.service";
import { CourseType } from "@/types/course";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Bootcamp");
  const [courses, setCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getAllCourses({
        category: category,
      });
      setCourses(data);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    <DefaultLayout title={`Semua Program - ${category}`}>
      <Hero />
      <div className="bg-white flex flex-col w-full py-12 px-4">
        <div className="custom-container space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-gray-800 text-xl md:text-3xl font-bold">
              Jelajahi Program {category}
            </h1>
            <p className="text-center text-xs md:text-base">
              {descriptions[category]}
            </p>
            <div className="flex justify-center p-2 rounded bg-gray-200 gap-6">
              <Button
                className="rounded px-8 md:px-12 py-3 text-xs md:text-sm font-bold"
                active={category === "Bootcamp"}
                color={category === "Bootcamp" ? "primary" : "gray"}
                onClick={() => setCategory("Bootcamp")}
              >
                BOOTCAMP
              </Button>
              <Button
                className="rounded px-8 md:px-12 py-3 text-xs md:text-sm font-bold"
                active={category === "ProClass"}
                color={category === "ProClass" ? "primary" : "gray"}
                onClick={() => setCategory("ProClass")}
              >
                PROCLASS
              </Button>
            </div>
          </div>
          {loading ? (
            <p className="text-center text-gray-700">Memuat data...</p>
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.slug} data={course} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-700">Tidak ada program</p>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
