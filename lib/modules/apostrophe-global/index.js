// This file defines the global site configuration

module.exports = {
  
  addFields: [
    {
      type: 'string',
      name: 'externalStyles',
      label: 'External Styles'
      // def: '/modules/beyond-silence-theme/public/css/'
	  },
    {
      type: 'string',
      name: 'logo',
      label: 'Theme Logo',
      required: true
    },
    {
      type: 'string',
      name: 'favicon',
      label: 'Theme FavIcon',
      required: true
    },
    {
      type: 'string',
      name: 'copyright',
      label: 'Copyright Information'
    },
    {
      name: 'siteTitle',
      type: 'string',
      label: 'Site Title'
    },
    {
      name: 'defaultImage',
      label: 'Default Header Image',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 50,
        //minSize: [200, 200],
        aspectRatio: [1, 1]
      }
    },
    {
      name: 'defaultDescription',
      type: 'string',
      label: 'Default Header Description'
    }
  ],
  arrangeFields: [
    {
      name: 'theme_settings',
      label: 'Theme Settings',
      fields: ['externalStyles', 'copyright', 'logo', 'favicon']
    },
	  {
      name: 'seo_settings',
      label: 'SEO Settings',
      fields: [ 'siteTitle', 'defaultImage', 'defaultDescription']
    }
  ],
  construct: (self, options) => {}
  
};
