'use strict';
const bootstrap = require('./bootstrap');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const provider = strapi.plugin('upload')?.provider;

    if (provider && typeof provider.uploadStream === 'function') {
      const originalUploadStream = provider.uploadStream;

      provider.uploadStream = async (...args) => {
        console.log('📦 Cloudinary uploadStream CALLED with:', args);
        return await originalUploadStream(...args);
      };
    }

    console.log('🧪 Provider loaded in bootstrap:', {
      type: typeof provider,
      isFunction: typeof provider?.upload === 'function',
      keys: Object.keys(provider || {}),
    });
  },
};
