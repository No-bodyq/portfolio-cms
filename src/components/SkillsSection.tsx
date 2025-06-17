import React from "react";

const SkillsSection = () => (
  <section
    id="skills"
    className="max-w-4xl mx-auto py-24 px-4 flex flex-col gap-6 scroll-mt-24"
  >
    <h2 className="text-3xl font-bold text-cyan-300 mb-2">Skills</h2>
    <ul className="flex flex-wrap gap-4 text-zinc-200">
      <li className="bg-zinc-800 px-4 py-2 rounded-lg">Next.js</li>
      <li className="bg-zinc-800 px-4 py-2 rounded-lg">Prisma</li>
      <li className="bg-zinc-800 px-4 py-2 rounded-lg">Tailwind CSS</li>
      <li className="bg-zinc-800 px-4 py-2 rounded-lg">TypeScript</li>
      <li className="bg-zinc-800 px-4 py-2 rounded-lg">React</li>
    </ul>
  </section>
);

export default SkillsSection;
