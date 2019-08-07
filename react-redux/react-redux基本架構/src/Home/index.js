import { connect } from 'react-redux'
import Home from './Home'
import { actionName } from '../actions'
import { withRouter } from 'react-router-dom'

//此為container，將action發布，並將狀態傳回後以重新渲染
const mapStateToProps = state =>({  //state為globle state(也就是store), app對應到reducer的app
	userData: state.login.loginData
})

//透過dispatch將action發布出去
const mapDispatchToProps = dispatch =>({
	actionName: (STR) => {
		dispatch(actionName(STR))
	}
})

//透過connect將react和redux做連結
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
