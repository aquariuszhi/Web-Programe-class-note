//主頁面，同時分配route對應的頁面

const express = require('express')
const session = require('express-session')  //處理session
const app = express()
const bodyParser = require('body-parser') //處理表單
const helmet = require('helmet') //安全性補強

const userModel = require('./model/user')  //須引入model
app.use(session({ secret: 'keyboard cat', cookie:{ maxAge: 216000}})) //設定session
app.set('view engine', 'ejs') //設定view engine（渲染引擎）為ejs
app.use(bodyParser.json()) //處理表單
app.use(bodyParser.urlencoded({ extended:true})) //處理表單
app.use(helmet()) ////安全性補強

const userController = require('./controller/user') //須引入controller
const postController = require('./controller/post')

app.get('/', userController.index)
app.post('/', postController.commentBackend)



app.listen(3000, () => {  //在localhost:3000架設伺服器
	console.log('Example app listening on port 3000!')
})