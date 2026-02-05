"use client";
import Head from "next/head";
import { getCoursesGroupedByStageAndGrade } from "@/models/coursesData/fetchFunctions";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import courseOnline from "../../public/photos/aboutUs.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CoursesPage() {
  // 👇 جلب البيانات من الفانكشن
  const sections = getCoursesGroupedByStageAndGrade();

  const stageTitles = {
    primary: "المرحلة الابتدائية",
    middle: "المرحلة المتوسطة",
    secondary: "المرحلة الثانوية",
  };

  const gradeTitles = {
    "grade-1": "الصف الأول",
    "grade-2": "الصف الثاني",
    "grade-3": "الصف الثالث",
    "grade-4": "الصف الرابع",
    "grade-5": "الصف الخامس",
    "grade-6": "الصف السادس",
  };

  return (
    <>
      <Head>
        <title>الصفوف والكورسات</title>
      </Head>

      <main className="bg-gray-50 py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#2A8F88] mb-16">
          الصفوف والكورسات
        </h1>

        {sections.map((section, idx) => (
          <div key={idx} className="max-w-7xl mx-auto mb-20">
            {/* ===== عنوان المرحلة + الصف ===== */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#F4C430]">
                {stageTitles[section.stage]}
              </h2>
              <p className="text-lg font-semibold text-[#2A8F88]">
                {gradeTitles[section.grade] || section.grade}
              </p>
            </div>

            {/* ===== سلايدر الكورسات ===== */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {section.courses.map((course) => (
                <SwiperSlide key={course.id}>
                  <CourseCard course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </main>
    </>
  );
}

/* ================================
   COURSE CARD COMPONENT
================================ */
function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <Image
        src={courseOnline}
        alt={course.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-[#2A8F88] mb-2">{course.name}</h3>

        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="flex justify-between text-sm mb-4">
          <span>📚 {course.sessionsCount} جلسة</span>
          <span>⏱ {course.totalHours} ساعة</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-[#F4C430]">
            {course.pricing.isFree ? "مجاني" : `$${course.pricing.price}`}
          </span>

          <button
            className="bg-[#2A8F88] text-white px-4 py-2 rounded-lg
            hover:bg-[#22756F] transition"
          >
            عرض الكورس
          </button>
        </div>
      </div>
    </div>
  );
}
