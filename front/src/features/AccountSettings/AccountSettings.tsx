"use client";

import { useContext, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "@context/UserContext";
import { StudentType } from "@types";
import { AvatarSelect } from "@components";
import { accountSettingsSchema } from "./schema";
import { getClassList } from "@utils";
import { AccountSettingsProps } from "./types";
import { SexEnum } from "@constants";

/**
 * Компонент для настроек аккаунта
 * @returns React.FC<AccountSettingsProps>
 */
export const AccountSettings = (props: AccountSettingsProps) => {
  const { avatarsWoman, avatarsMan } = props;
  const { user, saveStudent, isLoading } = useContext(UserContext);
  const [userSettings, setUserSettings] = useState<Partial<StudentType>>({
    name: user?.name || "",
    surname: user?.surname || "",
    sex: user?.sex,
    avatarId: user?.avatarId || "",
  });

  const [errors, setErrors] = useState<{
    name?: string[];
    surname?: string[];
    sex?: string[];
    avatarId?: string[];
  }>({});

  const hasChanges = useMemo(() => {
    return (
      userSettings.name !== user?.name ||
      userSettings.surname !== user?.surname ||
      userSettings.sex !== user?.sex ||
      userSettings.avatarId !== user?.avatarId
    );
  }, [userSettings, user]);

  const handleSave = async () => {
    setErrors({});

    const validationResult = accountSettingsSchema.safeParse({
      name: userSettings.name,
      surname: userSettings.surname,
      sex: userSettings.sex,
    });

    if (!validationResult.success) {
      setErrors(validationResult.error.flatten().fieldErrors);
      return;
    }

    if (user?.documentId) {
      saveStudent(userSettings).then(() => {
        setErrors({});
      });
    }
  };

  const buttinClassList = getClassList([
    "button btnPrimary",
    styles.btnStub,
    isLoading || !hasChanges ? "btnDisabled" : "",
  ]);

  console.log("userSettings.sex", userSettings.sex);
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
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          />
          {errors.name && <p className={styles.fieldError}>{errors.name[0]}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Фамилия</label>
          <input
            type="text"
            value={userSettings.surname}
            onChange={(e) => setUserSettings({ ...userSettings, surname: e.target.value })}
            className={`${styles.input} ${errors.surname ? styles.inputError : ""}`}
          />
          {errors.surname && <p className={styles.fieldError}>{errors.surname[0]}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Пол</label>
          <select
            value={userSettings.sex || ""}
            defaultValue={"x"}
            onChange={(e) => setUserSettings({ ...userSettings, sex: e.target.value as SexEnum })}
            className={styles.sexSelect}
          >
            <option value={"x"}>Выберите пол</option>
            <option value={SexEnum.MAN}>Мужской</option>
            <option value={SexEnum.WOMAN}>Женский</option>
          </select>
          {errors.sex && <p className={styles.fieldError}>{errors.sex[0]}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Аватар</label>
          <AvatarSelect
            avatarsWoman={avatarsWoman}
            avatarsMan={avatarsMan}
            currentAvatarId={userSettings.avatarId || ""}
            sex={userSettings.sex as SexEnum}
            onAvatarSelect={(avatarId) => setUserSettings({ ...userSettings, avatarId })}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <p>{user?.email}</p>
        </div>
        <div className={styles.formGroup}>
          <button
            className={buttinClassList}
            onClick={handleSave}
            disabled={isLoading || !hasChanges}
          >
            {isLoading ? "Сохранение..." : "Сохранить изменения"}
          </button>
        </div>
      </div>
    </div>
  );
};
