import {projects} from "../data/projects.ts";
import {useRef} from "react";

export const Projects = () => {
    const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
    const scrollRef = useRef<HTMLDivElement>(null);
    const handleScroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = direction === "left" ? -340 : 340;
        scrollRef.current.scrollBy({left: amount, behavior: "smooth"});
    }
    return (
        <section id="projects" className="bg-charcoal px-4 sm:px-8 py-32 border-t border-graphite-light">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-5xl font-bold mt-2 text-paper">
                        Projects
                    </h2>
                    <p className="text-graphite-light leading-8 text-lg mt-2">
                        Some of the projects I've worked on.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => handleScroll("left")} className="hidden sm:block text-paper hover:text-sanguine text-2xl">
                        ←
                    </button>
                    <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-4">
                    {projects.map((project, index) => (
                        <div key={project.title} className={`w-[85vw] sm:w-80 shrink-0 snap-start relative bg-paper p-6 text-charcoal ${tilts[index % tilts.length]} hover:rotate-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg`}>
                            {/*tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-sanguine/70 rotate-3"></div>

                            <span className="font-mono text-xs uppercase tracking-widest text-sanguine">
                                {project.category}
                        </span>
                            <h3 className="text-xl font-bold mt-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-graphite mt-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-graphite-light">
                                    {tech}
                                </span>
                            ))}
                            </div>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group mt-4 inline-flex items-center gap-1 text-sm text-sanguine hover:text-charcoal">
                                    View Project
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                            )}
                        </div>
                    ))}
                    </div>
                    <button onClick={() => handleScroll("right")} className="hidden sm:block text-paper hover:text-sanguine text-2xl">
                        →
                    </button>
                </div>

            </div>

        </section>
    )
}