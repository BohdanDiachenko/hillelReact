import React from 'react'
import style from './AddUser.module.css'

interface Props {
    addUser: (
        firstName: string,
        lastnName: string,
        username: string,
        phone: string
    ) => void
    open: () => void
    handleClose: () => void
}

const AddUser: React.FC<Props> = ({ addUser, open, handleClose }) => {
    const handleOnSabmit = e => {
        e.preventDefault()
        if (
            e.target.firstName.value &&
            e.target.lastName.value &&
            e.target.userName.value &&
            e.target.phone.value
        ) {
            console.log('dddd')
            addUser(
                e.target.firstName.value,
                e.target.lastName.value,
                e.target.userName.value,
                e.target.phone.value
            )
            e.target.firstName.value = ''
            e.target.lastName.value = ''
            e.target.userName.value = ''
            e.target.phone.value = ''
        }
    }

    return (
        <div
            className={(open ? style.active : style.inactive) + ' ' + style.fixed}
            style={{ borderRadius: '15px', border: '1px solid #111' }}
        >
            <form onSubmit={handleOnSabmit}>
                <h3>New User</h3>
                <div>
                    <input name='firstName' placeholder='First Name' type='text'/>
                    <input name='lastName' placeholder='Last Namer' type='text'/>
                    <input name='userName' placeholder='Username' type='text'/>
                    <input name='phone' placeholder='Phone' type='tel' />
                </div>
                <div className='grid'>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleClose} type='submit' onSubmit={handleOnSabmit}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}
export default AddUser
