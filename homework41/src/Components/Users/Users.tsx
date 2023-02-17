import { useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Users.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, fetchUsers } from './../../rdx/reducer';

const Users = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

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
                                <Link to={`/users/${user.id}/albums`}>Albums</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
};
export default Users;