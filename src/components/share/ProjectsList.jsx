"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from "../ui/loading";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectsList = ({ theme }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { language } = useLanguage();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                
                // Use API route to get project list dynamically with language
                const response = await fetch(`/api/projects?lang=${language}`);
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data.projects || []);
                } else {
                    throw new Error('Failed to fetch projects');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [language]);

    const handleProjectClick = (projectId) => {
        router.push(`/project/${projectId}`);
    };

    if (loading) {
        return (
            <div className="flex justify-center py-4">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-4 text-gray-600 dark:text-gray-400">
                No projects found
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="text-center py-4 text-gray-600 dark:text-gray-400">
                No projects found
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => handleProjectClick(project.id)}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                              rounded-xl p-4 sm:p-5
                              transition-all duration-300 shadow-md hover:shadow-xl 
                              hover:-translate-y-1 hover:scale-[1.01] cursor-pointer
                              border border-gray-200 dark:border-gray-700
                              hover:border-blue-400 dark:hover:border-blue-500
                              hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20"
                >
                    {/* Project Name */}
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-white 
                                  group-hover:text-blue-600 dark:group-hover:text-blue-400 
                                  transition-colors duration-300">
                        {project.name}
                    </h4>
                    
                    {/* Project Tagline */}
                    {project.tagline && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed
                                      overflow-hidden"
                           style={{
                             display: '-webkit-box',
                             WebkitLineClamp: 2,
                             WebkitBoxOrient: 'vertical'
                           }}>
                            {project.tagline}
                        </p>
                    )}
                    
                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;
