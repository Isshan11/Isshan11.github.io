import { ArrowDownRight, ArrowUpRight, Boxes, Cpu, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

import { GamesShowcase } from '@/components/games-showcase';

const systemProjects = [
  { index: '01', title: 'FPS Combat & Advanced AI', eyebrow: 'Gameplay systems', description: 'A complete Unreal Engine 5 combat loop with C++ and Blueprints: movement, weapons, recoil, headshots, animation, effects, destruction, and cover-aware enemies driven by Behavior Trees and EQS.', tags: ['UE5', 'C++', 'Blueprints', 'Behavior Trees', 'EQS'], accent: 'cyan' },
  { index: '02', title: 'Procedural Ecosystem Generator', eyebrow: 'Artist-facing PCG tool', description: 'A configurable biome system for trees, grass, and rocks with terrain projection, slope and height rules, weighted variation, seeds, paint masks, spline exclusions, and reusable PCG subgraphs.', tags: ['UE 5.6.1', 'PCG', 'Blueprint', 'Procedural workflows'], accent: 'lime' },
  { index: '03', title: 'Asset Cleaner & Optimization Tools', eyebrow: 'Editor tooling', description: 'Production-oriented Unreal Editor utilities that scan folders, surface unused assets, clean selections, detect empty folders, and reduce repetitive preparation work around LODs, Nanite, and collision.', tags: ['Unreal Editor', 'C++', 'Editor Utility', 'Pipeline'], accent: 'amber' },
];

const visualProjects = [
  { title: 'Storage Room', type: 'Sci-fi environment', image: '/media/storage-room.webp', className: 'wide', href: 'https://isshan11.artstation.com/projects/lGAYRY' },
  { title: 'Tactical Knife - Hard Surface 3D Model | High & Low Poly', type: 'Weapon prop', image: '/media/tactical-knife.webp', className: '', href: 'https://isshan11.artstation.com/projects/XJADoL' },
  { title: 'Industrial Generator – Hard Surface 3D Model', type: 'Industrial prop', image: '/media/industrial-generator.webp', className: '', href: 'https://isshan11.artstation.com/projects/EzA952' },
  { title: 'Rock Golem', type: 'Game-ready character', image: '/media/rock-character.webp', className: '', href: 'https://isshan11.artstation.com/projects/WdmZYQ' },
  { title: 'Spaceship Corridor', type: 'Sci-fi environment', image: '/media/spaceship-corridor.webp', className: '', href: 'https://isshan11.artstation.com/projects/dyAxRK' },
  { title: 'Space Harbor & Docking Bay', type: 'Sci-fi environment', image: '/media/space-harbor.webp', className: 'wide', href: 'https://isshan11.artstation.com/projects/RKAVXO' },
  { title: 'Hub Rooms', type: 'Sci-fi environment', image: '/media/hub-rooms.webp', className: '', href: 'https://isshan11.artstation.com/projects/nJAeD6' },
  { title: 'Control Room', type: 'Sci-fi environment', image: '/media/control-room.webp', className: '', href: 'https://isshan11.artstation.com/projects/rlay06' },
  { title: 'Cryopod Chamber', type: 'Sci-fi environment', image: '/media/cryopod-room.webp', className: 'wide', href: 'https://isshan11.artstation.com/projects/L4AVr5' },
  { title: 'Final Cutscene & Intro Cinematic', type: 'Cinematic & animation', image: '/media/final-cutscene.jpg', className: '', href: 'https://isshan11.artstation.com/projects/98YnJL' },
  { title: 'First-Person Astronaut Hands', type: 'First-person animation', image: '/media/astronaut-hands.webp', className: '', href: 'https://isshan11.artstation.com/projects/dyAmXw' },
  { title: 'Flamethrower', type: 'Game-ready weapon prop', image: '/media/flamethrower.webp', className: 'wide', href: 'https://isshan11.artstation.com/projects/lEDr9o' },
  { title: 'Vector 9', type: 'Enemy robot character', image: '/media/vector-9.webp', className: '', href: 'https://isshan11.artstation.com/projects/GvANQd' },
  { title: 'Fantasy Lamp - Hard Surface 3D Model', type: 'Fantasy prop', image: '/media/fantasy-lamp.webp', className: '', href: 'https://isshan11.artstation.com/projects/gRA5mK' },
];

function SystemCard({ project }: { project: (typeof systemProjects)[number] }) {
  return (
    <article className={`system-card accent-${project.accent}`}>
      <div className="system-index">{project.index}</div>
      <div className="system-icon" aria-hidden="true">{project.index === '01' ? <Cpu /> : project.index === '02' ? <Sparkles /> : <Boxes />}</div>
      <div className="system-content">
        <p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
    </article>
  );
}

function ArtCard({ project, index }: { project: (typeof visualProjects)[number], index: number }) {
  return (
    <a className={`art-card ${project.className}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on ArtStation`}>
      <img src={project.image} alt={`${project.title}, ${project.type} by Isshan Marwah`} loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
      <div className="art-overlay">
        <span>{String(index + 1).padStart(2, '0')} / {project.type}</span>
        <h3>{project.title}</h3>
        <span className="art-link-hint">View on ArtStation <ArrowUpRight size={14} /></span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Isshan Marwah, home">
          <span className="brand-mark">IM</span>
          <span className="brand-copy"><strong>Isshan Marwah</strong><small>Technical Artist</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#systems">Systems</a><a href="#art">3D Art</a><a href="#games">Games</a><a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="mailto:isshanmarwah@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero profile-hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> Portfolio / 2026</p>
          <h1><span className="hero-first-name">Isshan</span><br /><em>Marwah.</em></h1>
          <p className="hero-role">Technical Artist &amp; Game Developer</p>
          <div className="hero-about">
            <p>I&apos;m a Game Development and Interactive Media student at Ontario Tech University, building toward technical art and technical game development roles.</p>
            <p>I work across Unreal Engine gameplay systems, procedural tools, Unity games, and game-ready 3D art—bringing the technical and visual sides of production together.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#systems">See my work <ArrowDownRight size={17} /></a>
            <a className="button button-ghost" href="/Isshan-Marwah-Technical-Artist-Resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-facts" aria-label="Portfolio highlights">
            <div><strong>UE5</strong><span>Systems &amp; PCG</span></div>
            <div><strong>C++</strong><span>Tools &amp; gameplay</span></div>
            <div><strong>3D</strong><span>Assets &amp; worlds</span></div>
          </div>
        </div>
        <div className="hero-visual profile-visual">
          <img src="/media/isshan-marwah-niagara.png" alt="Portrait of Isshan Marwah at Niagara Falls" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="visual-label"><span>Game development &amp; interactive media</span><strong>Technical Artist</strong></div>
          <div className="visual-coordinates">ONTARIO / CANADA</div>
        </div>
      </section>

      <section className="manifesto" aria-label="Profile focus">
        <span className="section-number">00</span>
        <p>I combine <strong>art and engineering</strong> to create responsive gameplay, reusable tools, and optimized real-time content.</p>
      </section>

      <section className="section systems-section" id="systems">
        <div className="section-heading">
          <div><p className="kicker"><span /> Selected work</p><h2>Technical art<br />&amp; systems</h2></div>
          <p>Production-minded systems that solve real problems while keeping the artist experience clear and flexible.</p>
        </div>
        <div className="system-list">
          {systemProjects.slice(0, 2).map((project) => <SystemCard project={project} key={project.index} />)}
        </div>
        <details className="reveal-panel">
          <summary><span>Show more tools &amp; systems</span><span className="summary-state" aria-hidden="true" /></summary>
          <div className="system-list reveal-content"><SystemCard project={systemProjects[2]} /></div>
        </details>
      </section>

      <section className="section art-section" id="art">
        <div className="section-heading art-heading">
          <div><p className="kicker"><span /> Visual development</p><h2>Worlds, props<br />&amp; characters</h2></div>
          <p>Environment composition, hard-surface modeling, UVs, texturing, animation, and engine-ready asset preparation.</p>
        </div>
        <div className="art-grid">
          {visualProjects.slice(0, 3).map((project, index) => <ArtCard project={project} index={index} key={project.title} />)}
        </div>
        <details className="reveal-panel art-reveal">
          <summary><span>Show more 3D work</span><span className="summary-state" aria-hidden="true" /></summary>
          <div className="art-grid reveal-content">
            {visualProjects.slice(3).map((project, index) => <ArtCard project={project} index={index + 3} key={project.title} />)}
          </div>
        </details>
      </section>

      <section className="section games-section" id="games">
        <GamesShowcase />
      </section>

      <section className="section about-section experience-section" id="experience">
        <div className="about-statement"><p className="kicker"><span /> Experience</p><h2>Learning by building<br />real production work.</h2></div>
        <div className="about-body">
          <p>My professional experience spans Unreal Engine technical art, gameplay systems, procedural tools, and QA automation.</p>
          <div className="contact-facts">
            <span className="location"><MapPin size={17} /> Ontario, Canada</span>
            <a className="location" href="tel:+19052437529"><Phone size={17} /> +1 905 243 7529</a>
          </div>
        </div>

        <div className="experience-list">
          <details className="reveal-panel experience-reveal">
            <summary><span>Show experience</span><span className="summary-state" aria-hidden="true" /></summary>
            <div className="experience-reveal-content reveal-content">
              <article className="experience-card experience-card-featured">
                <aside className="experience-card-rail">
                  <span className="experience-index">01 / Featured</span>
                  <div>
                    <span className="experience-duration">May 2026 - Aug 2026</span>
                    <span className="experience-location">India</span>
                  </div>
                </aside>
                <div className="experience-card-body">
                  <p className="experience-company">Lakshya Digital</p>
                  <h3>Game Art Intern - Unreal Engine / Technical Art</h3>
                  <p className="experience-summary">Independently developed production-style Unreal Engine 5 prototypes and artist-facing tools across gameplay, AI, PCG, animation, effects, destruction, and editor workflows.</p>
                  <ol className="experience-highlights">
                    <li><strong>FPS Gameplay</strong><span>Built the C++ and Blueprint combat loop: movement, sprinting, crouching, jumping, aiming and FOV, weapon switching, line-trace shooting, recoil, headshots, and combat feedback.</span></li>
                    <li><strong>Advanced Enemy AI</strong><span>Created Behavior Tree and EQS enemies that detect and pressure the player, query nearby cover, reposition, peek, and shoot based on visibility and combat state.</span></li>
                    <li><strong>Procedural Ecosystem</strong><span>Developed an artist-controlled PCG tool for trees, grass, and rocks with terrain projection, slope and height rules, weighted variation, density controls, paint masks, and spline exclusions.</span></li>
                    <li><strong>Integration &amp; Editor Tools</strong><span>Integrated retargeted animation, IK, VFX, and Chaos destruction, then built Blueprint and C++ tools for asset scanning, cleanup, empty-folder detection, and optimization preparation.</span></li>
                  </ol>
                  <ul className="tag-list experience-tags"><li>Unreal Engine 5</li><li>C++</li><li>Blueprints</li><li>Behavior Trees</li><li>EQS</li><li>PCG</li><li>Editor Tools</li></ul>
                </div>
              </article>

              <article className="experience-card experience-card-secondary">
                <aside className="experience-card-rail">
                  <span className="experience-index">02</span>
                  <div>
                    <span className="experience-duration">3-month internship</span>
                    <span className="experience-location">Dubai, UAE</span>
                  </div>
                </aside>
                <div className="experience-card-body">
                  <p className="experience-company">Virgin Mobile UAE</p>
                  <h3>Technical / Automation Intern</h3>
                  <p className="experience-summary">Worked across website quality assurance, test automation, API validation, and technical communication.</p>
                  <ol className="experience-highlights experience-highlights-compact">
                    <li><strong>QA Automation</strong><span>Built Python and Selenium automation for broken images, missing content, and page-load issues, while performing UI automation and API validation.</span></li>
                    <li><strong>Workflow &amp; Reporting</strong><span>Used GitLab workflows and prepared technical reports and presentations to communicate issues, automation findings, and test results.</span></li>
                  </ol>
                  <ul className="tag-list experience-tags"><li>Python</li><li>Selenium</li><li>QA Automation</li><li>API Validation</li><li>GitLab</li></ul>
                </div>
              </article>
            </div>
          </details>
        </div>
      </section>

      <footer>
        <div><p className="kicker"><span /> Available for opportunities</p><h2>Let&apos;s build something<br /><em>worth playing.</em></h2></div>
        <div className="footer-links">
          <a href="mailto:isshanmarwah@gmail.com"><Mail size={17} /> Email me</a>
          <a href="tel:+19052437529"><Phone size={16} /> +1 905 243 7529</a>
          <a href="https://www.artstation.com/isshan11" target="_blank" rel="noreferrer">ArtStation <ArrowUpRight size={15} /></a>
          <a href="https://www.behance.net/isshanmarwah3" target="_blank" rel="noreferrer">Behance <ArrowUpRight size={15} /></a>
          <a href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer">Itch.io <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-meta"><span>© 2026 Isshan Marwah</span><span>Technical Art / Game Development</span></div>
      </footer>
    </main>
  );
}
