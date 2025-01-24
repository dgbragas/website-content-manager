'use strict';

/**
 * daily-ui router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::daily-ui.daily-ui');
