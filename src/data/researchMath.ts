export type Point = { x: number; y: number };
export type LatticePoint = Point & { i: number; j: number };
export const ROW_HEIGHT = 0.82;

export const haarPair = (a: number, b: number) => ({
  coarse: (a + b) / Math.SQRT2,
  detail: (a - b) / Math.SQRT2
});

export const latticePoint = (i: number, j: number, skew: number): LatticePoint => ({
  i, j, x: i + j * skew, y: j * ROW_HEIGHT
});

export const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

export const nearestLatticePoint = (target: Point, skew: number): LatticePoint => {
  const row = Math.round(target.y / ROW_HEIGHT);
  let best = latticePoint(Math.round(target.x - row * skew), row, skew);
  const radius = distance(target, best);
  // Any row farther away vertically than this candidate cannot improve it.
  const firstRow = Math.ceil((target.y - radius) / ROW_HEIGHT);
  const lastRow = Math.floor((target.y + radius) / ROW_HEIGHT);
  for (let j = firstRow; j <= lastRow; j++) {
    const candidate = latticePoint(Math.round(target.x - j * skew), j, skew);
    if (distance(target, candidate) < distance(target, best)) best = candidate;
  }
  return best;
};

export const shortestLatticeVectors = (skew: number): LatticePoint[] => {
  const candidates = [latticePoint(1, 0, skew), latticePoint(-1, 0, skew)];
  // b1 has length 1, so rows with |j| * ROW_HEIGHT > 1 cannot win.
  for (let j = -Math.floor(1 / ROW_HEIGHT); j <= Math.floor(1 / ROW_HEIGHT); j++) {
    if (j === 0) continue;
    const left = Math.floor(-j * skew);
    candidates.push(latticePoint(left, j, skew));
    if (left !== Math.ceil(-j * skew)) candidates.push(latticePoint(left + 1, j, skew));
  }
  const minimum = Math.min(...candidates.map(point => Math.hypot(point.x, point.y)));
  return candidates.filter(point => Math.abs(Math.hypot(point.x, point.y) - minimum) < 1e-9);
};
