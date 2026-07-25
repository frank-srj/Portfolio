import Hero from './Hero'

const studies = [
  {
    year: '2025-2026',
    company: 'UAS Amsterdam',
    url: 'https://www.amsterdamuas.com/programmes/master-digital-design-interaction-design',
    title: 'M.S. Interaction Design',
  },
  {
    year: '2021-2025',
    company: 'UAS Potsdam',
    url: 'https://www.fh-potsdam.de/studium-weiterbildung/studiengaenge/interfacedesign-ba',
    title: 'B.A. Interface Design',
  },
]

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
