'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/debug-upload',
      handler: 'debug-upload.index',
      config: {
        auth: false,
      },
    },
  ],
};
