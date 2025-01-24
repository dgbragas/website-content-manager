'use strict';

/**
 * daily-ui service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-ui.daily-ui');
