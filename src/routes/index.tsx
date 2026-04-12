import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '../components/section/HeroSection'
import { ProofStrip } from '../components/section/ProofStrip'
import { MethodSection } from '../components/section/MethodSection'
import { EcosystemSection } from '../components/section/EcosystemSection'
import { QualitySystemSection } from '../components/section/QualitySystemSection'
import { SuccessStoriesSection } from '../components/section/SuccessStoriesSection'
import { KnowledgeHubSection } from '../components/section/KnowledgeHubSection'
import { CommunityMapSection } from '../components/section/CommunityMapSection'
import { FinalCTASection } from '../components/section/FinalCTASection'

export const Route = createFileRoute('/')({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: 'Wafa Indonesia — Belajar Al-Qur\'an Metode Otak Kanan' },
      {
        name: 'description',
        content: 'Metode Wafa — Cara mudah, cepat, dan menyenangkan belajar Al-Qur\'an. 15.000+ guru tersertifikasi, 1200+ lembaga di 35 provinsi Indonesia.',
      },
    ],
  }),
})

function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <MethodSection />
      <EcosystemSection />
      <QualitySystemSection />
      <SuccessStoriesSection />
      <KnowledgeHubSection />
      <CommunityMapSection />
      <FinalCTASection />
    </>
  )
}
