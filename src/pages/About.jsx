import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function About() {
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

        <h1 className="text-3xl font-bold text-sf-bright tracking-widest mb-6">About</h1>

        <div className="space-y-6 text-sm leading-relaxed font-sans">
          <p>
            <strong className="text-sf-bright">Soulframe Progress Tracker</strong> is a free, community-made checklist tool
            designed to help players track their journey through the world of Midrath in{' '}
            <a
              href="https://www.soulframe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sf-bright underline hover:text-sf-green transition-colors"
            >
              Soulframe
            </a>
            , the upcoming free-to-play MMORPG by Digital Extremes.
          </p>

          <p>
            Whether you're chasing every fable, forging every weapon, or collecting every cosmetic, this tracker
            keeps your progress organized in one place. All progress is saved locally in your browser &mdash; nothing
            is sent to any server.
          </p>

          <h2 className="text-xl font-bold text-sf-bright tracking-wider pt-4">Features</h2>
          <ul className="list-disc list-inside space-y-1 text-sf-text">
            <li>Track fables (quests), weapons, armour sets, pacts, runes, locations, and cosmetics</li>
            <li>Per-section and overall progress bars</li>
            <li>Export and import your progress for backup or sharing</li>
            <li>Fully client-side &mdash; your data stays on your device</li>
          </ul>

          <h2 className="text-xl font-bold text-sf-bright tracking-wider pt-4">Data Sources</h2>
          <p>
            Game data is sourced from community wikis and resources, primarily{' '}
            <a
              href="https://wiki.avakot.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sf-bright underline hover:text-sf-green transition-colors"
            >
              wiki.avakot.org
            </a>
            . This tracker is a fan-made project and is not affiliated with or endorsed by Digital Extremes.
          </p>

          <h2 className="text-xl font-bold text-sf-bright tracking-wider pt-4">Created By</h2>
          <p>
            Built by <strong className="text-sf-bright">EnigmaMachineDev</strong>. If you find this tool helpful, consider{' '}
            <a
              href="https://buymeacoffee.com/EnigmaMachineDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sf-bright underline hover:text-sf-green transition-colors"
            >
              buying me a coffee
            </a>
            .
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
