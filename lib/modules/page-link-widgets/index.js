// Page link widget module used to link to a page 

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link to a Page',
  addFields: [
  {
	  name: '_page',
    type: 'joinByOne',
    withType: 'apostrophe-page',
    label: 'Page',
    required: true,
    idField: 'pageId',
    filters: {
      projection: {  // limit for performance
        title: 1,
        slug: 1
      }
    }
  }
  ]
};