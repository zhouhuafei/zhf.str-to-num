'use strict';

var keepDecimal = require('zhf.keep-decimal');
var moneyFormat = require('zhf.money-format');

/**
 * @description 对字符串进行数字格式化，格式化完毕还是字符串，格不了的变成空字符串。
 * */
function StrToNum() {}

// 转成整数 0,-1,1 包含0
StrToNum.prototype.toInteger = function (v) {
    var isFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return keepDecimal(v, 0, isFormat);
};

// 转成正整数 1,2,3 不包含0
StrToNum.prototype.toPositiveInteger = function (v) {
    var isFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var str = this.toInteger(v);
    if (Number(str) === 0) {
        str = '';
    }
    if (Number(str) < 0) {
        str = str.substring(1);
    }
    if (str.length > 3 && isFormat) {
        str = moneyFormat(str);
    }
    return '' + str;
};

// 转成负整数 -1,-2,-3 不包含0
StrToNum.prototype.toNegativeInteger = function (v) {
    var isFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var str = this.toPositiveInteger(v);
    if (str !== '') {
        str = '-' + str;
    }
    if (str.length > 3 && isFormat) {
        str = moneyFormat(str);
    }
    return str;
};

// 转成浮点数 0.00,1.00,6.66 包含0 默认保留两位小数
StrToNum.prototype.toFloat = function (v) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return keepDecimal(v, decimal, isFormat);
};

// 转成正浮点数 0.01,1.00,6.66 不包含0 默认保留两位小数
StrToNum.prototype.toPositiveFloat = function (v) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var str = this.toFloat(v, decimal);
    if (Number(str) === 0) {
        str = '';
    }
    if (Number(str) < 0) {
        str = str.substring(1);
    }
    if (str.split('.')[0].length > 3 && isFormat) {
        str = moneyFormat(str);
    }
    return '' + str;
};

// 转成负浮点数 -0.01,-1.00,-6.66 不包含0 默认保留两位小数
StrToNum.prototype.toNegativeFloat = function (v) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var str = this.toPositiveFloat(v, decimal);
    if (str !== '') {
        str = '-' + str;
    }
    if (str.split('.')[0].length > 3 && isFormat) {
        str = moneyFormat(str);
    }
    return str;
};

module.exports = new StrToNum();