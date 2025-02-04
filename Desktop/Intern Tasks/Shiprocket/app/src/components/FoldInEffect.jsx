import { motion } from "framer-motion";

function FoldOutEffect() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="bg-blue-500 w-64 h-64 flex justify-center items-center text-white text-xl"
        initial={{ scaleY: 0 }} // Start collapsed
        animate={{ scaleY: 1 }}  // Animate to full size
        exit={{ scaleY: 0 }}     // Animate to collapsed when exiting
        transition={{ duration: 1 }}  // Transition duration
        style={{ originY: 0.5 }}      // Set the fold's origin to the center vertically
      >
        Unfold
      </motion.div>
    </div>
  );
}

export default FoldOutEffect;
