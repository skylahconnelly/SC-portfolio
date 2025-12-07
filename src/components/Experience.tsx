import { useRef, useEffect, useState } from 'react';

export function Experience() {
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

  const experiences = [
    {
      company: 'Intuitive Surgical',
      role: 'Human Factors Engineer',
      location: 'Sunnyvale, CA',
      period: 'Mar 2025 – Present',
      responsibilities: [
        'HF lead for vision and advanced imaging projects for the dV5 surgical robotic system.',
        'Conduct rigorous usability evaluations to drive design and inform risk documentation.',
        'Collaborate cross-functionally with design, EE/ME, product management, and regulatory teams',
      ],
      color: 'from-blue-500 to-purple-500',
    },
    {
      company: 'Gilero (Sanner Group)',
      role: 'Human Factors Engineer',
      location: 'Research Triangle, NC',
      period: 'May 2023 – Mar 2025',
      responsibilities: [
        'Led usability assessment activities such as task analysis, URRA, heuristic evaluations, formative/summative testing.',
        'Applied IEC 62366-1, ISO 13485, and AAMI HE-75 standards to ensure regulatory compliance',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Stryker',
      role: 'Market Access & Regulatory Affairs',
      location: 'Mahwah, NJ',
      period: 'May – Aug 2022',
      responsibilities: [
        'Supported 510(k) submissions for orthopedic devices - Triathlon Hinge Knee & MIM Femur.',
        'Implemented eSTAR process improvements to accelerate regulatory submissions.',
        'Collaborated cross-functionally across Product Development, Sterility, Quality, and Marketing.',
      ],
      color: 'from-pink-500 to-yellow-500',
    },
    {
      company: 'Siemens Healthineers',
      role: 'Business Service Excellence Intern',
      location: 'Remote',
      period: 'Jan – May 2022',
      responsibilities: [
        'Analyzed cost and resource allocation data to improve efficiency in hematology systems.',
        'Created executive dashboards in QlikView and Excel for data-driven decision making.',
      ],
      color: 'from-yellow-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className="py-32 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`mb-16 max-w-4xl mx-auto pl-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[rgb(15,22,43)] mb-4 font-[Questrial] font-bold text-[24px]">Career Journey</div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="relative pl-8 pb-12 border-l-2 border-slate-200 last:pb-0 transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
              }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-slate-900 mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-slate-700 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-slate-600 mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-slate-500">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-slate-600 flex items-start gap-2">
                      <span className="text-slate-400">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}