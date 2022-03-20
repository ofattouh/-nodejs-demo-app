// This configures the apostrophe-pages module to add a "home" page type to the pages menu

module.exports = {
  types: [
	  {
	    name: 'home',  // Landing page
	    label: 'Landing'
	  },
	  {
	    name: 'training',  // Training page
	    label: 'Training Page',
	  },
	  {
	    name: 'resources',  // Resources page
	    label: 'Resources Page',
	  },
	  {
	    name: 'research',  // Research page
	    label: 'Research Page',
	  },
	  {
	    name: 'app',  // App page
	    label: 'App Page',
	  },
	  {
	    name: 'about-us',  // About Us page
	    label: 'About Us Page',
	  },
	  {
	    name: 'no-access',  // Unauthorized access
	    label: '401 - Unauthorized Access Error',
	  },
	  {
	    name: 'test',  // Test page
	    label: 'Test Page',
	  },

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
  filters: {  
    ancestors: { // Grab our ancestor pages, with 10 levels of subpages for performance reasons
      children: {
        depth: 10,               
        // areas: [ 'thumbnail' ], // Fully load the widgets in that area fetching the images we need for ancestors of the current page.
      }
    },
    children: { // Grab Children of the current page, with 10 levels of subpages for performance reasons
      depth: 10,
	    // areas: [ 'thumbnail' ], // Fully load the widgets in that area fetching the images we need for children of the current page.
    }
  }
  
};
