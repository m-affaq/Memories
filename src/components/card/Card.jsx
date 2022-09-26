import React, { useState } from 'react';
import P1 from '../../img/P1.jpg';
// import P2 from '../../img/P2.jpg';
import './card.css';
const Card = ({ response, setResponse }) => {
	const [like, setLike] = useState(0);
	let handleDelete = index => {
		response.splice(index, 1);
		setResponse([...response]);
	};

	return (
		<>
			{response && response.length === 0 ? (
				'nothing to preview'
			) : (
				<>
					{response?.map((item, i) => (
						<div className="card" key={i}>
							<div className="cardHeader">
								<div className="title">
									<div>
										<h4> {item.creator}</h4>
										<p></p>
									</div>
									<div>
										<a href="/" className="menu">
											<i className="fa-solid fa-ellipsis"></i>
										</a>
									</div>
								</div>
								<div className="cardImage">
									<img
										src={item.file ? item.file : P1}
										alt="imge"
										className="imgCard"
									/>
								</div>
							</div>
							<div style={{ height: '100%' }}>
								<div className="headings">
									<p>{item.title}</p>
									<h2>{item.tags}</h2>
									<p>{item.message}</p>
								</div>
								<div className="btns">
									<a
										href="/"
										onClick={e => {
											e.preventDefault();
											setLike(like + 1);
										}}
									>
										<i className="fa-sharp fa-solid fa-thumbs-up"></i>{' '}
										<span>LIKE {like} </span>
									</a>
									<a
										href="/"
										onClick={e => {
											e.preventDefault();
											handleDelete(i);
										}}
									>
										<i className="fa-solid fa-trash"></i> <span>DELETE</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default Card;
