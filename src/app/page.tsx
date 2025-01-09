import Carousel from "@/components/Carousel";
import { AnimatePresence } from "motion/react";

export default function Home() {
  return (
    <main>
      <AnimatePresence>
        <Carousel />
      </AnimatePresence>
    </main>
  );
}
