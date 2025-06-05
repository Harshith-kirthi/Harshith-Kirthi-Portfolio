const Footer = () => {
  return (
    <footer className="border-t border-stone-900 py-6 mt-20 text-center text-sm text-stone-500">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Harshith Kirthi. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4 text-stone-400">
          <a
            href="https://github.com/Harshith-kirthi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/harshithkirthi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="mailto:harshithkirthi05@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <span>|</span>
          <a
            href="https://x.com/Harshith_kirthi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
