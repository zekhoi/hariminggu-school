export type CourseType = {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  category: string;
  duration: number;
  image: string;
  price: number;
  batch: number;
  created_at: Date;
  updated_at: Date;
  curriculums: Curriculum[];
};

type Curriculum = {
  id: string;
  name: string;
};
