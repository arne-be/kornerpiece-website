const About = () => {
  return (
    <section id="about" className="pb-28">
      <div className="flex flex-wrap gap-x-20 gap-y-12 pt-24 border-t border-neutral">
        <div className="flex-[1_1_260px]">
          <p className="mb-5 text-[14px] uppercase tracking-[0.14em] text-muted">About me</p>
          <h2 className="text-[28px] ss:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em]">
            It started with a camera pointed at the sky.
          </h2>
        </div>
        <div className="flex-[2_1_480px] min-w-0 flex flex-col gap-6 text-[18px] font-light leading-[1.75] text-[#2A2B30]">
          <p>
            For my bachelor thesis I tried to predict how much power a solar panel would produce in the next few minutes by looking at clouds. That question never really left me. A grid that runs on renewables has to live with weather it can't control and renewable assets it can control. That interplay, combined with financial incentives, is what excites me.
          </p>
          <p>
            What drives me is curiosity, and the feeling of owning something from the first idea to the version people actually use. That curiosity has also taken me around: I've lived in Essen, Sydney, Barcelona, Seoul, Leuven and Berlin. I like small teams, simple products and things made with care. That goes for software, and just as much for music, photography and design.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
