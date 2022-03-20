var path = require('path');

var apos = require('apostrophe')({
  shortName: 'beyondsilence_live',
  title:     'Beyond Silence',
  baseUrl:   'https://www.beyondsilence.ca',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
	
    'apostrophe-express': {
      port: 3000,  		             // Set the default port number to run Apostrophe to get rid of the warning
      address: '162.144.146.181',  // By default Apostrophe listens for connections on all interfaces (0.0.0.0)   
      csrf: {
			  //exceptions: [ '/cheesy-post-route' ],
			  cookie: {
			    // Send it only if the request is HTTPS
			    secure: true
			  }
			}
    },
    
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
  	'apostrophe-pages': {},
    // 'apostrophe-db-mongo-3-driver': {},  // This module improves the `apostrophe-db` module to use the new mongodb 3 driver
    'apostrophe-admin-bar': {  // Admin Top bar
		  addGroups: [  // To override Apostrophe admin module default grouping, use the groups option rather than addGroups.
			  {
			    label: 'Admin',
		        items: [
		  		  'apostrophe-global',
		        'apostrophe-pages',
		  		  'apostrophe-images',
		        'apostrophe-files',
		  		  'apostrophe-users',
		  		  'apostrophe-groups',
		        'apostrophe-tags',
		        'SMTP-email',  // Only used for testing
			    ]
			  }
	  	]      
	  },
	  
    // Custom modules & widgets
    'beyond-silence-theme': {},            // Site theme
    'link-widgets': {},
    'page-link-widgets': {},
    'nav-widgets': {},                     // Navigation widget
    'footer-widgets': {},                  // Footer widget
    'one-column-widgets': {},              // One Column widget
    'two-column-widgets': {},              // Two Columns widget
    'three-column-widgets': {},            // Three Columns widget
    'four-column-widgets': {},             // Four Columns widget
    'content-block-layout-widgets': {},    // Content block layout widgets
    'apostrophe-login': {                  // Enable reset password
	    passwordReset: true,      
	    passwordResetHours: 48,
	    email: {
	      	from: 'customerservice@beyondsilence.ca'
	    }
		},
		'apostrophe-email': {  // See the nodemailer documentation @ https://nodemailer.com/smtp/
       nodemailer: {	  	
			   newline: 'unix',
			   sendmail: true,              // sendmail transport which works with Postfix - not installed on Windows machines
			   path: '/usr/sbin/sendmail',  // Linux server
			   host: 'mail.beyondsilence.ca',
			   port: 465,
	       secure: true,  // SSL
	       auth: {
	        	user: 'customerservice@beyondsilence.ca',
	        	pass: 'AlafFq^K3BQflF[pw2*}qBJC',
	       }
			},   	    
	  },
    'apostrophe-maintenance-mode': {},     // Maintenance module
    //'redirect-login': {},  				       // Redirect the user after login
    'apostrophe-selective-permissions': {  // https://www.npmjs.com/package/apostrophe-selective-permissions
	    permissions: [
	      {
	        name: 'seo',
	        label: 'SEO'
	      }
	    ]
	  },
	  'apostrophe-site-map': {  // https://github.com/apostrophecms/apostrophe-site-map/blob/master/README.md
	  	//piecesPerBatch: 100,  // Default is 100
      excludeTypes: []        // array of doc types to exclude, even though they are accessible on the site
    }
  }
});
