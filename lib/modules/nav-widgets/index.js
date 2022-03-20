// Navigation widget used in the Nav section

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Navigation Widget',
  addFields: [
  { 
	  name: '_topNavOption',
	  type: 'joinByArray',
    label: 'Top Navigation Links',
    withType: 'apostrophe-page',
    idsField: 'topNavOptionId',
    // titleField: 'topNavOptionLabel',
    widgetType: 'page-link',
    required: true,
    limit: 10,  // Only 10 top navigation menus are allowed for performance reasons
    filters: {
      projection: {  // limit results for performance reasons
        title: 1,
        slug: 1
      }
    }
  }
  ],
  construct: (self, options) => {   
  }
  
};