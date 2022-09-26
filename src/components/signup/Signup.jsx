import React from 'react';
import './signup.css';
const Signup = ({ handleSubmit }) => {
	return (
		<div className="container-signup">
			<h2>Creating a Memory</h2>
			<div className="wrapper-signup">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Creator" />
					<input type="text" placeholder="Title" />
					<input type="text" placeholder="Message" />
					<input type="text" placeholder="Tags" />
					<input type="file" />
					<button className="btn1" type="submit">
						Submit
					</button>
					<button className="btn2">cancel</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
