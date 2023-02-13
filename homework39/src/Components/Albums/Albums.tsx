import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../Users/Users.module.css'

const Albums = () => {
    const [albums, setAlbums] = useState([])
    const { userId } = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/user/${userId}/albums`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(data => {
                setAlbums(data)
            })
            .catch(err => {
                setAlbums([])
            })
    }, [userId])

    return (
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>User ID</th>
                        <th scope='col'>Title</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album.id}>
                            <td>{album.userId}</td>
                            <td>{album.title}</td>
                            <td>
                                <Link to={`/users/${userId}/albums/${album.id}/photos`} state={{ title: album.title }}>Photos</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Albums
