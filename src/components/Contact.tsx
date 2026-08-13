import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

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
                    <a href="https://www.linkedin.com/in/mithuna-varatharaju-6994662a7/"
                       target="_blank"
                       rel="noreferrer"  className="flex items-center gap-2 text-paper hover:text-sanguine text-lg transition-colors"
                    >
                        <FaLinkedin size={20} />
                        LinkedIn
                        <ArrowUpRight size={16} />
                        </a>
                    <a href="https://github.com/miuna-9890"
                       target="_blank"
                       rel="noreferrer"
                       className="flex items-center gap-2 text-paper hover:text-sanguine text-lg transition-colors"
                    >
                        <FaGithub size={20} />
                        GitHub
                        <ArrowUpRight size={16} />
                    </a>
                    <a
                    href="mailto:10mithuna@gmail.com"
                    className="flex items-center gap-2 text-paper hover:text-sanguine text-lg transition-colors"
                    >
                        <Mail size={20} />
                        Email
                        <ArrowUpRight size={16} />
                     </a>

                </div>
            </div>
        </section>
    )
}