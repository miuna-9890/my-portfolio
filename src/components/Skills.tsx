import {useState} from "react";
import {type SkillCategory, skills} from "../data/skills";


export const Skills = () => {
    const categories = Object.keys(skills) as SkillCategory[];
    const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Frontend");
    const [selectedSkill, setSelectedSkill] = useState(skills.Frontend[0]);
    return (
        <section id="skills" className="bg-charcoal px-8 py-32 border-t border-graphite-light">

            <div className="max-w-6xl mx-auto">

                <div className="mb-10">
                    <h2 className="text-5xl font-bold mt-2 text-paper">
                        Skills
                    </h2>
                    <p className="text-graphite-light leading-8 text-lg mt-2">Technologies I have worked with across projects and internships</p>
                </div>

                        {/*Category tabs*/}
                        <div className="flex flex-wrap gap-4 mb-12">
                            {categories.map((category) => (
                                <button key={category} onClick={() => {setSelectedCategory(category);
                                setSelectedSkill(skills[category][0])}} className={`border  text-graphite-light py-3 px-6 rounded shadow-lg transition duration-300 cursor-pointer
                                ${selectedCategory === category ? "border-sanguine bg-sanguine/5" : "border-graphite-light hover:border-paper" }`}>
                                    {category}
                                </button>
                            ))}
                        </div>

                            <div className="grid lg:grid-cols-2 gap-24">
                                {/*left side of the skills section*/}

                        {/*Skill cards*/}
                        <div className="flex flex-col gap-4">
                            {skills[selectedCategory].map((skill) => (
                                <div key={skill.name}  onClick={() => setSelectedSkill(skill)} className={`border rounded-xl p-5 cursor-pointer transition-all duration-300
                                ${selectedSkill.name === skill.name
                                        ? "border-sanguine bg-sanguine/5"
                                        : "border-graphite-light hover:border-paper hover:-translate-y-1" } `}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"> {skill.icon}</span>
                                        <div>
                                            <h3 className="text-paper font-semibold">{skill.name}</h3>
                                            <p className="text-graphite-light text-sm">{skill.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    {/*right side of the skills section*/}
                    {/*Detail panel*/}
                    <div className="border border-graphite-light rounded-xl p-8 h-fit sticky top-20">
                        <h3 className="text-3xl font-bold text-paper mb-3">{selectedSkill.name}</h3>
                        <p className="text-sanguine uppercase tracking-[0.2em] text-sm mb-6">{selectedSkill.subtitle}</p>
                        <p className="leading-8 text-graphite-light mb-8">{selectedSkill.description}</p>

                        <hr className="border-graphite-light mb-6"/>

                        <h4 className="text-paper font-semibold mb-3">
                            Used In
                        </h4>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {selectedSkill.usedIn.map((project) => (
                                <span key={project} className="border border-graphite-light text-paper px-3 py-1 rounded-full text-sm">
                                    {project}
                                </span>
                            ))}
                        </div>
                        <h4 className="text-paper font-semibold mb-3">
                            Related Technologies
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {selectedSkill.related.map(tech => (
                                <span key={tech} className="bg-sanguine/10 border border-sanguine rounded-full px-3 py-1 text-sm text-paper">
                                    {tech} </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}


