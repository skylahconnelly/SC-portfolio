import { useRef, useEffect, useState } from 'react';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

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

  const socialLinks = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      label: 'Email', 
      href: 'mailto:hello@skylahconnelly.com' 
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/skylah-connelly/' 
    },
  ];

  return (
    <section id="contact" className="py-32 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-slate-600 mb-4 text-[20px] font-[Questrial]">Get In Touch</div>
          <h2 className="text-slate-900 mb-6 font-bold">Let&apos;s Chat About UX and Risk.</h2>
          
          <p className="text-slate-700 mb-12">
            I&apos;m passionate about advancing medical device innovation through human-centered design.
            Whether you&apos;d like to discuss human factors engineering, collaboration opportunities, 
            or coffee shops recs (east & west coast!), feel free to reach out!
          </p>

          <a
            href="mailto:hello@skylahconnelly.com"
            className="inline-block px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all mb-12 hover:scale-105 active:scale-95"
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            {isEmailHovered ? 'skylahc@gmail.com' : 'Send Me a Message'}
          </a>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-slate-700 hover:bg-slate-900 hover:text-white transition-all shadow-sm hover:-translate-y-1"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)'
                }}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}