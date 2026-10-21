import { projects } from '../constants'

const Projects = () => {
  return (
    <section id="projects" className="pb-28">
      <div className="flex flex-wrap gap-4 justify-between items-end mb-8">
        <h2 className="text-[28px] ss:text-[40px] font-semibold tracking-[-0.01em]">Past projects</h2>
        <p className="text-[14px] text-muted">Scroll sideways →</p>
      </div>
      <ul className="scroller list-none flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="flex-[0_0_300px] ss:flex-[0_0_320px] snap-start rounded-2xl border border-neutral bg-white p-7 flex flex-col gap-3.5"
          >
            <span className="text-[13px] font-medium text-secondary-dark">
              {String(index + 1).padStart(2, '0')} · {project.label}
            </span>
            <h3 className="text-[20px] font-semibold leading-[1.3]">{project.title}</h3>
            <p className="text-[15px] leading-[1.6] text-body">{project.content}</p>
            <p className="text-[13px] text-muted">{project.tags}</p>
            {project.links && (
              <div className="mt-auto flex gap-5 text-[15px] font-medium">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark hover:text-primary"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
