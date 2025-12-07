import { ImageWithFallback } from './figma/ImageWithFallback';
import weatherAppScreenshot from 'figma:asset/f1b397369547e8d3432aca6e36f7cf84bead8028.png';
import weatherScreenshot1 from 'figma:asset/312810d4dfee140a2f64f2b56882b8be608dd495.png';
import weatherScreenshot2 from 'figma:asset/b4bca0add11e84b2897df4ec1d8bdd60ca144e1d.png';
import weatherScreenshot3 from 'figma:asset/5089d9469aa7d87e28404d1e86fb075eac24bc70.png';
import weatherScreenshot4 from 'figma:asset/7a49cfbdb10829a17e1700f8e06695e4affa322a.png';
import { GradientDivider } from './GradientDivider';

export function WeatherAppDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation back */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-blue-700 font-medium">Personal Project • Duke University • 2025</span>
          </div>
          
          <h1 className="text-slate-900 mb-6 text-[20px]">Weather App</h1>
          
          <p className="text-slate-600 text-[16px] leading-relaxed mb-8 max-w-3xl">
            A weather forecast application with real-time data and interactive UI design. 
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-slate-500 uppercase tracking-wide mb-6">SKILLS & Technologies</div>
              <div className="flex flex-wrap gap-2">
                {['GitHub', 'Vercel', 'API Integration', 'UI Design', 'Cursor'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-50 rounded-full text-slate-700 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-slate-500 uppercase tracking-wide mb-3">Role</div>
              <p className="text-slate-700">
                Developer & Designer
              </p>
              <div className="text-slate-500 uppercase tracking-wide mt-6 mb-3">Timeline</div>
              <p className="text-slate-700">
                ~2 weeks
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://weathapp-sc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              <span>View Live App</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <button
              onClick={() => {
                const problemSection = document.getElementById('problem-section');
                problemSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full border-2 border-slate-200 hover:border-slate-300 transition-colors"
            >
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <ImageWithFallback
                src={weatherScreenshot1}
                alt="Weather App - Durham Forecast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <ImageWithFallback
                src={weatherScreenshot2}
                alt="Weather App - Multi-City Summary"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <ImageWithFallback
                src={weatherScreenshot3}
                alt="Weather App - 3-Day Forecast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <ImageWithFallback
                src={weatherScreenshot4}
                alt="Weather App - Weather Details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Why I Made It */}
      <section className="px-6 py-16 bg-slate-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-slate-900 mb-6 text-[20px]">Why I Made This</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
              As a student at Duke University, I wanted to learn web development and front-end engineering. I chose to build a weather app because it combined several key learning objectives: working with external APIs, designing an intuitive user interface, and creating something practical that people could actually use.
            </p>
            <p className="text-slate-600 text-[16px] leading-relaxed">
              This project marked my first steps into the world of web development and serves as a point for my to look back at as my career in user experience and interface design grows. It taught me the importance of putting usability first — a principle that now guides my work in medical device development.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Problem & Solution */}
      <section className="px-6 py-16" id="problem-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-slate-900 mb-6 text-[20px]">The Problem It Solves</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
              Most weather apps are cluttered with ads, confusing navigation, or overwhelming amounts of data. I wanted to create something clean and simple - an app that gives you the weather information you need at a glance, without the noise.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">Clean Interface</h3>
                <p className="text-slate-600">
                  A minimalist design that puts weather data front and center, making it easy to read at a glance.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">Real-Time Data</h3>
                <p className="text-slate-600">
                  Integration with weather APIs to provide accurate, up-to-date forecast information.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">Responsive Design</h3>
                <p className="text-slate-600">
                  Works seamlessly across desktop and mobile devices for weather on the go.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">Quick Search</h3>
                <p className="text-slate-600">
                  Easy location search functionality to check weather wherever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Key UI Decisions */}
      <section className="px-6 py-16 bg-slate-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-slate-900 mb-6">Key Design Decisions</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-3">Typography & Hierarchy</h3>
              <p className="text-slate-600 leading-relaxed">
                I used large, clear typography for the temperature display, making it the focal point. Secondary information like humidity and wind speed is displayed in a smaller, consistent style to maintain visual hierarchy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-3">Color Choices</h3>
              <p className="text-slate-600 leading-relaxed">
                The color palette was chosen to be calming and weather-appropriate. Blues and light gradients evoke the sky, while maintaining enough contrast for accessibility and readability. Here, I'm maintaing both vibes and usability!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-3">Layout Structure</h3>
              <p className="text-slate-600 leading-relaxed">
                Information is organized in a card-based layout, grouping related data together. This makes it easy to scan and find specific weather details without feeling overwhelmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Learnings */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-slate-900 mb-6 text-[20px]">What I Learned</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
              Building this weather app taught me fundamental principles that I still apply today:
            </p>
            <ul className="space-y-3 text-slate-600 text-[16px]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>How to work with external APIs and handle asynchronous data</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The importance of creating moments of delight</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>User-centered design principles that prioritize clarity and usability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The fundamentals of deployment via GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-slate-50/50">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-slate-600 text-[18px] mb-8">
            Experience the weather app in action and see how it works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://weathapp-sc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              <span>View Live App</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full border border-slate-300 hover:border-slate-400 transition-colors"
            >
              <span>Back to Portfolio</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}