import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

const BOOKING_URL = 'TEMPORARY_CALENDLY_URL'
const EMAIL = 'Lukashenkomaria91@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/maria-lukashenko-615a71231/'
const WHATSAPP = 'https://wa.me/971525773361'

const trustedBrands = [
  { name: 'Angel Cakes', logo: '/logos/angel-cakes.png', url: 'https://www.angelcakes.world/' },
  { name: 'Nobu', logo: '/logos/nobu.svg', url: 'https://www.noburestaurants.com/' },
  { name: 'Café de Palma', logo: '/logos/cafe-de-palma.svg', url: 'https://cafedepalma.ae/' },
  { name: 'Zoloto', logo: '/logos/zoloto.png', url: 'https://www.instagram.com/zoloto.dxb/' },
  { name: 'True Gamers', logo: '/logos/true-gamers.png', url: 'https://truegamers.world/' },
  { name: 'TODA', logo: '/logos/toda.png', url: 'https://toda.ae/' },
]

const metrics = [
  ['30+', 'Hospitality Projects'],
  ['30', 'Venues Launched & Scaled'],
  ['16+', 'Years of Experience'],
  ['250+', 'Professionals Trained'],
  ['35%', 'Revenue Growth'],
]

const impactFacts = [
  '30+ hospitality projects',
  '30 venues launched & scaled (17 cyber cafés, 9 cafés, 4 restaurants)',
  '16+ years in hospitality',
  '150+ team members led simultaneously',
  '250+ professionals trained, including 30+ managers',
  'Service systems developed for 20+ hospitality concepts',
  'Operations across 6 countries (UAE, Russia, Seychelles, Monaco, Morocco, Saudi Arabia)',
  'Revenue growth of up to 35%',
  'Labor costs reduced by up to 30% during low-demand periods',
  'Food cost and operating expenses optimized while maintaining guest experience',
  '90%+ client retention and repeat collaborations',
  'Proven track record of launching hospitality businesses from the ground up',
]

const helpAreas = [
  'Opening new hospitality concepts',
  'Scaling growing businesses',
  'Operational transformation',
  'Leadership & service culture',
]

const services = [
  {
    title: 'Operational Audit',
    context: "Your business isn't performing the way it should.",
    paragraphs: [
      `If your guests are complaining, profits are shrinking, your managers are overwhelmed or something simply feels "off", we'll find out why.`,
      'I spend several days “inside” your business, studying every stage of the guest journey, service standards, team performance, management, menu efficiency and commercial operations.',
      "You receive a detailed action plan showing exactly where you're losing money, time and guest loyalty and what to do next.",
      "Perfect for businesses that know something isn't working but don't yet know why.",
    ],
  },
  {
    title: 'Operations Transformation',
    context: "You want to grow, but your business isn't ready.",
    paragraphs: [
      "One successful venue doesn't automatically become ten.",
      'Most businesses discover too late that nothing is documented, nobody works the same way, and every new opening starts from zero.',
      'I help founders build operational systems that can actually scale.',
    ],
    capabilities: [
      'Pre-opening Strategy', 'Operational Systems', 'Service Excellence',
      'SOP Development', 'Leadership Training', 'Team Performance',
      'Guest Experience', 'KPIs & Reporting', 'Financial Performance',
      'Multi-unit Operations', 'Scaling Hospitality Businesses',
    ],
    closing: 'Everything your business needs to grow without losing quality.',
  },
  {
    title: 'Opening Consulting',
    context: "You're building something new.",
    paragraphs: [
      'From the first idea to opening day.',
      'I work alongside founders throughout the entire launch process, helping structure operations, recruit teams, build service systems, coordinate suppliers and prepare the business for opening.',
      "From choosing the first napkin to welcoming the first guest, whether you're opening a restaurant, members' club, café, hotel, entertainment venue, or another hospitality concept, I help ensure your business feels organised, premium, and commercially ready from day one.",
    ],
  },
]

const serviceSummaries = [
  'Find where the business is losing money, time and guest loyalty — and leave with a precise action plan.',
  'Build operational systems that can scale without losing quality, consistency or control.',
  'Structure the journey from first idea to opening day and prepare the business to perform from day one.',
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ML Consulting — Hospitality Operations Consultancy' },
      { name: 'description', content: 'International hospitality operations consultancy led by Maria Lukashenko.' },
    ],
  }),
  component: HomePage,
})

function Kicker({ number, children }: { number?: string; children: ReactNode }) {
  return <p className="kicker">{number && <><span>{number}</span> / </>}{children}</p>
}

function Connector({ className = '' }: { className?: string }) {
  return <svg className={`connector ${className}`} viewBox="0 0 164 56" aria-hidden="true"><path d="M2 17H88L122 45" /><circle cx="88" cy="17" r="2.8" /><path className="star" d="M122 35l2.7 7.3 7.3 2.7-7.3 2.7-2.7 7.3-2.7-7.3-7.3-2.7 7.3-2.7z" /></svg>
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  const hasCalendly = BOOKING_URL.startsWith('http')
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div className="modal-head"><div><Kicker number="30 MIN">Discovery call</Kicker><h2 id="booking-title">Plan a conversation</h2></div><button ref={closeRef} onClick={onClose} aria-label="Close booking dialog">×</button></div>
      {hasCalendly ? <iframe className="calendly-frame" src={BOOKING_URL} title="Book a discovery call with Maria" /> : <div className="booking-placeholder"><p>The Calendly booking link is ready to be connected.</p><a className="button button-light" href={`mailto:${EMAIL}?subject=Discovery call`}>Book by email</a></div>}
    </div>
  </div>
}

function TrustedBy() {
  return <section className="trusted-block" aria-label="Trusted by"><Kicker>Trusted by</Kicker><div className="trusted-logos">{trustedBrands.map((brand) => <a href={brand.url} key={brand.name} target="_blank" rel="noreferrer" aria-label={brand.name}><img src={brand.logo} alt={brand.name} /></a>)}</div></section>
}

function Impact() {
  return <section className="impact-section" id="impact"><div className="section-heading"><Kicker number="01">Impact</Kicker><h2>Impact, in practice.</h2></div><div className="metrics-grid">{metrics.map(([value, label], index) => <div className="metric" key={label}>{index === 4 && <small>UP TO</small>}<strong>{value}</strong><span>{label}</span></div>)}</div><div className="impact-list"><Kicker>Full impact</Kicker><ol>{impactFacts.map((fact, index) => <li key={fact}><span>{String(index + 1).padStart(2, '0')}</span>{fact}</li>)}</ol></div></section>
}

function HelpList() {
  return <div className="help-list">{helpAreas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, '0')}</span><p>{area}</p></div>)}</div>
}

function WhyBlock() {
  return <section className="why-block"><img src="/assets/m-045.jpg" alt="Maria Lukashenko working at a laptop" /><div className="why-copy"><Kicker>Why founders call me?</Kicker><h2 className="data-headline">MOST BUSINESSES DON'T HAVE A SERVICE PROBLEM.<br /><em>THEY HAVE A SYSTEMS PROBLEM.</em></h2><Connector /><div className="why-body"><p>Managers spend every day putting out fires. Every new location feels like starting from scratch.</p><p>Service depends on individuals rather than clear standards. Teams work hard, but results stay inconsistent. Familiar?</p><p>I help founders understand why this happens and build systems that keep the business performing without constant firefighting.</p></div></div></section>
}

function WorkGallery() {
  const images = [
    { src: '/assets/team-session.jpg', alt: 'Maria leading a hospitality team session' },
    { src: '/assets/operations-work.jpg', alt: 'Hospitality operations work in progress' },
    { src: '/assets/opening-consulting.jpg', alt: 'Maria presenting an opening concept to a team' },
  ]
  return <div className="work-gallery" aria-label="Three ways to work with Maria">{services.map((service, index) => <article className="work-card" key={service.title}><img src={images[index].src} alt={images[index].alt} loading="lazy" /><div className="work-card-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{service.title}</h3><p>{serviceSummaries[index]}</p></div></article>)}</div>
}

function Services() {
  return <section className="services-section" id="work"><div className="services-overview"><div className="section-heading"><Kicker number="03">Ways to work together</Kicker><h2>Three clear ways to work together.</h2></div><WorkGallery /></div><div className="services-list">{services.map((service, index) => <article className="service" key={service.title}><span className="service-number">{String(index + 1).padStart(2, '0')}</span><div className="service-content"><div className="service-lead"><p className="service-context">{service.context}</p><h3>{service.title}</h3></div><div className="service-description">{service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{service.capabilities && <ul className="capabilities">{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>}{service.closing && <p className="service-closing">{service.closing}</p>}</div></article>)}</div></section>
}

function About() {
  return <section className="about-section" id="about"><img src="/assets/m-032.jpg" alt="Portrait of Maria Lukashenko" /><div className="about-copy"><Kicker number="04">About Maria</Kicker><div className="about-statement"><h2>Most founders don't need another consultant.</h2><Connector /><h3>They need someone they can trust when the stakes are high.</h3></div><div className="about-body"><p>Most founders don't need another consultant. They need someone they can trust when the stakes are high. Someone who has opened venues, built teams, solved operational challenges and knows what it takes to create a business that works long after opening day. That's where I come in.</p><p>I'm Maria Lukashenko, a hospitality and operations consultant with 16+ years of experience across Europe, the UAE, Russia, and the Seychelles. From luxury hospitality to scaling fast-growing, multi-location brands, I've spent my career building the systems that drive exceptional guest experiences.</p><p>Today, I help founders and operators launch ambitious concepts, fix underperforming businesses and prepare them for sustainable growth through practical operations, strong leadership and service that lasts.</p></div></div></section>
}

function Contact({ onBook }: { onBook: () => void }) {
  return <section className="contact-section" id="contact"><div className="contact-main"><Kicker number="05">Contact</Kicker><h2>Let's build a business people come back to!</h2><p>Whether you're opening your first project, preparing for expansion or trying to understand why your business has stopped growing, I'd love to hear about it.</p></div><div className="contact-action"><div className="contact-links"><a href={`mailto:${EMAIL}`}>Email</a><a href={LINKEDIN} target="_blank" rel="noreferrer">View profile</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></div><button className="button button-dark" onClick={onBook}>Work with me</button></div></section>
}

function DesktopSite({ onBook }: { onBook: () => void }) {
  return <div className="desktop-site"><header className="desktop-nav"><img src="/assets/mlc-logo.png" alt="ML Consulting" /><nav><a href="#impact">Impact</a><a href="#help">What I help with</a><a href="#work">Ways to work together</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header><main><section className="hero-section" id="home"><Kicker>International hospitality operations</Kicker><h1>I build profitable<br />guest experience<br />systems.</h1><div className="hero-bottom"><div className="hero-intro"><Kicker>A practical approach to exceptional hospitality</Kicker><p>I help founders turn ambitious hospitality concepts into businesses that actually work.</p><button className="button button-light" onClick={onBook}>Work with me</button></div><Connector /><div className="hero-detail"><p>Whether you're opening your first venue, scaling to multiple locations, or trying to fix a business that's stopped performing, I help turn operational chaos into profitable, repeatable systems.</p><small>Because a great guest experience is never accidental!</small></div></div></section><TrustedBy /><Impact /><section className="help-section" id="help"><div className="section-heading"><Kicker number="02">What I Help With</Kicker><h2>Built around the real problem.</h2></div><HelpList /></section><WhyBlock /><Services /><About /><Contact onBook={onBook} /></main></div>
}

type MobileSectionKey = 'home' | 'help' | 'work' | 'about' | 'contact'
const mobileSections: { key: MobileSectionKey; number: string; label: string }[] = [
  { key: 'home', number: '01', label: 'Home' },
  { key: 'help', number: '02', label: 'What I Help With' },
  { key: 'work', number: '03', label: 'Ways to Work Together' },
  { key: 'about', number: '04', label: 'About' },
  { key: 'contact', number: '05', label: 'Contact' },
]

function MobileHome({ onBook }: { onBook: () => void }) {
  return <><section className="mobile-hero"><img src="/assets/mlc-logo.png" alt="ML Consulting" /><Kicker>International hospitality operations</Kicker><h1>I build profitable guest experience systems.</h1><Kicker>A practical approach to exceptional hospitality</Kicker><p className="lead">I help founders turn ambitious hospitality concepts into businesses that actually work.</p><Connector /><p>Whether you're opening your first venue, scaling to multiple locations, or trying to fix a business that's stopped performing, I help turn operational chaos into profitable, repeatable systems.</p><small>Because a great guest experience is never accidental!</small><button className="button button-light" onClick={onBook}>Work with me</button></section><TrustedBy /><Impact /></>
}

function MobileHelp() {
  return <><section className="mobile-help"><h2>Built around the real problem.</h2><HelpList /></section><WhyBlock /></>
}

function MobileAccordion({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState<MobileSectionKey>('home')
  const openSection = (key: MobileSectionKey, button: HTMLButtonElement) => {
    if (key === open) return
    const before = button.getBoundingClientRect().top
    setOpen(key)
    requestAnimationFrame(() => window.scrollBy({ top: button.getBoundingClientRect().top - before, behavior: 'auto' }))
  }
  return <div className="mobile-site">{mobileSections.map((section) => <section className={`accordion-item ${open === section.key ? 'is-open' : ''}`} key={section.key}><button className="accordion-trigger" aria-expanded={open === section.key} aria-controls={`mobile-panel-${section.key}`} onClick={(event) => openSection(section.key, event.currentTarget)}><span className="accordion-number">{section.number}</span><span>{section.label}</span><span className="accordion-mark">{open === section.key ? '−' : '+'}</span></button><div id={`mobile-panel-${section.key}`} className="accordion-panel" hidden={open !== section.key}>{section.key === 'home' && <MobileHome onBook={onBook} />}{section.key === 'help' && <MobileHelp />}{section.key === 'work' && <Services />}{section.key === 'about' && <About />}{section.key === 'contact' && <Contact onBook={onBook} />}</div></section>)}<button className="mobile-cta" onClick={onBook}>Work with me</button></div>
}

function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const closeBooking = useCallback(() => setBookingOpen(false), [])
  return <main className="ml-site"><DesktopSite onBook={() => setBookingOpen(true)} /><MobileAccordion onBook={() => setBookingOpen(true)} />{bookingOpen && <BookingModal onClose={closeBooking} />}</main>
}
