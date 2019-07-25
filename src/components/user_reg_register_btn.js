import React from 'react'
import './user_reg_form.css'

//Component for Button in the form
//Implemented as a class
class Register_btn extends React.Component {

	render () {
		return (
			<div className="submit" >
					<input type="submit" value="Register"/>
			</div>
		)
	}
}

export default Register_btn