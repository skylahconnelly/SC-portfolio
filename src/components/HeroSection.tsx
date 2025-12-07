export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[rgb(76,89,255)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgb(255,112,247)] rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="text-slate-600 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi there, my name is
          </div>
          
          <h1 className="text-slate-900 mb-6 text-6xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="font-bold text-[rgb(15,22,43)] text-[48px] font-[Questrial]">Skylah Connelly</span>
          </h1>
          
          <p className="text-slate-700 max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            I&apos;m a Human Factors Engineer and I love to create safe, intuitive medical devices to empower
            our healthcare heroes. Let&apos;s chat about optimizing user experience while minimizing risk.            
          </p>
          
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <button
              onClick={() => handleScrollToSection('experience')}
              className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_8px_30px_rgba(15,22,43,0.4)] shadow-lg"
            >
              View Experience
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => handleScrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-slate-600 transition-all animate-bounce-slow hover:scale-110"
        aria-label="Scroll to about section"
      >
        <svg 
          className="w-6 h-6 text-slate-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}