import { ArrowDownRight, ArrowUpRight, Boxes, Braces, Cpu, Mail, MapPin, Sparkles } from 'lucide-react';

const systemProjects = [
  { index: '01', title: 'FPS Combat & Advanced AI', eyebrow: 'Gameplay systems', description: 'A complete Unreal Engine 5 combat loop with C++ and Blueprints: movement, weapons, recoil, headshots, animation, effects, destruction, and cover-aware enemies driven by Behavior Trees and EQS.', tags: ['UE5', 'C++', 'Blueprints', 'Behavior Trees', 'EQS'], accent: 'cyan' },
  { index: '02', title: 'Procedural Ecosystem Generator', eyebrow: 'Artist-facing PCG tool', description: 'A configurable biome system for trees, grass, and rocks with terrain projection, slope and height rules, weighted variation, seeds, paint masks, spline exclusions, and reusable PCG subgraphs.', tags: ['UE 5.6.1', 'PCG', 'Blueprint', 'Procedural workflows'], accent: 'lime' },
  { index: '03', title: 'Asset Cleaner & Optimization Tools', eyebrow: 'Editor tooling', description: 'Production-oriented Unreal Editor utilities that scan folders, surface unused assets, clean selections, detect empty folders, and reduce repetitive preparation work around LODs, Nanite, and collision.', tags: ['Unreal Editor', 'C++', 'Editor Utility', 'Pipeline'], accent: 'amber' },
];

const visualProjects = [
  { title: 'Space Harbor', type: 'Sci-fi environment', image: '/media/space-harbor.webp', className: 'wide' },
  { title: 'Control Room', type: 'Environment study', image: '/media/control-room.webp', className: '' },
  { title: 'Cryopod Room', type: 'Modular environment', image: '/media/cryopod-room.webp', className: '' },
  { title: 'Hard-surface Flamethrower', type: 'Game-ready prop', image: '/media/flamethrower.webp', className: '' },
  { title: 'Rock Character', type: 'Stylized character', image: '/media/rock-character.webp', className: '' },
  { title: 'Blade Studies', type: 'Hard-surface modeling', image: '/media/sword.webp', className: 'wide' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Isshan Marwah, home">
          <span className="brand-mark">IM</span>
          <span className="brand-copy"><strong>Isshan Marwah</strong><small>Technical Artist</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#systems">Systems</a><a href="#art">3D Art</a><a href="#games">Games</a><a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:isshanmarwah@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> Technical artist & game developer</p>
          <h1>I build the systems<br />behind <em>playable worlds.</em></h1>
          <p className="hero-intro">Bridging gameplay engineering, procedural tools, and game-ready 3D art in Unreal Engine and Unity.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#systems">Explore selected work <ArrowDownRight size={17} /></a>
            <a className="button button-ghost" href="/Isshan-Marwah-Technical-Artist-Resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-facts" aria-label="Portfolio highlights">
            <div><strong>UE5</strong><span>Systems & PCG</span></div>
            <div><strong>C++</strong><span>Tools & gameplay</span></div>
            <div><strong>3D</strong><span>Assets & worlds</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/media/space-harbor.webp" alt="A sci-fi space harbor environment created by Isshan Marwah" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="visual-label"><span>Environment study</span><strong>Space Harbor</strong></div>
          <div className="visual-coordinates">ART / SYSTEMS / PLAY</div>
        </div>
      </section>

      <section className="manifesto" aria-label="Profile summary">
        <span className="section-number">00</span>
        <p>My work lives at the intersection of <strong>art and engineering</strong>—turning ideas into responsive gameplay, reusable tools, and optimized real-time content.</p>
      </section>

      <section className="section systems-section" id="systems">
        <div className="section-heading">
          <div><p className="kicker"><span /> Selected work</p><h2>Technical art<br />& systems</h2></div>
          <p>The work that best represents my hybrid role: solving production problems while protecting the artist experience.</p>
        </div>
        <div className="system-list">
          {systemProjects.map((project) => (
            <article className={`system-card accent-${project.accent}`} key={project.index}>
              <div className="system-index">{project.index}</div>
              <div className="system-icon" aria-hidden="true">{project.index === '01' ? <Cpu /> : project.index === '02' ? <Sparkles /> : <Boxes />}</div>
              <div className="system-content">
                <p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section art-section" id="art">
        <div className="section-heading art-heading">
          <div><p className="kicker"><span /> Visual development</p><h2>Worlds, props<br />& characters</h2></div>
          <p>Environment composition, hard-surface modeling, UVs, texturing, animation, and engine-ready asset preparation.</p>
        </div>
        <div className="art-grid">
          {visualProjects.map((project, index) => (
            <article className={`art-card ${project.className}`} key={project.title}>
              <img src={project.image} alt={`${project.title}, ${project.type} by Isshan Marwah`} />
              <div className="art-overlay"><span>{String(index + 1).padStart(2, '0')} / {project.type}</span><h3>{project.title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section games-section" id="games">
        <div className="games-copy">
          <p className="kicker"><span /> Playable work</p><h2>Games that connect<br />the whole pipeline.</h2>
          <p>From gameplay logic to models, animation, UI, and integration, I like building experiences where every discipline talks to the next.</p>
          <a className="text-link" href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer">Visit my Itch.io <ArrowUpRight size={16} /></a>
        </div>
        <article className="game-feature">
          <div className="game-badge">Ubisoft Best Choice</div><p className="project-eyebrow">Unity / C# / 3D art / animation</p><h3>Vector of Fear</h3>
          <p>A sci-fi horror game featuring game-ready robotic enemies, first-person hand animation, environmental assets, and integrated gameplay systems. Showcased at Level Up.</p>
          <div className="game-lines" aria-hidden="true"><Braces /><span>DESIGN</span><span>BUILD</span><span>INTEGRATE</span></div>
        </article>
      </section>

      <section className="section about-section" id="about">
        <div className="about-statement"><p className="kicker"><span /> About</p><h2>Curious across disciplines.<br />Focused on real-time.</h2></div>
        <div className="about-body">
          <p>I&apos;m a Game Development and Interactive Media student at Ontario Tech University, currently building toward technical art and technical game development roles.</p>
          <p>During my Game Art internship at Lakshya Digital, I independently built an Unreal Engine FPS prototype, advanced cover-based AI, a procedural ecosystem generator, and editor-side asset utilities.</p>
          <div className="location"><MapPin size={17} /> Ontario, Canada / Dubai, UAE</div>
        </div>
      </section>

      <footer>
        <div><p className="kicker"><span /> Available for opportunities</p><h2>Let&apos;s build something<br /><em>worth playing.</em></h2></div>
        <div className="footer-links">
          <a href="mailto:isshanmarwah@gmail.com"><Mail size={17} /> Email me</a>
          <a href="https://www.behance.net/isshanmarwah3" target="_blank" rel="noreferrer">Behance <ArrowUpRight size={15} /></a>
          <a href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer">Itch.io <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-meta"><span>© 2026 Isshan Marwah</span><span>Technical Art / Game Development</span></div>
      </footer>
    </main>
  );
}
