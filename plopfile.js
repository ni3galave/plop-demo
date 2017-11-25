var fs = require('fs');
var _ = require('lodash');
var exec = require('child_process').exec;
module.exports = function (plop) {
  // controller generator
	plop.setGenerator('enumGenerator', {
		description: 'application enums',
		prompts: [],
		actions: [
      (answers) => {

        var enumsJsonFile = JSON.parse(fs.readFileSync('enum_map.json', 'utf8'));
        enumsJsonFile = _.groupBy(enumsJsonFile, (o) => { return o.type; } );
        // console.log(enumsJsonFile)
        // console.log('===============')
        answers.data = enumsJsonFile;
        // console.log(answers.data)
        /************** column metadata *******************/
        var propData = JSON.parse(fs.readFileSync('db_metadata.json', 'utf8'));
        answers.propData = propData;
				return '';
			},{
			type: 'add',
			path: 'src/MyJsEnums.js',
			templateFile: 'plop-templates/MyJsEnums.hbs'
		 },{
			type: 'add',
			path: 'src/MyJavaEnums.java',
			templateFile: 'plop-templates/MyJavaEnums.hbs'
	 	},{
		 type: 'add',
		 path: 'src/MyProperties.properties',
		 templateFile: 'plop-templates/MyProperties.hbs'
	 },
]
	});
	plop.setHelper('upperCase', function (text) {
		return text.toUpperCase();
	});

	plop.setHelper('getConstants', function (data) {
			var str = '', cnt = 0;
			// console.log(data)
			for(var keys = Object.keys(data), i = 0, end = keys.length; i < end; i++) {
  			var key = keys[i], value = data[key];
  			cnt=0;
				_.each(value, function(obj, key1, arr){
					str +=obj.type.toUpperCase()+'_'+obj.name+'('+obj.value+')';
					if(obj.type == keys[keys.length - 1]){
						str += (arr.length - 1 == cnt) ? ';' : ',\n\t\t';
					}else {
						str+=',\n\t\t';
					}
					cnt++;
				});
			}
			return str;
	});
}
