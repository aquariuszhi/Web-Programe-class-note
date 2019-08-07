import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component{
	constructor(props){
		super(props)
	}
	
	componentDidMount(){
		
	}

	componentDidUpdate(prevProps, prevState){
		
	}
	
	shouldComponentUpdate(nextProps, nextState){
		
	}
	
	componentWillUnmount(){
		
	}
	
	render(){
		const {location, loginData} = this.props
		const {pathname} = location
		return (
			<nav className="">
			 
			</nav>
		)
	}
}

export default hot(withRouter(Header)); //withRouter使該component可以存取到其他props