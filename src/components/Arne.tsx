import { headshot } from '../assets'
import Puzzle from './Puzzle'

const Arne = () => {
  return (
    <section id="arne" className="flex flex-col items-center text-center pt-16 sm:pt-24 pb-12">
      <h1 className="max-w-[1000px] font-light text-[36px] ss:text-[48px] md:text-[64px] leading-[1.15] tracking-[-0.02em] animate-fade-in-up">
        I am{' '}
        <img
          src={headshot}
          alt="Portrait of Arne"
          className="inline-block w-[0.95em] h-[0.95em] rounded-full object-cover align-[-0.12em] bg-neutral"
        />{' '}
        <span className="font-semibold">Arne</span>, a <span className="font-semibold">Software &amp; ML Engineer</span> with a passion for <span className="font-semibold text-secondary">Energy</span>.
      </h1>
      <div className="mt-24 mb-16">
        <Puzzle />
      </div>
    </section>
  )
}

export default Arne
