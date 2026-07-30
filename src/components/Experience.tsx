import { experience } from "../data/experience.ts";

export const Experience = () => {
    return (
        <section id="experience" className="bg-charcoal px-8 py-32 border-t border-graphite-light">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-5xl font-bold mt-2 text-paper">
                        Experience
                    </h2>
                    <p className="text-graphite-light leading-8 text-lg mt-2">
                        Work experience and internships I've had.
                    </p>
                </div>

                {/*experience cards*/}
                    <div className="relative pl-8 space-y-8">
                        <div className="absolute left-1.75 top-2 bottom-2 w-px bg-graphite" />
                        {experience.map((entry, index) => (
                            <div key={index} className="relative">
                                <div className="text-xs font-mono text-graphite-light uppercase tracking-wide">
                                    {entry.period}
                                </div>
                                <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-sanguine" />
                                <h3 className="text-xl font-bold text-paper">{entry.title}</h3>
                                <p className="text-graphite-light">{entry.company}</p>

                                <ul className="space-y-1.5 mt-2">
                                    {entry.points.map((point, i) => (
                                        <li key={i} className="text-sm text-graphite-light">
                                            - {point}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}