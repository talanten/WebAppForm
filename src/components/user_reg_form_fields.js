import React from 'react'
import './user_reg_form.css'

//Single component for all input fields in the form
//Implemented as an arrow function
const User_reg_form_fields = ({lbl_txt, type, input_name, pattern, onBlur}) => (
	<label className="lable">
		{lbl_txt}
		<input
			className="txtBox"
			type={type}
			name={input_name}
			onChange={onBlur}
			onBlur={onBlur}
			required
			pattern={pattern}
		/>
	</label>
)

export default User_reg_form_fields