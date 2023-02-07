import React from "react";
// interface UserType {
//     id: string
//     name: string
//     username: string
//     phone: string
// }

// interface Props  {
//     user: UserType
//     deleteUser:(id:string) => void
// }

const User = ({ id, name, username, phone, deleteUser }) => {

    const handleDelete = () => {
        deleteUser(id);
    }

    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{phone}</td>
            <td>
                <button style={{ backgroundColor: 'red', padding: '1px', margin: 'auto', border: 'none' }} onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
};
export default User;