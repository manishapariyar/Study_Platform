import HeroSection from '@/components/hero'
import Feature from '../components/Feature'
import Statistics from '../components/Statistics'
import Faqs from '../components/Faqs'
import CTASection from '../components/CTASection'


export default function Home() {
  return (
    <div className='relative'>

      {/* Hero Section */}
      <HeroSection />
      <Feature />
      <Statistics />
      <Faqs />
      <CTASection />


    </div>
  )
}
