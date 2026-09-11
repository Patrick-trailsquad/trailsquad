import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "../../../hooks/use-mobile";

interface ParallaxBackgroundProps {
  image: string;
  overlayClassName?: string;
}

/**
 * Full-bleed parallax background.
 * Desktop uses background-attachment: fixed (cheap, smooth).
 * Mobile browsers ignore fixed attachment, so we animate the layer on scroll instead.
 */
const ParallaxBackground = ({ image, overlayClassName = "bg-black/55" }: ParallaxBackgroundProps) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {isMobile ? (
        <motion.div
          style={{
            y,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute -top-[15%] left-0 w-full h-[130%]"
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
};

export default ParallaxBackground;
