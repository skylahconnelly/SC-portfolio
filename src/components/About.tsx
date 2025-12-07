import { useRef, useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
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

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'User-Centered Design',
      description: 'Conducts usability testing and human factors research to optimize medical device interfaces',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Regulatory Compliance',
      description: 'Ensures products comply with relevant standards like IEC 62366-1, ISO 13485, and AAMI HE-75',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Validation',
      description: 'Develops comprehensive validation protocols to demonstrate safety and efficacy',
    },
  ];

  return (
    <section id="about" className="py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[rgb(15,22,43)] mb-4 font-[Questrial] font-bold text-[24px]">About Me</div>
          <h2 className="text-slate-900 mb-8 font-[Poppins] not-italic">
            After graduating from Duke University with a degree in Biomedical Engineering, I spent time working in the hematology and orthopedic spaces - my favorite part was always talking to users.
          </h2>
          
          <div className="text-slate-700 space-y-4 mb-12">
            <div className="flex items-center justify-center gap-20 py-8">
              <ImageWithFallback 
                src="https://blackthinktank.duke.edu/sites/blackthinktank.duke.edu/files/styles/square_small/public/images/prattfinal.jpg?h=5273c5c2&itok=eM_eYk7p"
                alt="Duke University Pratt School of Engineering"
                className="h-21 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <ImageWithFallback 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Intuitive_CorpLogoTM_Blue_PNG.png"
                alt="Intuitive Surgical"
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <ImageWithFallback 
                src="https://upload.wikimedia.org/wikipedia/commons/7/77/Stryker_Corporation_logo.svg"
                alt="Stryker"
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <ImageWithFallback 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Siemens_Healthineers_logo.svg/2560px-Siemens_Healthineers_logo.svg.png"
                alt="Siemens Healthineers"
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p>
              I&apos;m currently serving as Human Factors Engineer at Intuitive Surgical where I lead end-to-end human factors 
              and UX development for vision and advanced imaging projects on the da Vinci 5 robotic system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group transition-all duration-700`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="mb-4 text-slate-900">
                  {feature.icon}
                </div>
                <h3 className="text-[rgb(15,22,43)] mb-2 font-[Questrial] text-[20px] font-bold">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}