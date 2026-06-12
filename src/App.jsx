import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Database,
  BarChart3,
  Table2,
  LineChart,
} from 'lucide-react';
import Contact from './Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', icon: Database },
    { name: 'Pandas', icon: Table2 },
    { name: 'NumPy', icon: Table2 },
    { name: 'Matplotlib', icon: LineChart },
    { name: 'Seaborn', icon: LineChart },
    { name: 'SQL', icon: Database },
    { name: 'Excel', icon: Table2 },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Data Cleaning', icon: LineChart },
    { name: 'EDA', icon: LineChart },
    { name: 'Window Functions', icon: Database },
    { name: 'DAX (Basic)', icon: BarChart3 },
    { name: 'Power Query', icon: Table2 },
  ];

  const projects = [
  {
    title: 'Customer Shopping Behavior Analysis Dashboard',
    image: 'sql.png',
    description:
      'Analyzed 3,900+ customer purchase records across 18 attributes to identify spending behavior, customer segments, subscriptions, and product performance. Performed data cleaning, feature engineering, and SQL analysis using Joins, CTEs, and Window Functions to uncover revenue and customer insights.',
    tech: ['SQL', 'MySQL', 'Python', 'CTEs', 'Window Functions', 'Power BI'],
    github: 'https://github.com/techbydeepak/customer_behavior_analysis',
  },

  {
    title: 'Diwali Sales Analysis',
    image: 'python.png',
    description:
      'Performed Exploratory Data Analysis (EDA) on festive sales data using Python to analyze purchasing behavior across age, gender, occupation, and geography. Created visualizations to identify top-performing states, product categories, and customer trends.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/techbydeepak/Diwali-Sales-Analysis-Python',
  },

  {
    title: 'HR Analytics Dashboard',
    image: 'power.png',
    description:
      'Built an interactive Power BI dashboard analyzing 1,480 employee records to monitor workforce attrition, salary distribution, demographics, and job role trends. Used Power Query and DAX for KPI creation and business insights.',
    tech: ['Power BI', 'Power Query', 'DAX'],
    github: 'https://github.com/techbydeepak/Hr_Analytics_Dashboard_PowerBI',
  },

  {
    title: 'Vrinda Store Sales Data Analysis',
    image: 'excel.png',
    description:
      'Analyzed 31,000+ sales records in Excel using data cleaning, Pivot Tables, Pivot Charts, and slicers to uncover customer behavior, sales trends, demographics, top-performing states, and sales channel performance.',
    tech: [
      'Excel',
      'Pivot Tables',
      'Pivot Charts',
      'VLOOKUP',
      'Slicers',
      'Dashboarding',
    ],
    github: 'https://github.com/techbydeepak/Vrinda_Store_Sales_Data_Analysis_using_Excel',
  },
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-700">
            Data Analyst Portfolio
          </span>

          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === section
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'hover:bg-slate-100'
                }`}
              >
                {section}
              </button>
            ))}
            <a href="https://github.com/techbydeepak" target="_blank">
              <Github />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2">
            {['home', 'about', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 rounded hover:bg-slate-100"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-24 pb-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-900 text-white text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Deepak Rathour
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
          Data Analyst skilled in Python, SQL, Excel, and Power BI, with hands-on experience
          in data cleaning, exploratory analysis, and building clear, insight-driven
          dashboards.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            I am a Data Analyst with hands-on experience working on real-world datasets
            involving data cleaning, exploratory data analysis, and visualization.
            I enjoy transforming raw, unstructured data into meaningful insights that
            support better understanding and decision-making.
            <br /><br />
            I am comfortable working with Python, SQL, Excel, and Power BI, and I focus on
            writing clean queries, organizing data logically, and presenting results
            in a clear and structured way.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-slate-100 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 mb-4 group-hover:scale-110 transition">
                    <Icon size={22} />
                  </div>
                  <p className="font-semibold text-slate-700">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="h-48 bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-indigo-600 font-medium"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;