import { About, Contact, Experience, Hero, Projects, Skills, Tabbar } from './components'

const Home = () => {
  return (
    <div>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className='app'>
        <Tabbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default Home
