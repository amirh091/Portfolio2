import { useEffect, useRef, useState } from "react";

/**
 * Enveloppe un contenu pour l'animer à l'apparition au scroll.
 *
 * Props :
 * - as : la balise HTML à rendre (div, section, article, ...)
 * - delay : délai avant l'apparition, en millisecondes
 * - direction : 'up' | 'left' | 'right' | 'zoom'
 * - stagger : si true, anime chaque enfant en cascade (90 ms d'écart)
 * - className : classes CSS additionnelles
 * - children : le contenu à animer
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  direction = "up",
  stagger = false,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  // Si l'API IntersectionObserver n'existe pas, on affiche direct (fallback)
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // On n'anime qu'une seule fois
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  const classes = [
    "reveal",
    stagger && "reveal-stagger",
    direction !== "up" && `reveal--${direction}`,
    visible && "is-visible",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
