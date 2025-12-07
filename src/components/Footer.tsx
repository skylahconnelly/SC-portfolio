export function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 flex items-center gap-2">
            Made with 
            <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            by Skylah Connelly
          </p>
          <p className="text-slate-500">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
