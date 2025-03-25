const cloudinaryProvider = require('@strapi/provider-upload-cloudinary');

module.exports = ({ env }) => {
  console.log('☁️ Cloudinary Provider Loaded:', typeof cloudinaryProvider);

  return {
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
  };
};
