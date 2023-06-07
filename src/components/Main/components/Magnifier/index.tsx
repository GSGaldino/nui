import React, { useState, useRef, useEffect } from 'react';

interface MagnifierProps {
  src: string;
}

const Magnifier: React.FC<MagnifierProps> = ({ src }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const { left, top, width, height } = imageRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
      const x = event.clientX - left;
      const y = event.clientY - top;
      const offsetX = (x / width) * 100;
      const offsetY = (y / height) * 100;
      setMagnifierPosition({ x: offsetX, y: offsetY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="Magnifier" ref={imageRef} style={{ display: 'block' }} />

      {showZoom && (
        <div
          ref={magnifierRef}
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            transform: `translate(${magnifierPosition.x}%, ${magnifierPosition.y}%)`,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '1px solid #ccc',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${src})`,
              backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imageRef.current?.width}px ${imageRef.current?.height}px`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Magnifier;
