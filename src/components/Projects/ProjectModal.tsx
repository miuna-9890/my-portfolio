import {useEffect, useRef, useState} from "react";
import type {Project} from "../../data/projects.ts";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal = ({project, onClose}: ProjectModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();

        return () => {
            dialogRef.current?.close();
        };
    }, []);

        return (
            <dialog
                ref={dialogRef}
                onClose={onClose}
                className="m-auto w-[calc(100%-1.5rem)] max-w-5xl max-h-[88vh] overflow-y-auto bg-paper text-charcoal shadow-2xl"            >
                <div className="relative">

                    {/* Close button */}
                    <div className="sticky top-0 z-20 border-b border-graphite-light/30 bg-paper px-6 py-2 sm:px-10">
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-xs uppercase tracking-widest text-sanguine">
                                {project.category}
                            </span>

                            <button
                                type="button"
                                onClick={() => dialogRef.current?.close()}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-graphite transition hover:bg-charcoal hover:text-paper"
                                aria-label="Close project details"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    {/* ================= HEADER ================= */}
                    <header className="border-b border-graphite-light/30 px-6 py-7 sm:px-8 sm:py-8">
                        <div className="pr-10">

                            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                {project.title}
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-graphite sm:text-base">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-row justify-between">

                        {/* Tech stack */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-graphite-light/50 px-2.5 py-1 font-mono text-[11px] text-graphite"
                                    >
                                {tech}
                            </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 group inline-flex items-center gap-2 self-start text-sanguine px-2.5 py-1 text-sm transition hover:text-charcoal"
                                >
                                    View Project
                                    <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                                </a>
                            )}
                        </div>


                    </header>

                    {/* ================= MAIN CONTENT ================= */}
                    <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">

                        {/* Project snapshot */}
                        <div className="grid grid-cols-2 border border-graphite-light/30 sm:grid-cols-2">
                            <div className="border-b border-r border-graphite-light/30 p-4 sm:p-5">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-graphite-light">
                                Context
                            </span>

                                <p className="mt-1.5 text-sm font-semibold">
                                    {project.context}
                                </p>
                            </div>

                            <div className="border-b border-graphite-light/30 p-4 sm:p-5">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-graphite-light">
                                Role
                            </span>

                                <p className="mt-1.5 text-sm font-semibold">
                                    {project.role}
                                </p>
                            </div>
                        </div>

                        {/* ================= VISUAL + CONTENT ================= */}
                        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">

                            {/* Large visual */}
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                <span className="font-mono text-xs uppercase tracking-widest text-sanguine">
                                    Project Visuals
                                </span>

                                    {project.images && project.images.length > 1 && (
                                        <span className="font-mono text-xs text-graphite-light">
                                        {project.images.length} views
                                    </span>
                                    )}
                                </div>

                                <ProjectShowcase project={project} />
                            </div>

                            {/* Contributions */}
                            <div>
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between border-b border-graphite-light/30 py-4">
                                        <div>
                                            <h3 className="mt-1 font-bold">
                                                My Contributions
                                            </h3>
                                        </div>

                                        <span className="text-xl text-sanguine transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                    </summary>

                                    <ul className="space-y-4 py-5">
                                        {project.contributions.map((item, index) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm leading-6 text-graphite"
                                            >
                                            <span className="shrink-0 font-mono text-xs text-sanguine">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </details>

                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between border-b border-graphite-light/30 py-4">
                                        <div>
                                            <h3 className="mt-1 font-bold">
                                                {project.category === "UI/UX Design"
                                                    ? "Design Decisions"
                                                    : "Technical Decisions"}
                                            </h3>
                                        </div>

                                        <span className="text-xl text-sanguine transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                    </summary>

                                    <div className="space-y-5 py-5">
                                        {project.decisions.map((decision) => (
                                            <div
                                                key={decision.title}
                                                className="border-l-2 border-sanguine pl-4"
                                            >
                                                <h4 className="text-sm font-semibold">
                                                    {decision.title}
                                                </h4>

                                                <p className="mt-1 text-sm leading-6 text-graphite">
                                                    {decision.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </details>

                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between border-b border-graphite-light/30 py-4">
                                        <div>
                                            <h3 className="mt-1 font-bold">
                                                {project.category === "UI/UX Design"
                                                    ? "UX Challenges"
                                                    : "Challenges"}
                                            </h3>
                                        </div>

                                        <span className="text-xl text-sanguine transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                    </summary>

                                    <ul className="space-y-4 py-5">
                                        {project.challenges.map((challenge, index) => (
                                            <li
                                                key={challenge}
                                                className="flex gap-3 text-sm leading-6 text-graphite"
                                            >
                                            <span className="shrink-0 font-mono text-xs text-sanguine">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </details>

                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between border-b border-graphite-light/30 py-4">
                                        <div>
                                            <h3 className="mt-1 font-bold">
                                                What I Learned
                                            </h3>
                                        </div>

                                        <span className="text-xl text-sanguine transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                    </summary>

                                    <ul className="space-y-4 py-5">
                                        {project.learned.map((item, index) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm leading-6 text-graphite"
                                            >
                                            <span className="shrink-0 font-mono text-xs text-sanguine">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        );
    };

interface ProjectShowcaseProps {
    project: Project;
}

export const ProjectShowcase = ({ project }: ProjectShowcaseProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = project.images;

    if (!images || images.length === 0) {
        return (
            <div className="flex min-h-[420px] items-center justify-center border border-dashed border-graphite-light/50 bg-charcoal p-8 text-center text-paper">
                <div className="max-w-sm">
                    <span className="font-mono text-xs uppercase tracking-widest text-sanguine">
                        Production Work
                    </span>

                    <p className="mt-4 text-sm leading-6 text-paper/70">
                        Visual details from this project aren't publicly
                        available. The case study focuses on the engineering
                        work, architecture, and implementation decisions.
                    </p>
                </div>
            </div>
        );
    }

    const image = images[currentIndex];

    return (
        <div>
            {/* Main image */}
            <div className="overflow-hidden border border-graphite-light/40 bg-charcoal">
                <img
                    src={image.src}
                    alt={image.caption}
                    className="max-h-[560px] w-full object-contain"
                />
            </div>

            {/* Caption */}
            <div className="mt-3 flex items-start justify-between gap-4">
                <p className="text-xs leading-5 text-graphite">
                    {image.caption}
                </p>

                <span className="shrink-0 font-mono text-xs text-graphite-light">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                </span>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                    {images.map((item, index) => (
                        <button
                            key={item.src}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={`shrink-0 overflow-hidden border-2 transition ${
                                index === currentIndex
                                    ? "border-sanguine"
                                    : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                            aria-label={`View ${item.caption}`}
                        >
                            <img
                                src={item.src}
                                alt=""
                                className="h-16 w-24 object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Previous / next */}
            {images.length > 1 && (
                <div className="mt-3 flex justify-between">
                    <button
                        type="button"
                        onClick={() =>
                            setCurrentIndex(
                                (currentIndex - 1 + images.length) %
                                images.length
                            )
                        }
                        className="font-mono text-xs uppercase tracking-widest text-graphite transition hover:text-sanguine"
                    >
                        ← Previous
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setCurrentIndex(
                                (currentIndex + 1) % images.length
                            )
                        }
                        className="font-mono text-xs uppercase tracking-widest text-graphite transition hover:text-sanguine"
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
};