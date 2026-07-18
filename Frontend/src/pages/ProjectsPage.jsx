import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">Our Projects</h1>
          <p className="section-subtitle">Explore our portfolio of completed projects showcasing our craftsmanship</p>

          {!projects || projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects available</p>
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
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="badge badge-lg absolute top-3 left-3 bg-timbercraft-green text-white border-none font-semibold">
                      {project.category}
                    </span>
                  </figure>
                  <div className="card-body p-6">
                    <h3 className="card-title text-xl text-timbercraft-dark">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="card-actions">
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-timbercraft-green font-semibold hover:underline inline-flex items-center gap-1 mt-2 group/link"
                      >
                        View More <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
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
