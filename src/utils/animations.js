import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animatePage = (root) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => { };
    const context = gsap.context(() => {
        gsap.from('.hero-copy > *', { y: 32, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out' });

        gsap.from('.hero-art', { x: 80, opacity: 0, duration: 1.1, ease: 'power3.out', delay: .15 });

        gsap.utils.toArray('[data-reveal]').forEach((element) => {
            gsap.from(element, { y: 34, opacity: 0, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 84%' } });
        });

        gsap.utils.toArray('[data-stagger]').forEach((group) => {
            gsap.from(group.children, { y: 24, opacity: 0, duration: .55, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: group, start: 'top 82%' } });
        });
        
    }, root);
    return () => context.revert();
};
