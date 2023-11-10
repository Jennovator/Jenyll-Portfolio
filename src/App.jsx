import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero, NavBar, Header, About, Projects, Testimonials, Contact, StarsCanvas } from './components';

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
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/home" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Projects />}/>
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


