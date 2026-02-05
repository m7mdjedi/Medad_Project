import { ClassLevel, Subject } from "./recoredeLessons";
import educationData, { Lesson, test_lesson } from "./recoredeLessons";
export function getAllLevels(): any[] | undefined {
  const levels = [];
  for (const level of educationData) {
    levels.push({
      name: level.levelname,
      id: level.id,
      level: level.level,
    });
  }
  return levels;
}
export function getAllsubjects(): any[] | undefined {
  const subjects = [];
  for (const level of educationData) {
    for (const subject of level.Subjects) {
      subjects.push({
        name: subject.name,
        id: subject.id,
      });
    }
  }
  return subjects;
}
export function getlessonsById(SubjectId: string): Lesson[] | undefined {
  for (const classLevel of educationData) {
    for (const subject of classLevel.Subjects) {
      if (subject.id === SubjectId) {
        return subject.lessons;
      }
    }
  }
  return undefined;
}
export function getAllSubjectsByClassLevel(
  ClassLevelId: string,
): Subject[] | undefined {
  for (const classLevel of educationData) {
    if (classLevel.id === ClassLevelId) {
      return classLevel.Subjects;
    }
  }
  return undefined;
}
function getLessonById(lessonId: string): Lesson | undefined {
  for (const level of educationData) {
    for (const subject of level.Subjects) {
      const lesson = subject.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return undefined;
}
export function getTestByLessonId(LessonId: string): test_lesson | undefined {
  const lesson = getLessonById(LessonId);
  return lesson?.test_lesson;
}
export function getAllFreeLessons(): Lesson[] {
  const freeLessons: Lesson[] = [];
  for (const level of educationData) {
    for (const subject of level.Subjects) {
      for (const lesson of subject.lessons) {
        if (lesson.pricing.isFree) {
          freeLessons.push(lesson);
        }
      }
    }
  }
  return freeLessons;
}
export function getPaidLessons(): Lesson[] {
  const paidLessons: Lesson[] = [];
  for (const level of educationData) {
    for (const subject of level.Subjects) {
      for (const lesson of subject.lessons) {
        if (!lesson.pricing.isFree) {
          paidLessons.push(lesson);
        }
      }
    }
  }
  return paidLessons;
}
export function getCurrentPrice(lessonId: string): number | null {
  const lesson = getLessonById(lessonId);
  return lesson ? lesson.pricing.price : null;
}
