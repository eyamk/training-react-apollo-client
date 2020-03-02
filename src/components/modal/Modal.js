import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import PropTypes from 'prop-types'
import ModalWrapper from './ModalWrapper'
import CREATE_USER from '../../graphql/mutations/CreateUser'

const Modal = ({ show, onClose }) => {
	const [createUser] = useMutation(CREATE_USER)
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [gender, setGender] = useState('')

	if (!show) {
		return null
	}
	return (
		<ModalWrapper>
			<div>
				<div className='modal'>
					<a href='#clode' className='modal-close' onClick={onClose}>
						close
					</a>
					<br /> <br />
					<div className='formUser'>
						<form
							onSubmit={async e => {
								await e.preventDefault()
								await createUser({
									variables: {
										input: {
											name,
											username,
											phone,
											email,
											gender,
										},
									},
									refetchQueries: ['GET_USERS'],
								})
							}}
						>
							<br />
							<label className='labelModal'>Name:</label> <br />
							<input
								type='text'
								className='inputModal'
								onChange={e => setName(e.target.value)}
								name='name'
							/>
							<br />
							<label className='labelModal'>User name:</label> <br />
							<input
								type='text'
								className='inputModal'
								onChange={e => setUsername(e.target.value)}
								name='username'
							/>{' '}
							<br />
							<label className='labelModal'>E-mail:</label> <br />
							<input
								type='text'
								className='inputModal'
								onChange={e => setEmail(e.target.value)}
								name='email'
							/>{' '}
							<br />
							<label className='labelModal'>Phone:</label> <br />
							<input
								type='text'
								className='inputModal'
								onChange={e => setPhone(e.target.value)}
								name='phone'
							/>{' '}
							<br /> <br />
							<input
								type='radio'
								id='male'
								value='M'
								onChange={e => setGender(e.target.value)}
								name='gender'
							/>
							<label for='male'>Male</label>
							<input
								type='radio'
								id='female'
								onChange={e => setGender(e.target.value)}
								name='gender'
								value='F'
							/>
							<label for='female'>Female</label>
							<br />
							<button type='submit' className='btn-Add'>
								Add
							</button>
						</form>
					</div>
					<br />
				</div>
			</div>
		</ModalWrapper>
	)
}
Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	name: PropTypes.bool.isRequired,
	username: PropTypes.bool.isRequired,
	email: PropTypes.bool.isRequired,
	phone: PropTypes.bool.isRequired,
}
export default Modal
