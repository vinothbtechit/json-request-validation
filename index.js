/* Common Validation for entire Json based Validation */
exports.chkValidation = function(jsonString) {
	var errorResult = {};
	var inputValue = {};
	var errorArray = [];
	jsonString.forEach(function(AttributeKeys) {
		Object.keys(AttributeKeys).forEach(function(key) {
			var attributeValue = AttributeKeys[key];
			Object.keys(attributeValue).forEach(function(nodeKey) {
				var childNode = attributeValue[nodeKey];
				if (typeof(childNode) === 'object' && nodeKey !== 'equalTo' && nodeKey !== 'notEqualTo' && nodeKey !== 'lengthEqualTo' && nodeKey !== 'eParam') {
					Object.keys(childNode).forEach(function(childNodeKeyValue) {
						var errorResult = {};
						var childNodes = childNode[childNodeKeyValue];
						/* Internal Function are triggered based on Json method which is defined in Validation section of Json*/
						if (!exports[childNodeKeyValue](inputValue)) {
							errorResult['field'] = key;
							errorResult['message'] = childNodes;							
							errorArray.push(errorResult);
						}
					});
				} else {
					if (nodeKey) {
						inputValue[nodeKey] = childNode;
					}
				}
			});
			delete inputValue;
		});
	});
	
	if (Object.keys(errorArray).length > 0) {
		return errorArray;
	} else {
		return true;
	}
};