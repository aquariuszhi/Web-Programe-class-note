import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
//serialize-javascript 套件可取代JSON.stringify來避免XSS攻擊

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state{
			id: ''
		}
	}

	componentDidMount(){
		
	}

	componentDidUpdate(prevProps, prevState){
		
	}
	
	shouldComponentUpdate(nextProps, nextState){
		
	}
	
	componentWillUnmount(){
		
	}
	
	onInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render(){
		const {userData} = this.props
		const {id} = this.state
		return (
			<div id = 'mainDiv' style = {{
				marginTop: '20px'
			}}>
				<div>
					<h1>HOME</h1>	
					{posts.map(post => {
						return (
							<div className = "main" key = {post.id_main}>
								
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default hot(Home);