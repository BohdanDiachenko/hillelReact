import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"
import styles from './Users.module.css'

export const usersFetcher = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) throw new Error('Something went wrong!')
    const users = await res.json();
    return users
}

const Users = () => {
    const users = useLoaderData()

    return (
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link to={`/users/${user.id}/albums`} >Albums</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
};
export default Users;