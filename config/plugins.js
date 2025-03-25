const rawProvider = require('@strapi/provider-upload-cloudinary');

const cloudinaryProvider = () => rawProvider;

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: cloudinaryProvider,
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
