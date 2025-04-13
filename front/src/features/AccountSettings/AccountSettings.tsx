'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

export function AccountSettings() {
  const [userSettings, setUserSettings] = useState({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    plan: 'Простой',
  })

  return (
    <div className={styles.settingsCard}>
      <h2 className={styles.settingsTitle}>Настройки аккаунта</h2>
      <div className={styles.settingsForm}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Имя</label>
          <input
            type="text"
            value={userSettings.name}
            onChange={(e) => setUserSettings({ ...userSettings, name: e.target.value })}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={userSettings.email}
            onChange={(e) => setUserSettings({ ...userSettings, email: e.target.value })}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Тариф</label>
          <select
            value={userSettings.plan}
            onChange={(e) => setUserSettings({ ...userSettings, plan: e.target.value })}
            className={styles.input}
          >
            <option value="Бесплатный">Бесплатный</option>
            <option value="Простой">Простой</option>
            <option value="Профессиональный">Профессиональный</option>
          </select>
        </div>
        <button className={styles.btnPrimary}>Сохранить изменения</button>
      </div>
    </div>
  )
} 