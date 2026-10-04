import React, { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, Cloud, Headphones, Radio } from 'lucide-react';
import Reveal from './Reveal';
import SmoothAnchor from './SmoothAnchor';
import ShinyText from './react-bits/ShinyText';
import '../styles/components/music.css';

const musicProjects = [
  {
    id: 'forgotten-senses',
    name: 'Forgotten Senses',
    status: 'Current',
    spotifyId: '43ifvvh7c6iD6lyxjbbC3J',
    soundcloud: 'https://soundcloud.com/forgottensenses',
  },
  {
    id: 'wil-and-martin',
    name: 'Wil & Martin',
    status: 'Previous',
    spotifyId: '5kccz2inHLQDfpMQsrafgX',
    soundcloud: 'https://soundcloud.com/wilandmartin',
  },
];

// Decorative artwork, independent of audio playback. All motion uses the site's motion preference.
const RecordArtwork: React.FC = () => (
  <div className="music-artwork" aria-hidden="true">
    <div className="music-artwork-grid" />
    <div className="music-orbit music-orbit--outer" />
    <div className="music-orbit music-orbit--inner" />
    <div className="music-record">
      <div className="music-record-grooves" />
      <div className="music-record-sheen" />
      <div className="music-record-label">
        <svg viewBox="0 0 100 48" fill="none">
          <path d="M0 24H15L21 12L29 37L37 4L46 44L54 11L62 35L69 18L76 24H100" />
        </svg>
        <span />
      </div>
    </div>
    <div className="music-artwork-caption"><span>House / Electronic</span></div>
  </div>
);

const Music: React.FC = () => (
  <div className="page-container music-page">
    <div className="app-main">
      <section className="music-hero" aria-labelledby="music-title">
        <div className="music-hero-copy">
          <p className="eyebrow"><Radio size={15} aria-hidden="true" /> Music & production</p>
          <h1 id="music-title">A different<br /><ShinyText text="frequency." /></h1>
          <p className="music-introduction">Outside of software engineering, I'm a DJ / music producer. I currently perform and release music under the Forgotten Senses alias.</p>
          <SmoothAnchor className="text-link music-jump" href="#music-projects">Find your next listen <ArrowDown size={16} aria-hidden="true" /></SmoothAnchor>
          <div className="music-spectrum" aria-hidden="true">
            {Array.from({ length: 32 }, (_, index) => (
              <span key={index} style={{
                '--bar-height': `${8 + Math.round(Math.abs(Math.sin(index * 0.7) * Math.cos(index * 0.23)) * 28)}px`,
                '--bar-delay': `${index * -0.13}s`,
                '--bar-duration': `${0.8 + (index % 5) * 0.18}s`,
              } as CSSProperties} />
            ))}
          </div>
        </div>
        <RecordArtwork />
      </section>

      <section className="music-projects" id="music-projects" tabIndex={-1} aria-label="Music projects">
        {musicProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80}>
            <article className={`music-project${index === 0 ? ' music-project--current' : ''}`} aria-labelledby={`${project.id}-title`}>
              <div className="music-project-copy">
                <p className="music-project-status"><span aria-hidden="true" />{project.status}</p>
                <h2 id={`${project.id}-title`}>{project.name}</h2>
                <div className="music-platforms">
                  <a className="button button-secondary music-spotify-link" href={`https://open.spotify.com/artist/${project.spotifyId}`} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${project.name} on Spotify (opens in a new tab)`}>
                    <Headphones size={16} aria-hidden="true" /> Spotify <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  {project.soundcloud && <a className="text-link" href={project.soundcloud} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${project.name} on SoundCloud (opens in a new tab)`}><Cloud size={17} aria-hidden="true" /> SoundCloud <ArrowUpRight size={15} aria-hidden="true" /></a>}
                </div>
              </div>
              <div className="music-player">
                <iframe
                  title={`${project.name} on Spotify`}
                  src={`https://open.spotify.com/embed/artist/${project.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  </div>
);

export default Music;
