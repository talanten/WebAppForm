import React from 'react'
import './user_reg_form.css'
import Field from './user_reg_form_fields'
import Register_btn from './user_reg_register_btn'
import axios from 'axios'

//Component - Main form. Includes other components: Fields and Button
//Implemented as a class
class User_reg_form extends React.Component {
	constructor () {
		super()
		this.state = {
			firstName: "",
			firstNameErr: "",
			lastName: "",
			email: "",
			emailErr: "",
			address: "",
			phone: "",
			phoneErr: ""
		}
	}

	//Events happening whenever input fields changes. 
	//Here values are updated in the state
	onFirstNameBlur = (e) => {
		this.setState({firstName : e.target.value});
	}
	onLastNameBlur = (e) => {
		this.setState({lastName : e.target.value});
	}
	onEmailBlur = (e) => {
		this.setState({email : e.target.value});
		const emailErr = this.validateEmail(this.state.email);
		this.setState({emailErr});
	}
	onAddressBlur = (e) => {
		this.setState({address : e.target.value});
	}
	onPhoneBlur = (e) => {
		this.setState({phone : e.target.value});
		const phoneErr = this.validatePhone(this.state.phone);
		return this.setState({phoneErr});
	}

	//Email and Phone validators for the required format
	validateEmail = email => {
		const pattern=/^[a-zA-Z0-9]{4}@[a-zA-Z0-9]{4}\.[a-zA-Z]{2}$/;
		return pattern.test(this.state.email)
			? ""
			: "Please enter the email in format xxxx@xxxx.xx";
	}
	validatePhone = phone => {
		const pattern = /^\+[0-9]{2}\s[0-9]{3}\s[0-9]{5}$/
		return pattern.test(phone)
			? ""
			: "Please enter the phone in format +99 999 99999"
	}

	//Arrow function called whenever submit event occures in the form
	handleClick = (e) => {
		e.preventDefault()
		if (this.state.emailErr || this.state.phoneErr)
		{
			return;
		}
		this.postMessage()
	}

	//Request is sent using REST POST method over HTTP to the server
	postMessage = async () => {
		try {
			let res = await axios.post('http://localhost:8500/webappform/insertUser', this.state)
			alert(res.data)
		}
		catch (err) {
			console.log(err)
		}
	}

	//Main rendering function
	render() {
		return(
			<form className="user_reg_form" onSubmit={this.handleClick}>
				<Field lbl_txt="First Name:" type="text" input_name="firstName" onBlur={this.onFirstNameBlur}/>
				<Field lbl_txt="Last Name:" type="text" input_name="lastName" onBlur={this.onLastNameBlur} />
				<Field lbl_txt="Email:" type="text" input_name="email" onBlur={this.onEmailBlur} />	
				{this.state.emailErr && <div className="errMsg">{this.state.emailErr}</div>}
				<Field lbl_txt="Address:" type="text" input_name="address" onBlur={this.onAddressBlur} />
				<Field lbl_txt="Phone Number:" type="text" input_name="phone" onBlur={this.onPhoneBlur} />
				{this.state.phoneErr && <div className="errMsg">{this.state.phoneErr}</div>}
				<Register_btn />
			</form>
		)
	}
}

export default User_reg_form