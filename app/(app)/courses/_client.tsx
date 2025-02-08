"use client";
import { FEATURE_FLAGS, isFlagEnabled } from "@/utils/flags";
import { type Session } from "next-auth";
import { notFound } from "next/navigation";
import { mockCourses } from "./mock";
import { CourseCard } from "./components/CourseCard";
import { CourseProgress } from "./components/CourseProgress";

interface ContentProps {
  session: Session | null;
}

const Content = ({ session }: ContentProps) => {
  const flagEnabled = isFlagEnabled(FEATURE_FLAGS.COURSES_LANDING);

  if (!flagEnabled) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl p-8">
      <h1 className="mb-6 border-b border-b-neutral-300 pb-2 text-3xl font-bold dark:border-b-neutral-600 lg:text-4xl">
        Courses
      </h1>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 md:gap-12">
        <div className="col-span-2">
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
        <CourseProgress title="Course title" percentage={70} />
      </div>
    </div>
  );
};

export default Content;
