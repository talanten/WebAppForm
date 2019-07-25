import React from 'react'
import './user_reg_form.css'
import Field from './user_reg_form_fields'
import Register_btn from './user_reg_register_btn'

class User_reg_form extends React.Component {
	state = {
		firstName: "",
		firstNameErr: "",
		lastName: "",
		email: "",
		emailErr: "",
		address: "",
		phone: "",
		phoneErr: ""
	}

	onFirstNameBlur = (e) => {
		this.setState({firstName : e.target.value});
		if (this.state.firstName.length === 0) {
			this.setState({firstNameErr: "Please enter the first name."})
		} else {
			this.setState({firstNameErr: ""})
		}
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

	render() {
		return(
			<div className="user_reg_form">
				<Field lbl_txt="First Name:" type="text" input_name="firstName" onBlur={this.onFirstNameBlur}/>
				{this.state.firstNameErr && <div className="errMsg">{this.state.firstNameErr}</div>}
				<Field lbl_txt="Last Name:" type="text" input_name="lastName" onBlur={this.onLastNameBlur} />
				<Field lbl_txt="Email:" type="text" input_name="email" onBlur={this.onEmailBlur} />	
				{this.state.emailErr && <div className="errMsg">{this.state.emailErr}</div>}
				<Field lbl_txt="Address:" type="text" input_name="address" onBlur={this.onAddressBlur} />
				<Field lbl_txt="Phone Number:" type="text" input_name="phone" onBlur={this.onPhoneBlur} />
				{this.state.phoneErr && <div className="errMsg">{this.state.phoneErr}</div>}
				<Register_btn props={this.state}/>
			</div>
		)
	}
}

export default User_reg_form