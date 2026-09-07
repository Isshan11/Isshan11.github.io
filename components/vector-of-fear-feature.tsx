'use client';

import { ArrowUpRight, Plus, X } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const tools = ['Unity', 'C#', 'Blender', 'Substance 3D Painter', 'Shader Graph', 'VFX Graph', 'Timeline'];

export function VectorOfFearFeature() {
  return (
    <Dialog>
      <article className="game-feature">
        <div className="game-badge">Ubisoft’s Choice · 2nd Year</div>
        <p className="project-eyebrow">Unity / C# / Blender / Substance</p>
        <h3>Vector of Fear</h3>
        <p>A survival-horror game set aboard a damaged vessel drifting through deep space. As the ship&apos;s engineer, the player must repair the vessel, escape lockdown, and survive the threat onboard.</p>
        <div className="game-feature-action">
          <DialogTrigger className="contribution-trigger" type="button">
            <span>Show contribution</span>
            <span className="contribution-trigger-icon" aria-hidden="true"><Plus size={17} /></span>
          </DialogTrigger>
        </div>
      </article>

      <DialogContent className="contribution-dialog" showCloseButton={false}>
        <div className="contribution-dialog-header">
          <div>
            <p className="project-eyebrow">Game contribution / Vector of Fear</p>
            <DialogTitle className="contribution-dialog-title">What I worked on</DialogTitle>
            <DialogDescription className="sr-only">Isshan Marwah&apos;s art, animation, Unity, visual effects, and code contributions to Vector of Fear.</DialogDescription>
          </div>
          <DialogClose className="dialog-close-button" type="button" aria-label="Close contribution window"><X size={19} /></DialogClose>
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
              <a className="case-study-link" href="https://seraphstudios.itch.io/vector-of-fear" target="_blank" rel="noreferrer">View on Itch.io <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
