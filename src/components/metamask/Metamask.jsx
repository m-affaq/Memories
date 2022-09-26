import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './meta.css';
import P1 from '../../img/P1.jpg';

const Metamask = () => {
	const [walletAddress, setWalletAddress] = useState();
	const [accountData, setAccountData] = useState([]);
	let fetchFun = async e => {
		if (!walletAddress) {
			alert('Connect metamask first');
			return;
		}
		let res = await axios.get(
			`https://apl4mh4j0c.execute-api.us-west-2.amazonaws.com/Prod/orders?AccountId=0x207f4488049de4195583f9f439945f4b48138e37`
			// 0x207f4488049de4195583f9f439945f4b48138e37
		);
		setAccountData(res.data);
	};

	let connectMetamask = async e => {
		if (typeof window.ethereum !== 'undefined') {
			console.log('MetaMask is installed!');
		}
		let accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		setWalletAddress(accounts[0]);
		// console.log(accounts[0]);
	};
	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on('chainChanged', () => {
				window.location.reload();
			});
			window.ethereum.on('accountsChanged', () => {
				window.location.reload();
			});
		}
		// eslint-disable-next-line
	}, [connectMetamask()]);
	// console.log(accountData);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 mt-5">
						<button className=" click mx-3 " onClick={connectMetamask}>
							Connect <i className="fa-brands fa-ethereum"></i>
						</button>
						<button className=" click" onClick={fetchFun}>
							Fetch Data
						</button>
					</div>
					<div className="col-lg-4"></div>
				</div>
				<div className="row mt-5">
					{accountData?.map((item, i) => (
						<div
							className="card mb-3 mask-custom shadow-0 text-dark col-lg-3  col-md-6 col-sm-12  mr-sm-1"
							key={i}
						>
							<img
								src={P1}
								className="card-img-top"
								alt="img"
								style={{
									maxWidth: '100%',
									maxHeight: '300px',
									objectFit: 'cover',
								}}
							/>
							<div className="card-body">
								<p className="card-title">
									<strong> Account ID: </strong>
									<span>{item.AccountId}</span>
								</p>
								<p className="card-text">
									<strong> Created Date: </strong>
									<span>{new Date(item.CreatedOn).toGMTString()}</span>
								</p>
								<p className="card-text">
									<strong> Update Date: </strong>
									<span>{new Date(item.UpdatedOn).toGMTString()}</span>
								</p>
								<p className="card-text">
									<strong> Want Assets:</strong> <span>{item.WantAssets}</span>
								</p>
								<p className="card-text">
									<strong> Recipient ID:</strong> <span>{item.Recipient}</span>
								</p>
								<p className="card-text">
									<strong> Query Constant:</strong>{' '}
									<span>{item.queryConstant}</span>
								</p>
								<p className="card-text">
									<strong> TTL: </strong>
									<span>{item.TTL}</span>
								</p>
								<p className="card-text">
									<strong> Status: </strong>
									<span>{item.Status}</span>
								</p>
								<p className="card-text">
									<strong> Have Assets:</strong> <span>{item.HaveAssets}</span>
								</p>
							</div>
							{/* <p>
											<b> Dated:</b> {new Date(publishAt).toGMTString()}
										</p> */}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Metamask;
