import { deilbachScreenshot } from '../assets'

const facts = ['Hourly updates', '24 h horizon', '4 gauges + DWD radar', 'AWS']

const Now = () => {
  return (
    <section id="now" className="pt-24 pb-28">
      <p className="mb-5 text-[14px] uppercase tracking-[0.14em] text-muted">Currently working on</p>
      <article className="flex flex-wrap overflow-hidden rounded-[20px] border border-neutral bg-white">
        <div className="flex-[1_1_420px] min-w-0 p-8 sm:p-12 flex flex-col gap-5">
          <h2 className="text-[28px] ss:text-[40px] font-semibold leading-[1.15] tracking-[-0.01em]">
            River level prediction
          </h2>
          <p className="text-[17px] leading-[1.65] text-body">
            An hourly 24-hour water level forecast for the Deilbach in Essen-Kupferdreh, the stream that runs right past my family's house. The July 2021 flood reached us too, and since then our own gauge has watched the water. The forecast combines it with three upstream gauges and DWD rain radar and forecasts, and shows the highest expected level with flood categories and an uncertainty range. That gives us and our neighbours a few hours' head start.
          </p>
          <ul className="flex flex-wrap gap-2">
            {facts.map((fact) => (
              <li key={fact} className="px-3 py-1.5 rounded-full bg-accent-soft text-secondary-darker text-[13px]">
                {fact}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-auto pt-3">
            <a
              href="https://deilbach-pegel.energiekonzepte-ruhr.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[48px] px-[22px] rounded-full bg-secondary text-white text-[15px] font-medium hover:bg-secondary-dark"
            >
              Live forecast ↗
            </a>
            <a
              href="https://github.com/arne-be/deilbach-pegel-prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[48px] px-[22px] rounded-full border border-primary text-primary text-[15px] font-medium hover:bg-primary hover:text-paper"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="flex-[1_1_460px] min-w-0 p-6 sm:p-8 flex items-center">
          <a
            href="https://deilbach-pegel.energiekonzepte-ruhr.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(1,2,8,0.12)]"
          >
            <img
              src={deilbachScreenshot}
              alt="Screenshot from the live forecast page: the house, the car park and the Deilbach with its gauge, above the 48-hour water level chart with the five flood categories"
              className="w-full h-auto block bg-[#0B1A1C]"
            />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Now
