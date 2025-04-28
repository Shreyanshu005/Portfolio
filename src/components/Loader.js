import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut'
    });
    
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, 0);
    
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      delay: 1
    });
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="text-6xl font-bold mb-8" ref={textRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <span className="text-white">S</span>
        <span className="text-white">hreyanshu</span>
      </div>
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div ref={progressRef} className="h-full w-0 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;