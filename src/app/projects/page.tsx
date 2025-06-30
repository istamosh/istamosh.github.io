import { PROJECT_DETAILS } from '@/data/projectDetails';
import Link from 'next/link';
import { pt_sans } from '@/app/fonts';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${pt_sans.className}`}>
            Projects
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Explore my portfolio of web development projects, from full-stack applications 
            to API systems and modern frontend solutions.
          </p>
          <Link 
            href="/#projects"
            className="btn btn-outline btn-sm mt-4"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_DETAILS.map((project) => (
            <div key={project.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="card-body">
                <h2 className={`card-title text-xl ${pt_sans.className}`}>
                  {project.title}
                </h2>
                <p className="text-sm text-base-content/80 line-clamp-3">
                  {project.description}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex gap-2">
                    {project.techStack?.slice(0, 3).map((tech) => (
                      <div key={tech} className="badge badge-outline badge-sm">
                        {tech}
                      </div>
                    ))}
                    {project.techStack && project.techStack.length > 3 && (
                      <div className="badge badge-outline badge-sm">
                        +{project.techStack.length - 3}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
