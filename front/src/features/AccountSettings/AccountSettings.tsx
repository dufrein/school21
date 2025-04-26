'use client'

import { useContext, useState } from 'react'
import styles from './styles.module.scss'
// import { AppContext } from '@context/AppContext'
import { UserContext } from '@context/UserContext'
import { AccountSettingsProps } from './types'
import { StudentType } from '@types'

export function AccountSettings({ onSave }: AccountSettingsProps) {
  // const { tariffs } = useContext(AppContext)
  const { user } = useContext(UserContext)

  const [userSettings, setUserSettings] = useState<Partial<StudentType>>({
    name: user?.name || '',
    email: user?.email || '',
    tariff: user?.tariff
  })

  const handleSave = () => {
    if (onSave) {
      onSave(userSettings)
    }
  }
  
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
            disabled={true}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={userSettings.email}
            onChange={(e) => setUserSettings({ ...userSettings, email: e.target.value })}
            className={styles.input}
            disabled={true}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Тариф</label>
          <p  className={styles.input}>{userSettings.tariff?.name}</p>
          {/* <select
            value={userSettings.tariff}
            onChange={(e) => setUserSettings({ ...userSettings, tariff: e.target.value })}
            className={styles.input}
          >
            {tariffs?.map((tariff) => (
              <option key={tariff.id} value={tariff.name}>
                {tariff.name}
              </option>
            ))}
          </select> */}
        </div>
        <button className={'button btnPrimary'} onClick={handleSave}>
          Сохранить изменения
        </button>
      </div>
    </div>
  )
} 