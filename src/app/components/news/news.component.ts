import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  //定义普通属性
        public title = "我是一个新闻组件--ts";

        msg="我是一个新闻组件的msg";

        /**指定类型以 : 类型种类有string any等 */
        private username:string = "张三"
        /**声明数据的几种方式 推荐用以下的方式:
         * public student:string = "我是一个学生的属性<数据>";
         * 以下属性和java一样
         * public     公有
         * protected  保护类型
         * private    私有
         */

        //创建对象
        public userinfo:object={
          username:"张三",
          age:'20'
        }

        //可以只定义属性而不赋值  在构造器中使用this进行赋值
        public message:any;

        public student:string="I am a student.";

        public content="<h2>我是一个html标签,通过[innerHTML]可以在页面解析出来</h2>";

        constructor() { 
          this.message='改变属性的值';
          //获取属性的值
          console.log(this.msg);
          this.msg="我是改变属性的值";
        }
        ngOnInit() {
        }
  //定义数组
        public arr=["111","222","333"];
        public list:any[]=['探索号',"勇气号","机遇号"];
        public items:Array<any>=['444','555','666'];
        public userlist:any[]=[{
            username:'张三',
            age:20
          },{
            username:"李四",
            age:30
          },{
            username:"王五",
            age:40
        }]
        public cars:any[]=[{
          cate:"宝马",
          list:[
            {
              title:"宝马x1",
              price:"40万"
            },
            {
              title:"宝马x2",
              price:"40万"
            },
            {
              title:"宝马x3",
              price:"40万"
            }
          ]
        },{
          cate:"宝马",
          list:[
            {
              title:"奥迪A6",
              price:"40万"
            },
            {
              title:"奥迪A7",
              price:"40万"
            },
            {
              title:"奥迪A8",
              price:"40万"
            }
          ]
        }]
} 
