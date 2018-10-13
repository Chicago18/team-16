import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import LoginHeader from './loginheader';
import UserHeader from './userheader';
import styles from './style.css'

const Header = () => (
	<div className = {styles.header}>
		<Link className = (styles.title) to='/'>Out and Equal</Link>
	
		<Switch>
			<Route path = '/' component = {LoginHeader}/>
			<Route path='/signup' component={LoginHeader}/>
			<Route path='/' component={UserHeader}/>
		</Switch>
	</div>
)