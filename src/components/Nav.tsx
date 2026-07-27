import {useState} from "react";

const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    // { href: "#experience", label: "Experience" },
    // { href: "#contact", label: "Contact" },
]

export const Nav = () => {
    const [selected, setSelected] = useState<string>("Home");
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-charcoal/90 backdrop-blur border-b border-graphite/40">
            <nav className="max-w-3xl mx-auto px-6 py-4 flex gap-6 justify-center">
                {links.map((link) => (
                    <a key={link.href}
                       href={link.href}
                       onClick={() => setSelected(link.label)}
                       className={`text-sm ${selected === link.label ? "text-sanguine" 
                           : "text-graphite-light hover:text-paper transition-colors duration-300"} `}
                       >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}