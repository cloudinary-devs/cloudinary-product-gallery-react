# Cloudinary Product Gallery - React

This app shows a basic React component for the Cloudinary Product Gallery Widget.

This sample loads the Product Gallery widget with the standalone script embed (`all.js`, pinned to a specific version in `index.html`) and wraps it in a React component. It destroys the widget when the config changes or the component unmounts. To use the `@cloudinary/product-gallery` npm package instead (for example, for server-side rendering), see [Choosing a distribution](https://cloudinary.com/documentation/product_gallery#choosing_a_distribution).

To run locally:

1. `npm i`
2. `npm run dev`

To set your cloud name, create a .env file and set `VITE_CLOUDINARY_CLOUD_NAME` to your cloud name.

## Gallery config

The `galleryConfig` prop refers to the [Configuration parameters](https://cloudinary.com/documentation/product_gallery_reference) for configuring and customizing the Product Gallery, for example the look and feel of the gallery.
