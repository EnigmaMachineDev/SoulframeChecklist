import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-sf-bg text-sf-text">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-sf-muted hover:text-sf-bright transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Tracker
        </Link>

        <h1 className="text-3xl font-bold text-sf-bright tracking-widest mb-6">Contact</h1>

        <div className="space-y-6 text-sm leading-relaxed font-sans">
          <p>
            Have a question, found a bug, or want to suggest a feature? Feel free to reach out.
          </p>

          <div className="bg-sf-panel border border-sf-border rounded-xl p-6 space-y-4">
            <div>
              <h2 className="text-base font-bold text-sf-bright tracking-wider mb-1">Email</h2>
              <a
                href="mailto:enigmamachinedev@gmail.com"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                enigmamachinedev@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-base font-bold text-sf-bright tracking-wider mb-1">GitHub</h2>
              <a
                href="https://github.com/EnigmaMachineDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                github.com/EnigmaMachineDev
              </a>
            </div>

            <div>
              <h2 className="text-base font-bold text-sf-bright tracking-wider mb-1">Support</h2>
              <a
                href="https://buymeacoffee.com/EnigmaMachineDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                Buy me a coffee
              </a>
            </div>
          </div>

          <p className="text-sf-muted">
            Response times may vary. For bug reports, please include your browser name and a description of the issue.
          </p>
        </div>

        <footer className="mt-16 pt-6 border-t border-sf-border flex flex-wrap gap-4 text-xs text-sf-muted font-sans">
          <Link to="/about" className="hover:text-sf-bright transition-colors">About</Link>
          <Link to="/contact" className="hover:text-sf-bright transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-sf-bright transition-colors">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
}
