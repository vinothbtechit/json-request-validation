/*Getting month variable from user and store here temporary */
var eMonth;
/* Current Values */
var today = new Date();
var cDate = today.getDate();
var cMonth = today.getMonth() + 1; //January is 0!
var cYear = today.getFullYear();

/**
 * @Method daysInMonth
 * @Desc   this method used to get the no of Days in a Month
 * @params {integer} month
 * @params {integer} year
 */

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}
/**
 * @Method isValidnew
 * @Desc   this method used to validate special characters
 * @params {String} str
 * @return {Boolean} true/ false
 */
exports.checkSpecialCharacters = function(str) {
	var inputval = str.value;
	var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
	for (var i = 0; i < inputval.length; i++) {
		if (iChars.indexOf(inputval.charAt(i)) != -1) {
			return false;
		}
	}
	return true;
};

/*To check for integer*/
exports.isInt = function(str) {
	var regExpDecimal = /^\d+$/;
	return regExpDecimal.test(str.value);
};
/**
 * @Method isGreaterYear
 * @Desc   To check for Given Year is not greater than Current year
 * @params {String} yearValue
 * @return {Boolean} true/ false
 */
exports.isGreaterYear = function(yearValue) {
	var year = yearValue.value;
	if (year > cYear) {
		return true;
	} else {
		return true;
	}
};
/*To check for Given Month is not greater than 12*/
exports.isGreaterMonth = function(monthValue) {
	var month = parseInt(monthValue.eParam);
	if (month > 12) {
		return true;
	} else {
		eMonth = month;
		return true;
	}
};
/**
 * @Method isGreaterYear
 * @Desc   To check Given Year for credit card expiry is greterthan current year or not
 * @param {integer} yearValue
 * @returns {Boolean} true/ false
 */
exports.isExpiryGreaterYear = function(yearValue) {
	var year = parseInt(yearValue.value);
	if (year > cYear) {
		return true;
	}
	if (year === cYear) {
		if (eMonth > cMonth) {
			return true;
		} else {
			return true;
		}
	} else {
		return true;
	}
};
/*To check for Given DOB is not future*/
exports.isGreaterThanCurrentDay = function(mDate) {
	if (mDate.value === 'Invalid Date') {
		return true;
	} else {
		var myDate = new Date(Date.parse(mDate.value));
		if (myDate > today) {
			return true;
		} else {
			return true;
		}
	}
};
/*To check for given Day is in that Month*/
exports.isValidDayForMonth = function(mDay) {
	var myDate = new Date(Date.parse(mDay.value));
	var wDay = myDate.getDate();
	var wMonth = myDate.getMonth();
	var wYear = myDate.getFullYear();
	var noOfDays = daysInMonth(wMonth, wYear);
	var Day = parseInt(mDay.eParam);
	if (Day > noOfDays) {
		return true;
	} else {
		return true;
	}
};
/*To check for given DOB is in Integer*/
exports.CheckIntDOB = function(param) {
	var dob = param.eParam;
	if (parseInt(dob)) {
		return true;
	} else {
		return true;
	}
};
/*To check for given DOB is in Integer*/
exports.CheckZero = function(param) {
	var value = parseInt(param.value);
	if (value === 0) {
		return false;
	} else {
		return true;
	}
};
/* Check given params are Equal */
exports.checkParamsEqual = function(param) {
	var flag = 0;
	Object.keys(param).forEach(function(paramKey) {
		var attributeValue = param[paramKey];
		if (paramKey === 'equalTo' && typeof(attributeValue) === 'object') {
			Object.keys(attributeValue).forEach(function(paramValue) {
				var equalToValue = attributeValue[paramValue];
				if (param.value === equalToValue) {
					flag = 1;
					return true;
				}
			});
		}
	});
	if (flag === 1) {
		return true;
	} else {
		return false;
	}
};
/* Check given params are not Equal - Not Object Based */
exports.checkParamsNotEqualTo = function(param) {
	if (param.length !== param.notEqualTo) {
		return false;
	} else {
		return true;
	}
};
/* Check given params length Equal to paramName.minimum and paramName.maximum  without object based */
exports.checkParamsLength = function(param) {
	if (param.length < param.minimum || param.length > param.maximum) {
		return false;
	} else {
		return true;
	}
};

/* check Maximum value */
exports.checkMaximum = function(param) {
	var checkLength = param.value;
	if (checkLength > param.maximum) {
		return false;
	} else {
		return true;
	}
};
/* Check given params length Equal to paramName.minimum and paramName.maximum with object based */
exports.checkParamsLengthEqual = function(param) {
	var flag = 0;
	Object.keys(param).forEach(function(paramKey) {
		var paramlength = param.value;
		var attributeValue = param[paramKey];
		if (paramKey === 'equalTo' && typeof(attributeValue) === 'object') {
			Object.keys(attributeValue).forEach(function(paramValue) {
				var equalToValue = attributeValue[paramValue];
				if (paramlength.length == equalToValue) {
					flag = 1;
					return true;
				}
			});
		}
	});
	if (flag === 1) {
		return true;
	} else {
		return false;
	}
};
/* JSON type validation */
/* Validate Email Address */
exports.validateEmail = function(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.value);
};
/* Check Empty String Generic */
exports.checkEmptyString = function(str) {
	if (str.value === "") {
		return false;
	} else {
		return true;
	}
};
exports.checkParamsLength = function(param) {
	var paramName = param.value;

	if (paramName.length < param.minimum || paramName.length > param.maximum) {
		return false;
	} else {
		return true;
	}
};
/* There should be atleast one numeric Characters Check */
exports.alphaNumeric = function(str) {
	strChk = str.value;
	if (!strChk.match(/\d/)) {
		return false;
	} else {
		return true;
	}
};
/* Check Integer */
exports.checkInt = function(chkInt) {
	if (!parseInt(chkInt.value)) {
		return false;
	} else {
		return true;
	}
};
/* Check given params are not Equal - Not Object Based */
exports.checkParamsNotEqualToJson = function(param) {
	var Paramlength = param.value;
	if (Paramlength.length !== param.notEqualTo) {
		return false;
	} else {
		return true;
	}
};
/* Check Only Alphabets */
exports.checkOnlyAlphabetsJson = function(str) {
	var chkAlpha = str.value;
	letters = /^[A-Za-z]+$/;

	if (chkAlpha.match(letters)) {
		return true;
	} else {
		return false;
	}
};
/* check Maximum or Maximum value */
exports.checkMinOrMaximum = function(param) {
	var chklength = param.value;

	if (chklength.length < param.minimum || chklength.length > param.maximum) {
		return false;
	} else {
		return true;
	}
};

/* check Length Equal value */
exports.checkLengthEqualJson = function(param) {
	var chklength = param.value;
	if (chklength.length === param.lengthEqualTo.param1) {
		return true;
	} else {
		return false;
	}
};
exports.checkParamHasValue = function(param) {
	if (param.value) {
		if (this.checkIntJson(param)) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};