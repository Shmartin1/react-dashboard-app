import React, { useId, useMemo, useRef, useState } from 'react';
import VisualFrame from './VisualFrame';
import { distance, haarPair, latticePoint, nearestLatticePoint, Point, shortestLatticeVectors } from '../data/researchMath';
import '../styles/components/visuals.css';
import '../styles/components/research-interactions.css';

const signal = Array.from({ length: 48 }, (_, i) => 0.7 * Math.sin(i * 0.24) + 0.24 * Math.sin(i * 1.8) + 0.6 * Math.exp(-Math.pow((i - 26) / 2, 2)));
const coefficients = Array.from({ length: 24 }, (_, i) => haarPair(signal[2 * i], signal[2 * i + 1]));
const approximation = coefficients.map(pair => pair.coarse);
const detail = coefficients.map(pair => pair.detail);
const plotX = (index: number, count: number) => 24 + index * 292 / (count - 1);
const plotY = (value: number, center: number) => center - value * 21;
const signalPath = (values: number[], center: number) => values.map((value, i) => `${i ? 'L' : 'M'}${plotX(i, values.length).toFixed(2)},${plotY(value, center).toFixed(2)}`).join(' ');
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const format = (value: number) => Math.abs(value) < 0.005 ? '0.00' : value.toFixed(2);

// SVG coordinates remain correct when the illustration scales on mobile.
const pointerPosition = (event: React.PointerEvent<SVGSVGElement>): Point | null => {
  const svg = event.currentTarget;
  const transform = svg.getScreenCTM();
  if (!transform) return null;
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(transform.inverse());
};

export const WaveletVisual: React.FC = () => {
  const [pair, setPair] = useState(12);
  const id = useId();
  const a = signal[pair * 2];
  const b = signal[pair * 2 + 1];
  const { coarse, detail: fine } = coefficients[pair];
  const coefficientX = plotX(pair, 24);
  const pairStart = plotX(pair * 2, 48);
  const pairEnd = plotX(pair * 2 + 1, 48);
  const selectPair = (event: React.PointerEvent<SVGSVGElement>) => {
    const point = pointerPosition(event);
    if (!point) return;
    const fraction = clamp((point.x - 24) / 292, 0, 1);
    setPair(point.y < 90 ? Math.floor(Math.round(fraction * 47) / 2) : Math.round(fraction * 23));
  };

  return <VisualFrame className="research-visual wavelet-visual">
    <figure>
      <div className="visual-heading"><span className="eyebrow">Finding the signal</span><span className="visual-status"><i /> HAAR TRANSFORM</span></div>
      <p className="visual-instruction" id={`${id}-hint`}>Hover over the signal to follow a pair of samples.</p>
      <svg className="wavelet-explorer" viewBox="0 0 340 264" role="img" aria-label={`Haar transform: samples ${pair * 2 + 1} and ${pair * 2 + 2}, coarse coefficient ${format(coarse)}, detail coefficient ${format(fine)}.`} onPointerMove={event => { if (event.pointerType !== 'touch') selectPair(event); }} onPointerDown={selectPair}>
        <rect x="0" y="0" width="340" height="264" fill="transparent" />
        <rect x={pairStart - 5} y="33" width={pairEnd - pairStart + 10} height="56" rx="5" className="signal-selection" />
        <path d={`M${(pairStart + pairEnd) / 2} 90L${coefficientX} 118V253`} className="signal-guide" />
        <rect x={coefficientX - 7} y="118" width="14" height="56" rx="5" className="signal-selection coarse-selection" />
        <rect x={coefficientX - 7} y="203" width="14" height="50" rx="5" className="signal-selection detail-selection" />
        <path d="M24 64H316M24 149H316M24 234H316" className="signal-axis" />
        <text x="24" y="24">INPUT SIGNAL</text><text x="24" y="109">COARSE STRUCTURE</text><text x="24" y="194">FINE DETAIL</text>
        <path d={signalPath(signal, 64)} className="signal-ghost" /><path d={signalPath(approximation, 149)} className="signal-ghost" /><path d={signalPath(detail, 234)} className="signal-ghost" />
        <path pathLength="1" d={signalPath(signal, 64)} className="signal-line input-line" />
        <path pathLength="1" d={signalPath(approximation, 149)} className="signal-line approximation-line" />
        <path pathLength="1" d={signalPath(detail, 234)} className="signal-line detail-line" />
        <circle cx={pairStart} cy={plotY(a, 64)} r="3.4" className="signal-sample" />
        <circle cx={pairEnd} cy={plotY(b, 64)} r="3.4" className="signal-sample" />
        <circle cx={coefficientX} cy={plotY(coarse, 149)} r="3.8" className="signal-sample coarse-sample" />
        <circle cx={coefficientX} cy={plotY(fine, 234)} r="3.8" className="signal-sample detail-sample" />
      </svg>
      <div className="explorer-control">
        <label htmlFor={`${id}-pair`}>Explore sample pair <span>{pair + 1} / 24</span></label>
        <input id={`${id}-pair`} type="range" min="0" max="23" step="1" value={pair} onChange={event => setPair(Number(event.target.value))} aria-describedby={`${id}-hint`} aria-valuetext={`Samples ${pair * 2 + 1} and ${pair * 2 + 2}: coarse ${format(coarse)}, detail ${format(fine)}`} />
      </div>
      <div className="wavelet-readout">
        <div><span>Input pair</span><strong>{format(a)} <em>/</em> {format(b)}</strong></div>
        <div><span>Coarse</span><strong>{format(coarse)}</strong><small>(a + b) / √2</small></div>
        <div><span>Detail</span><strong>{format(fine)}</strong><small>(a − b) / √2</small></div>
      </div>
      <figcaption>Coarse tracks the shared shape; detail captures local change. This illustrative split keeps all information. Compression comes from discarding coefficients.</figcaption>
    </figure>
  </VisualFrame>;
};

const origin = { x: 170, y: 140 };
const scale = 39;
const initialTarget = { x: 1.68, y: 1.15 };
const screen = (point: Point): Point => ({ x: origin.x + point.x * scale, y: origin.y - point.y * scale });
const world = (point: Point): Point => ({ x: (point.x - origin.x) / scale, y: (origin.y - point.y) / scale });
const inPlot = (point: Point) => point.x >= 18 && point.x <= 322 && point.y >= 20 && point.y <= 260;
const vectorLabel = (i: number, j: number) => `${i}b₁ ${j < 0 ? '−' : '+'} ${Math.abs(j)}b₂`;
const sameVector = (a: { i: number; j: number }, b: { i: number; j: number }) => a.i === b.i && a.j === b.j;

export const LatticeVisual: React.FC = () => {
  const [mode, setMode] = useState<'closest' | 'shortest'>('closest');
  const [skew, setSkew] = useState(0.35);
  const [target, setTarget] = useState<Point>(initialTarget);
  const [candidate, setCandidate] = useState({ i: 0, j: 1 });
  const [keyboardInteraction, setKeyboardInteraction] = useState(false);
  const activePointer = useRef<number | null>(null);
  const id = useId().replace(/:/g, '');
  const points = useMemo(() => Array.from({ length: 19 }, (_, i) => Array.from({ length: 11 }, (_, j) => latticePoint(i - 9, j - 5, skew))).flat().filter(point => inPlot(screen(point))), [skew]);
  const shortest = useMemo(() => shortestLatticeVectors(skew), [skew]);
  const nearest = nearestLatticePoint(target, skew);
  const chosen = latticePoint(candidate.i, candidate.j, skew);
  const chosenScreen = screen(chosen);
  const best = mode === 'closest' ? nearest : shortest.find(point => point.y > 0) || shortest[0];
  const end = screen(best);
  const start = mode === 'closest' ? screen(target) : origin;
  const bestDistance = mode === 'closest' ? distance(target, nearest) : Math.hypot(best.x, best.y);
  const chosenDistance = Math.hypot(chosen.x, chosen.y);
  const isShortest = shortest.some(point => sameVector(point, candidate));
  const basisOne = screen(latticePoint(1, 0, skew));
  const basisTwo = screen(latticePoint(0, 1, skew));

  const interact = (event: React.PointerEvent<SVGSVGElement>) => {
    const point = pointerPosition(event);
    if (!point) return;
    setKeyboardInteraction(false);
    const position = world({ x: clamp(point.x, 42, 298), y: clamp(point.y, 36, 244) });
    if (mode === 'closest') setTarget(position);
    else {
      const next = nearestLatticePoint(position, skew);
      if ((next.i !== 0 || next.j !== 0) && inPlot(screen(next))) setCandidate(previous => sameVector(previous, next) ? previous : { i: next.i, j: next.j });
    }
  };

  const handleKeys = (event: React.KeyboardEvent<SVGSVGElement>) => {
    const directions: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };
    if (event.key === 'Home') {
      setKeyboardInteraction(true);
      event.preventDefault();
      if (mode === 'closest') setTarget(initialTarget);
      else setCandidate({ i: 0, j: 1 });
      return;
    }
    const direction = directions[event.key];
    if (!direction) return;
    setKeyboardInteraction(true);
    event.preventDefault();
    if (mode === 'closest') {
      const step = event.shiftKey ? 0.3 : 0.1;
      setTarget(previous => ({ x: clamp(previous.x + direction[0] * step, -128 / scale, 128 / scale), y: clamp(previous.y + direction[1] * step, -104 / scale, 104 / scale) }));
    } else {
      setCandidate(previous => {
        const next = { i: previous.i + direction[0], j: previous.j + direction[1] };
        if (next.i === 0 && next.j === 0) { next.i += direction[0]; next.j += direction[1]; }
        return inPlot(screen(latticePoint(next.i, next.j, skew))) ? next : previous;
      });
    }
  };

  const changeSkew = (value: number) => {
    setSkew(value);
    setCandidate(previous => inPlot(screen(latticePoint(previous.i, previous.j, value))) ? previous : { i: 0, j: 1 });
  };
  const reset = () => { setSkew(0.35); setTarget(initialTarget); setCandidate({ i: 0, j: 1 }); };

  return <VisualFrame className={`research-visual lattice-visual lattice-${mode}`}>
    <figure>
      <div className="visual-heading"><span className="eyebrow">Geometry meets security</span><span className="visual-status"><i /> LATTICE LAB</span></div>
      <div className="visual-switch lattice-modes" role="group" aria-label="Lattice problem"><button type="button" aria-pressed={mode === 'closest'} onClick={() => setMode('closest')}>Closest vector</button><button type="button" aria-pressed={mode === 'shortest'} onClick={() => setMode('shortest')}>Shortest vector</button></div>
      <p className="visual-instruction" id={`${id}-hint`}>{mode === 'closest' ? 'Drag the amber target. Watch its nearest point change.' : 'Hover or tap a point to compare it with the shortest vectors.'}</p>
      <svg className="lattice-explorer" viewBox="0 0 340 280" role="group" tabIndex={0} aria-label={mode === 'closest' ? 'Closest vector interactive lattice' : 'Shortest vector interactive lattice'} aria-describedby={`${id}-hint ${id}-keys ${id}-result`} onKeyDown={handleKeys}
        onPointerDown={event => { if (event.button !== 0) return; activePointer.current = event.pointerId; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.focus({ preventScroll: true }); interact(event); }}
        onPointerMove={event => { if (activePointer.current === event.pointerId || (mode === 'shortest' && event.pointerType === 'mouse')) interact(event); }}
        onPointerUp={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); activePointer.current = null; }}
        onPointerCancel={() => { activePointer.current = null; }} onLostPointerCapture={() => { activePointer.current = null; }}>
        <defs><clipPath id={`${id}-clip`}><rect x="16" y="18" width="308" height="244" rx="10" /></clipPath><marker id={`${id}-arrow`} markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0 0L5 2.5L0 5Z" fill="#84c9ff" /></marker></defs>
        <rect x="16" y="18" width="308" height="244" rx="10" className="lattice-plot-background" />
        <g clipPath={`url(#${id}-clip)`}>
          {Array.from({ length: 11 }, (_, index) => index - 5).map(j => <line key={`row-${j}`} x1="0" x2="340" y1={screen(latticePoint(0, j, skew)).y} y2={screen(latticePoint(0, j, skew)).y} className="lattice-grid-line" />)}
          {Array.from({ length: 19 }, (_, index) => index - 9).map(i => { const a = screen(latticePoint(i, -6, skew)); const b = screen(latticePoint(i, 6, skew)); return <line key={`column-${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="lattice-grid-line" />; })}
          <circle cx={start.x} cy={start.y} r={bestDistance * scale} className="lattice-search-radius" />
          {points.map(point => { const position = screen(point); const winner = mode === 'closest' ? sameVector(point, nearest) : shortest.some(vector => sameVector(point, vector)); return <circle key={`${point.i}-${point.j}`} cx={position.x} cy={position.y} r={winner ? 4 : 2.4} className={winner ? 'lattice-answer' : 'lattice-point'} />; })}
          <path d={`M${origin.x} ${origin.y}L${basisOne.x} ${basisOne.y}M${origin.x} ${origin.y}L${basisTwo.x} ${basisTwo.y}`} className="basis-vector" />
          <text x={basisOne.x + 4} y={basisOne.y + 14}>b₁</text><text x={basisTwo.x - 8} y={basisTwo.y - 10}>b₂</text>
          {mode === 'shortest' && shortest.map(point => { const tip = screen(point); return <line key={`short-${point.i}-${point.j}`} x1={origin.x} y1={origin.y} x2={tip.x} y2={tip.y} className="lattice-shortest-line" />; })}
          {mode === 'shortest' && <><line x1={origin.x} y1={origin.y} x2={chosenScreen.x} y2={chosenScreen.y} className={`lattice-candidate-line ${isShortest ? 'is-shortest' : ''}`} /><circle cx={chosenScreen.x} cy={chosenScreen.y} r="7" className="lattice-candidate-ring" /></>}
          <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} className="lattice-solution" markerEnd={bestDistance > 0.12 ? `url(#${id}-arrow)` : undefined} />
          <circle cx={end.x} cy={end.y} r="9" className="lattice-pulse" />
          <circle cx={origin.x} cy={origin.y} r="4" className="lattice-origin" />
          {mode === 'closest' && <g className="lattice-drag-target"><circle cx={start.x} cy={start.y} r="15" className="lattice-target-halo" /><circle cx={start.x} cy={start.y} r="5" className="lattice-target" /><path d={`M${start.x - 9} ${start.y}H${start.x - 5}M${start.x + 5} ${start.y}H${start.x + 9}M${start.x} ${start.y - 9}V${start.y - 5}M${start.x} ${start.y + 5}V${start.y + 9}`} className="lattice-crosshair" /></g>}
        </g>
      </svg>
      <div className="lattice-readout" id={`${id}-result`}>
        <div><span>{mode === 'closest' ? 'Nearest point' : 'Your vector'}</span><strong>{mode === 'closest' ? vectorLabel(nearest.i, nearest.j) : vectorLabel(candidate.i, candidate.j)}</strong></div>
        <div><span>{mode === 'closest' ? 'Distance' : 'Length / shortest'}</span><strong>{mode === 'closest' ? format(bestDistance) : `${format(chosenDistance)} / ${format(bestDistance)}`}</strong></div>
        <p>{mode === 'closest' ? 'The ring reaches the nearest lattice point.' : isShortest ? 'You found a shortest nonzero vector.' : `${format(chosenDistance / bestDistance)}× the shortest length. Try a closer point.`}</p>
      </div>
      <p className="sr-only" role="status">{keyboardInteraction ? mode === 'closest' ? `Nearest point ${vectorLabel(nearest.i, nearest.j)}, distance ${format(bestDistance)}.` : `Your vector ${vectorLabel(candidate.i, candidate.j)}, length ${format(chosenDistance)}. Shortest length ${format(bestDistance)}.` : ''}</p>
      <div className="explorer-control lattice-skew-control"><label htmlFor={`${id}-skew`}>Basis skew <span>{skew.toFixed(2)}</span></label><input id={`${id}-skew`} type="range" min="-1.2" max="1.2" step="0.05" value={skew} onChange={event => changeSkew(Number(event.target.value))} aria-valuetext={`${skew.toFixed(2)}; second basis vector (${skew.toFixed(2)}, 0.82)`} /></div>
      <div className="lattice-tools"><button type="button" onClick={() => changeSkew(skew === 0 ? 0.75 : 0)}>{skew === 0 ? 'Skew the grid' : 'Straighten grid'}</button><button type="button" onClick={reset}>Reset lattice</button></div>
      <p className="visual-keyboard-hint" id={`${id}-keys`}>Keyboard: focus the grid, then use arrow keys. Home resets {mode === 'closest' ? 'the target' : 'your vector'}.</p>
      <figcaption>A 2D illustration of the problems in the paper. Cryptography uses much higher dimensions.</figcaption>
    </figure>
  </VisualFrame>;
};
