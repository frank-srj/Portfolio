import Hero from './Hero'
import { studies } from '../data/resume'

const studiesHeading = (
  <h1 className="w-full font-sans text-[42px] font-normal leading-[48px] tracking-[-2px] text-text-primary min-[1180px]:min-w-0 min-[1180px]:max-w-[730px] min-[1180px]:text-[54px] min-[1180px]:leading-[60px]">
    Studies
  </h1>
)

function Footer() {
  return (
    <Hero
      heading={studiesHeading}
      items={studies}
      className="pt-28"
      contentClassName=""
    />
  )
}

export default Footer
