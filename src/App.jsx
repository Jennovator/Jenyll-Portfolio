import { BrowserRouter } from "react-router-dom";
import {  Hero, NavBar, Header, About, Tech, Projects, Testimonials, Contact } from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-dark h-[4000px]">
          <div className="bg-home-pattern bg-cover bg-no-repeat bg-center h-[950px]">
            <Header />
            <Hero />
            <NavBar />
          </div>
          <About />
          <Tech />
          <Projects />
          <Testimonials/>
          <Contact />
        </div>
      </BrowserRouter>
  )
}

export default App;


