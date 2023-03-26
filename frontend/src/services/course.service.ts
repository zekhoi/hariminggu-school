import axios from "@/lib/api";

const getAllCourses = (data: any = {}) =>
  axios.get("/api/courses", { params: data });

const getCourse = (slug: string) => axios.get(`/api/courses/${slug}`);

export { getAllCourses, getCourse };
