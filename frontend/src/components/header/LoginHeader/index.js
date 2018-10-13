import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = ({handleSubmit}) => (
	<div> 
		<form onSubmit = {handleSubmit}>
			<Field name = "username" component = "input" type = "text" placeholder = "username" />
			<Field name = "password" component = "input" type = "text" placeholder = "password" />
			<button name = "login-submit" type = "submit">log in </button>
			<button name = "register-submit" type = "submit"> register </button>
		</form>
	</div>
)

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(getUser(user));
  },
});
