'use client';

type Contribution = {
  title: string;
  description: string;
};

type Game = {
  slug: string;
  title: string;
  badges?: string[];
  eyebrow: string;
  description: string;
  about: string;
  role?: string;
  roleSummary?: string;
  contributions: Contribution[];
  tags: string[];
  href: string;
};

const games: Game[] = [
  {
    slug: 'vector-of-fear',
    title: 'Vector of Fear',
    badges: ['Ubisoft’s Choice — 2nd Year', 'Level Up Student Showcase 2026'],
    eyebrow: 'Unity / C# / Blender / Substance',
    description: 'A survival-horror game set aboard a damaged vessel drifting through deep space, where the ship’s engineer must repair the vessel, escape lockdown, and survive the threat onboard.',
    about: 'Vector of Fear is a Unity sci-fi survival-horror game about an engineer trapped aboard a damaged vessel in lockdown. It was featured at Level Up Student Showcase 2026 and selected as the 2nd-Year Ubisoft’s Choice at Ontario Tech University’s GameCon.',
    role: '3D Art, Animation & Technical Implementation',
    roleSummary: 'I handled the complete visual pipeline—from models, textures, and animation to Unity integration, real-time effects, audio synchronization, and supporting code.',
    contributions: [
      { title: 'Asset Creation', description: 'Created all models, textures, and animations for the game, including characters, props, environments, first-person assets, and the Blender-built space sky map.' },
      { title: 'Unity Implementation', description: 'Integrated the assets in Unity and set up animation systems, Timeline sequences, triggers, cutscenes, sound cues, and event timing to bring each scene together.' },
      { title: 'Shaders, VFX & Code', description: 'Built Shader Graph and VFX Graph effects for the black hole, spaceship thrusters, weapons, and particles, then adjusted C# code to synchronize triggers, animation, sound, and effects.' },
    ],
    tags: ['Unity', 'C#', 'Blender', 'Substance 3D Painter', 'Shader Graph', 'VFX Graph', 'Timeline'],
    href: 'https://seraphstudios.itch.io/vector-of-fear',
  },
  {
    slug: 'end-of-the-stickin-world',
    title: "End of the Stickin' World",
    eyebrow: 'Action / Fighting / Side-scroller',
    description: 'Play as Twiggy, an agile warrior who masters multiple weapons and fights rival clans and assassins across neon cityscapes and ancient, war-torn arenas.',
    about: 'A first-year capstone centered on Twiggy, a fast and deadly warrior fighting rival clans and assassins across neon-lit cityscapes and ancient battlegrounds.',
    role: 'Programmer & Game Integration',
    roleSummary: 'I served as the programmer, coding the game and bringing its art, sound, and level content together into the finished playable experience.',
    contributions: [
      { title: 'Full Game Programming', description: 'Wrote the gameplay code and systems that power the complete game.' },
      { title: 'Art & Sound Integration', description: 'Implemented the art and sound assets and connected them to the playable experience.' },
      { title: 'Level Implementation', description: 'Integrated the level content and connected it with the game systems so the project played as one complete experience.' },
    ],
    tags: ['Programming', 'Gameplay Systems', 'Art Integration', 'Audio Integration', 'Level Integration'],
    href: 'https://isshan-marwah.itch.io',
  },
];

function GameCard({ game }: { game: Game }) {
  const dialogId = `contribution-${game.slug}`;
  const triggerId = `contribution-trigger-${game.slug}`;

  function openContribution() {
    const dialog = document.getElementById(dialogId);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  }

  function restoreTriggerFocus() {
    document.getElementById(triggerId)?.focus();
  }

  return (
    <>
      <article className="game-feature">
        {game.badges && (
          <div className="game-badges">
            {game.badges.map((badge) => <div className="game-badge" key={badge}>{badge}</div>)}
          </div>
        )}
        <p className="project-eyebrow">{game.eyebrow}</p>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <div className="game-feature-action">
          <button id={triggerId} className="contribution-trigger" type="button" aria-haspopup="dialog" aria-controls={dialogId} onClick={openContribution}>
            <span>Show contribution</span>
            <span className="contribution-trigger-icon" aria-hidden="true">+</span>
          </button>
        </div>
      </article>

      <dialog id={dialogId} className="contribution-dialog" aria-labelledby={`${dialogId}-title`} aria-describedby={`${dialogId}-description`} onClose={restoreTriggerFocus}>
        <div className="contribution-dialog-header">
          <div>
            <p className="project-eyebrow">Game contribution / {game.title}</p>
            <h2 id={`${dialogId}-title`} className="contribution-dialog-title">What I worked on</h2>
            <p id={`${dialogId}-description`} className="sr-only">Isshan Marwah&apos;s contribution to {game.title}.</p>
          </div>
          <form method="dialog">
            <button className="dialog-close-button" type="submit" aria-label={`Close ${game.title} contribution window`}>×</button>
          </form>
        </div>

        <div className="contribution-dialog-scroll">
          <div className="vector-case-study">
            <div className={`vector-overview${game.role && game.roleSummary ? '' : ' vector-overview-single'}`}>
              <div>
                <p className="project-eyebrow">About the game</p>
                <p>{game.about}</p>
              </div>
              {game.role && game.roleSummary && (
                <div>
                  <p className="project-eyebrow">My role</p>
                  <h3>{game.role}</h3>
                  <p>{game.roleSummary}</p>
                </div>
              )}
            </div>
            <div className="contribution-grid">
              {game.contributions.map((contribution, index) => (
                <article className="contribution-card" key={contribution.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4>{contribution.title}</h4>
                  <p>{contribution.description}</p>
                </article>
              ))}
            </div>
            <div className="case-study-footer">
              <ul className="case-study-tools" aria-label={`${game.title} tools and skills`}>
                {game.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a className="case-study-link" href={game.href} target="_blank" rel="noreferrer">View on Itch.io <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function GamesShowcase() {
  return (
    <>
      <div className="games-intro-grid">
        <div className="games-copy">
          <p className="kicker"><span /> Playable work</p>
          <h2>Games across<br />the whole pipeline.</h2>
          <p>Gameplay logic, models, animation, UI, and integration—projects where every discipline connects.</p>
          <a className="text-link" href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer">Visit my Itch.io <span aria-hidden="true">↗</span></a>
        </div>
        <GameCard game={games[0]} />
      </div>
      <details className="reveal-panel games-reveal">
        <summary><span>Show more games</span><span className="summary-state" aria-hidden="true" /></summary>
        <div className="game-card-grid reveal-content">
          {games.slice(1).map((game) => <GameCard game={game} key={game.slug} />)}
        </div>
      </details>
    </>
  );
}
