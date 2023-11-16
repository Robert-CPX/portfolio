import { About, Contact, Experience, Hero, Projects, Skills, Header, ThemeToggle, Footer, SectionDivider } from './components'

const Home = () => {
  return (
    <div>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className='app'>
        <Header />
        <Hero />
        <SectionDivider />
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
