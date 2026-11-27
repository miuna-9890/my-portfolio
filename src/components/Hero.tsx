import { profile } from '../data/profile'
import portrait from '../assets/portrait.png'
import artwork1 from '../assets/artwork1.png'
import artwork2 from '../assets/artwork2.png'
import artwork3 from '../assets/artwork3.png'
import artwork4 from '../assets/artwork4.png'
import artwork5 from '../assets/artwork5.png'
import artwork6 from '../assets/artwork6.png'

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
                    <div className="mt-16 flex justify-center lg:justify-end pb-12">
                        <div className="group relative flex flex-col items-center">

                            {/* Portrait and artwork container */}
                            <div className="relative">

                                {/* Main portrait */}
                                <img
                                    src={portrait}
                                    alt="Graphite self portrait"
                                    className="relative z-10 block max-h-[70vh] w-80 lg:w-96 max-w-md rounded-lg shadow-lg transition duration-500 group-hover:scale-[0.96]"
                                />

                                {/* Left artwork previews */}
                                <div className="pointer-events-none absolute inset-0">

                                    {/* Top left */}
                                    <img
                                        src={artwork1}
                                        alt=""
                                        className="absolute top-[15%] -left-20 lg:-left-32 w-24 lg:w-28 rounded-lg shadow-xl opacity-0 rotate-[-8deg] -translate-y-1/2 transition-all duration-500 group-hover:opacity-100"
                                    />

                                    {/* Middle left */}
                                    <img
                                        src={artwork3}
                                        alt=""
                                        className="absolute top-[50%] -left-20 lg:-left-32 w-24 lg:w-28 rounded-lg shadow-xl opacity-0 rotate-[5deg] -translate-y-1/2 transition-all duration-500 group-hover:opacity-100"
                                    />

                                    {/* Bottom left */}
                                    <img
                                        src={artwork4}
                                        alt=""
                                        className="absolute top-[85%] -left-20 lg:-left-32 w-24 lg:w-28 rounded-lg shadow-xl opacity-0 rotate-[-5deg] -translate-y-1/2 transition-all duration-500 group-hover:opacity-100"
                                    />

                                    {/* Right artwork previews */}
                                    {/* Top right */}
                                    <img
                                        src={artwork2}
                                        alt=""
                                        className="absolute top-[15%] -right-20 lg:-right-32 w-24 lg:w-28 rounded-lg shadow-xl opacity-0 rotate-[8deg] -translate-y-1/2 transition-all duration-500 group-hover:opacity-100"
                                    />

                                    {/* Middle right */}
                                    <img
                                        src={artwork5}
                                        alt=""
                                        className="absolute top-[50%] -right-20 lg:-right-32 w-24 lg:w-28 rounded-lg shadow-xl opacity-0 rotate-[-5deg] -translate-y-1/2 transition-all duration-500 group-hover:opacity-100"
                                    />

                                    {/* Bottom right */}
                                    <img
                                        src={artwork6}
                                        alt=""
                                        className="absolute top-[85%] -right-20 lg:-right-32 w-24 lg:w-28 rounded-lg shadow-xl opacity-0 rotate-[6deg] -translate-y-1/2 transition-all duration-500 group-hover:opacity-100"
                                    />

                                </div>
                            </div>

                            {/* Caption */}
                            <p className="mt-4 text-center font-mono text-sm uppercase tracking-[0.2em] text-graphite-light">
                                Hover to explore my artwork ↗
                            </p>

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