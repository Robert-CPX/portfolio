export const sections = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about", },
  { name: "Projects", hash: "#projects", },
  { name: "Skills", hash: "#skills", },
  { name: "Experience", hash: "#experience", },
  { name: "Contact", hash: "#contact", },
] as const;

export const aboutme = "I am a software engineer with a passion for building things. I am currently working at a startup called <a href='https://www.heyhi.sg/' target='_blank'>HeyHi</a> as a full-stack developer. I am also a part-time student at <a href='https://www.sutd.edu.sg/' target='_blank'>SUTD</a> pursuing a degree in Information Systems Technology and Design. I am interested in building products that solve real-world problems and have a positive impact on people's lives. I am also interested in learning more about the intersection between technology and business. In my free time, I enjoy playing basketball, reading, and watching movies."


export const projects = [
  { title: "sumz", description: "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries", tags: ["openai", 'react.js', 'typescript'], image: "/projects/sumz.png" },
  { title: "devoverflow", description: "a stackoverflow-like project with modern design", tags: ["next.js", 'tailwindcss', 'figma', 'mongodb'], image: "/projects/devoverflow.png" },
  { title: "flow name service", description: "A name service build on Flow", tags: ["blockchain", "cadence", "flow", "next.js"], image: "/projects/flow.png" },
  { title: "inkgram", description: "a instagram-like app", tags: ['next.js', 'tailwindcss', 'appwrite'], image: "/projects/snapgram.png" },
]

export const skills = [
  'Next.js', 'React.js', 'TypeScript', 'Swift', 'TailwindCSS', 'Node.js', 'react-query', 'MongoDB', 'GraphQL', 'WebSocket',
] as const;