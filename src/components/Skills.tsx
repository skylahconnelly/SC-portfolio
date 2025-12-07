import { useRef, useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import weatherAppScreenshot from 'figma:asset/f1b397369547e8d3432aca6e36f7cf84bead8028.png';
import daVinciVisionImage from 'figma:asset/fe578e40c0b63e1c000e44d381f3245e5a59b1d6.png';

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleWeatherAppClick = () => {
    window.history.pushState({}, '', '/weather-app');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section
      id="work"
      ref={ref}
      className="py-32 bg-gradient-to-b from-white to-slate-50/30"
    >
      <div className="container mx-auto px-6">
        <div className={`mb-16 max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[rgb(15,22,43)] mb-4 font-[Questrial] font-bold text-[24px]">Featured Work</div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Weather App',
              company: 'Duke University',
              description: 'A weather forecast application with real-time data and interactive UI design. Fun Fact: this  is the first website I ever made!',
              tags: ['GitHub', 'Web Development', 'UI Design'],
              image: weatherAppScreenshot,
              gradient: 'from-sky-500/10 to-blue-500/10',
              link: 'https://weathapp-sc.vercel.app/',
            },
            {
              title: 'dV5 Vision Advancement',
              company: 'Intuitive Surgical',
              description: 'Leading HF activities for next-gen surgical vision systems. Come back after our product releases to get a behind the scenes view of my work.',
              tags: ['Usability Testing', 'IEC 62366-1', 'Medical Robotics'],
              image: daVinciVisionImage,
              gradient: 'from-blue-500/10 to-purple-500/10',
              link: 'https://www.intuitive.com/en-us/products-and-services/da-vinci/vision',
            },
          ].map((project, index) => (
            <div
              key={project.title}
              className="group transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              {/* Image */}
              <div 
                className={`relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br ${project.gradient} mb-6 ${index === 0 ? 'hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:scale-[1.02]' : 'hover:scale-[1.02]'} transition-all duration-300`}
                onClick={() => index === 0 && handleWeatherAppClick()}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className={`absolute inset-0 bg-slate-900/85 ${index === 1 ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'} transition-all duration-300 flex items-center justify-center ${index === 0 ? 'cursor-pointer' : ''}`}>
                  {index === 1 && (
                    <div className="text-white text-[32px] font-bold">Coming Soon</div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-slate-500 mb-2">{project.company}</div>
                <h3 
                  className={`text-slate-900 mb-3 group-hover:text-blue-600 transition-colors ${index === 0 ? 'cursor-pointer' : ''}`}
                  onClick={() => index === 0 && handleWeatherAppClick()}
                >
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-50 rounded-full text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-slate-700 ${index === 1 ? '' : 'hover:text-slate-900 group/btn hover:translate-x-1'} transition-transform`}
                >
                  <span>{index === 1 ? 'Details Coming 2027' : 'Explore App'}</span>
                  {index !== 1 && (
                    <svg className={`w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}