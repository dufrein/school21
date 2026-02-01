import styles from "./layout.module.scss";

export default async function MaterialsPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.twoColumn}>
      <div  className={styles.mainColumn}>{children}</div>
      <div className={'rightColumn'}>Правая колонка</div>
    </div>
  );
}
