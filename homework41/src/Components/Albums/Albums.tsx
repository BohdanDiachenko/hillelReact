import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectAlbums, fetchAlbums } from './../../rdx/reducer';
import styles from '../Users/Users.module.css';

const Albums = () => {
    const albums = useSelector(selectAlbums);
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums(userId))
    }, [userId, dispatch]);

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
