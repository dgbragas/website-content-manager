module.exports = ({ env }) => {
  console.log('Cloudinary config:', {
    name: env('CLOUDINARY_NAME'),
    key: env('CLOUDINARY_KEY'),
    secret: env('CLOUDINARY_SECRET') ? '[OK]' : '[MISSING]',
  });

  return {
    upload: {
      config: {
        provider: 'cloudinary',
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
