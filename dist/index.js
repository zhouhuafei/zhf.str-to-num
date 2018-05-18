'use strict';

var keepDecimal = require('zhf.keep-decimal');

/**
 * @description 对字符串进行数字格式化，格式化完毕还是字符串，格不了的变成空字符串。
 * */
function StrToNum() {}

// 转成整数 0,-1,1 包含0
StrToNum.prototype.toInteger = function (v) {
    return keepDecimal(v, 0);
};

// 转成正整数 1,2,3 不包含0
StrToNum.prototype.toPositiveInteger = function (v) {
    var str = this.toInteger(v);
    if (Number(str) === 0) {
        str = '';
    }
    if (Number(str) < 0) {
        str = str.substring(1);
    }
    return '' + str;
};

// 转成负整数 -1,-2,-3 不包含0
StrToNum.prototype.toNegativeInteger = function (v) {
    var str = this.toPositiveInteger(v);
    if (str !== '') {
        str = '-' + str;
    }
    return str;
};

// 转成浮点数 0.00,1.00,6.66 包含0 默认保留两位小数
StrToNum.prototype.toFloat = function (v) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return keepDecimal(v, decimal);
};

// 转成正浮点数 0.01,1.00,6.66 不包含0 默认保留两位小数
StrToNum.prototype.toPositiveFloat = function (v) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var str = this.toFloat(v, decimal);
    if (Number(str) === 0) {
        str = '';
    }
    if (Number(str) < 0) {
        str = str.substring(1);
    }
    return '' + str;
};

// 转成负浮点数 -0.01,-1.00,-6.66 不包含0 默认保留两位小数
StrToNum.prototype.toNegativeFloat = function (v) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var str = this.toPositiveFloat(v, decimal);
    if (str !== '') {
        str = '-' + str;
    }
    return str;
};

module.exports = new StrToNum();