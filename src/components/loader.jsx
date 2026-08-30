const letters = [...'Vishal Mathur'];
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center"
    >
      <p
        className="flex text-xl font-semibold tracking-[0.08em] text-zinc-900"
        aria-label="Vishal Mathur"
      >
        {letters.map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            initial={{ opacity: 0.15, y: 5 }}
            animate={{ opacity: [0.15, 1, 0.15], y: [5, 0, 5] }}
            transition={{
              duration: 0.75,
              delay: index * 0.09,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.55,
            }}
            className={character === ' ' ? 'w-2' : ''}
          >
            {character === ' ' ? '\u00A0' : character}
          </motion.span>
        ))}
      </p>
      <span className="sr-only">Vishal Mathur</span>
    </motion.div>
  );
}
