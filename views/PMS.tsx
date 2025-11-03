import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

/* --------------------------------------------------------------- */
/*  Button – solid orange gradient, always visible                */
/* --------------------------------------------------------------- */
const Button = ({ children, href, className = '' }: { children: React.ReactNode; href: string; className?: string }) => (
  <RouterLink
    to={href}
    className={`inline-flex items-center border-2 border-orange-600 text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:text-white hover:scale-105 ${className}`}
  >
    {children}
  </RouterLink>
);

/* --------------------------------------------------------------- */
/*  PMS page – with Framer Motion animations                      */
/* --------------------------------------------------------------- */
const PMS: React.FC = () => {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl mx-auto py-20 flex flex-col items-center"
      >
        {/* Title with staggered letter animation */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-orange-950 drop-shadow-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {'Coming Soon'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.05,
                duration: 0.6,
                ease: 'easeOut',
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-2xl text-lg text-gray-700 mb-4"
        >
          We’re almost ready to unveil our PMS — crafted for investors who want{' '}
          <span className="font-semibold text-orange-900">research‑led wealth creation</span>, not noise.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="max-w-2xl text-lg text-gray-600 mb-12"
        >
          Stay connected, and we’ll let you know when we go live.
        </motion.p>

        {/* Buttons with staggered entry */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.6,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-2xl px-2"
          >
            <Button href="/contact">
              Get Started Now <ArrowUpRight className="ml-1" />
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-2xl px-2"
          >
            <Button href="#">Stay Updated</Button>
          </motion.div>
        </motion.div>

        {/* Optional: Pulsing dot indicator */}
        <motion.div
          className="mt-16 flex justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.div
            className="w-3 h-3 bg-orange-600 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="w-3 h-3 bg-orange-600 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          />
          <motion.div
            className="w-3 h-3 bg-orange-600 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default PMS;