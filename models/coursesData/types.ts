export type EducationStage = "primary" | "middle" | "secondary";

export interface Course {
  id: string;
  name: string;
  description: string;
  stage: EducationStage;
  grade: string;
  sessionsCount: number;
  totalHours: number;
  thumbnail: string;
  isActive: boolean;
  pricing: {
    isFree: boolean;
    price: number;
    currency: string;
  };
}
