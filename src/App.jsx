import "./App.css"
import About from "./components/About/About"
import Contact from "./components/contact/contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import Portfolio from "./components/portfolio/portfolio"
import Services from "./components/services/serviecs"
import Testimonials from "./components/testimonials/Testimonials"

const App = () => {
  return (
    < >
      <div className="App">
        <Header />

        <Nav />
        <br />
        <br />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App