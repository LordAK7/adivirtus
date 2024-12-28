import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Rehan",
    role: "Chief Product Officer",
    image: "/Team/RehanOP.png"
  },
  {
    name: "Aditya Vijay Kamble",
    role: "Founder & Chief Executive Officer",
    image: "/Team/God.jpeg",
    isLarge: true
  },
  {
    name: "Vijay Kamble",
    role: "Mentor and Advisor",
    image: "/Team/Vijay.png",
    isLarge: true
  },
  {
    name: "Suyesh Gawde",
    role: "Chief Operations Officer",
    image: "/Team/Suyesh.png"
  },
  {
    name: "Gauri Dhuri",
    role: "HR & Secretary",
    image: "/Team/Gauri.png"
  },
  {
    name: "Tristan D'Souza",
    role: "Chief Finance Officer",
    image: "/Team/Tristan.png"
  },
  {
    name: "Aryan Yuvraj",
    role: "Chief Research Officer",
    image: "/Team/Aryan.jpg"
  },
  {
    name: "Yadnesh Ubale",
    role: "Chief Technology Officer",
    image: "/Team/Yadnesh.png"
  }
];  

const TeamMember = ({ image, name, role, isLarge, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`relative overflow-hidden lg:order-2 group ${isLarge ? 'row-span-2' : ''}`}
    >
      <img 
        className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110" 
        src={image} 
        alt={name} 
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
        <div className="scale-90 sm:scale-100">
          <p className="text-base font-semibold text-white">{name}</p>
          <p className="mt-1 text-sm font-normal text-gray-300">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="overflow-hidden bg-zinc-900 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="col-span-2 px-8 py-12 text-center xl:px-12 xl:pr-24 lg:text-left lg:order-1"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Meet the Team</h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">
              Adivirtus is driven by a passionate team of innovators, each bringing unique expertise to redefine learning and workforce solutions. Together, we’re turning bold ideas into impactful realities.
              </p>
            </motion.div>

            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-end justify-start px-8 py-8 xl:px-12 lg:order-4"
            >
              <a href="#" title="" className="inline-flex items-center text-sm font-semibold text-gray-300 transition-all duration-200 group hover:text-white hover:underline">
                Watch our content
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
