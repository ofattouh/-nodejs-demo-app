// in lib/modules/SMTP-email/index.js

var nodemailer = require('nodemailer');

module.exports = {
  name: 'SMTP-email',
	extend: 'apostrophe-pieces',
  email: {  // Email options
  	from: '"Customer Service" <customerservice@beyondsilence.ca>',
    to:      'omohamed@pshsa.ca',				
    subject: 'SMTP Debug Email',
    text: 'SMTP Debug Email',
    html: '<b>SMTP Debug Email !</b>',
	},
	construct: function(self, options) {
		
  	self.transport = nodemailer.createTransport({	      	
    	newline: 'unix',
			sendmail: true, // sendmail transport which works with Postfix - not installed on Windows machines
			path: '/usr/sbin/sendmail', // Linux server
			host: 'mail.beyondsilence.ca',
			port: 465,
			secure: true, // SSL
			auth: {
				user: 'customerservice@beyondsilence.ca',
				pass: 'AlafFq^K3BQflF[pw2*}qBJC',
			}
  	});
	    
	  /* Only after an insert
    self.afterInsert = function(req, piece, options, callback) {
	    
	   	mailOptions = {  // Can also specify from and other valid properties for nodemailer messages here
	       	from:    '"Admin" <ofattouh2@gmail.com>',
	       	to:      'ofattouh@gmail.com',
	       	subject: 'A new suggestion was received',
	       	text:    'A new suggestion was received',
	       	html:    '<b>A new suggestion was received</b>',
	    };
    		
      // Implements email = function(req, templateName, data, options, callback) @ \node_modules\apostrophe\lib\modules\apostrophe-module\index.js
      self.email(req, 'emailInserted', { piece: piece }, mailOptions, callback);
      	
    };
    */
    	 	
  }
  	
};
