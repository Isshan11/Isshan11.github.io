import { ArrowDownRight, ArrowUpRight, Boxes, Braces, Cpu, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const systemProjects = [
  { index: '01', title: 'FPS Combat & Advanced AI', eyebrow: 'Gameplay systems', description: 'A complete Unreal Engine 5 combat loop with C++ and Blueprints: movement, weapons, recoil, headshots, animation, effects, destruction, and cover-aware enemies driven by Behavior Trees and EQS.', tags: ['UE5', 'C++', 'Blueprints', 'Behavior Trees', 'EQS'], accent: 'cyan' },
  { index: '02', title: 'Procedural Ecosystem Generator', eyebrow: 'Artist-facing PCG tool', description: 'A configurable biome system for trees, grass, and rocks with terrain projection, slope and height rules, weighted variation, seeds, paint masks, spline exclusions, and reusable PCG subgraphs.', tags: ['UE 5.6.1', 'PCG', 'Blueprint', 'Procedural workflows'], accent: 'lime' },
  { index: '03', title: 'Asset Cleaner & Optimization Tools', eyebrow: 'Editor tooling', description: 'Production-oriented Unreal Editor utilities that scan folders, surface unused assets, clean selections, detect empty folders, and reduce repetitive preparation work around LODs, Nanite, and collision.', tags: ['Unreal Editor', 'C++', 'Editor Utility', 'Pipeline'], accent: 'amber' },
];

const visualProjects = [
  { title: 'Space Harbor', type: 'Sci-fi environment', image: '/media/space-harbor.webp', className: 'wide', href: 'https://isshan11.artstation.com/projects/RKAVXO' },
  { title: 'Control Room', type: 'Environment study', image: '/media/control-room.webp', className: '', href: 'https://isshan11.artstation.com/projects/rlay06' },
  { title: 'Cryopod Room', type: 'Modular environment', image: '/media/cryopod-room.webp', className: '', href: 'https://isshan11.artstation.com/projects/L4AVr5' },
  { title: 'Storage Room', type: 'Sci-fi environment', image: '/media/storage-room.webp', className: 'wide', href: 'https://isshan11.artstation.com/projects/lGAYRY' },
  { title: 'Rock Character', type: 'Stylized character', image: '/media/rock-character.webp', className: '', href: 'https://isshan11.artstation.com/projects/WdmZYQ' },
  { title: 'Blade Studies', type: 'Hard-surface modeling', image: '/media/sword.webp', className: '', href: 'https://isshan11.artstation.com/projects/K3AyDr' },
];

const moreGames = [
  { title: "End of the Stickin' World", type: '2D side-scroller', description: 'An action-packed Unity side-scroller with weapon choice and varied enemies.', href: 'https://isshan-marwah.itch.io', number: '01' },
  { title: 'Rise from Below', type: 'Unity / HTML5', description: 'A sci-fi climbing adventure about escaping a collapsing alien planet with a failing jetpack.', href: 'https://isshan-marwah.itch.io/rise-from-below', number: '02' },
  { title: 'Make It to Beat It', type: 'Game prototype', description: 'Gather the right potion ingredients, prepare for the fight, and defeat the final boss.', href: 'https://isshan-marwah.itch.io/make-it-to-beat-it', number: '03' },
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
      <img src={project.image} alt={`${project.title}, ${project.type} by Isshan Marwah`} />
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
          {visualProjects.slice(0, 4).map((project, index) => <ArtCard project={project} index={index} key={project.title} />)}
        </div>
        <details className="reveal-panel art-reveal">
          <summary><span>Show more 3D work</span><span className="summary-state" aria-hidden="true" /></summary>
          <div className="art-grid reveal-content">
            {visualProjects.slice(4).map((project, index) => <ArtCard project={project} index={index + 4} key={project.title} />)}
          </div>
        </details>
      </section>

      <section className="section games-section" id="games">
        <div className="games-intro-grid">
          <div className="games-copy">
            <p className="kicker"><span /> Playable work</p><h2>Games across<br />the whole pipeline.</h2>
            <p>Gameplay logic, models, animation, UI, and integration—projects where every discipline connects.</p>
            <a className="text-link" href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer">Visit my Itch.io <ArrowUpRight size={16} /></a>
          </div>
          <a className="game-feature" href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer" aria-label="View Vector of Fear on Isshan's Itch.io">
            <div className="game-badge">Ubisoft Best Choice</div><p className="project-eyebrow">Unity / C# / 3D art / animation</p><h3>Vector of Fear</h3>
            <p>A sci-fi horror game featuring game-ready robotic enemies, first-person hand animation, environmental assets, and integrated gameplay systems. Showcased at Level Up.</p>
            <div className="game-lines" aria-hidden="true"><Braces /><span>DESIGN</span><span>BUILD</span><span>PLAY ↗</span></div>
          </a>
        </div>
        <details className="reveal-panel games-reveal">
          <summary><span>Show more games</span><span className="summary-state" aria-hidden="true" /></summary>
          <div className="more-games-grid reveal-content">
            {moreGames.map((game) => (
              <a className="mini-game-card" href={game.href} target="_blank" rel="noreferrer" key={game.title}>
                <div className="mini-game-top"><span>{game.number}</span><ArrowUpRight size={18} /></div>
                <p className="project-eyebrow">{game.type}</p><h3>{game.title}</h3><p>{game.description}</p>
                <span className="mini-game-link">Play or view on Itch.io</span>
              </a>
            ))}
          </div>
        </details>
      </section>

      <section className="section about-section" id="experience">
        <div className="about-statement"><p className="kicker"><span /> Experience</p><h2>Learning by building<br />real production work.</h2></div>
        <div className="about-body">
          <p>During my Game Art internship at Lakshya Digital, I independently built an Unreal Engine FPS prototype, advanced cover-based AI, a procedural ecosystem generator, and editor-side asset utilities.</p>
          <p>At Ontario Tech University, I continue developing games, 3D environments, and technical workflows across team and independent projects.</p>
          <div className="contact-facts">
            <span className="location"><MapPin size={17} /> Ontario, Canada</span>
            <a className="location" href="tel:+19052437529"><Phone size={17} /> +1 905 243 7529</a>
          </div>
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
