import styled from 'styled-components'

export default styled.div`
	.modal {
		position: absolute;
		left: 50%;
		top: 50vh;
		background-color: white;
		z-index: 10;
		transform: translate(-50%, -50%);
		animation: slideFromTop 0.5s both 0.1s;
		width: 500px;
		height: 400px;
		border: #333333 solid 0px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	}
	.inputModal {
		position: absolute;
		right: 200px;
	}
	.labelModal {
		position: absolute;
		left: 20px;
		padding: 20px;
	}
	.btn-Add {
		position: abdolute;
		margin-left: 200px;
		width: 80px;
		height: 35px;
		color: blue;
		font-size: 18px;
		background-color: #a9d0f5;
		display: flex;
		justify-content: center;
		border-radius: 20px;
	}
	.modal-close {
		color: #aaa;
		line-height: 50px;
		font-size: 80%;
		position: absolute;
		right: 0;
		text-align: center;
		top: 0;
		width: 70px;
		text-decoration: none;
		&:hover {
			color: black;
		}
		.formUser {
			padding: 20px;
		}
	}
`
