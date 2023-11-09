import { BrowserRouter } from "react-router-dom";
import {  Hero, NavBar, Header, About, Projects, Testimonials, Contact, StarsCanvas } from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-dark">
          <div className="bg-home-pattern bg-cover bg-no-repeat bg-center h-[950px]">
            <Header />
            <Hero />
            <NavBar />
          </div>
          <About />
          <Projects />
          <Testimonials/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
          
        </div>
      </BrowserRouter>
  )
}

export default App;


