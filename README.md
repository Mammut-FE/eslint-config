# Mammut ESLint Config

> Extends (Airbnb Javascript Code Style)[https://github.com/airbnb/javascript]

## Diff

### 不需要添加分号

```js
console.log('./'); // bad
console.log('./') // good
```

大部分编译工具会为我们自动添加分号，所以线上代码是有分号，我们本地开发不需要添加。另外 V8 也是足够聪明的，除了以下的情况，其他都不需要添加分号

- 行首以 `[]()` 开头，需要在行首添加分号

```js
;(() => {})() // good

// 如果行首不添加分号，那么会出现这种情况
console.log('./')
(() => {})()
// => 会别认为是
console.log('./')(() => {})()
```

- 需要在一行写多个语句，但是不推荐这样的写法

- 另外有一些会产生歧义但是毫无意义的写法，为了避免歧义可以添加分号

```js
1
+2
// =>
1 + 2
```

> 在这里，分号主要用于解决歧义，并且一般添加在行首而不是行末

## Welcome to Contribute
