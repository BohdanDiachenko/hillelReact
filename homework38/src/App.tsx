import { useEffect, useState } from 'react'
import AddUser from './components/AddUser'
import Users from './components/Users'
import style from './App.module.css'

export default function App() {
  const [users, setUsers] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const addUser = async (
    firstName: string,
    lastName: string,
    username: string,
    phone: string,
    id: string
  ) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        username: username,
        phone: phone,
        id: id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUsers(users => [...users, data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteUser = async (id:string) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status !== 200) {
          return
        } else {
          setUsers(
            users.filter(user => {
              return user.id !== id
            })
          )
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className={style.backgroundApp}>
      <Users users={users} deleteUser={deleteUser} />
      <div>
        <button
          onClick={handleClickOpen}
          style={{ width: '200px', margin: '0 auto' }}
        >
          Add User
        </button>
        <AddUser addUser={addUser} open={open} handleClose={handleClose} />
      </div>
    </div>
  )
}
