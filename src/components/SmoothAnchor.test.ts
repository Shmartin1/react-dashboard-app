import { afterEach, beforeEach, expect, jest, test } from '@jest/globals';
import { scrollToTop } from './SmoothAnchor';

let scrollY = 1800;
let now = 0;
let frameId = 0;
const frames = new Map<number, FrameRequestCallback>();
const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY')!;

function advanceFrame(timestamp: number) {
  now = timestamp;
  const callbacks = Array.from(frames.values());
  frames.clear();
  callbacks.forEach(callback => callback(timestamp));
}

beforeEach(() => {
  scrollY = 1800;
  now = 0;
  frameId = 0;
  frames.clear();
  document.documentElement.dataset.motion = 'enabled';
  document.documentElement.style.setProperty('scroll-behavior', 'smooth', 'important');
  jest.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(5000);
  Object.defineProperty(window, 'scrollY', { configurable: true, get: () => scrollY });
  jest.spyOn(performance, 'now').mockImplementation(() => now);
  jest.spyOn(window, 'scrollTo').mockImplementation((options: number | ScrollToOptions, top?: number) => {
    scrollY = typeof options === 'number' ? top ?? 0 : options.top ?? scrollY;
  });
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
    const id = ++frameId;
    frames.set(id, callback);
    return id;
  });
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(id => { frames.delete(id); });
});

afterEach(() => {
  window.dispatchEvent(new Event('wheel'));
  document.documentElement.style.removeProperty('scroll-behavior');
  delete document.documentElement.dataset.motion;
  jest.restoreAllMocks();
  Object.defineProperty(window, 'scrollY', originalScrollY);
});

test('scrolling visibly advances through intermediate positions before reaching the target', () => {
  scrollToTop();
  expect(scrollY).toBe(1800);
  advanceFrame(250);
  expect(scrollY).toBeGreaterThan(0);
  expect(scrollY).toBeLessThan(1800);
  advanceFrame(1500);
  expect(scrollY).toBe(0);
  expect(frames.size).toBe(0);
  expect(document.documentElement.style.scrollBehavior).toBe('smooth');
  expect(document.documentElement.style.getPropertyPriority('scroll-behavior')).toBe('important');
});

test('manual scrolling cancels the animation without snapping to its destination', () => {
  scrollToTop();
  advanceFrame(250);
  const interruptedPosition = scrollY;
  window.dispatchEvent(new Event('wheel'));
  advanceFrame(1500);
  expect(scrollY).toBe(interruptedPosition);
  expect(frames.size).toBe(0);
  expect(document.documentElement.style.scrollBehavior).toBe('smooth');
});

test('paused motion reaches the destination immediately without scheduling animation', () => {
  document.documentElement.dataset.motion = 'paused';
  scrollToTop();
  expect(scrollY).toBe(0);
  expect(frames.size).toBe(0);
  expect(document.documentElement.style.scrollBehavior).toBe('smooth');
});
