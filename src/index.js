(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('strToNum', function () {
    /**
     * @description 对字符串进行数字格式化，格式化完毕还是字符串，格不了的变成空字符串。
     * */
    function StrToNum() {
    }

    // 处理数据
    StrToNum.prototype._handleData = function (v) {
        v = v.toString();
        // 是否是负数
        const firstLetter = v[0];
        let isNegative = false;
        if (firstLetter === '-') {
            isNegative = true;
        }
        // 匹配数字
        const arr = v.match(/\d+/g);
        // 结果处理
        let isEmpty = false; // 是否为空字符串
        if (arr) { // arr如果存在，则把数组里第一项中的，0000变成0，0001变成1，0123变成123
            arr[0] = Number(arr[0]).toString();
        } else { // arr如果不存在，打个标识
            isEmpty = true;
        }
        // 返回结果
        return {
            isEmpty: isEmpty,
            isNegative: isNegative,
            arr: arr,
        };
    };

    // 生成多个0
    StrToNum.prototype._createZero = function (num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push('0');
        }
        return arr.join('');
    };

    // 转成整数 0,-1,1 包含0
    StrToNum.prototype.toInteger = function (v) {
        const result = this._handleData(v);
        const isEmpty = result.isEmpty;
        if (isEmpty) { // 如果没匹配到数字
            return '';
        }
        const isNegative = result.isNegative;
        const arr = result.arr;
        let first = arr[0];
        if (isNegative) { // 如果是负数
            first = -first;
        }
        return `${first}`; // -0会被转成0，刚好是我需要的。
    };

    // 转成正整数 1,2,3 不包含0
    StrToNum.prototype.toPositiveInteger = function (v) {
        let str = this.toInteger(v);
        if (Number(str) === 0) {
            str = '';
        }
        if (Number(str) < 0) {
            str = str.substring(1);
        }
        return `${str}`;
    };

    // 转成负整数 -1,-2,-3 不包含0
    StrToNum.prototype.toNegativeInteger = function (v) {
        let str = this.toPositiveInteger(v);
        if (str !== '') {
            str = `-${str}`;
        }
        return str;
    };

    // 转成浮点数 0.00,1.00,6.66 包含0 默认保留两位小数
    StrToNum.prototype.toFloat = function (v, decimal = 2) {
        const result = this._handleData(v);
        const isEmpty = result.isEmpty;
        if (isEmpty) { // 如果没匹配到数字
            return '';
        }
        const isNegative = result.isNegative;
        const arr = result.arr;
        const first = arr[0];
        let second = arr[1];
        if (second === undefined) { // 小数点后面没有数字
            second = this._createZero(decimal);
        } else { // 小数点后面有多位或者少位数字
            const secondLen = second.length;
            if (secondLen > decimal) {
                second = second.substring(0, decimal);
            }
            if (secondLen < decimal) {
                second += this._createZero(decimal - secondLen);
            }
        }
        let str = `${first}.${second}`;
        if (Number(str) !== 0 && isNegative) { // 如果是负数
            str = `-${str}`;
        }
        return str;
    };

    // 转成正浮点数 0.01,1.00,6.66 不包含0 默认保留两位小数
    StrToNum.prototype.toPositiveFloat = function (v, decimal = 2) {
        let str = this.toFloat(v, decimal);
        if (Number(str) === 0) {
            str = '';
        }
        if (Number(str) < 0) {
            str = str.substring(1);
        }
        return `${str}`;
    };

    // 转成负浮点数 -0.01,-1.00,-6.66 不包含0 默认保留两位小数
    StrToNum.prototype.toNegativeFloat = function (v, decimal = 2) {
        let str = this.toPositiveFloat(v, decimal);
        if (str !== '') {
            str = `-${str}`;
        }
        return str;
    };

    return new StrToNum();
});
