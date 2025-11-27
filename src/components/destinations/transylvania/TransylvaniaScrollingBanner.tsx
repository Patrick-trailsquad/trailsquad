import React, { useEffect, useRef } from "react";

const TransylvaniaScrollingBanner = () => {
  const text =
    "Husk at sikre dig din billet - vi lukker for billetsalget i løbet af december";
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    let frameId: number;
    let lastTime: number | null = null;
    let offset = 0;

    const animate = (time: number) => {
      if (!trackRef.current) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      if (lastTime === null) {
        lastTime = time;
      }

      const delta = time - lastTime;
      lastTime = time;

      const trackWidth = trackRef.current.scrollWidth;
      if (trackWidth === 0) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      const baseDuration = window.innerWidth < 768 ? 40000 : 50000; // ms for half track
      const baseSpeed = trackWidth / 2 / baseDuration; // px per ms
      const speedFactor = isHoveredRef.current ? 0.5 : 1; // 50% speed on hover
      const currentSpeed = baseSpeed * speedFactor;

      offset -= currentSpeed * delta;

      if (offset <= -trackWidth / 2) {
        offset += trackWidth / 2;
      }

      trackRef.current.style.transform = `translateX(${offset}px)`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <div className="w-full bg-charcoal py-3 overflow-hidden">
      <div
        ref={trackRef}
        className="whitespace-nowrap inline-flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Array(20)
          .fill(text)
          .map((item, index) => (
            <span
              key={index}
              className="inline-block px-8 text-white font-cabinet text-lg"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TransylvaniaScrollingBanner;
