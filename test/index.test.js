const strToNum = require('../dist/index.min');

test(`对字符串进行数字格式化，格式化完毕还是字符串，格不了的变成空字符串。`, () => {
    // 转成整数 0,-1,1 包含0
    expect(strToNum.toInteger('')).toEqual('');
    expect(strToNum.toInteger('hello world')).toEqual('');
    expect(strToNum.toInteger('-01.04')).toEqual('-1');
    expect(strToNum.toInteger('-.a.0.0...bc...0.....1..23....465.....798')).toEqual('0');
    expect(strToNum.toInteger('-.a.1.0...bc...0.....1..23....465.....798')).toEqual('0');
    expect(strToNum.toInteger('..a.1.0...bc...0.....1..23....465.....798')).toEqual('0');
    expect(strToNum.toInteger('a1.0...bc...0.....1..23....465.....798')).toEqual('1');
    expect(strToNum.toInteger('0123')).toEqual('123');
    expect(strToNum.toInteger('-0123')).toEqual('-123');
    // 转成正整数 1,2,3 不包含0
    expect(strToNum.toPositiveInteger('')).toEqual('');
    expect(strToNum.toPositiveInteger('hello world')).toEqual('');
    expect(strToNum.toPositiveInteger('-01.04')).toEqual('1');
    expect(strToNum.toPositiveInteger('-00.00')).toEqual('');
    expect(strToNum.toPositiveInteger('-.a.0.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toPositiveInteger('-.a.1.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toPositiveInteger('..a.1.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toPositiveInteger('a1.0...bc...0.....1..23....465.....798')).toEqual('1');
    expect(strToNum.toPositiveInteger('0123')).toEqual('123');
    expect(strToNum.toPositiveInteger('-0123')).toEqual('123');
    // 转成负整数 -1,-2,-3 不包含0
    expect(strToNum.toNegativeInteger('')).toEqual('');
    expect(strToNum.toNegativeInteger('hello world')).toEqual('');
    expect(strToNum.toNegativeInteger('-01.04')).toEqual('-1');
    expect(strToNum.toNegativeInteger('-.a.0.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toNegativeInteger('-.a.1.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toNegativeInteger('..a.1.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toNegativeInteger('a1.0...bc...0.....1..23....465.....798')).toEqual('-1');
    expect(strToNum.toNegativeInteger('0123')).toEqual('-123');
    expect(strToNum.toNegativeInteger('-0123')).toEqual('-123');
    // 转成浮点数 0.00,1.00,6.66 包含0 默认保留两位小数
    expect(strToNum.toFloat('')).toEqual('');
    expect(strToNum.toFloat('hello world')).toEqual('');
    expect(strToNum.toFloat('-01.04')).toEqual('-1.04');
    expect(strToNum.toFloat('-.a.0.0...bc...0.....1..23....465.....798')).toEqual('0.00');
    expect(strToNum.toFloat('-.a.1.0...bc...0.....1..23....465.....798', 3)).toEqual('-0.100');
    expect(strToNum.toFloat('..a.1.0...bc...0.....1..23....465.....798', 4)).toEqual('0.1000');
    expect(strToNum.toFloat('a1.0...bc...0.....1..23....465.....798')).toEqual('1.00');
    expect(strToNum.toFloat('0123', 5)).toEqual('123.00000');
    expect(strToNum.toFloat('-0123', 6)).toEqual('-123.000000');
    // 转成正浮点数 0.01,1.00,6.66 不包含0 默认保留两位小数
    expect(strToNum.toPositiveFloat('')).toEqual('');
    expect(strToNum.toPositiveFloat('hello world')).toEqual('');
    expect(strToNum.toPositiveFloat('-01.04')).toEqual('1.04');
    expect(strToNum.toPositiveFloat('-.a.0.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toPositiveFloat('-.a.1.0...bc...0.....1..23....465.....798', 3)).toEqual('0.100');
    expect(strToNum.toPositiveFloat('..a.1.0...bc...0.....1..23....465.....798', 4)).toEqual('0.1000');
    expect(strToNum.toPositiveFloat('a1.0...bc...0.....1..23....465.....798')).toEqual('1.00');
    expect(strToNum.toPositiveFloat('0123', 5)).toEqual('123.00000');
    expect(strToNum.toPositiveFloat('-0123', 6)).toEqual('123.000000');
    // 转成负浮点数 -0.01,-1.00,-6.66 不包含0 默认保留两位小数
    expect(strToNum.toNegativeFloat('')).toEqual('');
    expect(strToNum.toNegativeFloat('hello world')).toEqual('');
    expect(strToNum.toNegativeFloat('-01.04')).toEqual('-1.04');
    expect(strToNum.toNegativeFloat('-.a.0.0...bc...0.....1..23....465.....798')).toEqual('');
    expect(strToNum.toNegativeFloat('-.a.1.0...bc...0.....1..23....465.....798', 3)).toEqual('-0.100');
    expect(strToNum.toNegativeFloat('..a.1.0...bc...0.....1..23....465.....798', 4)).toEqual('-0.1000');
    expect(strToNum.toNegativeFloat('a1.0...bc...0.....1..23....465.....798')).toEqual('-1.00');
    expect(strToNum.toNegativeFloat('0123', 5)).toEqual('-123.00000');
    expect(strToNum.toNegativeFloat('-0123', 6)).toEqual('-123.000000');
    // 格式化测试
    expect(strToNum.toInteger('', true)).toEqual('');
    expect(strToNum.toInteger('1000000', true)).toEqual('1,000,000');
    expect(strToNum.toPositiveInteger('', true)).toEqual('');
    expect(strToNum.toPositiveInteger('1000000', true)).toEqual('1,000,000');
    expect(strToNum.toNegativeInteger('', true)).toEqual('');
    expect(strToNum.toNegativeInteger('-1000000', true)).toEqual('-1,000,000');
    expect(strToNum.toFloat('', 2, true)).toEqual('');
    expect(strToNum.toFloat('呵呵1000000.1', 2, true)).toEqual('1,000,000.10');
    expect(strToNum.toPositiveFloat('', 2, true)).toEqual('');
    expect(strToNum.toPositiveFloat('1000000.1哈哈', 2, true)).toEqual('1,000,000.10');
    expect(strToNum.toNegativeFloat('', 2, true)).toEqual('');
    expect(strToNum.toNegativeFloat('-1000000.1', 2, true)).toEqual('-1,000,000.10');
});
