import {profile} from "../data/profile.ts";

export const About = () => {
    return (
        <section id="about" className="bg-charcoal px-8 py-32 border-t border-graphite-light ">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold mt-4 text-paper mb-20">
                    About Me
                </h2>

                <div className="grid lg:grid-cols-2 gap-24">
                    {/*left side of the about section*/}
                    <div>
                        <p className="text-paper text-2xl leading-relaxed mb-8">
                            I'm a Computer Science student at the National University of Singapore
                            who enjoys building thoughtful, reliable and user-focused software.
                        </p>

                        <div className="space-y-6 text-graphite-light leading-8 text-lg">
                            {profile.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/*right side of the about section*/}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-sanguine uppercase tracking-[0.2em] text-sm mb-4">
                                Education
                            </h3>

                            <p className="text-paper font-semibold">
                                National University of Singapore
                            </p>

                            <p className="text-graphite-light">
                                Bachelor of Computing (Computer Science)
                            </p>

                            <p className="text-graphite-light">
                                Minor: Interactive Media Development
                            </p>

                            <p className="text-graphite-light">
                                Aug 2023 – May 2027
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sanguine uppercase tracking-[0.2em] text-sm mb-4">
                                Focus Areas
                            </h3>

                            <ul className="space-y-2 text-graphite-light">
                                <li>Software Engineering</li>
                                <li>Full Stack Development</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sanguine uppercase tracking-[0.2em] text-sm mb-4">
                                Currently
                            </h3>

                            <p className="text-paper font-semibold">
                                Frontend Engineering Intern
                            </p>
                            <p className="text-graphite-light">
                                Power Instruments pte ltd
                            </p>

                            <p className="text-paper font-semibold">
                                Available for full-time opportunities
                            </p>
                            <p className="text-graphite-light">
                                June 2027
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}