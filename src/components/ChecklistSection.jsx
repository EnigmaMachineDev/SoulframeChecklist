import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import { gameData, getSectionItemIds, getCategoryItemIds } from '../data/gameData';
import ProgressBar from './ProgressBar';

function DualCheckItem({ item, isChecked, toggle }) {
  const collectedId = `${item.id}:collected`;
  const leveledId = `${item.id}:leveled`;
  const collected = isChecked(collectedId);
  const leveled = isChecked(leveledId);
  const allDone = collected && leveled;
  const wikiSlug = encodeURIComponent(item.name).replace(/%20/g, '_');

  return (
    <div
      className={`flex items-center gap-3 px-3 py-1.5 rounded transition-colors group ${
        allDone ? 'text-sf-muted' : 'text-sf-text hover:bg-sf-hover'
      }`}
    >
      <span className={`flex-1 text-sm ${allDone ? 'line-through opacity-50' : ''}`}>
        {item.name}
      </span>
      <div className="flex items-center gap-4 shrink-0">
        <label className="flex items-center gap-1.5 cursor-pointer" title="Collected">
          <input
            type="checkbox"
            checked={collected}
            onChange={() => toggle(collectedId)}
          />
          <span className="text-[10px] text-sf-muted select-none hidden sm:inline">Collected</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer" title="Leveled">
          <input
            type="checkbox"
            checked={leveled}
            onChange={() => toggle(leveledId)}
          />
          <span className="text-[10px] text-sf-muted select-none hidden sm:inline">Leveled</span>
        </label>
      </div>
      <a
        href={`https://wiki.avakot.org/${wikiSlug}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="opacity-0 group-hover:opacity-100 text-sf-dim hover:text-sf-bright transition-opacity"
        title="View on Wiki"
      >
        <ExternalLink size={12} />
      </a>
    </div>
  );
}

function SingleCheckItem({ item, isChecked, toggle }) {
  const checked = isChecked(item.id);
  const wikiSlug = encodeURIComponent(item.name).replace(/%20/g, '_');

  return (
    <label
      className={`flex items-center gap-3 px-3 py-1.5 rounded cursor-pointer transition-colors group ${
        checked ? 'text-sf-muted' : 'text-sf-text hover:bg-sf-hover'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggle(item.id)}
      />
      <span className={`flex-1 text-sm ${checked ? 'line-through opacity-50' : ''}`}>
        {item.name}
      </span>
      <a
        href={`https://wiki.avakot.org/${wikiSlug}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="opacity-0 group-hover:opacity-100 text-sf-dim hover:text-sf-bright transition-opacity"
        title="View on Wiki"
      >
        <ExternalLink size={12} />
      </a>
    </label>
  );
}

function CategoryGroup({ sectionKey, categoryKey, category, isChecked, toggle, getCheckedCount, checkAll, resetSection, trackLevel }) {
  const [isOpen, setIsOpen] = useState(true);
  const categoryIds = getCategoryItemIds(sectionKey, categoryKey);
  const checkedCount = getCheckedCount(categoryIds);
  const allDone = checkedCount === categoryIds.length;

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-sf-card hover:bg-sf-hover border border-sf-border transition-colors group"
      >
        {isOpen ? (
          <ChevronDown size={16} className="text-sf-muted" />
        ) : (
          <ChevronRight size={16} className="text-sf-muted" />
        )}
        {allDone ? (
          <CheckCircle2 size={16} className="text-sf-bright" />
        ) : (
          <Circle size={16} className="text-sf-dim" />
        )}
        <span className="flex-1 text-left text-sm font-semibold text-sf-text">
          {category.label}
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          allDone ? 'bg-sf-accent/40 text-sf-bright' : 'bg-sf-bg text-sf-muted'
        }`}>
          {checkedCount}/{categoryIds.length}
        </span>
      </button>

      {isOpen && (
        <div className="mt-1 ml-2 pl-4 border-l border-sf-border/50">
          <div className="flex gap-2 mb-2 mt-2">
            <button
              onClick={() => checkAll(categoryIds)}
              className="text-[10px] text-sf-muted hover:text-sf-bright px-2 py-0.5 rounded bg-sf-bg hover:bg-sf-hover border border-sf-border transition-colors"
            >
              Check All
            </button>
            <button
              onClick={() => resetSection(categoryIds)}
              className="text-[10px] text-sf-muted hover:text-red-400 px-2 py-0.5 rounded bg-sf-bg hover:bg-red-950/20 border border-sf-border transition-colors"
            >
              Uncheck All
            </button>
          </div>
          {trackLevel && (
            <div className="flex items-center gap-3 px-3 py-1 text-[10px] text-sf-dim uppercase tracking-wider">
              <span className="flex-1" />
              <div className="flex items-center gap-4 shrink-0">
                <span className="w-[72px] text-center hidden sm:block">Collected</span>
                <span className="w-[56px] text-center hidden sm:block">Leveled</span>
              </div>
              <span className="w-3" />
            </div>
          )}
          {category.items.map((item) =>
            trackLevel ? (
              <DualCheckItem key={item.id} item={item} isChecked={isChecked} toggle={toggle} />
            ) : (
              <SingleCheckItem key={item.id} item={item} isChecked={isChecked} toggle={toggle} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function ChecklistSection({ sectionKey, isChecked, toggle, getCheckedCount, checkAll, resetSection }) {
  const section = gameData[sectionKey];
  if (!section) return null;

  const sectionIds = getSectionItemIds(sectionKey);
  const checkedCount = getCheckedCount(sectionIds);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-sf-bright tracking-wide">{section.label}</h2>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex-1">
            <ProgressBar current={checkedCount} total={sectionIds.length} size="md" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => checkAll(sectionIds)}
              className="text-xs text-sf-muted hover:text-sf-bright px-3 py-1 rounded bg-sf-card hover:bg-sf-hover border border-sf-border transition-colors"
            >
              Check All
            </button>
            <button
              onClick={() => resetSection(sectionIds)}
              className="text-xs text-sf-muted hover:text-red-400 px-3 py-1 rounded bg-sf-card hover:bg-red-950/20 border border-sf-border transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {Object.entries(section.categories).map(([catKey, category]) => (
          <CategoryGroup
            key={catKey}
            sectionKey={sectionKey}
            categoryKey={catKey}
            category={category}
            isChecked={isChecked}
            toggle={toggle}
            getCheckedCount={getCheckedCount}
            checkAll={checkAll}
            resetSection={resetSection}
            trackLevel={!!section.trackLevel}
          />
        ))}
      </div>
    </div>
  );
}
