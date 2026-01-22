import React from 'react';
import { motion } from 'framer-motion';

const imageUrl = "https://ddnnmcfbgqnhcuozurio.supabase.co/storage/v1/object/public/sincrohealth/metricas%20.webp";

const AnimatedPhone: React.FC = () => {
  return (
    <motion.div 
        className="relative w-[300px] h-[600px] bg-deep-navy rounded-[40px] shadow-2xl shadow-sincro-blue/20 border-4 border-gray-800"
        style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateY(15deg) rotateX(-10deg)'
        }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
    >
      {/* Pantalla Interactiva con Scroll */}
      <div className="absolute inset-2 bg-black rounded-[32px] overflow-hidden z-10">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30"></div> {/* Isla dinámica */}
        <div className="absolute inset-0 overflow-y-auto no-scrollbar overscroll-contain">
            <img
              src={imageUrl}
              className="w-full h-auto object-top"
              alt="Métricas de Kura AI pruebastrando reducción de ausentismo y aumento de ROI"
            />
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedPhone;
