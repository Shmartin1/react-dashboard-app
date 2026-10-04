import { expect, test } from '@jest/globals';
import { distance, haarPair, latticePoint, nearestLatticePoint, shortestLatticeVectors } from './researchMath';

test('Haar coefficients reconstruct their input and preserve energy', () => {
  for (const [a, b] of [[1, 1], [1, -1], [0.37, -0.62], [0, 0]]) {
    const { coarse, detail } = haarPair(a, b);
    expect((coarse + detail) / Math.SQRT2).toBeCloseTo(a, 12);
    expect((coarse - detail) / Math.SQRT2).toBeCloseTo(b, 12);
    expect(coarse ** 2 + detail ** 2).toBeCloseTo(a ** 2 + b ** 2, 12);
  }
  expect(haarPair(1, 1).detail).toBe(0);
  expect(haarPair(1, -1).coarse).toBe(0);
});

test('closest vector matches an exhaustive search across the interactive area', () => {
  for (const skew of [-1.2, -0.75, 0, 0.35, 0.5, 1.2]) {
    const points = Array.from({ length: 21 }, (_, i) =>
      Array.from({ length: 21 }, (_, j) => latticePoint(i - 10, j - 10, skew))).flat();
    for (const x of [-3.5, -1.9, 0, 0.49, 2.1, 3.5]) {
      for (const y of [-2.6, -0.8, 0, 0.41, 1.7, 2.6]) {
        const target = { x, y };
        const expected = Math.min(...points.map(point => distance(point, target)));
        expect(distance(nearestLatticePoint(target, skew), target)).toBeCloseTo(expected, 10);
      }
    }
    const onLattice = latticePoint(-3, 2, skew);
    expect(distance(nearestLatticePoint(onLattice, skew), onLattice)).toBe(0);
  }
});

test('shortest vectors exclude the origin, preserve ties, and can combine basis vectors', () => {
  const squareLike = shortestLatticeVectors(0);
  expect(squareLike).toHaveLength(2);
  expect(squareLike.every(point => point.i === 0 && Math.abs(point.j) === 1)).toBe(true);
  expect(shortestLatticeVectors(0.5)).toHaveLength(4);
  expect(shortestLatticeVectors(1.2).some(point => point.i === -1 && point.j === 1)).toBe(true);

  for (const skew of [-1.2, -0.5, 0, 0.35, 0.5, 1.2]) {
    const points = Array.from({ length: 13 }, (_, i) =>
      Array.from({ length: 13 }, (_, j) => latticePoint(i - 6, j - 6, skew))).flat()
      .filter(point => point.i !== 0 || point.j !== 0);
    const minimum = Math.min(...points.map(point => Math.hypot(point.x, point.y)));
    expect(shortestLatticeVectors(skew).every(point => point.i !== 0 || point.j !== 0)).toBe(true);
    for (const point of shortestLatticeVectors(skew)) expect(Math.hypot(point.x, point.y)).toBeCloseTo(minimum, 10);
  }
});
