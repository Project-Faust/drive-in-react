// usePreloadImage.js
import { useEffect } from 'react';

const usePreloadImage = (images) => {
  useEffect(() => {
    const links = images.map((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = imageSrc;
      link.as = 'image';
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach(link => document.head.removeChild(link));
    };
  }, [images]);
};

export default usePreloadImage;