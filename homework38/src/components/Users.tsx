import React from "react";
import User from "./User";
import styles from './Users.module.css'
interface UserType {
    id: string
    name: string
    username: string
    phone: string
}

interface Props {
    users: UserType[]
    deleteUser: () => void
}

const Users: React.FC<Props> = ({ users, deleteUser }) => {
    return (
        <main className="container">
            <div className={styles.tableWrapper}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Phone</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className={styles.tab}>
                        {users.map((user) => (
                            <User id={user.id} key={user.id} name={user.name} username={user.username} phone={user.phone} deleteUser={deleteUser} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default Users