/*
  Colophone page (Figma "Container-Studies"). Rendered instead of the homepage
  stack — see App.jsx. Shares the navbar and site footer, so only this middle
  section swaps out.
*/

// Matches the case-study content column so both pages share one measure.
const column = 'w-full max-w-[663px]'

function Section({ label, children }) {
  return (
    <div className={`flex flex-col items-start gap-2 ${column}`}>
      <p className="font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
        {label}
      </p>
      {children}
    </div>
  )
}

function List({ items }) {
  return (
    <ul className="w-full list-disc ps-7 font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Body({ children }) {
  return (
    <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-secondary">
      {children}
    </p>
  )
}

function Colophone() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-surface-secondary px-6 py-28">
      <div className={`flex flex-col items-start gap-1 ${column}`}>
        <h1 className="w-full font-sans text-[28px] font-medium leading-9 tracking-[-0.5px] text-text-primary phone:text-[24px] phone:leading-8 phone:tracking-[-0.48px]">
          Colophone
        </h1>
        <Body>A small Guide to this Website</Body>
      </div>

      <Section label="DESIGN AND DEVELOPMENT">
        <List
          items={[
            'Designed in Figma',
            'Built with React 19 and Vite 8',
            'Styled with Tailwind CSS v4',
            'Developed in Cursor',
            'Deployed on Vercel',
          ]}
        />
      </Section>

      <Section label="TYPOGRAPHY">
        <List
          items={[
            'Geist for headings and body text',
            'Geist Mono for labels, tags, and secondary type',
          ]}
        />
      </Section>

      <Section label="DESIGN SYSTEM">
        <Body>
          I defined tokens for colour, spacing, radius, and type in Figma and
          applied them in code through Tailwind as CSS custom properties.
          Colours use semantic tokens mapped to neutral primitives and
          components only consume semantic classes.
        </Body>
      </Section>

      <Section label="INTERACTION MODEL">
        <Body>
          This Website focuses on a single-page approach. The homepage is the
          main surface. Case studies and contact open as full-screen sheets over
          it, so context stays intact and transitions stay continuous.
        </Body>
      </Section>
    </section>
  )
}

export default Colophone
