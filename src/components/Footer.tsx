const Footer = () => {
  return (
    <footer className="py-6 border-t border-neutral flex flex-wrap gap-6 justify-between text-[13px] text-muted">
      <span>© {new Date().getFullYear()} kornerpiece</span>
      <span className="flex gap-5">
        <a href="/imprint.html" className="hover:text-primary">Impressum</a>
        <a href="/datenschutz.html" className="hover:text-primary">Datenschutz</a>
      </span>
    </footer>
  )
}

export default Footer
