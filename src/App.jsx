import './App.css';
import ProductGallery from './components/ProductGallery';

function App() {
  return (
    <>
      <h1>Cloudinary Product Gallery - React</h1>
      <ProductGallery
        galleryConfig={{
          mediaAssets: [
            { tag: 'electric_car_product_gallery_demo' }, // by default mediaType: "image"
            { tag: 'electric_car_product_gallery_demo', mediaType: 'video' },
            { tag: 'electric_car_360_product_gallery_demo', mediaType: 'spin' },
          ],
          aspectRatio: '4:3',
        }}
      />
      <p>
        See the{' '}
        <a
          href="https://cloudinary.com/documentation/product_gallery_reference"
          target="_blank"
        >
          Product Gallery Reference
        </a>{' '}
        for the full list of possible parameters.
      </p>
    </>
  );
}
export default App;
