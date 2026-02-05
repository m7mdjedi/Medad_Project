import { getCoursesByStageAndGrade } from "@/models/coursesData/fetchFunctions";
import { Course } from "@/models/coursesData/types";
import Link from "next/link";
import { BookOpen, Layers, DollarSign, PlayCircle } from "lucide-react";

type Props = {
  params: {
    stage: string;
    grade: string;
  };
};

export default async function GradePage({ params }: Props) {
  const { stage, grade } = await params;

  const filteredCourses: Course[] = getCoursesByStageAndGrade(stage, grade);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-12">
      <h1 className="mb-12 text-center text-3xl font-extrabold text-teal-600">
        الكورسات المتاحة
      </h1>

      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500">
          لا توجد كورسات لهذا الصف حاليًا
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="
                group flex flex-col justify-between
                rounded-2xl border border-gray-100 bg-white
                p-6 shadow-md
                text-center
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-xl
              "
            >
              {/* محتوى الكارد */}
              <div>
                {/* اسم الكورس */}
                <div className="mb-3 flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                  <h3
                    className="
                      text-lg font-bold text-gray-800
                      transition-colors duration-300
                      group-hover:text-teal-600
                    "
                  >
                    {course.name}
                  </h3>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {course.description}
                </p>

                {/* عدد الجلسات */}
                <p className="mb-1 flex items-center justify-center gap-1 text-sm text-gray-700">
                  <Layers className="h-4 w-4 text-teal-500" />
                  عدد الجلسات:
                  <span className="ml-1 font-semibold text-teal-600">
                    {course.sessionsCount}
                  </span>
                </p>

                {/* السعر */}
                <p className="flex items-center justify-center gap-1 text-sm text-gray-700">
                  <DollarSign className="h-4 w-4 text-amber-500" />
                  السعر:
                  <span className="ml-1 font-semibold text-amber-500">
                    {course.pricing.isFree
                      ? "مجاني"
                      : `${course.pricing.price} ${course.pricing.currency}`}
                  </span>
                </p>
              </div>

              {/* زر الاشتراك */}
              <Link
                href={`/checkout/${course.id}`}
                className="
                  mt-8 flex w-full items-center justify-center gap-2
                  rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400
                  py-2.5 text-sm font-semibold text-white
                  transition-all duration-300
                  hover:from-teal-500 hover:to-cyan-500
                  hover:shadow-lg
                  active:scale-95
                "
              >
                <PlayCircle className="h-5 w-5" />
                اشترك الآن
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
