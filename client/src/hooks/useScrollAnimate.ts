// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | mithaq.support@gmail.com
/**
 * useScrollAnimate — Intersection Observer hook for scroll-triggered animations.
 *
 * Usage:
 *   const ref = useScrollAnimate();
 *   <div ref={ref} className="scroll-animate">...</div>
 *
 * Or for a container whose children animate with stagger:
 *   const ref = useScrollAnimate({ stagger: true });
 *   <div ref={ref}>
 *     <div className="scroll-animate scroll-delay-1">Child 1</div>
 *     <div className="scroll-animate scroll-delay-2">Child 2</div>
 *   </div>
 */
import { useEffect, useRef } from "react";

interface ScrollAnimateOptions {
  /** Trigger when this fraction of the element is visible (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for earlier triggering. Default: "0px 0px -40px 0px" */
  rootMargin?: string;
  /** If true, observe children with .scroll-animate class instead of the ref element */
  stagger?: boolean;
  /** Only animate once (default: true) */
  once?: boolean;
}

export function useScrollAnimate<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimateOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.1, rootMargin = "0px 0px -40px 0px", stagger = false, once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Immediately show everything
      if (stagger) {
        el.querySelectorAll(".scroll-animate, .scroll-animate-scale, .scroll-animate-left, .scroll-animate-right")
          .forEach(child => child.classList.add("scroll-visible"));
      } else {
        el.classList.add("scroll-visible");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (stagger) {
      el.querySelectorAll(".scroll-animate, .scroll-animate-scale, .scroll-animate-left, .scroll-animate-right")
        .forEach(child => observer.observe(child));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, stagger, once]);

  return ref;
}

export default useScrollAnimate;
