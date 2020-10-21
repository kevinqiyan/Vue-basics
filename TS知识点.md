# 认识TS

是js的一个超集,提供了类型系统和ES6+ 的支持,不能直接被浏览器运行的.ts中的json文件可以写**注释**,默认是严格模式

安装

```
npm install -g typescript
```

自动编译TS

```
tsc --init  项目中的根目录下
修改config.js文件
```

使用webpack打包TS

下载依赖

![](https://s1.ax1x.com/2020/06/10/t7m9sI.png)

**cross-env**指定生产环境或开发环境的一个包(包括 windows + linux 系统)

创建 **webpack.config.js** 文件

```
process.env.NODE_ENV === 'production' 是否生产环境的一个判断

```

# TS的基础数据类型

1. 布尔

2. number

3. string

4. null  undefined

   1. 元素的属性只能是 null + undefined

5. 数组

   1. 数组的类型

      - 类型+方括号 表示法

        ```
        let f:number[] = [1,2,3,4,5]
        ```

      - 数组中**不允许**出现其他的类型

        ```
        let f:number[] = [1,2,"1",3,4]
        // Type 'string' is not assignable to type 'number'.
        ```

      - 数组的一些方法参数会根据数组在定义时约定的类型进行限制

        ```
        let f:number[] = [1,2,3,1,4];
        f.push('8')
        // Argument of type '"8"' is not assignable to parameter of type 'number'.
        ```

        - 上面数组中定义只允许传入数字类型的参数,传入了'8'(字符串类型),所以报错

   2. 数组的泛型(Array<elemType>)

      ```
      let fib:Array<number> = [1,1,2,3,4]
      ```

      

6. 元组(Tuple)

   1. 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

      ```
      let t: [number,string]
      t = [1,'abc']
      t = ['abc',1] -> 报错 类型不匹配
      ```

7. 枚举

   1. 对JavaScript标准数据类型的一个补充,使用枚举类型可以为一组数值赋予友好的名字。

      ```
      enum Color{
      	red,
      	yellow,
      	blue
      }
      let color: Color = Color.red
      根据名称取对应保存的数值
      根据数值读取对应的名称
      ```

8. any

   1. 在编程阶段声明的变量类型是不确定的

      ```
      let notShure :any = 1
      ```
      
   2. 在数组中的应用

      ```
      用any表示数组中允许出现任意类型
      let list:any[] = ['kevin',20,{website:'http://www.baidu.com'}]
      ```

      

9. void

   1. 与any类型相反,代表函数的返回值只能是 undefined 或者 null

10. object

    1. 表示非原始类型,也就是 number,string,boolean 之外的类型

    2. 使用 object 类型,就可以更好的表示像 Object.creat这样的 API

       ```
       
       ```

11. 联合类型

    1. ```
       需求1:定义一个函数得到一个数字或字符串值的字符串形式值
       (()=>{
       	functon toString
       })()
       ```

12. 类型断言

    两种形式

    1. 速度快
    2.   

13. 类型推断



# TS接口

TS的核心原则之一是对值所具有的结构进行类型检查.使用接口来定义对象的类型.接口时对象的状态(属性)和行为(方法)的抽象(描述)

1. 接口( **interface** )规范

   - readonly -> 只读属性

     ```
     readonly id:number  id属性为只读的,不可以进行二次赋值
     ```

2. 函数类型的接口

   - 创建一个函数类型的变量并赋值给这个变量

     ```
     let mySearch:searchFunc
     mySearch = function(source:string,subString:string){
     	let result source.search(subString);
     	return result > -1
     }
     ```

     1. 对于函数类型的类型检查来说,函数的参数名不需要与接口里定义的名字相匹配
     2. 函数的参数会逐个检查,要求对应位置上的参数类型的兼容,如果不想指定类型,ts类型系统会推断出参数类型.如果让这个函数返回数字或字符串,类型检查器会警告函数的返回值类型与 **SearchFunc** 接口中的定义不匹配

### 类类型

1. 类实现接口

2. 类实现继承(**extends**)

3. 类的基本定义与使用

4. 类的继承_方法

   ```
   (function(){
   	class animal{
   		run(distance:number){
   			console.log(`animal run ${distance}m `)
   		}
   	}
   	
   	子类
   	class dog extend animal{
   	//重写从父类继承的方法
   	super.run(distance)
   	}
   	const dog = new dog()
   	dog.run(10)
   })
   ```

   多态_父类型引用指向子类型对象

   ```
   一个类只能继承一个单一的类
   多态:父类型的引用指向子类型的实例
   ```




### 类数组

1. 类数组不是数组类型,比如 **arguments**

   ```
   function sum(){
   	let args:number[] = arguments;
   }
   报错// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
   ```

   argumen实际上是一个类数组,不能用普通数组的方式来描述,应该使用接口

   ```
   function sum(){
   	let args:{
   		[index:number]:number;
   		length:number;
   		callee:Function;
   	} = arguments;
   }
   ```

   





















