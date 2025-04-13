'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

const mockLesson = {
  id: 1,
  title: 'Существительные и местоимения',
  theory: `
    Существительные - это слова, которые называют людей, места, предметы или идеи. Они могут быть в единственном или множественном числе.
    Примеры: книга, город, счастье
    
    Местоимения - это слова, которые заменяют существительные. Они помогают избежать повторений в предложениях.
    Примеры: он, она, оно, они, мы
    
    Существуют разные типы местоимений:
    - Личные местоимения (я, ты, он, она, оно, мы, они)
    - Притяжательные местоимения (мой, твой, его, её, наш, их)
    - Возвратные местоимения (себя, себя, себя, себя, себя, себя, себя)
  `,
  questions: [
    {
      id: 1,
      question: 'Какое из следующих слов является существительным?',
      options: ['Бежать', 'Красивый', 'Книга', 'Быстро'],
      correctAnswer: 'Книга',
    },
    {
      id: 2,
      question: 'Выберите правильное местоимение для замены существительного: "Кошка спит."',
      options: ['Он', 'Она', 'Оно', 'Они'],
      correctAnswer: 'Она',
    },
    {
      id: 3,
      question: 'Какой тип местоимения "себя"?',
      options: ['Личное', 'Притяжательное', 'Возвратное', 'Указательное'],
      correctAnswer: 'Возвратное',
    },
  ],
}

export function LessonContent() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    mockLesson.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / mockLesson.questions.length) * 100)
  }

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{mockLesson.title}</h2>

      {/* Theory Section */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Теория</h3>
        <div className={styles.theoryContent}>
          {mockLesson.theory.split('\n').map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Questions Section */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Практические вопросы</h3>
        <div className={styles.questionsList}>
          {mockLesson.questions.map((q) => (
            <div key={q.id} className={styles.question}>
              <p className={styles.questionText}>{q.question}</p>
              <div className={styles.optionsList}>
                {q.options.map((option) => (
                  <label key={option} className={styles.option}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={(e) =>
                        setAnswers({ ...answers, [q.id]: e.target.value })
                      }
                      className={styles.radio}
                    />
                    <span className={styles.optionText}>{option}</span>
                  </label>
                ))}
              </div>
              {showResults && (
                <p
                  className={`${styles.result} ${
                    answers[q.id] === q.correctAnswer
                      ? styles.correct
                      : styles.incorrect
                  }`}
                >
                  {answers[q.id] === q.correctAnswer
                    ? 'Правильно!'
                    : `Неправильно. Правильный ответ: ${q.correctAnswer}`}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          {!showResults ? (
            <button
              onClick={handleSubmit}
              className={styles.btnPrimary}
              disabled={Object.keys(answers).length !== mockLesson.questions.length}
            >
              Отправить ответы
            </button>
          ) : (
            <div className={styles.results}>
              <p className={styles.score}>
                Ваш результат: {calculateScore()}%
              </p>
              <button
                onClick={() => {
                  setAnswers({})
                  setShowResults(false)
                }}
                className={`${styles.btnSecondary} ${styles.tryAgain}`}
              >
                Попробовать снова
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 