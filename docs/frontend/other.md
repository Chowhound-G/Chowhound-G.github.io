# Web蓝桥真题笔记

## CSS

### 练习题:

[电影院座位](https://www.lanqiao.cn/problems/5133/learning/?subject_code=4&group_code=2&match_num=14&match_flow=1&origin=cup)

[自适应页面](https://www.lanqiao.cn/problems/5136/learning/?subject_code=4&group_code=1&match_num=14&match_flow=1&origin=cup)

[新鲜的蔬菜](https://www.lanqiao.cn/problems/2439/learning/?subject_code=4&group_code=1&match_num=13&match_flow=2&origin=cup)

[开学礼物大放送](https://www.lanqiao.cn/problems/2442/learning/?subject_code=4&group_code=1&match_num=13&match_flow=2&origin=cup)

### 1.flex 布局

```css
.container:{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;  
  justify-content:space-between;
  align-item: center;
}

.item{
 align-self: flex-end; 
}

```

### 2.grid布局

+ 容器

```css
.grid-container{
		display: grid;
    grid-template-columns: 100px 200px auto;
  	grid-template-rows: 80px auto 80px;
}
```

+ 子项

```css
.grid-item {
  grid-column-start: 1; 
  grid-column-end: 3; 
  grid-row-start: 1; 
  grid-row-end: 3; 
}
```

### 3.媒体查询

```css
@media (max-width: 800px){
  
}

@media (min-width: 800px){
  
}


```

### 4.父子定位

```css
position:relative
position:absolute

需要居中
left:50%;
transform: translateX(-50%);


```

### 5.补充一些不太熟悉的css

```css

opacity:



transform: rotate(45deg);/translate(x, y)/scale(sx, sy)/skew(x-angle, y-angle)/matrix(a, b, c, d, e, f)


```

### 6.清楚浏览器自带的属性

```css
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
```



## ES6语法

### Let

1. **let 声明的全局变量不是全局对象window的属性**

这就意味着，你不可以通过 window. 变量名 的方式访问这些变量，而 var 声明的全局变量是 window 的属性，是可以通过 window. 变量名 的方式访问的。

```js
var a = 5
console.log(window.a) // 5
let a = 5
console.log(window.a) // undefined
```

2. **用let定义变量不允许重复声明**

这个很容易理解，使用 var 可以重复定义，使用 let 却不可以。

```js
var a = 5
var a = 6

console.log(a) // 6
```

如果是 let ，则会报错

```js
let a = 5
let a = 6
// VM131:1 Uncaught SyntaxError: Identifier 'a' has already been declared
//   at <anonymous>:1:1
```

3. **let声明的变量不存在变量提升**

```js
function foo() {
    console.log(a)
    var a = 5
}

foo() //undefined
```

而对于 let 而言，变量的调用是不能先于声明的，看如下代码：

```js
function foo() {
    console.log(a)
    let a = 5
}

foo()
// Uncaught ReferenceError: Cannot access 'a' before initialization
```

4. **let声明的变量具有暂时性死区**

只要块级作用域内存在 `let` 命令，它所声明的变量就绑定在了这个区域，不再受外部的影响。

```js
var a = 5
if (true) {
    a = 6
    let a
}
// Uncaught ReferenceError: Cannot access 'a' before initialization
```

ES6 明确规定，如果区块中存在 `let` 和 `const` 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用 `let` 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

5. **let 声明的变量拥有块级作用域**

let实际上为 JavaScript 新增了块级作用域

```js
{
    let a = 5
}
console.log(a) // undefined
```



### Const 

`const` 除了具有 `let` 的块级作用域和不会变量提升外，还有就是它定义的是常量，在用 `const` 定义变量后，我们就不能修改它了，对变量的修改会抛出异常。

```js
const PI = 3.1415

console.log(PI)

PI = 5

console.log(PI)
// Uncaught TypeError: Assignment to constant variable.
```



### Array的For.. of

```js
for (let val of [1, 2, 3]) {
    console.log(val);
}
// 1,2,3
```

```js
for (variable of iterable) {

}
```

看下这个伪代码，of 后面是 iterable 既不是 for 循环规定的 array，也不是 for...in 规定的 Object，而是 iterable。如果查查 iterable 的含义就很直观的感受到 for...of 遍历的是一切可遍历的元素（数组、对象、集合）等，不要小瞧这个功能，因为在 ES6 中允许开发者自定义遍历，换句话说任何数据结构都可以自定义一个遍历，这个遍历是不能被 for、for...in 理解和实现的。

```js
for (let item of arr) {
    console.log(item)
}

for (let item of arr.values()) {
    console.log(item)
}

for (let item of arr.keys()) {
    console.log(item)
}

for (let [index, item] of arr.entries()) {
    console.log(index, item)
}
```

for...of是支持 break、continue、return的，所以在功能上非常贴近原生的 for。

### Array.from()

数组是开发中经常用到的数据结构，它非常好用。在 JavaScript 的世界里有些对象被理解为数组，然而缺不能使用数组的原生 API，比如函数中的 arguments、DOM中的 NodeList等。当然，还有一些可遍历的对象，看上去都像数组却不能直接使用数组的 API，因为它们是伪数组（Array-Like）。要想对这些对象使用数组的 API 就要想办法把它们转化为数组，传统的做法是这样的：

```js
let args = [].slice.call(arguments);
let imgs = [].slice.call(document.querySelectorAll('img'));
```

基本原理是使用 call 将数组的 api 应用在新的对象上，换句话说是利用改变函数的上下文来间接使用数组的 api。在 ES6 中提供了新的 api 来解决这个问题，就是 Array.from，代码如下：

```js
let args = Array.from(arguments);
let imgs = Array.from(document.querySelectorAll('img'));
```

> TIP
>
> 伪数组具备两个特征，1. 按索引方式储存数据 2. 具有length属性；如：
>
> ```js
> let arrLike = {
>     0: 'a',
>     1: 'b',
>     2: 'c',
>     length: 3
> }
> ```

### Array.of()

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

**语法：**`Array.of(element0[, element1[, ...[, elementN]]])`

|   参数   |                   含义                   | 必选 |
| :------: | :--------------------------------------: | :--: |
| elementN | 任意个参数，将按顺序成为返回数组中的元素 |  Y   |

### Class

```js
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log( `I am walking` )
    }
}
let dog = new Animal('dog')
let monkey = new Animal('monkey')
```

很明显，从定义上就很专业了，有构造函数、方法，但是 ES6 增加了新的数据类型 class 吗？

```js
console.log(typeof Animal) //function
```

```js
console.log(dog.hasOwnProperty('type')) //true
```

这个表现也和 ES5 中直接使用 function 定义类的方式相同，所以得出一个结论：class 的方式是 function 方式的语法糖。

**Getters & Setters**

```js
class Animal {
    constructor(type, age) {
        this.type = type
        this._age = age
    }
    get age() {
        return this._age
    }
    set age(val) {
        this._age = val
    }
}
```

**继承**

```js
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log( `I am walking` )
    }
    static eat() {
        console.log( `I am eating` )
    }
}

class Dog extends Animal {
  constructor () {
    super('dog')
  }
  run () {
    console.log('I can run')
  }
}
```

### Set

生成 Set 实例

```js
  let s = new Set()
```

可以定义一个空的 Set 实例，也可以在实例化的同时传入默认的数据。

```js
  let s = new Set([1, 2, 3, 4])
```

 **添加数据**

```js
  s.add('hello')
  s.add('goodbye')
```

或者

```js
  s.add('hello').add('goodbye')
```

**删除数据**

删除数据分两种，一种是删除指定的数据，一种是删除全部数据。

```js
  // 删除指定数据
  s.delete('hello') // true
  // 删除全部数据
  s.clear()
```

**统计数据**

Set 可以快速进行统计数据，如数据是否存在、数据的总数。

```js
  // 判断是否包含数据项，返回 true 或 false
  s.has('hello') // true
  // 计算数据项总数
  s.size // 2
```

**数组去重**

```js
let arr = [1, 2, 3, 4, 2, 3]
let s = new Set(arr)
console.log(s)
```

**合并去重**

```js
let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]
let s = new Set([...arr1, ...arr2])//先取所有元素然后去重
console.log(s)
console.log([...s])
console.log(Array.from(s))
```

**交集**

```js
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let result = new Set(arr1.filter(item => s2.has(item)))//filter是遍历arr1,然后返回一个数组
console.log(Array.from(result))
```

**差集**

```js
let arr3 = new Set(arr1.filter(item => !s2.has(item)))//先得到arr1有arr2没有的
let arr4 = new Set(arr2.filter(item => !s1.has(item)))//再得到arr2中有arr1中没有的
console.log(arr3)
console.log(arr4)
console.log([...arr3, ...arr4])//将set转换为array数组
```

**遍历方式**

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员
- for...of：可以直接遍历每个成员

```js
  console.log(s.keys()) // SetIterator {"hello", "goodbye"}
  console.log(s.values()) // SetIterator {"hello", "goodbye"}
  console.log(s.entries()) // SetIterator {"hello" => "hello", "goodbye" => "goodbye"}
  s.forEach(item => {
      console.log(item) // hello // goodbye
  })

  for (let item of s) {
      console.log(item)
  }

  for (let item of s.keys()) {
      console.log(item)
  }

  for (let item of s.values()) {
      console.log(item)
  }

  for (let item of s.entries()) {
      console.log(item[0], item[1])
  }
```

### Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```js
  let map = new Map([iterable])
```

Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ], [ 2, 'two' ]])。 每个键值对都会添加到新的 Map。null 会被当做 undefined。

**添加数据**

```js
  let keyObj = {}
  let keyFunc = function() {}
  let keyString = 'a string'

  // 添加键
  map.set(keyString, "和键'a string'关联的值")
  map.set(keyObj, '和键keyObj关联的值')
  map.set(keyFunc, '和键keyFunc关联的值')
```

**删除数据**

```js
  // 删除指定的数据
  map.delete(keyObj)
  // 删除所有数据
  map.clear()
```

**统计数据**

```js
  // 统计所有 key-value 的总数
  console.log(map.size) //2
  // 判断是否有 key-value
  console.log(map.has(keyObj)) // true
```

**查询数据**

- get() 方法返回某个 Map 对象中的一个指定元素

```js
  console.log(map.get(keyObj)) // 和键keyObj关联的值
```

### Proxy(没弄明白具体使用场景)

在 ES6 标准中新增的一个非常强大的功能是 Proxy，它可以自定义一些常用行为如查找、赋值、枚举、函数调用等。通过 Proxy 这个名称也可以看出来它包含了“代理”的含义，只要有“代理”的诉求都可以考虑使用 Proxy 来实现。

**语法**

```js
let p = new Proxy(target, handler)
```

**解释**

|  参数   |                             含义                             | 必选 |
| :-----: | :----------------------------------------------------------: | :--: |
| target  | 用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理） |  Y   |
| handler |    一个对象，其属性是当执行一个操作时定义代理的行为的函数    |  Y   |

MDN 给出的解释偏官方，通俗的讲第一个参数 target 就是用来代理的“对象”，被代理之后它是不能直接被访问的，而 handler 就是实现代理的过程。

```js
let o = {
    name: 'xiaoming',
    age: 20
}

let handler = {
    get(obj, key) {
        return Reflect.has(obj, key) ? obj[key] : ''
    }
}

let p = new Proxy(o, handler)

console.log(p.from)
```

 **get**

拦截对象属性的读取，比如proxy.foo和proxy['foo']。

```js
let arr = [7, 8, 9]
arr = new Proxy(arr, {
    get(target, prop) {
        // console.log(target, prop)
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[1])
console.log(arr[10])
let dict = {
    'hello': '你好',
    'world': '世界'
}
dict = new Proxy(dict, {
    get(target, prop) {
        return prop in target ? target[prop] : prop
    }
})
console.log(dict['world'])
console.log(dict['imooc'])
```

**set**

拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

```js
let arr = []
arr = new Proxy(arr, {
    set(target, prop, val) {
        if (typeof val === 'number') {
            target[prop] = val
            return true
        } else {
            return false
        }
    }
})
arr.push(5)
arr.push(6)
console.log(arr[0], arr[1], arr.length)
```

**has**

拦截propKey in proxy的操作，返回一个布尔值。

```js
let range = {
    start: 1,
    end: 5
}
//一个对象两个属性

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end
    }//has方法前面的target即传入对象,后面的prop是参数,使用时作为in的逆向
})
console.log(2 in range)
console.log(9 in range)
```



### 字符串、函数、数组和对象的扩展(Spread Operator)

#### 字符串

扩展运算符可以用来将字符串分解成单个字符的数组。这在需要操作字符串中的每个字符时非常有用。例如：

```js
javascriptCopy code
let str = "hello";
let charArray = [...str]; // ['h', 'e', 'l', 'l', 'o']
```

#### 数组

数组是扩展运算符使用最为频繁的地方。它可以用于合并数组、复制数组等场景。

合并数组

可以用扩展运算符来合并两个或多个数组。

```js
let first = [1, 2];
let second = [3, 4];
let merged = [...first, ...second]; // [1, 2, 3, 4]
```

**复制数组**

扩展运算符可以创建一个数组的浅拷贝。

```js
let original = [1, 2, 3];
let copy = [...original]; // [1, 2, 3]
```

**插入元素**

你还可以在新数组中使用扩展运算符来插入新元素。

```js
let numbers = [2, 3, 4];
let newNumbers = [1, ...numbers, 5]; // [1, 2, 3, 4, 5]
```

在ES2018中，扩展运算符的用法被扩展到了对象。这使得合并对象或者复制对象变得更加简单。

**合并对象**

可以用扩展运算符来合并两个或多个对象。如果存在同名属性，则后者会覆盖前者的属性值。

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = {...obj1, ...obj2}; // { a: 1, b: 3, c: 4 }
```

**复制对象**

扩展运算符可以用来创建一个对象的浅拷贝。

```js
let originalObj = { a: 1, b: 2 };
let copiedObj = {...originalObj}; // { a: 1, b: 2 }
```

### 箭头函数

```js
let hello = () => {
    console.log('say hello')
}
```

```js
let hello = (name) => {
    console.log('say hello', name)
}
// 或者

let hello = name => {
    console.log('say hello', name)
}
```

如果只有一个参数，可以省略括号，如果大于一个参数一定要记得带括号

- 如果返回值是表达式可以省略 return 和 {}

```js
  let pow = x => x * x
```

- **如果返回值是字面量对象**

  如果返回值是字面量对象，一定要用小括号包起来

```js
  let person = (name) => ({
      age: 20,
      addr: 'Beijing City'
  })
```



### 异步编程和模块化

### Promise

```js
const promise = new Promise(function(resolve, reject) {
    // ... some code

    if ( /* 异步操作成功 */ ) {
        resolve(value)
    } else {
        reject(error)
    }
  
})
```



### Async / Await

前面添加了async的函数在执行后都会自动返回一个Promise对象:

```js
function foo() {
    return 'imooc'
}
console.log(foo()) // 'imooc'
```

相当于

```js
async function foo() {
    return 'imooc' // Promise.resolve('imooc')

    // let res =  Promise.resolve('imooc')
    // console.log(res)
}
console.log(foo()) // Promise
foo()
```

await后面需要跟异步操作，不然就没有意义，而且await后面的Promise对象不必写then，因为await的作用之一就是获取后面Promise对象成功状态传递出来的参数。

```js
function timeout() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)
            resolve() // resolve('success')
        }, 1000)
    })
}

// 不加async和await是2、1   加了是1、2
async function foo() {
    await timeout() // let res = await timeout() res是success
    console.log(2)
}
foo()
```

### 对于失败的处理

```js
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('success')
            reject('error')
        }, 1000)
    })
}
async function foo() {
    return await timeout()
}
foo().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
```

在async函数中使用await，那么await这里的代码就会变成同步的了，意思就是说只有等await后面的Promise执行完成得到结果才会继续下去，await就是等待。

示例:需要请求a.json后请求b.json接着c.json

```js
// 把ajax封装成模块
import ajax from './ajax'

function request(url) {
    return new Promise(resolve => {
        ajax(url, res => {
            resolve(res)
        })
    })
}
async function getData() {
    let res1 = await request('static/a.json')
    console.log(res1)
    let res2 = await request('static/b.json')
    console.log(res2)
    let res3 = await request('static/c.json')
    console.log(res3)
}
getData()
```

### Fetch

`fetch` 函数至少需要一个参数：资源的 URL。它返回一个 `Promise`，该 `Promise` 解析为一个 `Response` 对象。使用 `.then()` 方法处理响应。

例如，从一个提供文本数据的 API 获取数据：

```js
fetch('https://api.example.com/data.txt')
  .then(response => response.text())  // 将响应体转换为文本
  .then(text => console.log(text))    // 输出获取的文本
  .catch(error => console.error('Error:', error));  // 捕获并打印错误
```

获取一个Json

```js
fetch('https://api.example.com/items')
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();  // 解析 JSON
  })
  .then(data => console.log(data))  // 输出 JSON 数据
  .catch(error => console.error('Error:', error));
```

发送一个 POST 请求并附带 JSON 数据：

```js
fetch('https://api.example.com/data', {
  method: 'POST',  // 指定请求方法为 POST
  headers: {
    'Content-Type': 'application/json'  // 设置请求头部标明内容类型
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })  // 将 JavaScript 对象转换为 JSON 字符串作为请求体
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```



## JS

### 练习题:

[新年贺卡](https://www.lanqiao.cn/problems/1768/learning/?page=1&first_category_id=2&second_category_id=11&contain_answer=true&tags=JavaScript)

[别抖了](https://www.lanqiao.cn/problems/2287/learning/?page=1&first_category_id=2&second_category_id=11&contain_answer=true&tags=JavaScript)

[分阵营,比高低](https://www.lanqiao.cn/problems/2290/learning/?page=1&first_category_id=2&second_category_id=11&contain_answer=true&tags=JavaScript)

[视频弹幕](https://www.lanqiao.cn/problems/5139/learning/?subject_code=4&group_code=2&match_num=14&match_flow=1&origin=cup)

### 1.随机数

+ 随机数 Math.random()  生成0-1之间的数

如果需要取一个数组中的值则✖️数组长度并使用Math.floor()

> (Math.random()*(max-min)+min)+1

取到min+1~max+1之间的值

解析:

random取0-1

(Max-min)*[0-1]保证得到一个数在0-(Max-min)之间

在上面的基础上➕一个min+1,则范围变为 min+1~Max+1

### 2.抖动函数

+ SetTimeout

+ ClearTimeout

```js
function debounce(fn, delay = 0) {
  let timeoutId = null; // 用于存储 setTimeout 的返回值

  // 使用箭头函数来确保 this 指向不变
  return (...args) => {
    // 如果之前的计时器尚未完成，则取消它
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // 设置一个新的计时器
    timeoutId = setTimeout(() => {
      // 直接使用 ...args 传递所有参数
      fn(...args);
    }, delay);
  };
}

module.exports = debounce; // 检测需要，请勿删除
```

+ 箭头函数的this

```js
const obj = {
  method: function() {
    // 传统函数表达式
    console.log("Traditional function:", this); // this 指向 obj
  },
  arrowMethod: () => {
    // 箭头函数
    console.log("Arrow function:", this); // this 指向定义 arrowMethod 时的上下文
  }
};

obj.method(); // Traditional function: obj
obj.arrowMethod(); // Arrow function: [Object global] 或在浏览器环境中是 window 对象

```

### 3.数据类型

+ Set 集合[每种元素只出现一次]

```js
const mySet = new Set();

// 用数组初始化 Set
const mySetWithValues = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySetWithValues); // Set(5) {1, 2, 3, 4, 5}

// 新增
mySet.add(1);
mySet.add(2);
mySet.add(2); // 添加一个已存在的元素不会有任何效果

// 检查
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// 删除
mySet.delete(2);
console.log(mySet.has(2)); // false

// 清空所有
mySet.clear();
console.log(mySet.size); // 0

// 获取大小
console.log(mySetWithValues.size); // 5


// 两种遍历方式
// forEach
mySetWithValues.forEach(value => {
  console.log(value);
});

// for循环
for (let value of mySetWithValues) {
  console.log(value);
}

```



### 4.排序函数Sort

+ 默认不使用参数

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // 输出: ["Apple", "Banana", "Mango", "Orange"]

```

+ 带参数的情况

  + 如果返回值**小于 0**，那么 `a` 会被排在 `b` 前面；

  - 如果返回值**大于 0**，`b` 会被排在 `a` 前面；

  - 如果返回值**等于 0**，`a` 和 `b` 的相对位置不变。（但是在某些JavaScript引擎的实现中，相对位置可能会改变，因此最好不要依赖于相对位置不变的特性。）

+ a-b (从小到大,升序排序) 

+ b-a(从大到小,降序排序)

##### 注意事项

- `sort()` 方法会**原地排序**数组，并且返回对原数组的引用。这意味着它直接修改原数组，而不是创建一个新的排序后的数组。
- 对非ASCII字符的字符串进行排序时，默认排序可能不会按照本地语言习惯来排序。在这种情况下，你可以使用 `Intl.Collator` 对象，这是一个基于国际化的比较器，可以作为 `sort()` 方法的比较函数来使用。

+ 箭头函数➡️记得 return 否则不要加大括号{}



### 5.reduce函数(复杂)

```js
array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
```

- **accumulator** - 累加器累计回调的返回值；它是上一次调用回调时返回的累积值，或者是提供的初始值（`initialValue`）。
- **currentValue** - 数组中正在处理的元素。
- **currentIndex**（可选）- 数组中正在处理的当前元素的索引。如果提供了`initialValue`，则起始索引号为0，否则为1。
- **array**（可选）- 调用`reduce`的数组。
- **initialValue**（可选）- 作为第一次调用 `callback` 函数时第一个参数的值。

```js
function orderStudentGrade(students) {
  let r = students.reduce((t,v)=> (t[v.class] ? t[v.class].push(v) : t[v.class] = [v],t),{})
  for(let k in  r){
    r[k].sort((a,b)=> (b.math+b.language+b.english+b.physics+b.chemistry)-(a.math+a.language+a.physics+a.chemistry+a.english))
  }
  return r
}
```

`reduce()` 被用来对数组 `students` 进行操作，目的是根据学生所在班级将他们分组。这里的 `reduce()` 初始值是一个空对象 `{}`，并逐步构建成一个以班级为键，班级中所有学生对象数组为值的对象。

每次迭代时，`reduce()` 的回调函数检查当前处理的学生 (`next`) 是否属于已经在累加器 (`prev`) 中存在的班级：

- 如果班级已存在，就将当前学生添加到该班级的数组中。
- 如果班级不存在，就首先为该班级创建一个空数组，并将学生添加到数组中。

### 6.扩展运算符...

+ 遍历方法:

````markdown
1. 使用 for 循环
```
function collectPuzzle(...puzzles) {
  for (let i = 0; i < puzzles.length; i++) {
    console.log(puzzles[i]); // 处理每个拼图
  }
}
```

2. 使用 for...of 循环
for...of 循环是ES6引入的，适用于遍历数组和其他可迭代对象。

```
function collectPuzzle(...puzzles) {
  for (let puzzle of puzzles) {
    console.log(puzzle); // 处理每个拼图
  }
}
```
3. 使用 forEach() 方法
forEach() 是数组的方法，可以为数组中的每个元素执行一次提供的函数。

```
function collectPuzzle(...puzzles) {
  puzzles.forEach(puzzle => {
    console.log(puzzle); // 处理每个拼图
  });
}
```
````

#####  注意事项:

在JavaScript中，`for...in` 循环是用来遍历对象的属性的一种方式。这种循环会遍历一个对象的所有可枚举属性，包括其原型链中继承的属性。因此，它通常用于对象，而不是用于数组，因为对数组使用 `for...in` 循环可能会带来意想不到的行为，如遍历出非索引属性或原型链上的属性。

```js
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
  console.log(key, object[key]);
}
```

### 7. setInterval

```js
let timer = setInverval(
	()=>{
		clearInterval(timer)  //进行消除
	}
)
```

### 8.dom操作

```js
document.querySelector(" ").addEventListener("click",()=>{

})
// 查询并监听点击事件

const spanEle = document.createElement("span")
spanEle.innerText = ""
spanEle.style.positon = "absolute"
```

### 9.正则表达式

#### 1: 匹配字符串

假设你想在一段文本中查找单词 "apple"。

```js
const text = "I have an apple.";
const regex = /apple/;
const matchResult = text.match(regex);
console.log(matchResult); // 输出: ["apple"]
```

#### 2: 使用标志

在正则表达式中，你可以使用不同的标志。例如，`i` 表示忽略大小写，`g` 表示全局搜索（匹配所有结果而非停在第一个）。

```js
const text = "Apples are tasty, and I like apples.";
const regex = /apples/gi;
const matchResult = text.match(regex);
console.log(matchResult); // 输出: ["Apples", "apples"]
```

#### 3: 替换文本

你也可以使用正则表达式替换文本中的某些部分。

```js
const text = "Hello, world!";
const regex = /world/;
const newText = text.replace(regex, "JavaScript");
console.log(newText); // 输出: "Hello, JavaScript!"
```

#### 4: 测试字符串是否匹配

如果你只想检查一个字符串是否匹配一个正则表达式，可以使用 `test()` 方法。

```js
const text = "JavaScript is fun.";
const regex = /javascript/i;
const isMatch = regex.test(text);
console.log(isMatch); // 输出: true
```

#### 5:使用捕获组

捕获组可以帮助你从字符串中提取信息。

```js
const text = "My birthday is 12/15/1997.";
const regex = /(\d{2})\/(\d{2})\/(\d{4})/;
const matchResult = text.match(regex);
console.log(matchResult);
// 输出: ["12/15/1997", "12", "15", "1997", index: 15, input: "My birthday is 12/15/1997.", groups: undefined]
```

### 10.Object

+ hasOwnProperty("key") 判断其是否存在属性

+ for in遍历 进行循环,必要时使用 []获取值

### 11.字符串相关函数

1. **`charAt(index)`** - 返回指定位置的字符。
2. **`concat(string2, string3, ..., stringN)`** - 连接两个或多个字符串，并返回新的字符串。
3. **`includes(searchString, position)`** - 检查字符串是否包含指定的子字符串，返回布尔值。
4. **`indexOf(searchValue, fromIndex)`** - 返回指定子字符串在字符串中首次出现的索引，如果没有找到，则返回-1。
5. **`lastIndexOf(searchValue, fromIndex)`** - 返回指定子字符串在字符串中最后一次出现的索引，如果没有找到，则返回-1。
6. **`match(regexp)`** - 对字符串执行一个正则表达式搜索，并返回一个包含结果的数组或null。
7. **`replace(searchFor, replaceWith)`** - 替换与正则表达式或子字符串匹配的部分。
8. **`replaceAll(searchFor, replaceWith)`** - 替换字符串中所有匹配项。
9. **`slice(beginIndex, endIndex)`** - 提取字符串的某个部分，并以新的字符串返回被提取的部分。
10. **`split(separator, limit)`** - 通过将字符串分割成子字符串来将其分割成一个字符串数组。
11. **`substring(startIndex, endIndex)`** - 返回字符串中指定两个索引之间的字符。
12. **`toLowerCase()`** - 将字符串转换为小写。
13. **`toUpperCase()`** - 将字符串转换为大写。
14. **`trim()`** - 从字符串的两端删除空白字符。
15. **`trimStart()`** 或 **`trimLeft()`** - 从字符串的开头删除空白字符。
16. **`trimEnd()`** 或 **`trimRight()`** - 从字符串的结尾删除空白字符。
17. **`length`** - 属性，返回字符串的长度。



## Vue2

### Options API

```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### watch

```vue
<template>
  <div>
    <input v-model="inputDate" placeholder="输入日期，格式为 YYYY-MM-DD">
    <button @click="fetchData">获取数据</button>
    <div v-if="loading">正在加载...</div>
    <div v-else-if="error" class="error">加载错误: {{ error }}</div>
    <div v-else>
      <h3>数据结果</h3>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      inputDate: '',
      result: null,
      error: null,
      loading: false
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.error = null;
      // 模拟从服务器获取数据
      setTimeout(() => {
        if (this.inputDate === '2020-01-01') {
          this.result = { message: '新年好！' };
        } else {
          this.result = { message: `数据为 ${this.inputDate}` };
        }
        this.loading = false;
      }, 1000);
    }
  },
  watch: {
    // 监听 inputDate 的变化
    inputDate(newVal, oldVal) {
      if (newVal.trim() && newVal !== oldVal) {
        console.log(`日期从 ${oldVal} 改变到 ${newVal}`);
        this.fetchData();
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>

```

要点:

watch:{

​	”变量名“(newVal,oldVal){

​		//操作

​	}

}

```js
//Vue3中
import {watch} from 'vue'
watch(inputDate, (newValue, oldValue) => {
      if (newValue.trim() && newValue !== oldValue) {
        fetchData();
      }
    });
```

### computed

```js
//Vue2
computed: {
    formattedDate() {
      return `The entered date is: ${this.inputDate}`;
    }
  }
```

要点:

computed:{

​	"变量名"(){

​		return 一个返回值

}

}



```js
//Vue3中
// 创建计算属性
    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });
```



### This.$emit()

```vue
<!-- ButtonComponent.vue -->
<template>
  <button @click="handleClick">Click me!</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // 发出 'clicked' 事件
      this.$emit('clicked', 'Button was clicked!');
    }
  }
}
</script>

```

```vue
<template>
  <div>
    <button-component @clicked="handleButtonClicked"></button-component>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'

export default {
  components: {
    ButtonComponent
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    handleButtonClicked(msg) {
      // 当 'clicked' 事件被触发时，这个方法被调用
      this.message = msg;
    }
  }
}
</script>
```



### props

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

```

父子通信,将父组件的值传递给子组件

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <child-component :title="parentTitle"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    'child-component': ChildComponent
  },
  data() {
    return {
      parentTitle: 'Hello from Parent'
    }
  }
}
</script>

```

要点:

子组件:  `props: { title:string}(名称:类型)`

父组件:   `: props名=“传递值“`

## Vue3

### Compositon API

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### ref

`ref` 用于定义一个响应式的数据引用。当你使用 `ref` 时，你实际上创建了一个响应式的对象，这个对象有一个 `.value` 属性指向实际的值。`ref` 通常用于基本类型数据，但也可以用于引用类型数据。

```vue
<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    return {
      count
    };
  }
}
</script>

```

在模板中，我们可以直接使用 `count`，而在 JavaScript 中访问或修改它时，需要使用 `count.value`。

### reactive

`reactive` 用于创建响应式对象。它使得一个普通对象变为响应式的，所有嵌套的属性也都是响应式的。适合用于更复杂或结构化的数据对象。

```vue
<template>
  <div>
    <h1>{{ state.count }}</h1>
    <button @click="state.count++">Increment</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0
    });

    return {
      state
    };
  }
}
</script>

```

在这个例子中，我们使用 `reactive` 创建了一个响应式的对象 `state`，它包含一个属性 `count`。在模板中，我们通过 `state.count` 直接访问和修改 `count` 的值。

### Props 和 Events

#### Porps

父

```vue
<template>
  <ChildComponent :message="parentMessage" />
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const parentMessage = ref('Hello from parent!');
</script>

```

子

```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: String
});
</script>

```

**要点:** 

子:

const props = defineProps({

​	`变量名 : 类型`

})

父:

引入组件后使用 `:变量名="值"`



#### Events

子组件向父组件发送消息则通过 `$emit` 方法。Vue 3 支持在 `<script setup>` 中直接使用 `defineEmits` 或通过返回的方法使用。

子:

```vue
<template>
  <button @click="notifyParent">Click me!</button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['notify']);

const notifyParent = () => {
  emit('notify', 'Message from child!');
};
</script>

```

父:

```vue
<template>
  <ChildComponent @notify="handleNotify" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const handleNotify = (message) => {
  console.log(message); // 输出: Message from child!
};
</script>

```

要点:

子:

使用defineEmits(['函数名'])

const 触发的函数 = ( )=>{

​	emit('绑定的函数名',"传递的值")

}

父:

引入子组件,@绑定函数名=”触发自己的函数(参数)“

再写函数进行使用



### Provide / Inject

Vue 3 仍然支持使用 `provide` 和 `inject` 进行跨组件层级的通信，这对于开发深层次嵌套的组件特别有用。这在 Vue 3 中得到了进一步的优化，尤其是在使用组合式 API 时。

祖先: `provide ("kdy",value)` 提供

```vue
<script setup>
import { provide } from 'vue';

const someData = 'secret data';
provide('key', someData);
</script>

```

后代: `inject("key")`获取

```vue
<script setup>
import { inject } from 'vue';

const receivedData = inject('key');
</script>

```

### Router

```js
const router = createRouter({
  // TODO:待补充代码，为项目配置 history 模式的路由
  history: createWebHistory(),
  routes: [
    { path: "/", component: WalletPage },
    { path: "/deposit", component: DepositPage },
  ],
});
```

### Piania

#### 创建 Pinia Store

```js
import { defineStore } from 'pinia'
//先定义一个store的用途,这里是作为主要的store
export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  //sote里由2部分组成: actions & state
  //state负责保存状态
  //actions负责控制state
  actions: {
    increment() {
      this.count++
    }
  }
})

```

####  在 Vue 组件中使用 Store

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()//先创建piania

app.use(pinia)//再app.use
app.mount('#app')

```

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useMainStore } from './store'
  //使用store时先导入

const store = useMainStore()
//然后定义一个store用

const { count, increment } = storeToRefs(store)
// 通过storeToRefs得到对应的变量

</script>

```

模块化、插件、持久化...

## Axios

### Get请求

```vue
<template>
  <div>
    <h1>用户列表</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
});
</script>
```

### Post请求

```vue
<template>
  <div>
    <button @click="addUser">添加用户</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const message = ref('');

async function addUser() {
  const user = {
    name: '新用户',
    email: 'newuser@example.com'
  };
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    message.value = '用户添加成功: ' + response.data.name;
  } catch (error) {
    console.error('添加用户失败', error);
    message.value = '添加用户失败';
  }
}
</script>

```

### 混合Vue\TS使用

```js
<template>
  <div>
    <h1>用户列表</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
});
</script>

```

+ Post

```vue
<template>
  <div>
    <button @click="addUser">添加用户</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

interface ResponseUser extends User {
  id: number;
}

const message = ref<string>('');

async function addUser() {
  const user: User = {
    name: '新用户',
    email: 'newuser@example.com'
  };
  try {
    const response = await axios.post<ResponseUser>('https://jsonplaceholder.typicode.com/users', user);
    message.value = '用户添加成功: ' + response.data.name;
  } catch (error) {
    console.error('添加用户失败', error);
    message.value = '添加用户失败';
  }
}
</script>

```

### 创建和使用Axios实例(默认配置)

**步骤1: 创建Axios实例**

首先，你需要创建一个Axios实例，并对其进行配置。这通常在一个单独的文件中完成，以便于管理和复用。

```js

// src/api/client.js
import axios from 'axios';

// 创建axios实例
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API的基础URL
  headers: {
    'Content-Type': 'application/json', // 默认内容类型
  },
  timeout: 1000, // 请求超时时间
});

export default apiClient;
```

**步骤2: 在Vsue组件中使用Axios实例**

接下来，在Vue组件中导入并使用这个实例来发起HTTP请求。

```vue
<template>
  <div>
    <h1>用户列表</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import apiClient from '@/api/client';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const response = await apiClient.get<User[]>('/users'); // 使用自定义Axios实例
    users.value = response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
});
</script>

```

使用自定义Axios实例的好处包括：

- **一致性**：通过统一配置如基础URL、头信息等，你可以确保所有的HTTP请求都遵循相同的标准。
- **可维护性**：当你需要更改如超时时间、头信息等全局HTTP设置时，你只需在一个地方进行修改。
- **复用性**：你可以创建多个不同配置的Axios实例，分别对应不同的后端服务。

### 请求配置选项

`method`:指定请求的HTTP方法，例如GET、POST、PUT、DELETE等。

`url`:指定请求的URL。

`params`:指定请求的查询参数，以对象的形式提供。

`data`:指定请求的主体数据，适用于POST、PUT等请求。

`headers`:指定请求的头信息，以对象的形式提供。

`timeout`:指定请求的超时时间，单位为毫秒。

`auth`:指定身份验证信息，可以是一个包含`username`和`password`的对象，也可以是一个`{ username, password }`形式的数组。

`withCredentials`:指定是否发送跨域请求时携带身份验证凭据（如cookies）。

`responseType`:指定响应的数据类型，例如json、blob、document等。

示例

```vue
<template>
  <div>
    <h1>用户列表</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<User[]>('/users', {
      params: {
        // 设置查询参数
        page: 1,
        limit: 10
      },
      headers: {
        // 设置请求头
        'X-Requested-With': 'XMLHttpRequest'
      },
      timeout: 5000, // 设置超时时间为5秒
      withCredentials: true, // 发送跨域请求时携带凭据
    });
    users.value = response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
});
</script>
```

### 使用拦截器的场景

1. **添加通用的HTTP头**：例如，你可能想在每个请求中自动添加一个认证令牌。
2. **响应处理**：自动处理某些全局的HTTP响应，例如重定向或者特定错误码。
3. **请求数据转换**：在请求发送到服务器之前修改请求数据。
4. **响应数据转换**：在响应数据到达客户端之前对其进行格式化。

下面的例子展示了如何在Axios实例中添加请求拦截器和响应拦截器：

```js
// src/api/client.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// 添加请求拦截器
apiClient.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 例如添加认证令牌
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  }, 
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
apiClient.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 可以在这里统一处理数据格式
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    if (error.response && error.response.status === 401) {
      // 例如，如果用户未授权，可以在这里处理
      console.log('需要用户验证');
    }
    return Promise.reject(error);
  }
);

export default apiClient;

```

要点:interceptors.response/request.use(fun (response), fun (error))

## Node

### 创建Http服务器

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}/`);
});

```

### **使用`fs`模块读写文件**

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件时发生错误:', err);
        return;
    }
    console.log(data);
});

//写入
fs.writeFile('output.txt', '这是一段文本内容', (err) => {
    if (err) {
        console.error('写入文件时发生错误:', err);
        return;
    }
    console.log('文件已被保存');
});

```

###  **使用Promises和Async/Await处理异步操作**

```js
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('读取文件时发生错误:', err);
    }
}

readFile();

```

###  **环境变量的使用**

首先，创建一个`.env`文件：

```js
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

然后，在你的应用中加载并使用这些变量：

```js
require('dotenv').config();

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
```



