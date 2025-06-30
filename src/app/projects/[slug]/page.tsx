import { PROJECT_DETAILS, getProjectBySlug } from '@/data/projectDetails';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { pt_sans } from '@/app/fonts';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Alfian's Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-5 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl lg:text-6xl font-bold text-base-content mb-4 ${pt_sans.className}`}>
              {project.title}
            </h1>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                Repository
              </a>
              <Link href="/projects" className="btn btn-ghost">
                ← All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Project Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Project Background */}
          <section className="bg-base-200 rounded-lg p-8">
            <h2 className={`text-3xl font-bold mb-6 ${pt_sans.className}`}>
              Project Background & Tech Stack
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-base-content/80 leading-relaxed">
                  {project.detailedBackground.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
                <p className="text-base-content/80 leading-relaxed">
                  {project.detailedBackground.problem}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Objectives</h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                  {project.detailedBackground.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.detailedBackground.techStackDetails.frontend && (
                    <div className="bg-base-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.detailedBackground.techStackDetails.frontend.map((tech) => (
                          <span key={tech} className="badge badge-primary badge-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.detailedBackground.techStackDetails.backend && (
                    <div className="bg-base-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.detailedBackground.techStackDetails.backend.map((tech) => (
                          <span key={tech} className="badge badge-secondary badge-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.detailedBackground.techStackDetails.tools && (
                    <div className="bg-base-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Tools & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.detailedBackground.techStackDetails.tools.map((tech) => (
                          <span key={tech} className="badge badge-accent badge-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.detailedBackground.techStackDetails.deployment && (
                    <div className="bg-base-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Deployment</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.detailedBackground.techStackDetails.deployment.map((tech) => (
                          <span key={tech} className="badge badge-info badge-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="bg-base-200 rounded-lg p-8">
            <h2 className={`text-3xl font-bold mb-6 ${pt_sans.className}`}>
              Methodology & Implementation
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-base-content/80 leading-relaxed">
                  {project.methodology.strategy}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Approach</h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                  {project.methodology.approach.map((approach, index) => (
                    <li key={index}>{approach}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-base-content/80 leading-relaxed">
                  {project.methodology.solution}
                </p>
              </div>

              {project.methodology.metrics && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.methodology.metrics.map((metric, index) => (
                      <div key={index} className="bg-base-100 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Results */}
          <section className="bg-base-200 rounded-lg p-8">
            <h2 className={`text-3xl font-bold mb-6 ${pt_sans.className}`}>
              Results & Output
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                  {project.results.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                  {project.results.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {project.results.impact && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Impact</h3>
                  <p className="text-base-content/80 leading-relaxed">
                    {project.results.impact}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Responsibilities */}
          <section className="bg-base-200 rounded-lg p-8">
            <h2 className={`text-3xl font-bold mb-6 ${pt_sans.className}`}>
              Responsibilities & Scope
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-base-100 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p className="text-sm text-base-content/80">{project.responsibilities.role}</p>
                </div>
                {project.responsibilities.teamSize && (
                  <div className="bg-base-100 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Team Size</h3>
                    <p className="text-sm text-base-content/80">{project.responsibilities.teamSize} members</p>
                  </div>
                )}
                <div className="bg-base-100 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-sm text-base-content/80">{project.responsibilities.duration}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Scope of Work</h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                  {project.responsibilities.scope.map((scope, index) => (
                    <li key={index}>{scope}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="text-center py-8">
            <div className="flex flex-wrap justify-center gap-4">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  View Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                View Repository
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
