// First, update the interfaces
export interface TestQuestion {
  id: string;
  context: string;
  type: "multiple-choice" | "true-false" | "short-answer";
  question: string;
  options: string[];
  correctAnswer: string | number | boolean;
  explanation?: string;
  points: number;
}

export interface test_lesson {
  id: string;
  title: string;
  duration: number; //minutes
  questions: TestQuestion[];
  passingScore: number;
  totalPoints: number;
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  season: number;
  unit: number;
  lessonOrder: number;
  frompage: number;
  topage: number;
  colored_book: boolean;
  test_lesson: test_lesson; // Optional test for each lesson
  pricing: {
    isFree: boolean;
    price: number; // 0 if free, or the cost in USD/EUR/etc
    currency: string; // e.g., "USD", "EUR", "GBP"
    discount?: {
      active: boolean;
      discountPrice: number;
      validUntil?: string; // ISO date string
    };
  };
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
  totalLessons: number;
}

export interface ClassLevel {
  id: string;
  levelname: string;
  level: number;
  Subjects: Subject[];
  totalsubjects: number;
}

// Now create the data array to use it in my app :)
export const educationData: ClassLevel[] = [
  {
    id: "first_level",
    levelname: "first level",
    level: 1,
    totalsubjects: 2,
    Subjects: [
      {
        id: "English1",
        name: "English1",
        description: "Introduction to English grammar fundamentals ",
        totalLessons: 3,
        lessons: [
          {
            id: "lesson-English1-1",
            title: "Introduction to lesson-English1-1",
            videoUrl: "https://example.com/videos/nouns-intro.mp4",
            description: "Learn about common and proper nouns",
            season: 1,
            unit: 1,
            lessonOrder: 1,
            frompage: 12,
            topage: 18,
            colored_book: true,
            pricing: {
              isFree: true,
              price: 0,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-English1-1-test1-test1",
              title: "Nouns Quiz",
              duration: 15,
              passingScore: 70,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-English1-1-test1-q1",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "Which of the following is a proper noun?",
                  options: ["city", "dog", "London", "car"],
                  correctAnswer: 2,
                  explanation:
                    "Proper nouns are specific names of people, places, or things and are capitalized.",
                  points: 25,
                },
                {
                  id: "lesson-English1-1-test1-q2",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "What type of noun is 'happiness'?",
                  options: [
                    "Common noun",
                    "Proper noun",
                    "Abstract noun",
                    "Concrete noun",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Abstract nouns represent ideas, qualities, or states rather than concrete objects.",
                  points: 25,
                },
                {
                  id: "lesson-English1-1-test1-q3",
                  context: "Noun Identification",
                  type: "multiple-choice",
                  question:
                    "Identify the collective noun in the sentence: 'The team won the championship.'",
                  options: ["team", "won", "championship", "the"],
                  correctAnswer: 0,
                  explanation:
                    "Collective nouns refer to groups of people or things.",
                  points: 25,
                },
                {
                  id: "lesson-English1-1-test1-q4",
                  context: "True/False Questions",
                  type: "true-false",
                  question: "All nouns can be counted.",
                  options: ["True", "False"],
                  correctAnswer: false,
                  explanation:
                    "Some nouns (like water, air, happiness) are uncountable.",
                  points: 25,
                },
              ],
            },
          },
          {
            id: "lesson-English1-2",
            title: "Basic Verb Tenses first level lesson-English1-2",
            videoUrl: "https://example.com/videos/verb-tenses.mp4",
            description: "Introduction to present, past, and future tenses",
            season: 1,
            unit: 1,
            lessonOrder: 2,
            frompage: 19,
            topage: 26,
            colored_book: true,
            pricing: {
              isFree: false,
              price: 9.99,
              currency: "USD",
              discount: {
                active: true,
                discountPrice: 7.99,
                validUntil: "2024-12-31",
              },
            },
            test_lesson: {
              id: "lesson-English1-2-test1",
              title: "Verb Tenses Quiz",
              duration: 20,
              passingScore: 75,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-English1-2-test1-q1",
                  context: "Present Tense",
                  type: "multiple-choice",
                  question: "Which sentence is in present simple tense?",
                  options: [
                    "She is reading a book.",
                    "She reads books every day.",
                    "She read a book yesterday.",
                    "She will read a book tomorrow.",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Present simple describes habitual actions or general truths.",
                  points: 20,
                },
                {
                  id: "lesson-English1-2-test1-q2",
                  context: "Past Tense",
                  type: "multiple-choice",
                  question: "What is the past tense of 'go'?",
                  options: ["goed", "went", "gone", "going"],
                  correctAnswer: 1,
                  explanation:
                    "'Went' is the irregular past tense form of 'go'.",
                  points: 20,
                },
                {
                  id: "lesson-English1-2-test1-q3",
                  context: "Future Tense",
                  type: "multiple-choice",
                  question: "Which sentence uses future tense correctly?",
                  options: [
                    "I will goes to the store.",
                    "I going to the store tomorrow.",
                    "I will go to the store tomorrow.",
                    "I go to the store tomorrow.",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "'Will go' is the correct future tense construction.",
                  points: 20,
                },
                {
                  id: "lesson-English1-2-test1-q4",
                  context: "Mixed Tenses",
                  type: "multiple-choice",
                  question: "Identify the present continuous tense:",
                  options: [
                    "They play football.",
                    "They are playing football.",
                    "They played football.",
                    "They will play football.",
                  ],
                  correctAnswer: 1,
                  explanation: "Present continuous uses 'be + verb-ing'.",
                  points: 20,
                },
                {
                  id: "lesson-English1-2-test1-q5",
                  context: "True/False",
                  type: "true-false",
                  question:
                    "All regular verbs form past tense by adding '-ed'.",
                  options: ["True", "False"],
                  correctAnswer: true,
                  explanation:
                    "Regular verbs follow the pattern: base form + '-ed' for past tense.",
                  points: 20,
                },
              ],
            },
          },
          {
            id: "lesson-English1-3",
            title: "Introduction to Adjectives first level",
            videoUrl: "https://example.com/videos/adjectives.mp4",
            description: "Learn how to use adjectives to describe nouns",
            season: 1,
            unit: 1,
            lessonOrder: 3,

            frompage: 27,
            topage: 32,
            colored_book: true,
            pricing: {
              isFree: false,
              price: 9.99,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-English1-3-test1",
              title: "Adjectives Assessment",
              duration: 15,
              passingScore: 70,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-English1-3-test1-q1",
                  context: "Adjective Identification",
                  type: "multiple-choice",
                  question:
                    "Which word is an adjective in this sentence: 'The beautiful flowers bloomed.'",
                  options: ["The", "beautiful", "flowers", "bloomed"],
                  correctAnswer: 1,
                  explanation:
                    "Adjectives describe nouns. Here, 'beautiful' describes 'flowers'.",
                  points: 25,
                },
                {
                  id: "lesson-English1-3-test1-q2",
                  context: "Comparative Adjectives",
                  type: "multiple-choice",
                  question: "What is the comparative form of 'big'?",
                  options: ["bigger", "biggest", "more big", "bigly"],
                  correctAnswer: 0,
                  explanation:
                    "For one-syllable adjectives, add '-er' for comparative form.",
                  points: 25,
                },
                {
                  id: "lesson-English1-3-test1-q3",
                  context: "Adjective Order",
                  type: "multiple-choice",
                  question: "Which is the correct order of adjectives?",
                  options: [
                    "big red beautiful car",
                    "beautiful big red car",
                    "red big beautiful car",
                    "car red big beautiful",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Opinion (beautiful) comes before size (big) and color (red).",
                  points: 25,
                },
                {
                  id: "lesson-English1-3-test1-q4",
                  context: "True/False",
                  type: "true-false",
                  question: "Adjectives can only come before nouns.",
                  options: ["True", "False"],
                  correctAnswer: false,
                  explanation:
                    "Adjectives can also come after linking verbs (e.g., She is happy).",
                  points: 25,
                },
              ],
            },
          },
        ],
      },
      {
        id: "Math1",
        name: "Math1",
        description: "MathMathMathMathMathMathMathMathMathMath",
        totalLessons: 2,

        lessons: [
          {
            id: "lesson-Math1-1",
            title: "Math Math",
            videoUrl: "https://example.com/videos/family-vocab.mp4",
            description: "Learn names of family members in Math",
            season: 1,
            unit: 1,
            lessonOrder: 1,
            frompage: 33,
            topage: 38,
            colored_book: true,
            pricing: {
              isFree: true,
              price: 0,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-Math1-1-test1",
              title: "Family Vocabulary Test",
              duration: 15,
              passingScore: 80,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-Math1-1-test1-q1",
                  context: "Immediate Family",
                  type: "multiple-choice",
                  question: "What do you call your mother's sister?",
                  options: ["Aunt", "Uncle", "Cousin", "Niece"],
                  correctAnswer: 0,
                  explanation: "Your mother's sister is your aunt.",
                  points: 20,
                },
                {
                  id: "lesson-Math1-1-test1-q2",
                  context: "Extended Family",
                  type: "multiple-choice",
                  question: "Your father's father is your:",
                  options: ["Grandfather", "Grandmother", "Uncle", "Cousin"],
                  correctAnswer: 0,
                  explanation: "Father's father is paternal grandfather.",
                  points: 20,
                },
                {
                  id: "lesson-Math1-1-test1-q3",
                  context: "True/False",
                  type: "true-false",
                  question:
                    "A 'niece' is a female child of your brother or sister.",
                  options: ["True", "False"],
                  correctAnswer: true,
                  explanation: "Correct definition of niece.",
                  points: 20,
                },
                {
                  id: "lesson-Math1-1-test1-q4",
                  context: "Short Answer",
                  type: "short-answer",
                  question: "What is the male equivalent of 'wife'?",
                  options: ["husband", "spouse", "partner"],
                  correctAnswer: "husband",
                  explanation: "Husband is the male spouse.",
                  points: 20,
                },
                {
                  id: "lesson-Math1-1-test1-q5",
                  context: "Family Relations",
                  type: "multiple-choice",
                  question: "Your sister's daughter is your:",
                  options: ["Niece", "Nephew", "Cousin", "Sister"],
                  correctAnswer: 0,
                  explanation: "Sister's daughter is your niece.",
                  points: 20,
                },
              ],
            },
          },
          {
            id: "lesson-Math1-2",
            title: "Daily Activities",
            videoUrl: "https://example.com/videos/daily-activities.mp4",
            description: "Vocabulary for daily routines and activities",
            season: 1,
            unit: 1,
            lessonOrder: 2,
            frompage: 39,
            topage: 45,
            colored_book: false,
            pricing: {
              isFree: false,
              price: 12.99,
              currency: "USD",
              discount: {
                active: true,
                discountPrice: 9.99,
                validUntil: "2024-11-30",
              },
            },
            test_lesson: {
              id: "lesson-Math1-2-test1",
              title: "Nouns Quiz",
              duration: 15,
              passingScore: 70,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-Math1-2-test1-q1",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "Which of the following is a proper noun?",
                  options: ["city", "dog", "London", "car"],
                  correctAnswer: 2,
                  explanation:
                    "Proper nouns are specific names of people, places, or things and are capitalized.",
                  points: 25,
                },
                {
                  id: "lesson-Math1-2-test1-q2",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "What type of noun is 'happiness'?",
                  options: [
                    "Common noun",
                    "Proper noun",
                    "Abstract noun",
                    "Concrete noun",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Abstract nouns represent ideas, qualities, or states rather than concrete objects.",
                  points: 25,
                },
                {
                  id: "lesson-Math1-2-test1-q3",
                  context: "Noun Identification",
                  type: "multiple-choice",
                  question:
                    "Identify the collective noun in the sentence: 'The team won the championship.'",
                  options: ["team", "won", "championship", "the"],
                  correctAnswer: 0,
                  explanation:
                    "Collective nouns refer to groups of people or things.",
                  points: 25,
                },
                {
                  id: "lesson-Math1-2-test1-q4",
                  context: "True/False Questions",
                  type: "true-false",
                  question: "All nouns can be counted.",
                  options: ["True", "False"],
                  correctAnswer: false,
                  explanation:
                    "Some nouns (like water, air, happiness) are uncountable.",
                  points: 25,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "second_level",
    levelname: "second level",
    level: 2,
    totalsubjects: 2,

    Subjects: [
      {
        id: "English2",
        name: "English 2",
        description: "Complex grammar structures and usage",
        totalLessons: 2,

        lessons: [
          {
            id: "lesson-English2-1",
            title: "Conditional Sentences",
            videoUrl: "https://example.com/videos/conditionals.mp4",
            description: "Master if-clauses and their different types",
            season: 2,
            unit: 1,
            lessonOrder: 1,
            frompage: 50,
            topage: 58,
            colored_book: true,
            pricing: {
              isFree: false,
              price: 14.99,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-English2-1-test1",
              title: "Conditionals Mastery Test",
              duration: 25,
              passingScore: 80,
              totalPoints: 120,
              questions: [
                {
                  id: "lesson-English2-1-test1-q1",
                  context: "First Conditional",
                  type: "multiple-choice",
                  question: "Which sentence is first conditional?",
                  options: [
                    "If I had time, I would visit you.",
                    "If I have time, I will visit you.",
                    "If I had had time, I would have visited you.",
                    "If water reaches 100°C, it boils.",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "First conditional: if + present simple, will + infinitive.",
                  points: 30,
                },
                {
                  id: "lesson-English2-1-test1-q2",
                  context: "Second Conditional",
                  type: "multiple-choice",
                  question:
                    "Complete the sentence: If I _______ you, I _______ accept the offer.",
                  options: [
                    "am / will",
                    "were / would",
                    "was / will",
                    "were / will",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Second conditional: if + past simple, would + infinitive.",
                  points: 30,
                },
                {
                  id: "lesson-English2-1-test1-q3",
                  context: "Third Conditional",
                  type: "multiple-choice",
                  question: "Which is third conditional?",
                  options: [
                    "If she studies, she will pass.",
                    "If she studied, she would pass.",
                    "If she had studied, she would have passed.",
                    "If she studies, she passes.",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Third conditional: if + past perfect, would have + past participle.",
                  points: 30,
                },
                {
                  id: "lesson-English2-1-test1-q4",
                  context: "Zero Conditional",
                  type: "multiple-choice",
                  question: "Zero conditional is used for:",
                  options: [
                    "Imaginary situations",
                    "General truths and facts",
                    "Past regrets",
                    "Future possibilities",
                  ],
                  correctAnswer: 1,
                  explanation: "Zero conditional expresses universal truths.",
                  points: 30,
                },
              ],
            },
          },
          {
            id: "lesson-English2-2",
            title: "Reported Speech",
            videoUrl: "https://example.com/videos/reported-speech.mp4",
            description: "How to report what someone else said",
            season: 2,
            unit: 1,
            lessonOrder: 2,
            frompage: 59,
            topage: 67,
            colored_book: false,
            pricing: {
              isFree: false,
              price: 14.99,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-English2-2-test1",
              title: "Nouns Quiz",
              duration: 15,
              passingScore: 70,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-English2-2-test1-q1",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "Which of the following is a proper noun?",
                  options: ["city", "dog", "London", "car"],
                  correctAnswer: 2,
                  explanation:
                    "Proper nouns are specific names of people, places, or things and are capitalized.",
                  points: 25,
                },
                {
                  id: "lesson-English2-2-test1-q2",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "What type of noun is 'happiness'?",
                  options: [
                    "Common noun",
                    "Proper noun",
                    "Abstract noun",
                    "Concrete noun",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Abstract nouns represent ideas, qualities, or states rather than concrete objects.",
                  points: 25,
                },
                {
                  id: "lesson-English2-2-test1-q3",
                  context: "Noun Identification",
                  type: "multiple-choice",
                  question:
                    "Identify the collective noun in the sentence: 'The team won the championship.'",
                  options: ["team", "won", "championship", "the"],
                  correctAnswer: 0,
                  explanation:
                    "Collective nouns refer to groups of people or things.",
                  points: 25,
                },
                {
                  id: "lesson-English2-2-test1-q4",
                  context: "True/False Questions",
                  type: "true-false",
                  question: "All nouns can be counted.",
                  options: ["True", "False"],
                  correctAnswer: false,
                  explanation:
                    "Some nouns (like water, air, happiness) are uncountable.",
                  points: 25,
                },
              ],
            },
          },
        ],
      },
      {
        id: "Relision2",
        name: "Relision 2",
        description: "Relision2Relision2Relision2Relision2Relision2Relision2",
        totalLessons: 1,

        lessons: [
          {
            id: "lesson-Relision2-1",
            title: "Email Writing",
            videoUrl: "https://example.com/videos/business-email.mp4",
            description: "Professional email writing techniques",
            season: 2,
            unit: 1,
            lessonOrder: 1,
            frompage: 68,
            topage: 75,
            colored_book: true,
            pricing: {
              isFree: false,
              price: 19.99,
              currency: "USD",
              discount: {
                active: true,
                discountPrice: 15.99,
                validUntil: "2024-12-15",
              },
            },
            test_lesson: {
              id: "lesson-Relision2-1-test1",
              title: "Email Writing Assessment",
              duration: 30,
              passingScore: 75,
              totalPoints: 150,
              questions: [
                {
                  id: "lesson-Relision2-1-test1-q1",
                  context: "Email Salutations",
                  type: "multiple-choice",
                  question:
                    "Which is the most appropriate opening for a formal email to someone you don't know?",
                  options: [
                    "Hey there!",
                    "Dear Mr. Smith,",
                    "Hi John,",
                    "Hello!",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Use 'Dear' with title and last name for formal emails.",
                  points: 30,
                },
                {
                  id: "lesson-Relision2-1-test1-q2",
                  context: "Email Structure",
                  type: "multiple-choice",
                  question:
                    "In a business email, where should you state the main purpose?",
                  options: [
                    "At the very end",
                    "Buried in the middle",
                    "In the first paragraph",
                    "In the subject line only",
                  ],
                  correctAnswer: 2,
                  explanation: "State your main purpose early for clarity.",
                  points: 30,
                },
                {
                  id: "lesson-Relision2-1-test1-q3",
                  context: "Professional Language",
                  type: "multiple-choice",
                  question: "Which phrase is most professional?",
                  options: [
                    "I want you to...",
                    "Could you please...",
                    "You need to...",
                    "Do this now...",
                  ],
                  correctAnswer: 1,
                  explanation: "Use polite requests with 'could you please'.",
                  points: 30,
                },
                {
                  id: "lesson-Relision2-1-test1-q4",
                  context: "Email Closings",
                  type: "multiple-choice",
                  question:
                    "Which closing is appropriate for most business emails?",
                  options: ["Love,", "Cheers,", "Sincerely,", "XOXO"],
                  correctAnswer: 2,
                  explanation: "'Sincerely' is a safe, professional closing.",
                  points: 30,
                },
                {
                  id: "lesson-Relision2-1-test1-q5",
                  context: "Subject Lines",
                  type: "multiple-choice",
                  question: "What makes a good email subject line?",
                  options: [
                    "Very long and detailed",
                    "Vague and mysterious",
                    "Short and descriptive",
                    "All capital letters",
                  ],
                  correctAnswer: 2,
                  explanation: "Subject lines should be brief but informative.",
                  points: 30,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "third_level",
    levelname: "third level",
    level: 3,
    totalsubjects: 1,

    Subjects: [
      {
        id: "Math3",
        name: "Math3",
        description: "Master Math skills ",
        totalLessons: 2,

        lessons: [
          {
            id: "lesson-Math3-1",
            title: "Debate and Persuasion Techniques",
            videoUrl: "https://example.com/videos/debate-persuasion.mp4",
            description:
              "Learn how to argue effectively and persuade in English",
            season: 3,
            unit: 1,
            lessonOrder: 1,

            frompage: 80,
            topage: 90,
            colored_book: true,
            pricing: {
              isFree: true,
              price: 0,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-Math3-1-test1",
              title: "Debate Skills Assessment",
              duration: 30,
              passingScore: 85,
              totalPoints: 150,
              questions: [
                {
                  id: "lesson-Math3-1-test1-q1",
                  context: "Debate Structure",
                  type: "multiple-choice",
                  question:
                    "Which of these is NOT a standard part of formal debate?",
                  options: [
                    "Opening statement",
                    "Rebuttal",
                    "Casual conversation",
                    "Closing argument",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Casual conversation is not part of structured debate.",
                  points: 30,
                },
                {
                  id: "lesson-Math3-1-test1-q2",
                  context: "Persuasive Techniques",
                  type: "multiple-choice",
                  question: "What is the 'appeal to authority' technique?",
                  options: [
                    "Using expert opinions to support your argument",
                    "Appealing to emotions rather than logic",
                    "Using statistics and data",
                    "Repeating your point multiple times",
                  ],
                  correctAnswer: 0,
                  explanation:
                    "Appeal to authority uses credible sources to strengthen arguments.",
                  points: 30,
                },
              ],
            },
          },
          {
            id: "lesson-Math3-2",
            title: "Idioms and Cultural References",
            videoUrl: "https://example.com/videos/idioms-culture.mp4",
            description: "Understand English idioms and cultural references",
            season: 3,
            unit: 1,
            lessonOrder: 2,
            frompage: 91,
            topage: 100,
            colored_book: false,
            pricing: {
              isFree: false,
              price: 24.99,
              currency: "USD",
            },
            test_lesson: {
              id: "lesson-Math3-2-test1",
              title: "Nouns Quiz",
              duration: 15,
              passingScore: 70,
              totalPoints: 100,
              questions: [
                {
                  id: "lesson-Math3-2-test1-q1",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "Which of the following is a proper noun?",
                  options: ["city", "dog", "London", "car"],
                  correctAnswer: 2,
                  explanation:
                    "Proper nouns are specific names of people, places, or things and are capitalized.",
                  points: 25,
                },
                {
                  id: "lesson-Math3-2-test1-q2",
                  context: "Basic Nouns",
                  type: "multiple-choice",
                  question: "What type of noun is 'happiness'?",
                  options: [
                    "Common noun",
                    "Proper noun",
                    "Abstract noun",
                    "Concrete noun",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "Abstract nouns represent ideas, qualities, or states rather than concrete objects.",
                  points: 25,
                },
                {
                  id: "lesson-Math3-2-test1-q3",
                  context: "Noun Identification",
                  type: "multiple-choice",
                  question:
                    "Identify the collective noun in the sentence: 'The team won the championship.'",
                  options: ["team", "won", "championship", "the"],
                  correctAnswer: 0,
                  explanation:
                    "Collective nouns refer to groups of people or things.",
                  points: 25,
                },
                {
                  id: "lesson-Math3-2-test1-q4",
                  context: "True/False Questions",
                  type: "true-false",
                  question: "All nouns can be counted.",
                  options: ["True", "False"],
                  correctAnswer: false,
                  explanation:
                    "Some nouns (like water, air, happiness) are uncountable.",
                  points: 25,
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export default educationData;
