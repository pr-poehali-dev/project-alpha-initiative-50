import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/e9c669a7-dc2b-4b36-90e6-21bb36bfa94f/files/fa160f8a-8e68-4731-9d03-aed910915eee.jpg"
          alt="Горный пейзаж — монтаж опоры ЛЭП"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Линия электропередачи</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-6 leading-none">
          ВЛ-43
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 uppercase tracking-widest">
          Анкерная опора. Горы. Любая точка.
        </p>
      </div>
    </div>
  );
}