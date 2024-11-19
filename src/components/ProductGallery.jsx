import { useEffect, useRef } from 'react';

const ProductGallery = ({ galleryConfig }) => {
  const galleryRef = useRef(null);
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo';

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: cloudName,
          mediaAssets: [
            { tag: 'electric_car_product_gallery_demo' }, // by default mediaType: "image"
            { tag: 'electric_car_product_gallery_demo', mediaType: 'video' },
            { tag: 'electric_car_360_product_gallery_demo', mediaType: 'spin' },
          ],
          ...galleryConfig,
        })
        .render();
    }
  }, [galleryConfig]);

  return (
    <div ref={galleryRef} style={{ width: '80%', margin: 'auto' }}>
      <div>Loading...</div>
    </div>
  );
};

export default ProductGallery;
