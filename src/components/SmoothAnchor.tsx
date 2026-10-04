import React from 'react';

let cancelActiveScroll: (() => void) | undefined;

function scrollToPosition(top: number, left = window.scrollX) {
  cancelActiveScroll?.();

  const root = document.documentElement;
  const startTop = window.scrollY;
  const startLeft = window.scrollX;
  const targetTop = Math.max(0, Math.min(top, root.scrollHeight - window.innerHeight));
  const distance = Math.hypot(targetTop - startTop, left - startLeft);
  const previousBehavior = root.style.getPropertyValue('scroll-behavior');
  const previousPriority = root.style.getPropertyPriority('scroll-behavior');
  const controller = new AbortController();
  let frame = 0;

  // Drive the transition ourselves; some browsers disable native smooth scrolling.
  // Individual frames must be immediate so CSS smooth scrolling cannot queue them.
  root.style.setProperty('scroll-behavior', 'auto', 'important');

  const finish = () => {
    window.cancelAnimationFrame(frame);
    controller.abort();
    if (previousBehavior) root.style.setProperty('scroll-behavior', previousBehavior, previousPriority);
    else root.style.removeProperty('scroll-behavior');
    cancelActiveScroll = undefined;
  };
  cancelActiveScroll = finish;

  if (root.dataset.motion !== 'enabled' || distance < 1) {
    window.scrollTo({ top: targetTop, left, behavior: 'auto' });
    finish();
    return;
  }

  const duration = Math.min(1000, Math.max(650, Math.sqrt(distance) * 18));
  const started = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - started) / duration, 1);
    const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    window.scrollTo({
      top: startTop + (targetTop - startTop) * eased,
      left: startLeft + (left - startLeft) * eased,
      behavior: 'auto'
    });
    if (progress < 1) frame = window.requestAnimationFrame(step);
    else finish();
  };

  // Let manual scrolling and keyboard navigation interrupt the transition.
  const options = { passive: true, signal: controller.signal };
  window.addEventListener('wheel', finish, options);
  window.addEventListener('touchstart', finish, options);
  window.addEventListener('pointerdown', finish, options);
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab', 'Escape'].includes(event.key)) finish();
  }, { signal: controller.signal });
  frame = window.requestAnimationFrame(step);
}

export function scrollToTop() {
  scrollToPosition(0, 0);
}

const SmoothAnchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: `#${string}` }> = ({ href, children, onClick, ...props }) => (
  <a {...props} href={href} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.focus({ preventScroll: true });
    const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const scrollMargin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    scrollToPosition(window.scrollY + target.getBoundingClientRect().top - scrollPadding - scrollMargin);
    if (window.location.hash !== href) window.history.pushState(window.history.state, '', href);
  }}>{children}</a>
);

export default SmoothAnchor;
