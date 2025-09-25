'use client';

import Image from 'next/image';

interface ProjectGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

export default function ProjectGallery({ screenshots, projectTitle }: ProjectGalleryProps) {
  const openModal = (index: number) => {
    const modal = document.getElementById(`gallery-modal-${index}`) as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center font-sans">
        Project Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <Image
              src={screenshot}
              alt={`${projectTitle} - Screenshot ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal dialogs for each image */}
      {screenshots.map((screenshot, index) => (
        <dialog key={`modal-${index}`} id={`gallery-modal-${index}`} className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">✕</button>
            </form>
            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src={screenshot}
                alt={`${projectTitle} - Screenshot ${index + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="py-4">
              <p className="text-center text-sm text-base-content/70">
                {projectTitle} - Screenshot {index + 1} of {screenshots.length}
              </p>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}
    </div>
  );
}