# Easy Format

#### 简易常见的格式化小工具

## 安装

```bash
 npm i -S easy-fmt
 or
 yarn add easy-fmt
```

## 使用

```javascript
import fmt from "easy-fmt";

let io = fmt.IntersectionObserver(document.getElementById("box", true));

io.then((entries, observe) => {
  if (entries[0].intersectionRatio <= 0) return;
  // 元素在可视区的处理逻辑
  observe.disconnect();
});

fmt.currency(12000); // 12,000.00

fmt.time(new Date(2020, 10, 22, 10, 15, 2), "YYYY-MM-DD hh:mm:ss"); // 2020-11-22 10:15:02

fmt.param({
  orderId: 15,
  orderNo: "Order20201022",
}); // ?orderId=15&orderNo=Order20201022

fmt.prefixZero(12, 5); // 00012
fmt.prefixZero(12, 1); // 12
fmt.prefixZero(-12, 3); // -012

fmt.round(12.456, 2); // 12.46

fmt.mask("15211112222", 12, 4); // 15211112222
fmt.mask("15211112222", 3, 4); // 152****2222

fmt.trim(" 152  111 222 ", "all"); // 152111222

fmt.phone("15211112222"); // 152-1111-2222
fmt.phone("15211112222", "/"); // 152/1111/2222
fmt.phone("15211112222", "-", "1/1/1"); // 1-5-2-11112222
```

## API

| 方法                   | 实例                                                                          | 备注                       |
| ---------------------- | ----------------------------------------------------------------------------- | -------------------------- |
| `IntersectionObserver` | `fmt.IntersectionObserver(el:Element, showOnce: Boolean)`                     | 监听指定元素是否在可视区域 |
| `currency`             | `fmt.currency(num: Number,placeholder: Boolean)`                              | 格式化货币                 |
| `time`                 | `fmt.time(value: Number                                                       | Date                       | String, format: String)` | 格式化时间 |
| `param`                | `fmt.param(obj: Object)`                                                      | 将对象转换成 query         |
| `unparam`              | `fmt.unparam(val: String)`                                                    | 将 query 转换成对象        |
| `prefixZero`           | `fmt.prefixZero(num: Number, length: Number)`                                 | 补零                       |
| `round`                | `fmt.round(num: Number, decimals: Number)`                                    | 四舍五入                   |
| `randomNum`            | `fmt.randomNum(min: Number, max?: Number)`                                    | 指定范围内的随机数         |
| `mask`                 | `fmt.mask(str: String, start: Number, maskLen: Number, _placeholder: String)` | 字符串遮挡                 |
| `maskLeft`             | `fmt.maskLeft(str: String, maskLen: Number, _placeholder: String)`            | 从左侧开始遮挡             |
| `maskRight`            | `fmt.maskRight(str: String, maskLen: Number, _placeholder: String)`           | 从右侧开始遮挡             |
| `trim`                 | `fmt.trim(str: String, type: String['all', 'lr', 'left', 'right'])`           | 清空字符串空格             |
| `guid`                 | `fmt.guid()`                                                                  | 生成随机码                 |
| `phone`                | `fmt.phone(PhoneNumber: String, split: String, distribute: String)`           | 格式化手机号码             |
