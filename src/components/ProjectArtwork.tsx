import React, { useId } from 'react';
import { Check, Code2, Sparkles } from 'lucide-react';
import VisualFrame from './VisualFrame';
import { ProjectArtworkKind } from '../data/portfolio';
import '../styles/components/visuals.css';
import '../styles/components/project-previews.css';

const WindowBar = ({ title }: { title: string }) => <div className="art-window-bar"><span /><span /><span /><em>{title}</em></div>;

const ChromesthesiaArtwork: React.FC = () => {
  const id = useId().replace(/:/g, '');
  return <div className="chromesthesia-art art-window">
    <WindowBar title="chromesthesia / sound, seen" />
    <svg viewBox="0 0 310 218" className="sound-world">
      <defs>
        <radialGradient id={`${id}-orb`} cx="32%" cy="25%" r="75%"><stop offset="0" stopColor="#a1e2ff" /><stop offset="0.32" stopColor="#4b9cff" /><stop offset="0.72" stopColor="#3457cf" /><stop offset="1" stopColor="#172359" /></radialGradient>
        <linearGradient id={`${id}-ribbon`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#b7c9ff" /><stop offset="0.5" stopColor="#b196e8" /><stop offset="1" stopColor="#eeadc8" /></linearGradient>
        <linearGradient id={`${id}-filament`}><stop offset="0" stopColor="#c59bff" /><stop offset="0.5" stopColor="#faadcd" /><stop offset="1" stopColor="#70dfff" /></linearGradient>
      </defs>
      <ellipse cx="155" cy="149" rx="116" ry="18" className="sound-ground" />
      <g className="sound-orb"><circle cx="76" cy="115" r="40" className="sound-orb-halo" /><circle cx="76" cy="115" r="29" fill={`url(#${id}-orb)`} /><ellipse cx="69" cy="102" rx="12" ry="7" fill="#caf0ff" opacity="0.2" /></g>
      <g className="sound-ribbon"><path d="M131 147C201 125 100 115 168 71C188 59 190 40 176 32C219 62 161 92 179 110C205 133 164 155 131 147Z" fill={`url(#${id}-ribbon)`} opacity="0.68" /><path d="M144 151C201 117 115 102 178 53" fill="none" stroke="#e5d3ff" strokeWidth="1.2" opacity="0.8" /></g>
      <g className="sound-filaments" fill="none" stroke={`url(#${id}-filament)`} strokeLinecap="round"><path d="M204 135C274 155 193 51 256 65C302 75 212 105 271 126" strokeWidth="2" /><path d="M211 124C268 161 229 62 272 91C297 116 222 109 268 142" strokeWidth="1.2" /><path d="M225 148C249 115 214 87 257 84" strokeWidth="0.8" /></g>
      <path d="M17 185H293" className="sound-wave-axis" />
      {Array.from({ length: 34 }, (_, index) => { const height = 6 + (Math.sin(index * 0.81) * 0.5 + 0.5) * 25; return <rect key={index} x={20 + index * 8.1} y={185 - height / 2} width="3" height={height} rx="1.5" className="sound-bar" style={{ animationDelay: `${-index * 0.13}s` }} />; })}
      <text x="17" y="210">AUDIO → COLOR / FORM / MOTION</text>
    </svg>
    <div className="sound-tags"><span>Local audio</span><span>Personal perception</span></div>
  </div>;
};

const captions: Record<ProjectArtworkKind, string> = {
  chromesthesia: 'AUDIO / CREATIVE CODING', portfolio: 'THIS WEBSITE / OPEN SOURCE', frontend: 'FRONTEND / FUNDAMENTALS', roast: 'MOBILE / AI'
};

const ProjectArtwork: React.FC<{ kind: ProjectArtworkKind }> = ({ kind }) => (
  <VisualFrame className={`project-artwork artwork-${kind}`}>
    <div className="artwork-grid" aria-hidden="true" />
    <div className="artwork-scene" aria-hidden="true">
      {kind === 'chromesthesia' && <ChromesthesiaArtwork />}
      {kind === 'portfolio' && <div className="dashboard-art art-window">
        <WindowBar title="portfolio / overview" />
        <div className="dashboard-art-content">
          <div className="art-sidebar"><span className="art-logo">&lt;jm/&gt;</span><i /><i /><i /></div>
          <div className="art-dashboard-main">
            <div className="art-heading-line" />
            <div className="art-metrics"><span /><span /><span /></div>
            <svg viewBox="0 0 210 90" className="art-chart"><path className="chart-grid" d="M0 20H210M0 45H210M0 70H210" /><path className="chart-fill" d="M0 74L24 62L48 68L72 40L96 46L120 20L144 31L170 8L195 17L210 3V90H0Z" /><path pathLength="1" className="chart-trace" d="M0 74L24 62L48 68L72 40L96 46L120 20L144 31L170 8L195 17L210 3" /></svg>
            <div className="art-task"><Check size={10} /><span /><i /></div><div className="art-task"><Check size={10} /><span /><i /></div>
          </div>
        </div>
      </div>}
      {kind === 'frontend' && <div className="code-art art-window">
        <WindowBar title="build / preview" />
        <div className="code-art-body"><div className="art-code"><span className="code-purple">.card</span> {'{'}<br /><span className="code-indent">display: <b>grid</b>;</span><br /><span className="code-indent">gap: <b>1rem</b>;</span><br />{'}'}<span className="code-cursor" /></div><div className="code-preview"><div className="preview-tile tile-one" /><div className="preview-tile tile-two" /><div className="preview-tile tile-three" /><div className="preview-tile tile-four" /></div></div>
        <div className="code-tabs"><span>HTML</span><span className="selected">CSS</span><span>JavaScript</span><Check size={12} /></div>
      </div>}
      {kind === 'roast' && <div className="roast-art">
        <span className="floating-chip chip-photo">PHOTO <span>→</span></span>
        <div className="art-phone"><div className="phone-island" /><div className="phone-title"><Sparkles size={12} /> roast me</div><div className="phone-photo"><svg viewBox="0 0 120 115"><circle cx="60" cy="39" r="23" /><path d="M18 112C18 63 102 63 102 112" /></svg><div className="photo-scan" /><span className="photo-corner corner-top" /><span className="photo-corner corner-bottom" /></div><div className="roast-bubble"><Sparkles size={12} /><span>Confidence?<br /><strong>Absolutely unmatched.</strong></span></div><div className="phone-home" /></div>
        <span className="floating-chip chip-roast"><Code2 size={12} /> AI / REACT NATIVE</span>
      </div>}
    </div>
    <div className="artwork-caption"><span>{captions[kind]}</span><span>{kind === 'chromesthesia' ? 'Visual illustration' : 'Interface illustration'}</span></div>
  </VisualFrame>
);

export default ProjectArtwork;
