import './input.css'
import {NavBar, Arne, Now, Projects, About, Contact, Footer} from './components';

const App = () => {
  return (
    <div className="font-kanit text-primary bg-paper min-h-screen w-full overflow-x-clip">
      <header className="sticky top-0 z-10 bg-paper/90 backdrop-blur">
        <div className="max-w-[1200px] mx-auto px-6">
          <NavBar />
        </div>
      </header>

      <main>
        <div className="max-w-[1200px] mx-auto px-6">
          <Arne />
          <Now />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
