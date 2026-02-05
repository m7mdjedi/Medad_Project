// models/coursesData/fetchFunctions.ts

import { Course, EducationStage } from "./types";
import coursesData from "./courses";
/* ============================================
   FIXED: استيراد الكورسات بشكل صحيح
   بعض الأحيان عند استخدام default export في Next.js 13
   يتم لفه في object، لذا نتحقق ونتأكد أنه Array
============================================ */

/* ================================
   BASIC FETCH FUNCTIONS
================================ */

// جلب كل الكورسات المفعّلة
export const getAllCourses = (): Course[] => {
  return coursesData.filter((course) => course.isActive);
};

// جلب كورسات حسب المرحلة
export const getCoursesByStage = (stage: EducationStage): Course[] => {
  return coursesData.filter(
    (course) => course.stage === stage && course.isActive,
  );
};

// جلب كورسات حسب المرحلة + الصف
export const getCoursesByStageAndGrade = (
  stage: EducationStage,
  grade: string,
): Course[] => {
  return coursesData.filter(
    (course) =>
      course.stage === stage && course.grade === grade && course.isActive,
  );
};

// جلب كورس واحد عن طريق الـ ID
export function getCourseById(id: string): Course | undefined {
  console.log("hello");
  return coursesData.find((course) => course.id === id);
}

/* ================================
   HELPER / AGGREGATION FUNCTIONS
================================ */

// جلب كل الصفوف المتاحة لمرحلة معينة
export const getAvailableGradesByStage = (stage: EducationStage): string[] => {
  const gradesSet = new Set<string>();

  coursesData.forEach((course) => {
    if (course.stage === stage && course.isActive) {
      gradesSet.add(course.grade);
    }
  });

  return Array.from(gradesSet);
};

// جلب أقل سعر كورس في مرحلة معينة
export const getMinPriceByStage = (stage: EducationStage): number => {
  const prices = coursesData
    .filter(
      (course) =>
        course.stage === stage && course.isActive && !course.pricing.isFree,
    )
    .map((course) => course.pricing.price);

  return prices.length > 0 ? Math.min(...prices) : 0;
};

// التحقق هل المرحلة تحتوي كورسات مجانية
export const hasFreeCourses = (stage: EducationStage): boolean => {
  return coursesData.some(
    (course) =>
      course.stage === stage && course.pricing.isFree && course.isActive,
  );
};

// جلب عدد الكورسات في مرحلة معينة
export const getCoursesCountByStage = (stage: EducationStage): number => {
  return coursesData.filter(
    (course) => course.stage === stage && course.isActive,
  ).length;
};

// البحث عن كورسات بالاسم
export const searchCourses = (query: string): Course[] => {
  const normalizedQuery = query.toLowerCase();

  return coursesData.filter(
    (course) =>
      course.isActive && course.name.toLowerCase().includes(normalizedQuery),
  );
};

/* ================================
   ADVANCED AGGREGATION
================================ */

// جلب الكورسات مجمعة حسب المرحلة ثم الصف
export const getCoursesGroupedByStageAndGrade = () => {
  const grouped: Record<
    string,
    {
      stage: string;
      grade: string;
      courses: Course[];
    }
  > = {};

  coursesData.forEach((course) => {
    if (!course.isActive) return;

    const key = `${course.stage}-${course.grade}`;

    if (!grouped[key]) {
      grouped[key] = {
        stage: course.stage,
        grade: course.grade,
        courses: [],
      };
    }

    grouped[key].courses.push(course);
  });

  return Object.values(grouped);
};
