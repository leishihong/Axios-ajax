import axios from 'axios'
import axiosMock from 'axios-mock-adapter'
let mock = new axiosMock(axios)
let Loginuser = [
	{
      username:"zhangsan4",
      passworld:"123456"
    },
    {
      username:"zhangsan12",
      passworld:"123456"
    },
    {
      username:"zhangsan",
      passworld:"123456"
    }
]

// mock.onGet("/submint").reply(200,res=>{
// 	console.log(res)
// })
mock.onPost("/login").reply(config=>{   //config是post传过来的参数
	let {username,passworld}=JSON.parse(config.data)  //把字符串转化为一个对象
	// setTimeout(function(){
	// 	console.log(config)//延迟打印
	// },500)
	//返回一个promise对象监听值的变换
	return new Promise((resolve,reject) => {
		let headers = null
		setTimeout(()=>{
			Loginuser.some( u =>{
				console.log(u.username)
				if(u.username === username && u.passworld === passworld){
						headers=true
				}
			})
			if(headers){
				resolve([200,{code:200,msg:"登陆成功"}])
			}else{
				reject([500,{code:500,msg:"账户或密码错误"}])
			}
		},500)
	})
})