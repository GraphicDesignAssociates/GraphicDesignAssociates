import React, { useRef, useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import { keyframes, SxProps, Theme } from '@mui/material/styles';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

interface CarouselProps {
  children: React.ReactNode;
  /** Duration in seconds for one complete scroll cycle (default: 40) */
  duration?: number;
  /** Whether to pause animation on hover (default: true) */
  pauseOnHover?: boolean;
  /** Whether to show fade edges (default: true) */
  fadeEdges?: boolean;
  /** Custom sx props for the container */
  sx?: SxProps<Theme>;
}

const Carousel = ({
  children,
  duration = 40,
  pauseOnHover = true,
  fadeEdges = true,
  sx,
}: CarouselProps): JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      e.preventDefault();
      const x = e.pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      trackRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!trackRef.current) return;
      const x = e.touches[0].pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      trackRef.current.scrollLeft = scrollLeft - walk;
    },
    [startX, scrollLeft],
  );

  const handleTouchEnd = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsDragging(false);
      setIsPaused(false);
    };
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseUp]);

  return (
    <Box
      ref={trackRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        contain: 'inline-size',
        cursor: isDragging ? 'grabbing' : 'grab',
        py: 2,
        ...(fadeEdges && {
          maskImage:
            'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }),
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          animation: `${scroll} ${duration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {children}
        {children}
      </Box>
    </Box>
  );
};

export default Carousel;
