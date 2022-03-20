// Widgets used in the Footer section

const socialMediaSchema = [
  {
		name: 'twitter',
    type: 'string',
    label: 'Twitter Link'
  },
  {
    name: 'twitterIcon',
  	label: 'Twitter Icon',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
  },
  {
	  name: 'linkedin',
    type: 'string',
    label: 'Linkedin Link'
  },
  {
    name: 'linkedinIcon',
  	label: 'Linkedin Icon',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
  },
  {
	  name: 'youTube',
    type: 'string',
    label: 'YouTube Link'
  },
  {
    name: 'youTubeIcon',
  	label: 'YouTube Icon',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
  },
  {
		name: 'instagram',
    type: 'string',
    label: 'Instagram Link'
  },
  {
    name: 'instagramIcon',
  	label: 'Instagram Icon',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
  }
];

const logosSchema = [
	{
    name: 'pshsa',
  	label: 'PSHSA URL',
  	type: 'url'
	},
  {
    name: 'pshsaLogo',
  	label: 'PSHSA Logo',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
  },
  {
    name: 'healthyworker',
  	label: 'Healthy Worker URL',
  	type: 'url'
	},
  {
    name: 'healthyworkerLogo',
  	label: 'Healthy Worker Logo',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
  },
  {
    name: 'macmaster',
  	label: 'McMaster University URL',
  	type: 'url'
	},
  {
    name: 'macmasterLogo',
  	label: 'McMaster University Logo',
  	type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
	},
  {
    name: 'srs',
  	label: 'School of Rehabilitation Science URL',
  	type: 'url'
	},
	{
    name: 'srsLogo',
  	label: 'School of Rehabilitation Science Logo',
  	type: 'url'
	},
	/*
  {
    name: 'srsLogo',
  	label: 'School of Rehabilitation Science Logo',
		type: 'singleton',
  	options: {
    	widgets: {
    		'apostrophe-images': {
      		limit: 1,
    			aspectRatio: [ 1, 1 ]
     	  }
    	}
  	}
	}
	*/
];

// Keep all social media links in one object for easy iteration
function addSocialMedia(self, options) {
  options.addFields.push({
    type: 'object',
    name: 'socialMediaIcons',
    schema: socialMediaSchema
  });
}

// Keep all logo links in one object for easy iteration
function addLogos(self, options) {
  options.addFields.push({
    type: 'object',
    name: 'logos',
    schema: logosSchema
  });
}

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Footer Widget',
  construct: (self, options) => {
	options.addFields = [];

    addSocialMedia(self, options);
    addLogos(self, options);

    self.apos.templates.addFilter('is_not_empty_string', function(obj) {
	  	return typeof obj === 'string' && obj !== '';
    });

    self.apos.templates.addFilter('is_not_null_object', function(obj) {
	  	return typeof obj === 'object' && obj !== null;
    });
  }
};

/*

const nunjucks = require('nunjucks')

var env = new nunjucks.Environment();

env.addFilter('is_string', function(obj) {
  return typeof obj == 'string';
});

var res = env.renderString("{% if item|is_string %}yes{% endif %}", { item: 'test' });

console.log(res);

*/
