import { Lesson } from '@types';
import { Complexity } from '@constants';

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Урок 1: Основные приветствия",
    theory: "В этом уроке вы узнаете основные приветствия на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "1",
        text: "Как переводится слово 'салам'?",
        lessonId: "1",
        answers: [
          { text: "Здравствуйте", isCorrect: true },
          { text: "До свидания", isCorrect: false },
          { text: "Спасибо", isCorrect: false },
          { text: "Пожалуйста", isCorrect: false }
        ]
      },
      {
        id: "2",
        text: "Как сказать 'до свидания' по-чувашски?",
        lessonId: "1",
        answers: [
          { text: "Хăвăрт", isCorrect: true },
          { text: "Салам", isCorrect: false },
          { text: "Тав", isCorrect: false },
          { text: "Пирён", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Урок 2: Благодарность",
    theory: "В этом уроке вы научитесь выражать благодарность на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "3",
        text: "Как сказать 'спасибо' по-чувашски?",
        lessonId: "2",
        answers: [
          { text: "Тав", isCorrect: true },
          { text: "Салам", isCorrect: false },
          { text: "Хăвăрт", isCorrect: false },
          { text: "Пирён", isCorrect: false }
        ]
      },
      {
        id: "4",
        text: "Как переводится слово 'тав'?",
        lessonId: "2",
        answers: [
          { text: "Спасибо", isCorrect: true },
          { text: "Здравствуйте", isCorrect: false },
          { text: "До свидания", isCorrect: false },
          { text: "Пожалуйста", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Урок 3: Семья",
    theory: "В этом уроке вы выучите названия членов семьи на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "5",
        text: "Как переводится слово 'анне'?",
        lessonId: "3",
        answers: [
          { text: "Мама", isCorrect: true },
          { text: "Папа", isCorrect: false },
          { text: "Бабушка", isCorrect: false },
          { text: "Дедушка", isCorrect: false }
        ]
      },
      {
        id: "6",
        text: "Как сказать 'папа' по-чувашски?",
        lessonId: "3",
        answers: [
          { text: "Атте", isCorrect: true },
          { text: "Анне", isCorrect: false },
          { text: "Асанне", isCorrect: false },
          { text: "Аслати", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Урок 4: Природа",
    theory: "В этом уроке вы познакомитесь с названиями природных явлений на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "7",
        text: "Как переводится слово 'шыв'?",
        lessonId: "4",
        answers: [
          { text: "Вода", isCorrect: true },
          { text: "Огонь", isCorrect: false },
          { text: "Земля", isCorrect: false },
          { text: "Воздух", isCorrect: false }
        ]
      },
      {
        id: "8",
        text: "Как сказать 'солнце' по-чувашски?",
        lessonId: "4",
        answers: [
          { text: "Хĕвел", isCorrect: true },
          { text: "Уйăх", isCorrect: false },
          { text: "Çăлтăр", isCorrect: false },
          { text: "Тӳпе", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Урок 5: Цвета",
    theory: "В этом уроке вы выучите названия цветов на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "9",
        text: "Как переводится слово 'хура'?",
        lessonId: "5",
        answers: [
          { text: "Черный", isCorrect: true },
          { text: "Белый", isCorrect: false },
          { text: "Красный", isCorrect: false },
          { text: "Зеленый", isCorrect: false }
        ]
      },
      {
        id: "10",
        text: "Как сказать 'белый' по-чувашски?",
        lessonId: "5",
        answers: [
          { text: "Шурă", isCorrect: true },
          { text: "Хура", isCorrect: false },
          { text: "Хĕрлĕ", isCorrect: false },
          { text: "Симĕс", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Урок 6: Времена года",
    theory: "В этом уроке вы выучите названия времен года на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "11",
        text: "Как переводится слово 'çулла'?",
        lessonId: "6",
        answers: [
          { text: "Лето", isCorrect: true },
          { text: "Зима", isCorrect: false },
          { text: "Весна", isCorrect: false },
          { text: "Осень", isCorrect: false }
        ]
      },
      {
        id: "12",
        text: "Как сказать 'зима' по-чувашски?",
        lessonId: "6",
        answers: [
          { text: "Хĕлле", isCorrect: true },
          { text: "Çулла", isCorrect: false },
          { text: "Куçарма", isCorrect: false },
          { text: "Кĕркунне", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "7",
    title: "Урок 7: Время суток",
    theory: "В этом уроке вы выучите названия частей суток на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "13",
        text: "Как переводится слово 'кун'?",
        lessonId: "7",
        answers: [
          { text: "День", isCorrect: true },
          { text: "Ночь", isCorrect: false },
          { text: "Утро", isCorrect: false },
          { text: "Вечер", isCorrect: false }
        ]
      },
      {
        id: "14",
        text: "Как сказать 'ночь' по-чувашски?",
        lessonId: "7",
        answers: [
          { text: "Çĕр", isCorrect: true },
          { text: "Кун", isCorrect: false },
          { text: "Ир", isCorrect: false },
          { text: "Каç", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "8",
    title: "Урок 8: Еда",
    theory: "В этом уроке вы выучите названия продуктов питания на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "15",
        text: "Как переводится слово 'çăкăр'?",
        lessonId: "8",
        answers: [
          { text: "Хлеб", isCorrect: true },
          { text: "Молоко", isCorrect: false },
          { text: "Мясо", isCorrect: false },
          { text: "Суп", isCorrect: false }
        ]
      },
      {
        id: "16",
        text: "Как сказать 'молоко' по-чувашски?",
        lessonId: "8",
        answers: [
          { text: "Сĕт", isCorrect: true },
          { text: "Çăкăр", isCorrect: false },
          { text: "Аш", isCorrect: false },
          { text: "Яшка", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "9",
    title: "Урок 9: Животные",
    theory: "В этом уроке вы выучите названия животных на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "17",
        text: "Как переводится слово 'кайăк'?",
        lessonId: "9",
        answers: [
          { text: "Птица", isCorrect: true },
          { text: "Собака", isCorrect: false },
          { text: "Кошка", isCorrect: false },
          { text: "Корова", isCorrect: false }
        ]
      },
      {
        id: "18",
        text: "Как сказать 'собака' по-чувашски?",
        lessonId: "9",
        answers: [
          { text: "Йытă", isCorrect: true },
          { text: "Кушак", isCorrect: false },
          { text: "Кайăк", isCorrect: false },
          { text: "Вăкăр", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "10",
    title: "Урок 10: Одежда",
    theory: "В этом уроке вы выучите названия предметов одежды на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "19",
        text: "Как переводится слово 'тумтир'?",
        lessonId: "10",
        answers: [
          { text: "Одежда", isCorrect: true },
          { text: "Шапка", isCorrect: false },
          { text: "Платье", isCorrect: false },
          { text: "Брюки", isCorrect: false }
        ]
      },
      {
        id: "20",
        text: "Как сказать 'шапка' по-чувашски?",
        lessonId: "10",
        answers: [
          { text: "Ялка", isCorrect: true },
          { text: "Тумтир", isCorrect: false },
          { text: "Кĕпе", isCorrect: false },
          { text: "Шăлăм", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "11",
    title: "Урок 11: Дом",
    theory: "В этом уроке вы выучите названия предметов в доме на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "21",
        text: "Как переводится слово 'кил'?",
        lessonId: "11",
        answers: [
          { text: "Дом", isCorrect: true },
          { text: "Стол", isCorrect: false },
          { text: "Стул", isCorrect: false },
          { text: "Кровать", isCorrect: false }
        ]
      },
      {
        id: "22",
        text: "Как сказать 'стол' по-чувашски?",
        lessonId: "11",
        answers: [
          { text: "Сĕтел", isCorrect: true },
          { text: "Кил", isCorrect: false },
          { text: "Стол", isCorrect: false },
          { text: "Кровать", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "12",
    title: "Урок 12: Числа",
    theory: "В этом уроке вы выучите числа на чувашском языке",
    courseId: "1",
    complexity: Complexity.BASIC,
    questions: [
      {
        id: "23",
        text: "Как переводится слово 'пĕрре'?",
        lessonId: "12",
        answers: [
          { text: "Один", isCorrect: true },
          { text: "Два", isCorrect: false },
          { text: "Три", isCorrect: false },
          { text: "Четыре", isCorrect: false }
        ]
      },
      {
        id: "24",
        text: "Как сказать 'два' по-чувашски?",
        lessonId: "12",
        answers: [
          { text: "Иккĕ", isCorrect: true },
          { text: "Пĕрре", isCorrect: false },
          { text: "Виççĕ", isCorrect: false },
          { text: "Тăваттă", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "13",
    title: "Урок 13: Глаголы движения",
    theory: "В этом уроке вы изучите глаголы движения на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "25",
        text: "Как переводится слово 'кай'?",
        lessonId: "13",
        answers: [
          { text: "Идти", isCorrect: true },
          { text: "Бежать", isCorrect: false },
          { text: "Прыгать", isCorrect: false },
          { text: "Плавать", isCorrect: false }
        ]
      },
      {
        id: "26",
        text: "Как сказать 'бежать' по-чувашски?",
        lessonId: "13",
        answers: [
          { text: "Чăрма", isCorrect: true },
          { text: "Кай", isCorrect: false },
          { text: "Çăлтăр", isCorrect: false },
          { text: "Шыв", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "14",
    title: "Урок 14: Профессии",
    theory: "В этом уроке вы выучите названия профессий на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "27",
        text: "Как переводится слово 'вĕрентекен'?",
        lessonId: "14",
        answers: [
          { text: "Учитель", isCorrect: true },
          { text: "Врач", isCorrect: false },
          { text: "Инженер", isCorrect: false },
          { text: "Продавец", isCorrect: false }
        ]
      },
      {
        id: "28",
        text: "Как сказать 'врач' по-чувашски?",
        lessonId: "14",
        answers: [
          { text: "Врач", isCorrect: true },
          { text: "Вĕрентекен", isCorrect: false },
          { text: "Инженер", isCorrect: false },
          { text: "Продавец", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "15",
    title: "Урок 15: Части тела",
    theory: "В этом уроке вы выучите названия частей тела на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "29",
        text: "Как переводится слово 'пуç'?",
        lessonId: "15",
        answers: [
          { text: "Голова", isCorrect: true },
          { text: "Рука", isCorrect: false },
          { text: "Нога", isCorrect: false },
          { text: "Глаз", isCorrect: false }
        ]
      },
      {
        id: "30",
        text: "Как сказать 'рука' по-чувашски?",
        lessonId: "15",
        answers: [
          { text: "Хул", isCorrect: true },
          { text: "Пуç", isCorrect: false },
          { text: "Ура", isCorrect: false },
          { text: "Куç", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "16",
    title: "Урок 16: Эмоции",
    theory: "В этом уроке вы выучите слова, описывающие эмоции на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "31",
        text: "Как переводится слово 'хăвăрт'?",
        lessonId: "16",
        answers: [
          { text: "Радость", isCorrect: true },
          { text: "Грусть", isCorrect: false },
          { text: "Злость", isCorrect: false },
          { text: "Страх", isCorrect: false }
        ]
      },
      {
        id: "32",
        text: "Как сказать 'грусть' по-чувашски?",
        lessonId: "16",
        answers: [
          { text: "Хуйхăр", isCorrect: true },
          { text: "Хăвăрт", isCorrect: false },
          { text: "Хирĕç", isCorrect: false },
          { text: "Хăра", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "17",
    title: "Урок 17: Погода",
    theory: "В этом уроке вы выучите слова, связанные с погодой на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "33",
        text: "Как переводится слово 'çил'?",
        lessonId: "17",
        answers: [
          { text: "Ветер", isCorrect: true },
          { text: "Дождь", isCorrect: false },
          { text: "Снег", isCorrect: false },
          { text: "Солнце", isCorrect: false }
        ]
      },
      {
        id: "34",
        text: "Как сказать 'снег' по-чувашски?",
        lessonId: "17",
        answers: [
          { text: "Юр", isCorrect: true },
          { text: "Çил", isCorrect: false },
          { text: "Çумăр", isCorrect: false },
          { text: "Хĕвел", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "18",
    title: "Урок 18: Транспорт",
    theory: "В этом уроке вы выучите названия транспортных средств на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "35",
        text: "Как переводится слово 'автобус'?",
        lessonId: "18",
        answers: [
          { text: "Автобус", isCorrect: true },
          { text: "Поезд", isCorrect: false },
          { text: "Машина", isCorrect: false },
          { text: "Самолет", isCorrect: false }
        ]
      },
      {
        id: "36",
        text: "Как сказать 'поезд' по-чувашски?",
        lessonId: "18",
        answers: [
          { text: "Поезд", isCorrect: true },
          { text: "Автобус", isCorrect: false },
          { text: "Машина", isCorrect: false },
          { text: "Самолет", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "19",
    title: "Урок 19: Спорт",
    theory: "В этом уроке вы выучите спортивные термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "37",
        text: "Как переводится слово 'спорт'?",
        lessonId: "19",
        answers: [
          { text: "Спорт", isCorrect: true },
          { text: "Игра", isCorrect: false },
          { text: "Соревнование", isCorrect: false },
          { text: "Тренировка", isCorrect: false }
        ]
      },
      {
        id: "38",
        text: "Как сказать 'игра' по-чувашски?",
        lessonId: "19",
        answers: [
          { text: "Вăйă", isCorrect: true },
          { text: "Спорт", isCorrect: false },
          { text: "Соревнование", isCorrect: false },
          { text: "Тренировка", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "20",
    title: "Урок 20: Музыка",
    theory: "В этом уроке вы выучите музыкальные термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "39",
        text: "Как переводится слово 'кĕвĕ'?",
        lessonId: "20",
        answers: [
          { text: "Музыка", isCorrect: true },
          { text: "Песня", isCorrect: false },
          { text: "Танец", isCorrect: false },
          { text: "Мелодия", isCorrect: false }
        ]
      },
      {
        id: "40",
        text: "Как сказать 'песня' по-чувашски?",
        lessonId: "20",
        answers: [
          { text: "Юрă", isCorrect: true },
          { text: "Кĕвĕ", isCorrect: false },
          { text: "Ташă", isCorrect: false },
          { text: "Мелоди", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "21",
    title: "Урок 21: Школа",
    theory: "В этом уроке вы выучите школьные термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "41",
        text: "Как переводится слово 'шкул'?",
        lessonId: "21",
        answers: [
          { text: "Школа", isCorrect: true },
          { text: "Класс", isCorrect: false },
          { text: "Урок", isCorrect: false },
          { text: "Учебник", isCorrect: false }
        ]
      },
      {
        id: "42",
        text: "Как сказать 'класс' по-чувашски?",
        lessonId: "21",
        answers: [
          { text: "Класс", isCorrect: true },
          { text: "Шкул", isCorrect: false },
          { text: "Вĕренӳ", isCorrect: false },
          { text: "Кĕнеке", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "22",
    title: "Урок 22: Город",
    theory: "В этом уроке вы выучите городские термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "43",
        text: "Как переводится слово 'хула'?",
        lessonId: "22",
        answers: [
          { text: "Город", isCorrect: true },
          { text: "Улица", isCorrect: false },
          { text: "Площадь", isCorrect: false },
          { text: "Парк", isCorrect: false }
        ]
      },
      {
        id: "44",
        text: "Как сказать 'улица' по-чувашски?",
        lessonId: "22",
        answers: [
          { text: "Урам", isCorrect: true },
          { text: "Хула", isCorrect: false },
          { text: "Лапам", isCorrect: false },
          { text: "Парк", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "23",
    title: "Урок 23: Время",
    theory: "В этом уроке вы выучите слова, связанные со временем на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "45",
        text: "Как переводится слово 'сехет'?",
        lessonId: "23",
        answers: [
          { text: "Час", isCorrect: true },
          { text: "Минута", isCorrect: false },
          { text: "Секунда", isCorrect: false },
          { text: "Время", isCorrect: false }
        ]
      },
      {
        id: "46",
        text: "Как сказать 'минута' по-чувашски?",
        lessonId: "23",
        answers: [
          { text: "Минут", isCorrect: true },
          { text: "Сехет", isCorrect: false },
          { text: "Секунд", isCorrect: false },
          { text: "Вăхăт", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "24",
    title: "Урок 24: Праздники",
    theory: "В этом уроке вы выучите названия праздников на чувашском языке",
    courseId: "1",
    complexity: Complexity.ADVANCED,
    questions: [
      {
        id: "47",
        text: "Как переводится слово 'уяв'?",
        lessonId: "24",
        answers: [
          { text: "Праздник", isCorrect: true },
          { text: "День рождения", isCorrect: false },
          { text: "Новый год", isCorrect: false },
          { text: "Свадьба", isCorrect: false }
        ]
      },
      {
        id: "48",
        text: "Как сказать 'день рождения' по-чувашски?",
        lessonId: "24",
        answers: [
          { text: "Çуралнă кун", isCorrect: true },
          { text: "Уяв", isCorrect: false },
          { text: "Çĕнĕ çул", isCorrect: false },
          { text: "Туй", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "25",
    title: "Урок 25: Деловое общение",
    theory: "В этом уроке вы выучите деловые термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "49",
        text: "Как переводится слово 'бизнес'?",
        lessonId: "25",
        answers: [
          { text: "Бизнес", isCorrect: true },
          { text: "Договор", isCorrect: false },
          { text: "Сделка", isCorrect: false },
          { text: "Компания", isCorrect: false }
        ]
      },
      {
        id: "50",
        text: "Как сказать 'договор' по-чувашски?",
        lessonId: "25",
        answers: [
          { text: "Договор", isCorrect: true },
          { text: "Бизнес", isCorrect: false },
          { text: "Сделка", isCorrect: false },
          { text: "Компани", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "26",
    title: "Урок 26: Технологии",
    theory: "В этом уроке вы выучите технологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "51",
        text: "Как переводится слово 'компьютер'?",
        lessonId: "26",
        answers: [
          { text: "Компьютер", isCorrect: true },
          { text: "Телефон", isCorrect: false },
          { text: "Планшет", isCorrect: false },
          { text: "Ноутбук", isCorrect: false }
        ]
      },
      {
        id: "52",
        text: "Как сказать 'телефон' по-чувашски?",
        lessonId: "26",
        answers: [
          { text: "Телефон", isCorrect: true },
          { text: "Компьютер", isCorrect: false },
          { text: "Планшет", isCorrect: false },
          { text: "Ноутбук", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "27",
    title: "Урок 27: Медицина",
    theory: "В этом уроке вы выучите медицинские термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "53",
        text: "Как переводится слово 'врач'?",
        lessonId: "27",
        answers: [
          { text: "Врач", isCorrect: true },
          { text: "Медсестра", isCorrect: false },
          { text: "Пациент", isCorrect: false },
          { text: "Больница", isCorrect: false }
        ]
      },
      {
        id: "54",
        text: "Как сказать 'больница' по-чувашски?",
        lessonId: "27",
        answers: [
          { text: "Больница", isCorrect: true },
          { text: "Врач", isCorrect: false },
          { text: "Медсестра", isCorrect: false },
          { text: "Пациент", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "28",
    title: "Урок 28: Юриспруденция",
    theory: "В этом уроке вы выучите юридические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "55",
        text: "Как переводится слово 'закон'?",
        lessonId: "28",
        answers: [
          { text: "Закон", isCorrect: true },
          { text: "Право", isCorrect: false },
          { text: "Суд", isCorrect: false },
          { text: "Адвокат", isCorrect: false }
        ]
      },
      {
        id: "56",
        text: "Как сказать 'суд' по-чувашски?",
        lessonId: "28",
        answers: [
          { text: "Суд", isCorrect: true },
          { text: "Закон", isCorrect: false },
          { text: "Право", isCorrect: false },
          { text: "Адвокат", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "29",
    title: "Урок 29: Экономика",
    theory: "В этом уроке вы выучите экономические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "57",
        text: "Как переводится слово 'экономика'?",
        lessonId: "29",
        answers: [
          { text: "Экономика", isCorrect: true },
          { text: "Финансы", isCorrect: false },
          { text: "Бюджет", isCorrect: false },
          { text: "Инвестиции", isCorrect: false }
        ]
      },
      {
        id: "58",
        text: "Как сказать 'финансы' по-чувашски?",
        lessonId: "29",
        answers: [
          { text: "Финанс", isCorrect: true },
          { text: "Экономика", isCorrect: false },
          { text: "Бюджет", isCorrect: false },
          { text: "Инвестици", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "30",
    title: "Урок 30: Наука",
    theory: "В этом уроке вы выучите научные термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "59",
        text: "Как переводится слово 'наука'?",
        lessonId: "30",
        answers: [
          { text: "Наука", isCorrect: true },
          { text: "Исследование", isCorrect: false },
          { text: "Эксперимент", isCorrect: false },
          { text: "Теория", isCorrect: false }
        ]
      },
      {
        id: "60",
        text: "Как сказать 'исследование' по-чувашски?",
        lessonId: "30",
        answers: [
          { text: "Тĕпчев", isCorrect: true },
          { text: "Наука", isCorrect: false },
          { text: "Эксперимент", isCorrect: false },
          { text: "Теори", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "31",
    title: "Урок 31: Искусство",
    theory: "В этом уроке вы выучите термины искусства на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "61",
        text: "Как переводится слово 'искусство'?",
        lessonId: "31",
        answers: [
          { text: "Искусство", isCorrect: true },
          { text: "Живопись", isCorrect: false },
          { text: "Скульптура", isCorrect: false },
          { text: "Архитектура", isCorrect: false }
        ]
      },
      {
        id: "62",
        text: "Как сказать 'живопись' по-чувашски?",
        lessonId: "31",
        answers: [
          { text: "Сăрă", isCorrect: true },
          { text: "Искусство", isCorrect: false },
          { text: "Скульптура", isCorrect: false },
          { text: "Архитектура", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "32",
    title: "Урок 32: Литература",
    theory: "В этом уроке вы выучите литературные термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "63",
        text: "Как переводится слово 'литература'?",
        lessonId: "32",
        answers: [
          { text: "Литература", isCorrect: true },
          { text: "Поэзия", isCorrect: false },
          { text: "Проза", isCorrect: false },
          { text: "Роман", isCorrect: false }
        ]
      },
      {
        id: "64",
        text: "Как сказать 'поэзия' по-чувашски?",
        lessonId: "32",
        answers: [
          { text: "Поэзи", isCorrect: true },
          { text: "Литература", isCorrect: false },
          { text: "Проза", isCorrect: false },
          { text: "Роман", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "33",
    title: "Урок 33: Философия",
    theory: "В этом уроке вы выучите философские термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "65",
        text: "Как переводится слово 'философия'?",
        lessonId: "33",
        answers: [
          { text: "Философи", isCorrect: true },
          { text: "Логика", isCorrect: false },
          { text: "Этика", isCorrect: false },
          { text: "Метафизика", isCorrect: false }
        ]
      },
      {
        id: "66",
        text: "Как сказать 'логика' по-чувашски?",
        lessonId: "33",
        answers: [
          { text: "Логика", isCorrect: true },
          { text: "Философи", isCorrect: false },
          { text: "Этика", isCorrect: false },
          { text: "Метафизика", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "34",
    title: "Урок 34: Психология",
    theory: "В этом уроке вы выучите психологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "67",
        text: "Как переводится слово 'психология'?",
        lessonId: "34",
        answers: [
          { text: "Психологи", isCorrect: true },
          { text: "Психика", isCorrect: false },
          { text: "Сознание", isCorrect: false },
          { text: "Подсознание", isCorrect: false }
        ]
      },
      {
        id: "68",
        text: "Как сказать 'сознание' по-чувашски?",
        lessonId: "34",
        answers: [
          { text: "Сăнав", isCorrect: true },
          { text: "Психологи", isCorrect: false },
          { text: "Психика", isCorrect: false },
          { text: "Подсознание", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "35",
    title: "Урок 35: История",
    theory: "В этом уроке вы выучите исторические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "69",
        text: "Как переводится слово 'история'?",
        lessonId: "35",
        answers: [
          { text: "Истори", isCorrect: true },
          { text: "Археология", isCorrect: false },
          { text: "Хронология", isCorrect: false },
          { text: "Эпоха", isCorrect: false }
        ]
      },
      {
        id: "70",
        text: "Как сказать 'эпоха' по-чувашски?",
        lessonId: "35",
        answers: [
          { text: "Эпоха", isCorrect: true },
          { text: "Истори", isCorrect: false },
          { text: "Археологи", isCorrect: false },
          { text: "Хронологи", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "36",
    title: "Урок 36: Политика",
    theory: "В этом уроке вы выучите политические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "71",
        text: "Как переводится слово 'политика'?",
        lessonId: "36",
        answers: [
          { text: "Политика", isCorrect: true },
          { text: "Правительство", isCorrect: false },
          { text: "Парламент", isCorrect: false },
          { text: "Выборы", isCorrect: false }
        ]
      },
      {
        id: "72",
        text: "Как сказать 'правительство' по-чувашски?",
        lessonId: "36",
        answers: [
          { text: "Правительствă", isCorrect: true },
          { text: "Политика", isCorrect: false },
          { text: "Парламент", isCorrect: false },
          { text: "Суйлав", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "37",
    title: "Урок 37: Экология",
    theory: "В этом уроке вы выучите экологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "73",
        text: "Как переводится слово 'экология'?",
        lessonId: "37",
        answers: [
          { text: "Экологи", isCorrect: true },
          { text: "Окружающая среда", isCorrect: false },
          { text: "Загрязнение", isCorrect: false },
          { text: "Переработка", isCorrect: false }
        ]
      },
      {
        id: "74",
        text: "Как сказать 'окружающая среда' по-чувашски?",
        lessonId: "37",
        answers: [
          { text: "Çут çанталăк", isCorrect: true },
          { text: "Экологи", isCorrect: false },
          { text: "Загрязнение", isCorrect: false },
          { text: "Переработка", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "38",
    title: "Урок 38: Архитектура",
    theory: "В этом уроке вы выучите архитектурные термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "75",
        text: "Как переводится слово 'архитектура'?",
        lessonId: "38",
        answers: [
          { text: "Архитектура", isCorrect: true },
          { text: "Здание", isCorrect: false },
          { text: "Фасад", isCorrect: false },
          { text: "Интерьер", isCorrect: false }
        ]
      },
      {
        id: "76",
        text: "Как сказать 'здание' по-чувашски?",
        lessonId: "38",
        answers: [
          { text: "Çурт", isCorrect: true },
          { text: "Архитектура", isCorrect: false },
          { text: "Фасад", isCorrect: false },
          { text: "Интерьер", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "39",
    title: "Урок 39: Математика",
    theory: "В этом уроке вы выучите математические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "77",
        text: "Как переводится слово 'математика'?",
        lessonId: "39",
        answers: [
          { text: "Математика", isCorrect: true },
          { text: "Алгебра", isCorrect: false },
          { text: "Геометрия", isCorrect: false },
          { text: "Арифметика", isCorrect: false }
        ]
      },
      {
        id: "78",
        text: "Как сказать 'алгебра' по-чувашски?",
        lessonId: "39",
        answers: [
          { text: "Алгебра", isCorrect: true },
          { text: "Математика", isCorrect: false },
          { text: "Геометри", isCorrect: false },
          { text: "Арифметика", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "40",
    title: "Урок 40: Физика",
    theory: "В этом уроке вы выучите физические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "79",
        text: "Как переводится слово 'физика'?",
        lessonId: "40",
        answers: [
          { text: "Физика", isCorrect: true },
          { text: "Механика", isCorrect: false },
          { text: "Термодинамика", isCorrect: false },
          { text: "Электричество", isCorrect: false }
        ]
      },
      {
        id: "80",
        text: "Как сказать 'механика' по-чувашски?",
        lessonId: "40",
        answers: [
          { text: "Механика", isCorrect: true },
          { text: "Физика", isCorrect: false },
          { text: "Термодинамика", isCorrect: false },
          { text: "Электричество", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "41",
    title: "Урок 41: Химия",
    theory: "В этом уроке вы выучите химические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "81",
        text: "Как переводится слово 'химия'?",
        lessonId: "41",
        answers: [
          { text: "Хими", isCorrect: true },
          { text: "Элемент", isCorrect: false },
          { text: "Соединение", isCorrect: false },
          { text: "Реакция", isCorrect: false }
        ]
      },
      {
        id: "82",
        text: "Как сказать 'элемент' по-чувашски?",
        lessonId: "41",
        answers: [
          { text: "Элемент", isCorrect: true },
          { text: "Хими", isCorrect: false },
          { text: "Соединение", isCorrect: false },
          { text: "Реакци", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "42",
    title: "Урок 42: Биология",
    theory: "В этом уроке вы выучите биологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "83",
        text: "Как переводится слово 'биология'?",
        lessonId: "42",
        answers: [
          { text: "Биологи", isCorrect: true },
          { text: "Клетка", isCorrect: false },
          { text: "Организм", isCorrect: false },
          { text: "Генетика", isCorrect: false }
        ]
      },
      {
        id: "84",
        text: "Как сказать 'клетка' по-чувашски?",
        lessonId: "42",
        answers: [
          { text: "Клетка", isCorrect: true },
          { text: "Биологи", isCorrect: false },
          { text: "Организм", isCorrect: false },
          { text: "Генетика", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "43",
    title: "Урок 43: География",
    theory: "В этом уроке вы выучите географические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "85",
        text: "Как переводится слово 'география'?",
        lessonId: "43",
        answers: [
          { text: "Географи", isCorrect: true },
          { text: "Карта", isCorrect: false },
          { text: "Континент", isCorrect: false },
          { text: "Океан", isCorrect: false }
        ]
      },
      {
        id: "86",
        text: "Как сказать 'карта' по-чувашски?",
        lessonId: "43",
        answers: [
          { text: "Карта", isCorrect: true },
          { text: "Географи", isCorrect: false },
          { text: "Континент", isCorrect: false },
          { text: "Океан", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "44",
    title: "Урок 44: Астрономия",
    theory: "В этом уроке вы выучите астрономические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "87",
        text: "Как переводится слово 'астрономия'?",
        lessonId: "44",
        answers: [
          { text: "Астрономи", isCorrect: true },
          { text: "Планета", isCorrect: false },
          { text: "Звезда", isCorrect: false },
          { text: "Галактика", isCorrect: false }
        ]
      },
      {
        id: "88",
        text: "Как сказать 'планета' по-чувашски?",
        lessonId: "44",
        answers: [
          { text: "Планета", isCorrect: true },
          { text: "Астрономи", isCorrect: false },
          { text: "Çăлтăр", isCorrect: false },
          { text: "Галактика", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "45",
    title: "Урок 45: Лингвистика",
    theory: "В этом уроке вы выучите лингвистические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "89",
        text: "Как переводится слово 'лингвистика'?",
        lessonId: "45",
        answers: [
          { text: "Лингвистика", isCorrect: true },
          { text: "Грамматика", isCorrect: false },
          { text: "Фонетика", isCorrect: false },
          { text: "Синтаксис", isCorrect: false }
        ]
      },
      {
        id: "90",
        text: "Как сказать 'грамматика' по-чувашски?",
        lessonId: "45",
        answers: [
          { text: "Грамматика", isCorrect: true },
          { text: "Лингвистика", isCorrect: false },
          { text: "Чĕлхе", isCorrect: false },
          { text: "Сăмах", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "46",
    title: "Урок 46: Социология",
    theory: "В этом уроке вы выучите социологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "91",
        text: "Как переводится слово 'социология'?",
        lessonId: "46",
        answers: [
          { text: "Социологи", isCorrect: true },
          { text: "Общество", isCorrect: false },
          { text: "Культура", isCorrect: false },
          { text: "Традиция", isCorrect: false }
        ]
      },
      {
        id: "92",
        text: "Как сказать 'общество' по-чувашски?",
        lessonId: "46",
        answers: [
          { text: "Общество", isCorrect: true },
          { text: "Социологи", isCorrect: false },
          { text: "Культура", isCorrect: false },
          { text: "Традици", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "47",
    title: "Урок 47: Антропология",
    theory: "В этом уроке вы выучите антропологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "93",
        text: "Как переводится слово 'антропология'?",
        lessonId: "47",
        answers: [
          { text: "Антропологи", isCorrect: true },
          { text: "Человек", isCorrect: false },
          { text: "Эволюция", isCorrect: false },
          { text: "Культура", isCorrect: false }
        ]
      },
      {
        id: "94",
        text: "Как сказать 'эволюция' по-чувашски?",
        lessonId: "47",
        answers: [
          { text: "Эволюци", isCorrect: true },
          { text: "Антропологи", isCorrect: false },
          { text: "Чĕлхе", isCorrect: false },
          { text: "Культура", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "48",
    title: "Урок 48: Археология",
    theory: "В этом уроке вы выучите археологические термины на чувашском языке",
    courseId: "1",
    complexity: Complexity.PROFESSIONAL,
    questions: [
      {
        id: "95",
        text: "Как переводится слово 'археология'?",
        lessonId: "48",
        answers: [
          { text: "Археологи", isCorrect: true },
          { text: "Раскопки", isCorrect: false },
          { text: "Артефакт", isCorrect: false },
          { text: "Древность", isCorrect: false }
        ]
      },
      {
        id: "96",
        text: "Как сказать 'раскопки' по-чувашски?",
        lessonId: "48",
        answers: [
          { text: "Раскопка", isCorrect: true },
          { text: "Археологи", isCorrect: false },
          { text: "Артефакт", isCorrect: false },
          { text: "Аваллăх", isCorrect: false }
        ]
      }
    ]
  }
]; 