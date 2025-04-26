import { PricingPlans } from "../../features/PricingPlans";

export default function Pricing() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>Тарифные планы</h2>
        <p>Выберите тарифный план, который лучше всего подходит для ваших потребностей</p>
      </div>

      <PricingPlans />
    </div>
  );
}
