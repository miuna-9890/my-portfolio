import { profile } from '../data/profile'
import potrait from '../assets/potrait.png'

export const Hero = () => {
    return (
        <section className="min-h-screen bg-charcoal flex items-center px-8">
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
                        </div>
                    </div>

                    {/*Right side of the hero section*/}
                    <div className="mt-16 flex justify-center lg:justify-end">
                        <img src={potrait} alt="Graphite self potrait" className="max-h-[70vh] w-80 lg:w-96 max-w-md rounded-lg shadow-lg" />
                    </div>

                </div>


                <div className="mt-32 text-graphite-light text-sm animate-bounce">
                    ✏️ Scroll to learn more
                </div>

            </div>

        </section>
    )
}