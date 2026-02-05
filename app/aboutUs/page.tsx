import {
  BookOpen,
  Target,
  Eye,
  CheckCircle,
  Users,
  Laptop,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-14 md:px-12">
      {/* العنوان */}
      <div className="mb-14 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-teal-600">من نحن</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          منصة تعليمية تهدف إلى تبسيط التعليم وتقديم محتوى تعليمي عالي الجودة
          للطلاب في جميع المراحل الدراسية
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-16">
        {/* رسالتنا */}
        <section className="rounded-2xl bg-white p-8 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <Target className="h-7 w-7 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-800">رسالتنا</h2>
          </div>
          <p className="leading-relaxed text-gray-600">
            نؤمن بأن التعليم هو الأساس لبناء مستقبل أفضل، لذلك نعمل على توفير
            كورسات تعليمية مبسطة، منظمة، ومناسبة لجميع المستويات، مع التركيز على
            الفهم وليس الحفظ.
          </p>
        </section>

        {/* رؤيتنا */}
        <section className="rounded-2xl bg-white p-8 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">رؤيتنا</h2>
          </div>
          <p className="leading-relaxed text-gray-600">
            أن نكون المنصة التعليمية الرائدة عربيًا، وأن نساعد الطلاب على تحقيق
            أفضل نتائج دراسية من خلال محتوى تفاعلي وتجربة تعلم ممتعة.
          </p>
        </section>

        {/* لماذا نحن */}
        <section className="rounded-2xl bg-white p-8 shadow-md">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle className="h-7 w-7 text-teal-500" />
            <h2 className="text-2xl font-bold text-gray-800">لماذا نحن؟</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-purple-500" />
              <h3 className="mb-2 font-semibold text-gray-800">محتوى مبسط</h3>
              <p className="text-sm text-gray-600">
                شرح واضح وسهل يناسب جميع المستويات
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-orange-500" />
              <h3 className="mb-2 font-semibold text-gray-800">
                مدرسون متميزون
              </h3>
              <p className="text-sm text-gray-600">
                نخبة من أفضل المعلمين ذوي الخبرة
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <Laptop className="mx-auto mb-3 h-8 w-8 text-cyan-500" />
              <h3 className="mb-2 font-semibold text-gray-800">تعلم مرن</h3>
              <p className="text-sm text-gray-600">
                تعلم في أي وقت ومن أي مكان
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 p-10 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">ابدأ رحلتك التعليمية معنا</h2>
          <p className="mb-6 text-sm opacity-90">
            انضم الآن واكتشف أفضل الكورسات التعليمية
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-600 transition hover:bg-gray-100"
          >
            <BookOpen className="h-5 w-5 text-teal-600" />
            تصفح الكورسات
          </a>
        </section>
      </div>
    </div>
  );
}
