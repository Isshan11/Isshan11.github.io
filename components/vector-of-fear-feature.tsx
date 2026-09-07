'use client';

const tools = ['Unity', 'C#', 'Blender', 'Substance 3D Painter', 'Shader Graph', 'VFX Graph', 'Timeline'];

export function VectorOfFearFeature() {
  function openContribution() {
    const dialog = document.getElementById('vector-contribution-dialog');
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  }

  function restoreTriggerFocus() {
    document.getElementById('vector-contribution-trigger')?.focus();
  }

  return (
    <>
      <article className="game-feature">
        <div className="game-badge">Ubisoft’s Choice · 2nd Year</div>
        <p className="project-eyebrow">Unity / C# / Blender / Substance</p>
        <h3>Vector of Fear</h3>
        <p>A survival-horror game set aboard a damaged vessel drifting through deep space. As the ship&apos;s engineer, the player must repair the vessel, escape lockdown, and survive the threat onboard.</p>
        <div className="game-feature-action">
          <button id="vector-contribution-trigger" className="contribution-trigger" type="button" aria-haspopup="dialog" onClick={openContribution}>
            <span>Show contribution</span>
            <span className="contribution-trigger-icon" aria-hidden="true">+</span>
          </button>
        </div>
      </article>

      <dialog id="vector-contribution-dialog" className="contribution-dialog" aria-labelledby="vector-contribution-title" aria-describedby="vector-contribution-description" onClose={restoreTriggerFocus}>
        <div className="contribution-dialog-header">
          <div>
            <p className="project-eyebrow">Game contribution / Vector of Fear</p>
            <h2 id="vector-contribution-title" className="contribution-dialog-title">What I worked on</h2>
            <p id="vector-contribution-description" className="sr-only">Isshan Marwah&apos;s art, animation, Unity, visual effects, and code contributions to Vector of Fear.</p>
          </div>
          <form method="dialog">
            <button className="dialog-close-button" type="submit" aria-label="Close contribution window">×</button>
          </form>
        </div>

        <div className="contribution-dialog-scroll">
          <div className="vector-case-study">
            <div className="vector-overview">
              <div>
                <p className="project-eyebrow">About the game</p>
                <p>Vector of Fear is a Unity sci-fi survival-horror game about an engineer trapped aboard a damaged vessel in lockdown. It was featured at Level Up Student Showcase 2026 and selected as the 2nd-Year Ubisoft’s Choice at Ontario Tech University’s GameCon.</p>
              </div>
              <div>
                <p className="project-eyebrow">My role</p>
                <h3>3D Art, Animation &amp; Technical Implementation</h3>
                <p>I handled the complete visual pipeline—from models, textures, and animation to Unity integration, real-time effects, audio synchronization, and supporting code.</p>
              </div>
            </div>
            <div className="contribution-grid">
              <article className="contribution-card">
                <span>01</span><h4>Asset Creation</h4>
                <p>Created all models, textures, and animations for the game, including characters, props, environments, first-person assets, and the Blender-built space sky map.</p>
              </article>
              <article className="contribution-card">
                <span>02</span><h4>Unity Implementation</h4>
                <p>Integrated the assets in Unity and set up animation systems, Timeline sequences, triggers, cutscenes, sound cues, and event timing to bring each scene together.</p>
              </article>
              <article className="contribution-card">
                <span>03</span><h4>Shaders, VFX &amp; Code</h4>
                <p>Built Shader Graph and VFX Graph effects for the black hole, spaceship thrusters, weapons, and particles, then adjusted C# code to synchronize triggers, animation, sound, and effects.</p>
              </article>
            </div>
            <div className="case-study-footer">
              <ul className="case-study-tools" aria-label="Vector of Fear tools">
                {tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
              <a className="case-study-link" href="https://seraphstudios.itch.io/vector-of-fear" target="_blank" rel="noreferrer">View on Itch.io <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
