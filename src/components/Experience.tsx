import { experience } from "../data/experience.ts";

export const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-charcoal px-8 py-20 border-t border-graphite-light"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section heading */}
                <div className="mb-10">

                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-paper">
                        Experience
                    </h2>

                    <p className="text-graphite-light leading-7 text-base mt-2 max-w-2xl">
                        Where I've built software in the real world.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical timeline line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-graphite" />

                    <div className="space-y-8">
                        {experience.map((entry) => {
                            const isCurrent = entry.period.includes("Present");

                            return (
                                <article
                                    key={`${entry.company}-${entry.period}`}
                                    className="relative pl-8"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                                        <div
                                            className={`h-3 w-3 rounded-full border-2 border-charcoal ${
                                                isCurrent
                                                    ? "bg-sanguine"
                                                    : "bg-graphite"
                                            }`}
                                        />
                                    </div>

                                    {/* Date */}
                                    <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-graphite-light">
                                        {entry.period}
                                    </div>

                                    {/* Experience panel */}
                                    <div className="bg-paper text-charcoal p-5 sm:p-6 shadow-lg transition duration-300 hover:shadow-xl">

                                        {/* Company + Current */}
                                        <div className="flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold tracking-tight">
                                                    {entry.company}
                                                </h3>

                                                <p className="mt-0.5 text-sm font-semibold text-sanguine">
                                                    {entry.title}
                                                </p>
                                            </div>

                                            {isCurrent && (
                                                <span className="inline-flex items-center gap-2 border border-sanguine/40 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-sanguine">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-sanguine animate-pulse" />
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Divider */}
                                        <div className="my-4 h-px bg-graphite-light/30" />

                                        {/* Technologies */}
                                        <div className="mb-4">
                                            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-graphite-light">
                                                Technologies
                                            </p>

                                            <div className="flex flex-wrap gap-1.5">
                                                {entry.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="border border-graphite-light/50 px-2 py-0.5 font-mono text-sm text-graphite"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <div>
                                            <ul className="space-y-1.5">
                                                {entry.points.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-2.5 text-xs leading-5 text-graphite"
                                                    >
                                                        <span className="mt-1.75 h-1.5 w-1.5 shrink-0 bg-sanguine" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};