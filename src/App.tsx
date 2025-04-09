import { useState, useEffect } from 'react';
import { Code2, Briefcase, Mail, Github, Linkedin, Twitter, Menu, X, Download, GraduationCap as Graduation, Star, User, MessageSquare, BookOpen, Award, Heart } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 border-b border-blue-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-blue-900">
              JM
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-blue-600 hover:text-blue-800 transition-colors">About</a>
              <a href="#skills" className="text-blue-600 hover:text-blue-800 transition-colors">Skills</a>
              <a href="#portfolio" className="text-blue-600 hover:text-blue-800 transition-colors">Portfolio</a>
              <a href="#experience" className="text-blue-600 hover:text-blue-800 transition-colors">Experience</a>
              <a href="#blog" className="text-blue-600 hover:text-blue-800 transition-colors">Blog</a>
              <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">Contact</a>
              
              <div className="flex items-center space-x-4 ml-8 border-l border-blue-100 pl-8">
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-4 space-y-3 bg-white border-t border-blue-100">
            <a href="#about" className="block text-blue-600 hover:text-blue-800 transition-colors">About</a>
            <a href="#skills" className="block text-blue-600 hover:text-blue-800 transition-colors">Skills</a>
            <a href="#portfolio" className="block text-blue-600 hover:text-blue-800 transition-colors">Portfolio</a>
            <a href="#experience" className="block text-blue-600 hover:text-blue-800 transition-colors">Experience</a>
            <a href="#blog" className="block text-blue-600 hover:text-blue-800 transition-colors">Blog</a>
            <a href="#contact" className="block text-blue-600 hover:text-blue-800 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
  className={`pt-16 transition-opacity duration-1000 bg-cover bg-center relative ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
  style={{ backgroundImage: "url('./bg.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative container mx-auto px-6 py-10 md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">
    
    {/* Texte */}
    <div className="text-white space-y-8 md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        Jemima Mukanza
        <span className="block text-2xl text-blue-300 mt-3">Full Stack Developer</span>
      </h1>
      <p className="text-lg max-w-md text-blue-100 mx-auto md:mx-0">
        Crafting beautiful and functional web experiences with passion and precision.
      </p>
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        <a 
          href="#contact" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
        <a 
          href="./cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-blue-300 text-blue-300 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download CV
        </a>
      </div>
    </div>

    {/* Image */}
    <div className="relative group md:w-1/2">
      <img 
        src="./me.jpeg" 
        alt="Profile" 
        className="rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover mx-auto border-8 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-3xl scale-110 -z-10"></div>
    </div>
    
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { name: 'React/Next.js', level: 90 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'Node.js', level: 80 },
                  {name:'Adonis.js', level:80},
                  { name: 'SQL/NoSQL', level: 75 },
                  
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-700">{skill.name}</span>
                      <span className="text-blue-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full">
                      <div 
                        className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Problem Solving',
                  'Team Leadership',
                  'Communication',
                  'Project Management',
                  'Agile Methodology',
                  'Time Management'
                ].map((skill) => (
                  <div key={skill} className="bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'journees informatiques',
                description: 'A dynamic event platform showcasing tech innovations, conferences, and workshops during the Computer Science Days.',
                tech: ['html', 'espress','Tailwind.css'],
                image: './JI.png',
                link: '/projects/journees-informatiques',
                status: 'Completed'
              },
              {
                title: 'Task Management App',
                description: 'Collaborative project management tool with real-time updates',
                tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=600&h=400',
                link: '/projects/journees-informatiques',
                status: 'In Progress' // ou 'Completed'
              },
              {
                title: 'solution of safety',
                description: 'A full-featured online store with real-time inventory management',
                tech: ['React', 'tsilwind.css'],
                image: './s&s.png',
                link: '',
                status: 'In Progress' // ou 'Completed'
              },
              {
                title: 'Dream House',
                description: 'Discover and manage real estate properties effortlessly with Dream House – your smart solution for buying, selling, and renting homes in the DRC.',
                tech: ['React', 'Adonis.js', 'Postgres'],
                image: './DreamHouse.jpeg',
                link: 'https://jemimamukanzaportfolio.vercel.app/',
                status: 'In Progress' // ou 'Completed'
              },
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-blue-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex justify-between align-middle items-center'>
                  <p className="text-sm text-gray-500 font-medium mb-2">
                    Status: <span className={project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}>
                    {project.status}
                    </span>
                  </p>
                  <a href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    View Project <Code2 className="w-4 h-4 ml-2" />
                  </a>

                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Experience & Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">Senior Full Stack Developer</h3>
                    <p className="text-blue-600">Tech Solutions Inc. • 2020 - Present</p>
                    <p className="text-blue-700 mt-2">
                      Led development of enterprise web applications, mentored junior developers, and implemented CI/CD pipelines.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <Graduation className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">MSc in Computer Science</h3>
                    <p className="text-blue-600">Tech University • 2018 - 2020</p>
                    <p className="text-blue-700 mt-2">
                      Specialized in Web Technologies and Distributed Systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'AWS Certified Developer', date: '2023' },
                  { name: 'Google Cloud Professional', date: '2022' }
                ].map((cert) => (
                  <div key={cert.name} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                    <Award className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-blue-900">{cert.name}</p>
                      <p className="text-sm text-blue-600">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "John's technical expertise and problem-solving skills are exceptional. He consistently delivers high-quality solutions.",
                author: "Sarah Johnson",
                position: "Project Manager"
              },
              {
                text: "Working with John was a great experience. His attention to detail and commitment to quality are outstanding.",
                author: "Mike Chen",
                position: "Tech Lead"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <MessageSquare className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-blue-700 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-blue-900">{testimonial.author}</p>
                  <p className="text-blue-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "The Future of Web Development",
                excerpt: "Exploring upcoming trends and technologies in web development",
                date: "Mar 15, 2024"
              },
              {
                title: "Optimizing React Performance",
                excerpt: "Best practices for building fast and efficient React applications",
                date: "Mar 10, 2024"
              },
              {
                title: "Modern CSS Techniques",
                excerpt: "Advanced CSS features and their practical applications",
                date: "Mar 5, 2024"
              }
            ].map((post, index) => (
              <div key={index} className="bg-blue-50 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-sm text-blue-600 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h3>
                  <p className="text-blue-700 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
                    Read More <Code2 className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-blue-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-blue-700 mb-2">Message</label>
              <textarea 
                id="message"
                placeholder="Your Message" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;