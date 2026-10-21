const links = [
  {
    label: 'Email',
    href: 'mailto:arne.berresheim@gmail.com',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arne-berresheim/',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/arne-be',
    icon: (
      <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.4 0C6.1 1.4 5 1.7 5 1.7a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.5 8.7c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V21" />
    ),
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-neutral flex flex-wrap gap-8 items-center justify-between">
      <h2 className="text-[36px] ss:text-[48px] md:text-[64px] font-semibold tracking-[-0.02em]">
        Get in <span className="text-secondary">touch</span>.
      </h2>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[52px] h-[52px] rounded-full border border-neutral flex items-center justify-center text-primary hover:border-secondary hover:text-secondary"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {link.icon}
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
