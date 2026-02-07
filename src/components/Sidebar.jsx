import React from 'react';
import { BookOpen, Sword, Shield, Flame, Sparkles, Map, Palette, RotateCcw, Download, Upload } from 'lucide-react';
import { gameData, getSectionItemIds, getTotalItems } from '../data/gameData';
import ProgressBar from './ProgressBar';

const iconMap = {
  BookOpen,
  Sword,
  Shield,
  Flame,
  Sparkles,
  Map,
  Palette,
};

export default function Sidebar({ activeSection, onSectionChange, getCheckedCount, totalChecked, onResetAll, onExport, onImport }) {
  const totalItems = getTotalItems();

  return (
    <aside className="w-64 bg-sf-panel border-r border-sf-border flex flex-col h-screen sticky top-0">
      <div className="p-4 border-b border-sf-border">
        <h1 className="text-xl font-bold text-sf-bright tracking-wider">Soulframe</h1>
        <p className="text-xs text-sf-muted mt-1 font-sans">Progress Tracker</p>
        <div className="mt-3">
          <ProgressBar current={totalChecked} total={totalItems} size="md" />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {Object.entries(gameData).map(([key, section]) => {
          const Icon = iconMap[section.icon];
          const sectionIds = getSectionItemIds(key);
          const checkedCount = getCheckedCount(sectionIds);
          const isActive = activeSection === key;

          return (
            <button
              key={key}
              onClick={() => onSectionChange(key)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                isActive
                  ? 'bg-sf-accent/30 text-sf-bright border-r-2 border-sf-bright'
                  : 'text-sf-text hover:bg-sf-hover'
              }`}
            >
              {Icon && <Icon size={18} className={isActive ? 'text-sf-bright' : 'text-sf-muted'} />}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{section.label}</div>
                <div className="flex items-center gap-2 mt-1">
                  <ProgressBar current={checkedCount} total={sectionIds.length} size="sm" />
                  <span className="text-[10px] text-sf-muted whitespace-nowrap">
                    {checkedCount}/{sectionIds.length}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-sf-border space-y-1">
        <div className="flex gap-1">
          <button
            onClick={onExport}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs text-sf-muted hover:text-sf-bright hover:bg-sf-hover rounded transition-colors"
          >
            <Download size={14} />
            Export
          </button>
          <button
            onClick={onImport}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs text-sf-muted hover:text-sf-bright hover:bg-sf-hover rounded transition-colors"
          >
            <Upload size={14} />
            Import
          </button>
        </div>
        <button
          onClick={onResetAll}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs text-sf-muted hover:text-red-400 hover:bg-red-950/20 rounded transition-colors"
        >
          <RotateCcw size={14} />
          Reset All Progress
        </button>
      </div>
    </aside>
  );
}
