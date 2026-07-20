import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data';
import usePageMeta from '../hooks/usePageMeta';

const ProjectsPage = () => {
  const { t } = useTranslation();
  usePageMeta('meta.projects.title', 'meta.projects.description');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">{t('projectsPage.title')}</h1>
          <p className="section-subtitle">{t('projectsPage.subtitle')}</p>

          {!projects || projects.length === 0 ? (
            <p className="text-center text-theme-text-secondary">{t('projectsPage.noProjects')}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  <figure className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={t(`projects.items.${project.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="badge badge-lg absolute top-3 left-3 bg-timbercraft-green text-white border-none font-semibold">
                      {t(`projects.items.${project.id}.category`)}
                    </span>
                  </figure>
                  <div className="card-body p-6">
                    <h3 className="card-title text-xl text-theme-text">
                      {t(`projects.items.${project.id}.title`)}
                    </h3>
                    <p className="text-theme-text-secondary">
                      {t(`projects.items.${project.id}.description`)}
                    </p>
                    <div className="card-actions">
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-theme-primary-text font-semibold hover:underline inline-flex items-center gap-1 mt-2 group/link"
                      >
                        {t('common.viewMore')} <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
