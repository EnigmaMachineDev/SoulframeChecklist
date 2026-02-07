import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ChecklistSection from './components/ChecklistSection';
import { useProgress } from './hooks/useProgress';
import { getTotalItems, getAllItemIds } from './data/gameData';

export default function App() {
  const [activeSection, setActiveSection] = useState('fables');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const {
    toggle,
    isChecked,
    getCheckedCount,
    resetAll,
    resetSection,
    checkAll,
    exportProgress,
    importProgress,
    totalChecked,
  } = useProgress();

  const handleResetAll = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    resetAll();
    setShowResetConfirm(false);
  };

  return (
    <div className="flex min-h-screen bg-sf-bg">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 bg-sf-panel border border-sf-border rounded-lg text-sf-text hover:text-sf-bright"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static z-40 transform transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar
          activeSection={activeSection}
          onSectionChange={(key) => {
            setActiveSection(key);
            setSidebarOpen(false);
          }}
          getCheckedCount={getCheckedCount}
          totalChecked={totalChecked}
          onResetAll={handleResetAll}
          onExport={exportProgress}
          onImport={importProgress}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto min-h-screen">
        {/* Header stats */}
        <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-sf-bright tracking-widest pl-10 lg:pl-0">
              Soulframe
            </h1>
            <p className="text-sf-muted text-sm mt-1 font-sans pl-10 lg:pl-0">
              Track your journey through Midrath
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-sf-bright">
              {Math.round((totalChecked / getTotalItems()) * 100)}%
            </div>
            <div className="text-xs text-sf-muted">
              {totalChecked} / {getTotalItems()} items
            </div>
          </div>
        </div>

        <ChecklistSection
          sectionKey={activeSection}
          isChecked={isChecked}
          toggle={toggle}
          getCheckedCount={getCheckedCount}
          checkAll={checkAll}
          resetSection={resetSection}
        />
      </main>

      {/* Reset confirmation modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-sf-panel border border-sf-border rounded-xl p-6 max-w-sm mx-4 shadow-2xl">
            <h3 className="text-lg font-bold text-sf-bright mb-2">Reset All Progress?</h3>
            <p className="text-sf-muted text-sm mb-6">
              This will uncheck all items across every section. This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-sm text-sf-text bg-sf-card border border-sf-border rounded-lg hover:bg-sf-hover transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmReset}
                className="px-4 py-2 text-sm text-red-300 bg-red-950/40 border border-red-900/50 rounded-lg hover:bg-red-950/60 transition-colors"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
