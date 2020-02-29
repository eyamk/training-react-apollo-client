import React, { useState } from 'react'
import Modal from '../modal/Modal'
import HeaderWrapper from './HeaderWrapper'
import PropTypes from 'prop-types'

const Header = () => {
	const [show, setShowModal] = useState(false)
	const handleClose = () => {
		setShowModal(false)
	}

	return (
		<HeaderWrapper>
			<div>
				<button
					className='btn'
					onClick={e => {
						setShowModal(e)
					}}
				>
					new
				</button>
				<Modal onClose={handleClose} show={show} />
			</div>
		</HeaderWrapper>
	)
}
Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
}
export default Header
