import { profile } from '../data/profile'
import portrait from '../assets/portrait.png'
import artwork1 from '../assets/artwork1.png'
import artwork2 from '../assets/artwork2.png'
import artwork3 from '../assets/artwork3.png'

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen bg-charcoal flex items-center px-8">
            <div className="max-w-6xl mx-auto w-full">

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/*Left side of the hero section*/}
                    <div>

                        <p className=" text-sanguine uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                            {profile.role }
                        </p>

                        <h1 className="text-6xl md:text-7xl font-bold text-paper leading-none">
                            {profile.name}
                        </h1>

                        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-graphite-light max-w-2xl">
                            {profile.tagline}
                        </p>
                        <div className="flex gap-4 mt-12">
                            <a href={`mailto:${profile.email}`} className="inline-block bg-sanguine hover:bg-sanguine-dim text-paper font-bold py-3 px-6 rounded-md shadow-lg transition duration-300">
                                Get in touch
                            </a>
                            <a href="#projects" className="border border-graphite-light, hover:border-paper hover:text-paper text-graphite-light py-3 px-6 rounded shadow-lg transition duration-300">
                                View Projects
                            </a>
                            <a
                                href="/resume/Mithuna_Varatharaju_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-graphite-light, hover:border-paper hover:text-paper text-graphite-light py-3 px-6 rounded shadow-lg transition duration-300"                            >
                                View Resume ↗
                            </a>
                        </div>
                    </div>

                    {/* Right side of the hero section */}
                    <div className="mt-16 flex justify-center lg:justify-end">
                        <div className="group relative">

                            {/* Main portrait */}
                            <img
                                src={portrait}
                                alt="Graphite self portrait"
                                className="relative z-10 max-h-[70vh] w-80 lg:w-96 max-w-md rounded-lg shadow-lg transition duration-500 group-hover:scale-[0.96]"
                            />
                            <p className="mt-4 text-center font-mono text-sm uppercase tracking-[0.2em] text-graphite-light">
                                Hover to explore my artwork ↗
                            </p>

                            {/* Artwork previews */}
                            <div className="pointer-events-none absolute inset-0">

                                <img
                                    src={artwork1}
                                    alt=""
                                    className="absolute -left-20 top-8 w-28 rounded-lg shadow-xl opacity-0 rotate-[-8deg] transition-all duration-500 group-hover:-left-32 group-hover:opacity-100"
                                />

                                <img
                                    src={artwork2}
                                    alt=""
                                    className="absolute -right-16 top-20 w-28 rounded-lg shadow-xl opacity-0 rotate-[8deg] transition-all duration-500 group-hover:-right-28 group-hover:opacity-100"
                                />

                                <img
                                    src={artwork3}
                                    alt=""
                                    className="absolute bottom-4 left-1/2 w-28 -translate-x-1/2 translate-y-25 rounded-lg shadow-xl opacity-0 rotate-[-4deg] transition-all duration-500 group-hover:translate-y-45 group-hover:opacity-100"
                                />

                            </div>

                        </div>
                    </div>

                </div>


                <div className="mt-32 text-graphite-light text-sm animate-bounce">
                    ✏️ Scroll to learn more
                </div>

            </div>

        </section>
    )
}