import { useEffect, useRef } from 'react';

const ProductGallery = ({ galleryConfig }) => {
  const galleryRef = useRef(null);
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo';

  useEffect(() => {
    if (!galleryRef.current) return;

    const gallery = window.cloudinary.galleryWidget({
      container: galleryRef.current,
      cloudName: cloudName,
      ...galleryConfig,
    });
    gallery.render();

    // Remove the widget from memory when the config changes or the component unmounts
    return () => gallery.destroy();
  }, [galleryConfig, cloudName]);

  return (
    <div ref={galleryRef} style={{ width: '80%', margin: 'auto' }}>
      <div>Loading...</div>
    </div>
  );
};

export default ProductGallery;
