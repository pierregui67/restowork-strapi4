'use strict';

/**
 *  homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) =>  ({
  
    async find(ctx) {
        console.log(ctx)
        const response = await super.find(ctx);      
        return response;
    }
  }));