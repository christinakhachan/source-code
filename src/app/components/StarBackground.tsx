import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  drift: number;
};

type ShootingStar = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  distance: number;
};

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function createStars(count: number, offset: number): Star[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: seededRandom(index * 17 + offset) * 100,
    top: seededRandom(index * 23 + offset + 4) * 100,
    size: 10 + seededRandom(index * 29 + offset + 8) * 16,
    opacity: 0.22 + seededRandom(index * 31 + offset + 12) * 0.42,
    delay: seededRandom(index * 37 + offset + 16) * 5,
    duration: 4.8 + seededRandom(index * 41 + offset + 20) * 7.5,
    drift: 5 + seededRandom(index * 43 + offset + 24) * 16,
  }));
}

export default function StarBackground() {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 34, damping: 24, mass: 1 });
  const smoothY = useSpring(pointerY, { stiffness: 34, damping: 24, mass: 1 });
  const farX = useTransform(smoothX, [0, 1], [10, -10]);
  const farY = useTransform(smoothY, [0, 1], [7, -7]);
  const nearX = useTransform(smoothX, [0, 1], [-22, 22]);
  const nearY = useTransform(smoothY, [0, 1], [-15, 15]);

  const darkStars = useMemo(() => createStars(360, 3), []);
  const creamStars = useMemo(() => createStars(320, 101), []);

  const shootingStars = useMemo<ShootingStar[]>(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        left: 8 + seededRandom(index * 47 + 5) * 78,
        top: 6 + seededRandom(index * 53 + 9) * 56,
        delay: 3 + index * 5 + seededRandom(index * 59 + 11) * 6,
        duration: 1.7 + seededRandom(index * 61 + 15) * 0.85,
        distance: 180 + seededRandom(index * 67 + 21) * 150,
      })),
    []
  );

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth);
      pointerY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  const renderStarShape = (className: string) => (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.8l2.75 5.57 6.15.9-4.45 4.34 1.05 6.13L12 16.85 6.5 19.74l1.05-6.13L3.1 9.27l6.15-.9L12 2.8z" />
    </svg>
  );

  const renderStars = (stars: Star[], colorClass: string) =>
    stars.map((star) => (
      <motion.span
        key={star.id}
        className={`absolute block select-none ${colorClass}`}
        style={{
          left: `${star.left}%`,
          top: `${star.top}%`,
          width: star.size,
          height: star.size,
          opacity: star.opacity,
        }}
        animate={{
          opacity: [star.opacity, star.opacity * 0.34, star.opacity],
          scale: [1, 1.18, 1],
          x: [0, star.drift * 0.18, 0],
          y: [0, -star.drift, 0],
        }}
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {renderStarShape("h-full w-full")}
      </motion.span>
    ));

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
    >
      <motion.div className="absolute inset-[-8%]" style={{ x: farX, y: farY }}>
        {renderStars(darkStars, "text-[#261b31]/90")}
      </motion.div>

      <motion.div className="absolute inset-[-8%]" style={{ x: nearX, y: nearY }}>
        {renderStars(
          creamStars,
          "text-[#fffaf4] drop-shadow-[0_0_10px_rgba(255,250,244,0.72)]"
        )}
      </motion.div>

      {shootingStars.map((star, index) => (
        <motion.span
          key={star.id}
          className={`absolute block h-6 w-6 opacity-0 ${
            index % 2 === 0
              ? "text-[#fffaf4] drop-shadow-[0_0_10px_rgba(255,250,244,0.9)]"
              : "text-[#24192f] drop-shadow-[0_0_10px_rgba(81,64,98,0.65)]"
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            rotate: "-24deg",
          }}
          animate={{
            opacity: [0, 0.92, 0],
            x: [0, star.distance],
            y: [0, star.distance * 0.42],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 18,
            ease: "easeOut",
          }}
        >
          {renderStarShape("h-full w-full")}
        </motion.span>
      ))}
    </div>
  );
}
