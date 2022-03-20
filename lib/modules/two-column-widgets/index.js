// Two Columns widget used in the Footer section

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Footer Widget (2 cols)',
  //contextualOnly: true,
  addFields: [
    {
      name: 'left2ColsFooter',
      type: 'area',
      label: 'Left Footer Area',
      options: {
        widgets: {
          'apostrophe-rich-text': {
             toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink', 'Anchor', 'Table', 'BulletedList', 'Blockquote', 'Strike', 'Subscript', 'Superscript', 'Split'],
             styles: [
             { name: 'Header (h1)', element: 'h1' },
             { name: 'Header (h2)', element: 'h2' },
             { name: 'Header (h3)', element: 'h3' },
             { name: 'Header (h4)', element: 'h4' },
             { name: 'Header (h5)', element: 'h5' },
             { name: 'Header (h6)', element: 'h6' },
             { name: 'Paragraph (P)', element: 'p' }
             ]
          },
          'apostrophe-images': {}	
        }
    	}
    },
    {
      name: 'right2ColsFooter',
      type: 'area',
      label: 'Right Footer Area',
      options: {
        widgets: {
          'apostrophe-rich-text': {
             toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink', 'Anchor', 'Table', 'BulletedList', 'Blockquote', 'Strike', 'Subscript', 'Superscript', 'Split'],
             styles: [
             { name: 'Header (h1)', element: 'h1' },
             { name: 'Header (h2)', element: 'h2' },
             { name: 'Header (h3)', element: 'h3' },
             { name: 'Header (h4)', element: 'h4' },
             { name: 'Header (h5)', element: 'h5' },
             { name: 'Header (h6)', element: 'h6' },
             { name: 'Paragraph (P)', element: 'p' }
             ]
          },	
          'apostrophe-images': {}
        }
    	}
    }
  ],
  construct: (self, options) => {     
  }
  
};