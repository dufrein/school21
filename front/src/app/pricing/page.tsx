import { PricingPlans } from "../../features/PricingPlans";

export default function Pricing() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Тарифные планы</h1>
        <p>Выберите тарифный план, который лучше всего подходит для ваших потребностей</p>
      </div>

      <PricingPlans />
    </div>
  );
}
