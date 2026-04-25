import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";

const stats = [
  { value: "5.0 / 5", label: "Note Google" },
  { value: "30 000+", label: "Séances de coaching" },
  { value: "2 000+", label: "Parents accompagnés" },
  { value: "12 ans", label: "D'expérience pro" },
];

const SocialProofBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-foreground/20"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center px-12 py-5 md:py-0">
              <p className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBar;
