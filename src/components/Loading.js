import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  const loadingRef = useRef(null);

  useEffect(() => {
    const loadingElement = loadingRef.current;
    const loadingText = loadingElement.querySelector('.loading-text');
    const loadingBar = loadingElement.querySelector('.loading-bar');
    const loadingBarInner = loadingElement.querySelector('.loading-bar-inner');

    // Initial animation
    gsap.fromTo(
      loadingText,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Loading bar animation
    gsap.to(loadingBarInner, {
      width: '100%',
      duration: 2,
      ease: 'power1.inOut',
      onComplete: () => {
        // Fade out animation
        gsap.to(loadingElement, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            loadingElement.style.display = 'none';
          }
        });
      }
    });
  }, []);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8 loading-text">
          Loading...
        </h1>
        <div className="w-64 h-2 bg-gray-800 rounded-full loading-bar">
          <div className="h-full bg-white rounded-full loading-bar-inner" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
};

export default Loading; 