import React from 'react';
import { Project } from './types';
import ProjectCard from './components/ProjectCard';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <header className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mosan VibeCoding Project
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            학생들이 만든 바이브코딩 결과물들을 모아서 한번에 볼 수 있는 웹페이지입니다.
          </p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <footer className="text-center mt-16 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Vibecoding. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;