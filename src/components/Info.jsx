import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Info = () => {
    return (
      <section className="relative py-16 pb-32 mb-32 overflow-hidden bg-gradient-to-b from-black-900 to-gray-900 sm:py-20 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center lg:w-1/2 xl:w-2/5 lg:text-left lg:pr-8">
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj leading-tight">
              Adivirtus helps you train faster
            </h2>
          </div>
        </div>
      </section>
    );
};

export default Info;