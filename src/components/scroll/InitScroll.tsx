import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function InitScroll() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".animate-in-up").forEach((el) => {
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
          ease: "sine",
        },
        {
          y: 0,
          delay,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      document.body,
      {
        opacity: 0,

        ease: "sine",
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: document.body,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.utils.toArray<HTMLElement>(".promo-image").forEach((el) => {
      gsap.fromTo(
        el,
        {
          delay: 0.6,
          x: 30,
          opacity: 0,
          ease: "sine",
          duration: 1,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "sine",
        }
      );
    });
  }, []);
  return <></>;
}
