import { getCourseById } from "@/models/coursesData/fetchFunctions";
import { Course } from "@/models/coursesData/types";
import { CreditCard, BookOpen, DollarSign, ShieldCheck } from "lucide-react";

type Props = {
  params: {
    courseId: string;
  };
};

export default async function CheckoutPage({ params }: Props) {
  const { courseId } = await params;
  const course: Course | undefined = getCourseById(courseId);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">الكورس غير موجود</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-12">
      {/* Page Title */}
      <div className="mb-10 flex items-center justify-center gap-3">
        <CreditCard className="h-8 w-8 text-teal-600" />
        <h1 className="text-3xl font-extrabold text-teal-600">صفحة الدفع</h1>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
        {/* Course Info */}
        <div className="mb-8 border-b pb-6">
          <div className="mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-purple-500" />
            <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-600">
            {course.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <DollarSign className="h-5 w-5 text-amber-500" />
            <span>المبلغ المطلوب</span>
          </div>

          <span className="text-2xl font-extrabold text-amber-500">
            {course.pricing.isFree
              ? "مجاني"
              : `${course.pricing.price} ${course.pricing.currency}`}
          </span>
        </div>

        {/* Payment Button */}
        <button
          className="
            flex w-full items-center justify-center gap-2
            rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500
            py-3 text-base font-bold text-white
            transition-all duration-300
            hover:from-teal-600 hover:to-cyan-600
            hover:shadow-xl
            active:scale-95
          "
        >
          <ShieldCheck className="h-5 w-5" />
          تأكيد والدفع
        </button>
      </div>
    </div>
  );
}
