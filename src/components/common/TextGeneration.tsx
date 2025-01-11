import { motion } from "framer-motion";

interface TextGenerationProps {
  text: string;
  className: string;
}

const TextGeneration: React.FC<TextGenerationProps> = ({ text, className }) => {
  // Split text into individual letters
  const letters = text.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <motion.span
          className={`  w-full relative flex flex-wrap   ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="mr-2">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextGeneration;
