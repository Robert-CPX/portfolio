import { About, Contact, Experience, Hero, Projects, Skills, Tabbar } from './components'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Tabbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
