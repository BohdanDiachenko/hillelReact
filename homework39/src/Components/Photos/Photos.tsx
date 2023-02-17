import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import styles from './Photos.module.css'
const Photos = () => {
    const [photos, setPhoto] = useState([])
    const { albumId } = useParams();
    const state = useLocation()
    const albumTitle = state.state;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/album/${albumId}/photos`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then((data) => {
                setPhoto(data)
            })
            .catch((err) => {
                setPhoto([]);
            });
    }, [albumId])

    return (
        <div className={styles.photo_wrapper}>
            <div className="headings" >
                <h1>{albumTitle.title}</h1>
            </div>
            <Box>
                <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                    {photos.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                key={item.id}
                                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    )
};
export default Photos;