/* 
  Content Block Row widget where each Column is made of widgets select by the back end user. Nesting widgets is supported.
  1. One Col Row
  2. Two Cols Row with left Col take 50% width
  3. Two Cols Row with left Col take 70% width
  4. Two Cols Row with left Col take 30% width
  5. Two Cols Row with left Col take 80% width
  6. Two Cols Row with left Col take 20% width
  7. Three Cols Row (1/3 width each)
  8. Four Cols Row (1/4 width each)
*/


const customFieldsName = [
  'oneCol',
  'twoColsLeft50',
  'twoColsRight50',
  'twoColsLeft70',
  'twoColsRight30',
  'twoColsLeft30',
  'twoColsRight70',
  'twoColsLeft80',
  'twoColsRight20',
  'twoColsLeft20',
  'twoColsRight80',
  'threeColsLeft',
  'threeColsMiddle',
  'threeColsRight',
  'fourColsLeft',
  'fourColsMiddleLeft',
  'fourColsMiddleRight',
  'fourColsRight'
];


const customFields = [
  {
    name: 'contentBlockLayout',
    label: 'Choose the Content Block Layout',
    type: 'select',
    choices: [
    	{
        label: 'Please select a value',
        value: ''
      },
      {
        label: 'One Column',
        value: 'oneCol'
      },
      {
        label: 'Two Columns Row Width (50% - 50%)',
        value: 'twoCols50by50',
        showFields: ['reverse']
      },
      {
        label: 'Two Columns Row Width (70% - 30%)',
        value: 'twoCols70by30',
        showFields: ['reverse']
      },
      {
        label: 'Two Columns Row Width (30% - 70%)',
        value: 'twoCols30by70',
        showFields: ['reverse']
      },
      {
        label: 'Two Columns Row Width (80% - 20%)',
        value: 'twoCols80by20',
        showFields: ['reverse']
      },
      {
        label: 'Two Columns Row Width (20% - 80%)',
        value: 'twoCols20by80',
        showFields: ['reverse']
      },
      {
        label: 'Three Columns Row Width (1/3 each)',
        value: 'threeCols'
      },
      {
        label: 'Four Columns Row Width (1/4 each)',
        value: 'fourCols'
      }
    ],
    required: true
  },
  {
    type: 'boolean',
    name: 'reverse',
    label: 'Need to reverse order on small screens ?'
  }
];


customFieldsName.forEach((name) => {
  customFields.push({
    name,
    type: 'area',
    contextual: true
  });
});



module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Content Block Layout',
  addFields: customFields,
 
  construct: (self, options) => {
	  
	  //console.log('\ncustomFieldsName\n');
	  //console.log(customFieldsName);
	  
	  //console.log('\ncustomFields\n');
    //console.log(customFields);

  }
};

