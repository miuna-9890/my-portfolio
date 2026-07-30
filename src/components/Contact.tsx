export const Contact = () => {
    return (
        <section id="contact" className="bg-charcoal px-8 py-32 border-t border-graphite-light">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-5xl font-bold mt-2 text-paper">
                        Get in Touch
                    </h2>
                    <p className="text-graphite-light leading-8 text-lg mt-2">
                        I'm always open to new opportunities and collaborations.
                    </p>
                </div>
                <div className="flex flex-row space-x-4">
                    <a href="https://linkedin.com/in/yourhandle"
                       target="_blank"
                       rel="noreferrer" className="text-paper hover:text-sanguine text-lg">
                        💼 LinkedIn ↗
                        </a>
                    <a href="https://github.com/yourhandle"
                       target="_blank"
                       rel="noreferrer"
                       className="text-paper hover:text-sanguine text-lg"
                    >
                        💼 GitHub ↗
                    </a>
                    <a
                    href="mailto:you@example.com"
                    className="text-paper hover:text-sanguine text-lg"
                    >
                        💼 Email ↗
                     </a>

                </div>
            </div>
        </section>
    )
}