"use strict";

/**
 * @description 把字符串转成指定类型的数字，转不了的转成空字符串
 * */
function StrToNum() {}

// 转成整数
StrToNum.prototype.toInteger = function () {};

// 转成正整数
StrToNum.prototype.toPositiveInteger = function () {};

// 转成负整数
StrToNum.prototype.toNegtiveInteger = function () {};

// 转成浮点数
StrToNum.prototype.toFloat = function () {
  var decimal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
};

// 转成正浮点数
StrToNum.prototype.toPositiveFloat = function () {
  var decimal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
};

// 转成负浮点数
StrToNum.prototype.toNegtiveFloat = function () {
  var decimal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
};

module.exports = new StrToNum();