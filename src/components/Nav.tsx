import { useState } from "react";

const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Nav = () => {
    const [selected, setSelected] = useState<string>("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (label: string) => {
        setSelected(label);
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur border-b border-graphite/40">
            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between sm:justify-center">
                {/* Desktop: full link row, hidden on small screens */}
                <nav className="hidden sm:flex gap-6">
                    {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => handleClick(link.label)}
                        className={`text-sm ${
                        selected === link.label
                        ? "text-sanguine"
                        : "text-graphite-light hover:text-paper transition-colors duration-300"
                    }`}
                        >
                    {link.label}
                        </a>
                        ))}
                </nav>

                {/* Mobile: hamburger button, hidden on larger screens */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="sm:hidden text-paper"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
            <nav className="sm:hidden flex flex-col items-center gap-4 pb-6 bg-charcoal/95">
                {links.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleClick(link.label)}
                    className={`text-sm ${
                    selected === link.label ? "text-sanguine" : "text-graphite-light"
                }`}
                    >
                {link.label}
                    </a>
                    ))}
                    </nav>
                    )}
</header>
);
};