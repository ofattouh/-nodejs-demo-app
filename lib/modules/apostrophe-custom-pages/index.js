// in lib/modules/apostrophe-custom-pages/index.js

const _ = require('lodash');

module.exports = {
  beforeConstruct: function(self, options) {
    options.selectivePermissions = _.merge({
      seo: {
        update: {
          fields: [ 'title', 'tags', 'slug' ],
          // seeOtherFields: true  // By default all fields are hidden
        },
        manage: true,
        // insert: false,
        // trash: false,
        // submit: true  // works only with apostrophe work flow module
      }
    }, options.selectivePermissions || {});
  }
}