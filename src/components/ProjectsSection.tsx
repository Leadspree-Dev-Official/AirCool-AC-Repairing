import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/acData';
import { ProjectItem } from '../types';
import { MapPin, Calendar, Award, ExternalLink, CheckCircle } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'emergency'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Banner with Technician & Dark Gradient overlay matching reference */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Technician work background"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-400">
              Our Recent Projects
            </span>
            <span className="w-6 h-0.5 bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Completed Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light">
            Take a look at how our certified HVAC technicians restore peak cooling performance in homes, clinics, and business towers.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Residential Cooling', value: 'residential' },
              { label: 'Commercial Towers', value: 'commercial' },
              { label: 'Emergency Breakdowns', value: 'emergency' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                  filter === tab.value
                    ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/30'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Projects Grid - matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-orange-500/60 shadow-lg transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Photo Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-orange-500/90 backdrop-blur-sm text-white shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Quick Action Button overlay */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Info Snippet */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900/90">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1.5">
                    <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-orange-400 font-medium">{project.stats}</span>
                  <span className="text-slate-500">{project.completionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">Have an AC breakdown or new installation project?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Get a free on-site evaluation and transparent quote in under 5 minutes.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/25 transition-all whitespace-nowrap cursor-pointer hover:scale-105"
          >
            Request Free Inspection
          </button>
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 w-full">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center font-bold"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-orange-500 text-white mb-2 inline-block">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-lg font-bold font-display">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>{selectedProject.completionDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-orange-300 font-semibold">{selectedProject.stats}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Client Verdict &amp; Performance
                </h4>
                <p className="text-sm text-slate-200 italic bg-slate-800/60 p-3.5 rounded-lg border border-slate-800">
                  &ldquo;{selectedProject.clientFeedback}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuoteModal();
                  }}
                  className="px-5 py-2.5 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md transition-all"
                >
                  Book Similar Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
