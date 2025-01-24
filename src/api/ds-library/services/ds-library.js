'use strict';

/**
 * ds-library service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ds-library.ds-library');
