import { HeroSection } from "../features/HeroSection";
import { FeaturesSection } from "../features/FeaturesSection";
import { ComplexityLevelsPreview } from "../features/ComplexityLevelsPreview";
import styles from "./page.module.scss";
import { StepsSection } from "@features/StepsSection";

export default async function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <StepsSection/>
      <ComplexityLevelsPreview />
    </div>
  );
}
