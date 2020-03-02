import styled from 'styled-components'

export default styled.div`
	.list {
		padding: 50px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.item {
		border: 1px solid #c5c0c0;
		text-align: center;
		width: 350px;
		background: #fffbfb;
		box-sizing: border-box;
	}
	.photo {
		width: 100px;
	}
	.btn {
		position: absolute;
		left: 30px;
		width: 80px;
		height: 35px;
		color: blue;
		font-size: 18px;
		background-color: #a9d0f5;
		display: flex;
		justify-content: center;
		border-radius: 20px;
	}
	.image {
		margin-top: 50px;
	}
`
