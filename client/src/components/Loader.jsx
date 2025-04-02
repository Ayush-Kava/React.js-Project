import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen backdrop-blur-2xl">
      <motion.div
        className="w-12 h-12 bg-amber-200 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </div>
  );
};

export default Loader;
