'use strict';

/**
 * star-wars-copy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::star-wars-copy.star-wars-copy');
