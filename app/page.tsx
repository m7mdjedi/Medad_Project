"use client";
import Image from "next/image";
import goals from "../public/photos/children.jpg";
import aboutus from "../public/photos/aboutUs.jpg";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ===== Hook: Reveal On Scroll ===== */
function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Home() {
  const stages = [
    {
      title: "المرحلة الابتدائية",
      grades: ["الصف الأول", "الصف الثاني", "الصف الثالث"],
    },
    {
      title: "المرحلة المتوسطة",
      grades: ["الصف الرابع", "الصف الخامس", "الصف السادس"],
    },
    {
      title: "المرحلة الثانوية",
      grades: ["الأول ثانوي", "الثاني ثانوي", "الثالث ثانوي"],
    },
  ];

  const [goalRef, goalVisible] = useRevealOnScroll();
  const [stagesRef, stagesVisible] = useRevealOnScroll();
  const [aboutRef, aboutVisible] = useRevealOnScroll();
  const [footerRef, footerVisible] = useRevealOnScroll();

  return (
    <>
      <Head>
        <title>المنصة التعليمية</title>
      </Head>

      <main className="bg-white text-gray-800">
        {/* ===== الهدف والغاية ===== */}
        <section
          ref={goalRef}
          className={`bg-[#2A8F88] text-white py-24 px-6
  transition-all duration-700 ease-out
  ${goalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* النص */}
            <div className="text-center md:text-right">
              <h1 className="text-3xl md:text-5xl font-bold text-[#F4C430] mb-6">
                هدفنا وغايتنا
              </h1>
              <p className="text-lg leading-relaxed">
                منصة تعليمية تفاعلية تقدم كورسات مسجلة ومباشرة لجميع المراحل
                الدراسية، بأسلوب حديث يناسب احتياجات الطلاب في العصر الرقمي.
              </p>
            </div>

            {/* الصورة */}
            <div className="flex justify-center">
              <Image
                src={goals}
                alt="تعلم تفاعلي عبر التابلت"
                className="rounded-2xl shadow-xl  max-w-sm w-full
        hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* ===== المراحل الدراسية ===== */}
        <section
          ref={stagesRef}
          className={`py-20 px-6 bg-gray-50
          transition-all duration-700 ease-out
          ${stagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#2A8F88] mb-12">
            المراحل الدراسية
          </h2>

          <div className="flex justify-center">
            <div
              className="
                flex flex-col gap-6
                md:flex-row md:overflow-x-auto
                max-w-6xl w-full
              "
            >
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="w-full md:min-w-[320px] bg-white
                  border border-[#2A8F88]/40
                  rounded-2xl shadow-lg p-6
                  hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-[#2A8F88] mb-5 text-center">
                    {stage.title}
                  </h3>

                  <ul className="space-y-3">
                    {stage.grades.map((grade, i) => (
                      <li key={i}>
                        <Link
                          href={`/courses/${i}`}
                          className="block text-center py-2 rounded-lg
                          bg-[#2A8F88] text-white
                          hover:bg-[#22756F] transition"
                        >
                          {grade}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== نبذة عنا ===== */}
        <section
          ref={aboutRef}
          className={`bg-white py-20 px-6
  transition-all duration-700 ease-out
  ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* الصورة */}
            <div className="flex justify-center order-2 md:order-1">
              <Image
                src={aboutus}
                alt="التعلم عبر المنصة"
                className="rounded-2xl shadow-xl max-w-md w-full
        hover:scale-105 transition duration-500"
              />
            </div>

            {/* النص */}
            <div className="text-center md:text-right order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold text-[#2A8F88] mb-6">
                نبذة عنا
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                نؤمن بأن التعليم يجب أن يكون ممتعًا، سهل الوصول، ومدعومًا بأحدث
                التقنيات، لذلك أنشأنا منصة تجمع أفضل المعلمين مع تجربة تعليمية
                عصرية.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
