# TypeScript

## 基础知识
- TypeScript简介：JavaScript的超集。TypeScript 提供了 JavaScript 的所有功能，并在此基础上增加了一层：TypeScript 的类型系统。

- 环境搭建：安装TypeScript和配置开发环境。

## 类型系统
- 基础类型：number, string, boolean, null, undefined, void, any。

- 联合类型和交叉类型。

- 类型断言：使用`as`关键字。

- 类型推断：让TypeScript推断类型。
```typescript
let helloWorld = "Hello World"; 
// helloWorld 自动推断为 `string`类型
```
- 字面量类型：具体的字符串或数字值。
```typescript
const user = {
  name: "Hayes",
  id: 0,
};
```

## 接口
- 定义接口：定义对象的形状。
- 可选属性和只读属性。
- 继承接口。
```typescript
interface User {
  name: string;
  id: number;
}
```


## 类
- 类的基本使用：构造器、属性、方法。
- 访问修饰符：public, private, protected。
- 抽象类和继承。
- 类实现接口。

## 函数
- 函数类型：定义函数的参数和返回类型。
- 可选参数和默认参数。
- 剩余参数和展开运算符。
```

```


## 泛型
- 泛型基础：创建可重用的组件。
- 泛型约束。
- 使用泛型接口和类。
```typescript
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

## 高级类型
- 联合类型和类型保护。
- 映射类型和条件类型。

## 模块
- 模块化编程：导入和导出模块。
- 命名空间。

## 工具和编译
- 使用tsconfig.json配置编译选项。
- 集成开发工具（IDE）的支持。
- 编译器API。

## 资源

- [让你眼前一亮的 10 大 TS 项目 - 知乎](https://zhuanlan.zhihu.com/p/149757989)
- [TypeScript官网](https://www.typescriptlang.org/)
- [TypeScript深入理解教程](https://www.typescriptlang.org/docs/handbook/intro.html)
