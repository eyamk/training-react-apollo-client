import styled from 'styled-components'

export default styled.div`
	.modal {
		position: absolute;
		left: 50%;
		top: 50vh;
		background-color: #f2f2f2;
		z-index: 10;
		transform: translate(-50%, -50%);
		animation: slideFromTop 0.5s both 0.1s;
		width: 500px;
		height: 300px;
		border: 0.5px solid grey;
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
	.btn-Close {
		position: absolute;
		width: 80px;
		height: 35px;
		font-size: 18px;
		background-color: #fe2e2e;
		display: flex;
		justify-content: center;
		border-radius: 20px;
	}
`
