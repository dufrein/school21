import { PricingPlans } from "../../features/PricingPlans";
import styles from "./page.module.scss";
export default function Pricing() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Тарифные планы</h2>
        <p>Выберите тарифный план, который лучше всего подходит для ваших потребностей</p>
      </div>

      <PricingPlans />
    </div>
  );
}
