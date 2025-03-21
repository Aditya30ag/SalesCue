import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div>
      <div className="pt-20">
        <section className="relative overflow-hidden py-24">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </section>
      </div>
    </div>
  );
}
