import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No scrub', duration: '4:30' },
        { title: 'Macarina', duration: '3:15' },
        { title: 'I want that way', duration: '2:45' }
    ];
}

const selectedSongReducer = (song = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return song;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});
