import React from 'react';
import { hot } from 'react-hot-loader/root';
import Todo from './Todo';  //引入component
import axios from 'axios';  //此套件可以協助串街API

//輸出App這個component
class App extends React.Component{
	constructor(props){  //props為其他component的狀態或屬性或函式
		super(props)  //將props請求交由React.Component處理
		this.state = {  //設置初始狀態
			
		}
	this.str = 1  //設置預設值
	}
	
	//須更改狀態才能顯示使用者輸入的內容
	handleChange = (e) => {  //須使用箭頭函式以產生物件導向函式
		this.setState({
			value: e.target.value
		})
	}
	
	componentDidMount(){ //當component載好時的動作
		axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id) //串街API
		.then(response => {
			this.setState({
				post: response.data
			})
		})
	}
	
	componentDidUpdate(){ //當component更新狀態時的動作，盡量配合判斷式省用避免產生無窮迴圈
		
	}
	
	//渲染
	render(){
		return (
			<div>
				//<Todo>為令一個component，可添加自訂屬性，使用map時須加入唯一的key。
				{this.state.items.map(todo => <Todo key = {todo.id} todo = {todo} />)}
			</div>
		)
	}
}

export default hot(App);