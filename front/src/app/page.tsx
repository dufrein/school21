import { HeroSection } from '../features/HeroSection'
import { FeaturesSection } from '../features/FeaturesSection'
import { PricingPreview } from '../features/PricingPreview'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <PricingPreview />
    </div>
  )
}
