
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isReady = project.projectUrl && project.thumbnailUrl;
  const cardContent = (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="relative aspect-video bg-gray-700 flex items-center justify-center">
        {project.thumbnailUrl ? (
          <img src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {!isReady && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
            개발중
          </div>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
        <p className="mt-2 text-gray-400 flex-grow">{project.description}</p>
        <div className="mt-auto pt-4">
            <div className={`w-full text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${isReady ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>
            프로젝트 보기
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              제작자: {project.author}
            </p>
        </div>
      </div>
    </div>
  );

  if (isReady) {
    return (
      <a href={project.projectUrl!} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return <div>{cardContent}</div>;
};

export default ProjectCard;