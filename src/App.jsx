import './App.css';
import ProductGallery from './components/ProductGallery';

function App() {
  return (
    <>
      <h1>Cloudinary Product Gallery - React</h1>
      <ProductGallery galleryConfig={{ aspectRatio: '4:3' }} />
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
