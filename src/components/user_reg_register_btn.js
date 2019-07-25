import React from 'react'
import './user_reg_form.css'
import axios from 'axios'

class Register_btn extends React.Component {
	
	handleClick = async () => {
		try {
			let res = await axios.post('http://localhost:8500/webappform/insertUser', this.props)
			alert(res.data)
		}
		catch (err) {
			console.log(err)
		}
	}

	render () {
		return (
			<div className="submit" onClick={this.handleClick}>
					<input type="submit" value="Register"/>
			</div>
		)
	}
}

export default Register_btn