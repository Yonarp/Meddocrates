'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    find(params, populate) {
        // console.log("hello")
        return strapi.query('sale').find(params, populate);
    },
};
