import { useState, useEffect } from 'react'
import './index.css'

/* ── SVG Icons ── */

function IconSun({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function IconMoon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function IconGlobe({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconBriefcase({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  )
}

function IconLightbulb({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  )
}

function IconHeart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function IconMail({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconPhone({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconLinkedIn({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}

/* ── Main App ── */

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : false
  })

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between h-14">
          <a
            href="#home"
            className="font-[Playfair_Display] italic text-xl font-semibold text-[var(--accent)] hover:opacity-80 transition-opacity no-underline tracking-tight"
          >
            MC
          </a>
          <div className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`no-underline transition-colors ${
                  activeSection === item.id
                    ? 'text-[var(--accent)] font-medium'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors cursor-pointer bg-transparent border-none"
              aria-label="Toggle theme"
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[900px] mx-auto px-6 pt-20">
        {/* Hero / Home */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center py-20">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[var(--accent)]/30 shadow-lg mb-6">
            <img
              src="/portrait.png"
              alt="Mandy Chum"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h1 className="text-5xl italic font-semibold mb-3 text-[var(--text)]">
            Mandy Chum
          </h1>
          <p className="text-[var(--text-secondary)] text-base mb-8 max-w-md">
            Restaurant Growth Consultant &amp; Toast Specialist
          </p>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-lg mb-6">
            A trilingual go-getter with a love for great food, creative problem solving,
            and helping businesses thrive. Always curious, always learning, and always up for a new adventure.
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-[var(--accent)] text-white no-underline hover:opacity-90 transition-opacity font-medium">
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/mandychum" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--text)] no-underline hover:border-[var(--accent)] transition-colors">
              LinkedIn
            </a>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-10">A little bit about who I am</p>

          <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed mb-12">
            <p>
              Hi, I'm Mandy! I'm a trilingual consultant based in San Diego who loves helping businesses
              grow through better systems, sharper marketing, and hands-on problem solving.
            </p>
            <p>
              I studied business economics at UC San Diego, which gave me a data-driven approach to
              everything I do. With years of experience using Toast POS and strong management and
              operations skills, I'm passionate about turning big ideas into real, measurable results
              and always looking for new challenges to take on.
            </p>
            <p>
              I speak English, Mandarin, and Cantonese fluently, which lets me connect with people
              from all kinds of backgrounds. Outside of work, I love exploring new restaurants,
              traveling, and finding creative ways to solve problems.
            </p>
          </div>

          {/* Interests */}
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <IconHeart className="text-[var(--accent)]" /> Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Food & Dining', icon: 'M3 2l1.578 4.657A2 2 0 0 0 6.437 8H11v4H6l-3 7h18l-3-7h-5V8h4.563a2 2 0 0 0 1.859-1.343L21 2' },
              { label: 'Traveling', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z' },
              { label: 'Marketing Strategy', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
              { label: 'Small Business', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-center">
                <svg className="mx-auto text-[var(--accent)] mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-semibold mb-2">Skills</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-10">What I bring to the table</p>

          {/* Languages */}
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <IconGlobe className="text-[var(--accent)]" /> Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <LanguageCard name="English" level={4} />
            <LanguageCard name="Mandarin" level={4} />
            <LanguageCard name="Cantonese" level={4} />
          </div>

          {/* Professional Skills (combined) */}
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <IconBriefcase className="text-[var(--accent)]" /> Professional Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <SkillBar name="Prospecting & Cold Outreach" percent={95} />
            <SkillBar name="Discovery & Qualification" percent={90} />
            <SkillBar name="Pitching & Objection Handling" percent={85} />
            <SkillBar name="Pipeline Tracking" percent={90} />
            <SkillBar name="Toast Menu & Loyalty Setup" percent={95} />
            <SkillBar name="SMS/Email Campaigns" percent={95} />
            <SkillBar name="Staff Training (Toast)" percent={90} />
            <SkillBar name="KDS/Printer Setup & Reporting" percent={80} />
            <SkillBar name="Local SEO & Google Business" percent={90} />
            <SkillBar name="Yelp Ads & Strategy" percent={85} />
            <SkillBar name="Influencer Outreach" percent={75} />
            <SkillBar name="Excel & Campaign Planning" percent={90} />
          </div>

          {/* Always Learning blurb */}
          <div className="p-6 rounded-2xl bg-[var(--bg-warm)] mt-4">
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <IconLightbulb className="text-[var(--accent)]" /> Always Learning
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              I'm constantly working to expand my skillset! From refining campaign strategies to mastering new
              Toast features and local marketing channels, staying ahead of industry trends helps me
              deliver better results for every client I work with.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-semibold mb-2">Experience</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-10">Where I've made an impact</p>

          <div className="space-y-8">
            <ExperienceCard
              company="MAMO MARKETING"
              role="Co-Founder / Consultant & Restaurant Growth (Toast)"
              location="San Diego, CA"
              date="Dec 2025 – Present"
              highlights={[
                'Drove $67,389 in attributable sales via Toast SMS/Email over 60 days at 25x+ ROI.',
                'Delivered 8.95x ROI on Google Ads, driving ~168,000 impressions over 60 days.',
                'Scaled Yelp Ads to ~49,700 impressions over 2 months (~50% of total profile visits).',
                'Onboard Toast restaurants: menus, modifiers, pricing, loyalty, KDS workflows.',
                'Run trilingual outbound outreach (Mandarin/Cantonese/English) to prospect and qualify restaurants.',
              ]}
            />
            <ExperienceCard
              company="NA TART"
              role="Operations Manager | Toast + Growth"
              location="San Diego, CA"
              date="May 2024 – Present"
              highlights={[
                'Increased daily revenue from $1,500–$2,000 to $3,500–$4,000 in ~4 months.',
                'Boosted ad CTR from 0.65% to 2.45% over 90 days through offer testing and audience targeting.',
                'Improved 60-day repeat guest rate from 12% to 16% with better incentives and messaging.',
                'Negotiated catering commission reduction from 25% to 20% (ezCater, Foodja).',
              ]}
            />
            <ExperienceCard
              company="Pho Hut & Grill"
              role="Marketing & Operations (Toast)"
              location="San Diego, CA"
              date="Dec 2024 – Dec 2025"
              highlights={[
                'Increased daily revenue from $2,500–$3,000 to $4,000–$5,000.',
                'Delivered 6.40x ROI on Google Ads (Sep–Dec 2025).',
                'Grew email subscribers from 0 to 2,387; loyalty members from 3,527 to 7,092.',
                'Improved 60-day repeat rate from 21% to 28.7% through segmentation and reactivation.',
              ]}
            />
          </div>

          {/* Education */}
          <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-warm)]">
            <h3 className="text-lg font-semibold mb-1">UC San Diego</h3>
            <p className="text-sm text-[var(--text-secondary)]">B.S. Business Economics · Sep 2023 – June 2025</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-10">
            Open to consulting opportunites, marketing, partnerships, or just to talk!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:mandychum999@gmail.com"
              className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] no-underline hover:border-[var(--accent)] transition-colors group flex items-start gap-3"
            >
              <IconMail className="text-[var(--accent)] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Email</p>
                <p className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">mandychum999@gmail.com</p>
              </div>
            </a>
<a
              href="https://www.linkedin.com/in/mandychum"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] no-underline hover:border-[var(--accent)] transition-colors group flex items-start gap-3"
            >
              <IconLinkedIn className="text-[var(--accent)] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">LinkedIn</p>
                <p className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">/in/mandychum</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

/* ── Components ── */

function ExperienceCard({
  company,
  role,
  location,
  date,
  highlights,
}: {
  company: string
  role: string
  location: string
  date: string
  highlights: string[]
}) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-sm text-[var(--text-secondary)]">{role}</p>
        </div>
        <p className="text-xs text-[var(--text-secondary)] whitespace-nowrap sm:text-right">
          {location}<br />{date}
        </p>
      </div>
      <ul className="space-y-1.5">
        {highlights.map((h, i) => (
          <li key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--accent)]/50">
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}

function LanguageCard({ name, level }: { name: string; level: number }) {
  return (
    <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
      <p className="text-sm font-medium mb-2">{name}</p>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-3.5 h-3.5 rounded-full ${
              i <= level ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function SkillBar({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
      <p className="text-sm font-medium mb-2">{name}</p>
      <div className="w-full h-2 rounded-full bg-[var(--border)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export default App
