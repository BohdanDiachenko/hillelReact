const initialState = {
    users: [],
    albums: [],
    photos: [],
};

export const SET_USERS = 'setUsers';
export const SET_ALBUMS = 'setAlbums';
export const SET_PHOTOS = 'setPhotos';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }

        case SET_ALBUMS:
            return { ...state, albums: action.payload }

        case SET_PHOTOS:
            return { ...state, photos: action.payload }

        default:
            return state;
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
};

export const setAlbums = (albums) => {
    return {
        type: SET_ALBUMS,
        payload: albums
    }
};

export const setPhotos = (photos) => {
    return {
        type: SET_PHOTOS,
        payload: photos
    }
};

export const fetchUsers = () => {
    return (dispatch, getState) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then((data) => {
                dispatch(setUsers(data));
            })
            .catch((err) => {
                console.log(err)
                dispatch(setUsers([]));
            });
    };
};

export const fetchAlbums = (userId) => {
    return (dispatch, getState) => {
        fetch(`https://jsonplaceholder.typicode.com/user/${userId}/albums`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(data => {
                dispatch(setAlbums(data));
            })
            .catch(err => {
                console.log(err)
                dispatch(setAlbums([]));
            })
    };

};

export const fetchPhotos = (albumId) => {
    return (dispatch, getState) => {
        fetch(`https://jsonplaceholder.typicode.com/album/${albumId}/photos`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then((data) => {
                dispatch(setPhotos(data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(setPhotos([]));
            });
    };

};

export const selectUsers = (state) => state.users;
export const selectAlbums = (state) => state.albums;
export const selectPhotos = (state) => state.photos;