import { Complexity } from "@constants";
import { Course } from "@types";

export const courses: Course[] = [
  // базовые курсы
  {
    id: "1",
    name: "Чувашский для начинающих (базовый)",
    description: "Базовые грамматические правила и словарный запас",
    tariffId: "1",
    lessonsIds: ["1", "2", "3", "4"],
    complexity: Complexity.BASIC,
    topics: [
      {
        id: "1",
        title: "Базовые грамматические правила и словарный запас",
        description: "Базовые грамматические правила и словарный запас",
      },
    ],
  },
  {
    id: "2",
    name: "Чувашский для школьников (базовый)",
    description: "Основы делового общения на чувашском",
    tariffId: "1",
    lessonsIds: ["5", "6", "7", "8"],
    complexity: Complexity.BASIC,
    topics: [
      {
        id: "2",
        title: "Основы делового общения на чувашском",
        description: "Основы делового общения на чувашском",
      },
    ],
  },
  {
    id: "3",
    name: "Чувашский для взрослых (базовый)",
    description: "Основы делового общения на чувашском",
    tariffId: "1",
    lessonsIds: ["9", "10", "11", "12"],
    complexity: Complexity.BASIC,
    topics: [
      {
        id: "3",
        title: "Основы делового общения на чувашском",
        description: "Основы делового общения на чувашском",
      },
    ],
  },
  {
    id: "4",
    name: "Деловой чувашский (базовый)",
    description: "Деловые термины и выражения",
    tariffId: "1",
    lessonsIds: ["13", "14", "15", "16"],
    complexity: Complexity.BASIC,
    topics: [
      {
        id: "4",
        title: "Деловые термины и выражения",
        description: "Деловые термины и выражения",
      },
    ],
  },
  // продвинутые курсы
  {
    id: "5",
    name: "Чувашский для начинающих (продвинутый)",
    description: "Базовые грамматические правила и словарный запас",
    tariffId: "2",
    lessonsIds: ["17", "18", "19", "20"],
    complexity: Complexity.ADVANCED,
    topics: [
      {
        id: "5",
        title: "Базовые грамматические правила и словарный запас",
        description: "Базовые грамматические правила и словарный запас",
      },
    ],
  },
  {
    id: "6",
    name: "Чувашский для школьников (продвинутый)",
    description: "Основы делового общения на чувашском",
    tariffId: "2",
    lessonsIds: ["21", "22", "23", "24"],
    complexity: Complexity.ADVANCED,
    topics: [
      {
        id: "6",
        title: "Основы делового общения на чувашском",
        description: "Основы делового общения на чувашском",
      },
    ],
  },
  {
    id: "7",
    name: "Чувашский для взрослых (продвинутый)",
    description: "Основы делового общения на чувашском",
    tariffId: "2",
    lessonsIds: ["25", "26", "27", "28"],
    complexity: Complexity.ADVANCED,
    topics: [
      {
        id: "7",
        title: "Основы делового общения на чувашском",
        description: "Основы делового общения на чувашском",
      },
    ],  
  },
  {
    id: "8",
    name: "Деловой чувашский (продвинутый)",
    description: "Деловые термины и выражения", 
    tariffId: "2",
    lessonsIds: ["29", "30", "31", "32"],
    complexity: Complexity.ADVANCED,
    topics: [
      {
        id: "8",
        title: "Деловые термины и выражения",
        description: "Деловые термины и выражения",
      },
    ],
  },
  // профессиональные курсы
  {
    id: "9",
    name: "Чувашский для начинающих (продвинутый)",
    description: "Базовые грамматические правила и словарный запас",
    tariffId: "3",
    lessonsIds: ["33", "34", "35", "36"],
    complexity: Complexity.PROFESSIONAL,
    topics: [
      {
        id: "9",
        title: "Базовые грамматические правила и словарный запас",
        description: "Базовые грамматические правила и словарный запас",
      },
    ],
  },
  {
    id: "10",
    name: "Чувашский для школьников (продвинутый)",
    description: "Основы делового общения на чувашском",
    tariffId: "3",
    lessonsIds: ["37", "38", "39", "40"],
    complexity: Complexity.PROFESSIONAL,
    topics: [
      {
        id: "10",
        title: "Основы делового общения на чувашском",
        description: "Основы делового общения на чувашском",
      },
    ],
  },
  {
    id: "11",
    name: "Чувашский для взрослых (продвинутый)",
    description: "Основы делового общения на чувашском",
    tariffId: "3",
    lessonsIds: ["41", "42", "43", "44"],
    complexity: Complexity.PROFESSIONAL,
    topics: [
      {
        id: "11",
        title: "Основы делового общения на чувашском",
        description: "Основы делового общения на чувашском",  
      },
    ],
  },
  {
    id: "12",
    name: "Деловой чувашский (продвинутый)",
    description: "Деловые термины и выражения",
    tariffId: "3",
    lessonsIds: ["45", "46", "47", "48"],
    complexity: Complexity.PROFESSIONAL,
    topics: [ 
      {
        id: "12",
        title: "Деловые термины и выражения",
        description: "Деловые термины и выражения",
      },
    ],
  },
];
