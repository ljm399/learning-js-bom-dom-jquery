 function pegStart(obj,couter,num){//封装函数,因为你要重复用代码
      var stringobj = String(obj)
      // var pegDate = stringobj.padStart(couter,num)
      // return pegDate//直接return就行了,明白fn()可以得其return值

      //pegStart((date.getMonth()+1),2,'0')调用时不想再打2,'0'
      //way一二都是用了默认值思想(核心方法)
      //way一
      // 第13行部分代码改为默认值:couter = 2,num =0
      //way二
      couter = couter || 2
      num = num || 0//||是几个条件判断,并返回boolen
      return stringobj.padStart(couter,num)
    }