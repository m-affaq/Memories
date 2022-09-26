import React, { useState } from 'react';
import Card from '../card/Card';
// import Card2 from '../card/Card2';
import Navbar from '../navbar/Navbar';
import Signup from '../signup/Signup';
import './home.css';
export const Home = () => {
	const [response, setResponse] = useState([]);

	let handleSubmit = e => {
		e.preventDefault();
		const creator = e.target[0].value;
		const title = e.target[1].value;
		const message = e.target[2].value;
		const tags = e.target[3].value;
		const file = e.target[4].files[0];

		let result = {
			creator: creator,
			title: title,
			message: message,
			tags: tags,
			file: file,
		};

		setResponse(newData => [...newData, result]);
		// responseData.push(result);
		// responseData.concat([result]);
		// console.log(responseData, 'h');
	};

	// console.log(Array.isArray(response));

	return (
		<>
			<div className="home-container">
				<div>
					<div className="row">
						<Navbar />
					</div>
					<div className="row2">
						<div className="col-1">
							<Card response={response} setResponse={setResponse} />
							{/* <Card2 /> */}
						</div>
						<div className="col-2">
							<Signup handleSubmit={handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
