# 对字符串进行数字格式化，格式化完毕还是字符串，格不了的变成空字符串。
```
const strToNum = require('zhf.str-to-num');
```

* 转成整数 0,-1,1 包含0
```
    strToNum.toInteger(''); // ''
    strToNum.toInteger('hello world'); // ''
    strToNum.toInteger('-01.04'); // '-1'
    strToNum.toInteger('-.a.0.0...bc...0.....1..23....465.....798'); // '0'
    strToNum.toInteger('-.a.1.0...bc...0.....1..23....465.....798'); // '-1'
    strToNum.toInteger('..a.1.0...bc...0.....1..23....465.....798'); // '1'
    strToNum.toInteger('0123'); // '123'
    strToNum.toInteger('-0123'); // '-123'
```

* 转成正整数 1,2,3 不包含0
```
    strToNum.toPositiveInteger(''); // ''
    strToNum.toPositiveInteger('hello world'); // ''
    strToNum.toPositiveInteger('-01.04'); // '1'
    strToNum.toPositiveInteger('-.a.0.0...bc...0.....1..23....465.....798'); // ''
    strToNum.toPositiveInteger('-.a.1.0...bc...0.....1..23....465.....798'); // '1'
    strToNum.toPositiveInteger('..a.1.0...bc...0.....1..23....465.....798'); // '1'
    strToNum.toPositiveInteger('0123'); // '123'
    strToNum.toPositiveInteger('-0123'); // '123'
```

* 转成负整数 -1,-2,-3 不包含0
```
    strToNum.toNegativeInteger(''); // ''
    strToNum.toNegativeInteger('hello world'); // ''
    strToNum.toNegativeInteger('-01.04'); // '-1'
    strToNum.toNegativeInteger('-.a.0.0...bc...0.....1..23....465.....798'); // ''
    strToNum.toNegativeInteger('-.a.1.0...bc...0.....1..23....465.....798'); // '-1'
    strToNum.toNegativeInteger('..a.1.0...bc...0.....1..23....465.....798'); // '-1'
    strToNum.toNegativeInteger('0123'); // '-123'
    strToNum.toNegativeInteger('-0123'); // '-123'
```

* 转成浮点数 0.00,1.00,6.66 包含0 默认保留两位小数
```
    strToNum.toFloat(''); // ''
    strToNum.toFloat('hello world'); // ''
    strToNum.toFloat('-01.04'); // '-1.04'
    strToNum.toFloat('-.a.0.0...bc...0.....1..23....465.....798'); // '0.00'
    strToNum.toFloat('-.a.1.0...bc...0.....1..23....465.....798', 3); // '-1.000'
    strToNum.toFloat('..a.1.0...bc...0.....1..23....465.....798', 4); // '1.0000'
    strToNum.toFloat('0123', 5); // '123.00000'
    strToNum.toFloat('-0123', 6); // '-123.000000'
```

* 转成正浮点数 0.01,1.00,6.66 不包含0 默认保留两位小数
```
    strToNum.toPositiveFloat(''); // ''
    strToNum.toPositiveFloat('hello world'); // ''
    strToNum.toPositiveFloat('-01.04'); // '1.04'
    strToNum.toPositiveFloat('-.a.0.0...bc...0.....1..23....465.....798'); // ''
    strToNum.toPositiveFloat('-.a.1.0...bc...0.....1..23....465.....798', 3); // '1.000'
    strToNum.toPositiveFloat('..a.1.0...bc...0.....1..23....465.....798', 4); // '1.0000'
    strToNum.toPositiveFloat('0123', 5); // '123.00000'
    strToNum.toPositiveFloat('-0123', 6); // '123.000000'
```

* 转成负浮点数 -0.01,-1.00,-6.66 不包含0 默认保留两位小数
```
    strToNum.toNegativeFloat(''); // ''
    strToNum.toNegativeFloat('hello world'); // ''
    strToNum.toNegativeFloat('-01.04'); // '-1.04'
    strToNum.toNegativeFloat('-.a.0.0...bc...0.....1..23....465.....798'); // ''
    strToNum.toNegativeFloat('-.a.1.0...bc...0.....1..23....465.....798', 3); // '-1.000'
    strToNum.toNegativeFloat('..a.1.0...bc...0.....1..23....465.....798', 4); // '-1.0000'
    strToNum.toNegativeFloat('0123', 5); // '-123.00000'
    strToNum.toNegativeFloat('-0123', 6); // '-123.000000'
```

* 格式化测试
```
```
