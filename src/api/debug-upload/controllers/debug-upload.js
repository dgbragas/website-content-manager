'use strict';

module.exports = {
  async index(ctx) {
    const provider = strapi.plugin('upload').provider;

    ctx.send({
      providerName: provider?.constructor?.name || 'Unknown',
      providerInfo: {
        hasUpload: typeof provider?.upload === 'function',
        hasUploadStream: typeof provider?.uploadStream === 'function',
        hasDelete: typeof provider?.delete === 'function',
      },
    });
  },
};
