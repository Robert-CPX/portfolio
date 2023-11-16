import { About, Contact, Experience, Hero, Projects, Skills, Header, ThemeToggle, Footer } from './components'

const Home = () => {
  return (
    <div>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className='app'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Home
