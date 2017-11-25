/* @author Nitin */

const MyJsEnums =
          { 
                'ROLE' : [
                    { 'label' : 'USER', 'value' : 1, 'type' : 'Role'},
                    { 'label' : 'ADMIN', 'value' : 2, 'type' : 'Role'},
                    { 'label' : 'SYS_ADMIN', 'value' : 3, 'type' : 'Role'},
                ],

                'RISK' : [
                    { 'label' : 'HIGH', 'value' : 1, 'type' : 'Risk'},
                    { 'label' : 'MEDIUM', 'value' : 2, 'type' : 'Risk'},
                    { 'label' : 'LOW', 'value' : 3, 'type' : 'Risk'},
                ],

                'DEVICE_TYPE' : [
                    { 'label' : 'IPHONE', 'value' : 1, 'type' : 'Device_Type'},
                    { 'label' : 'ANDROID', 'value' : 2, 'type' : 'Device_Type'},
                    { 'label' : 'IPHONE', 'value' : 3, 'type' : 'Device_Type'},
                ],

                'DEVICETYPE' : [
                    { 'label' : 'IPAD', 'value' : 4, 'type' : 'DeviceType'},
                    { 'label' : 'IPOD', 'value' : 5, 'type' : 'DeviceType'},
                    { 'label' : 'BROWSER', 'value' : 6, 'type' : 'DeviceType'},
                ],

              enumElementByValue : function(myEnum, value) {
		              var element = _.find(myEnum, function(element) {
			                 return element.value == value;
		              });
		              return element;
	             },
               enumElementByPropertyNameValue : function(myEnum, propertyName, propertyValue) {
		               for ( var element in myEnum) {
			                  if (myEnum[element][propertyName] == propertyValue) {
				                      return myEnum[element];
			                  }
		               }
		               return null;
	             },
               enumLabelToValue : function(myEnum, label) {
		               var element = _.find(myEnum, function(element) {
			                  return element.label == label;
		               });
		               return (typeof element === "undefined") ? "--" : element.value;
	             }
          };

module.exports = MyJsEnums;
