//Action creators

export const selectSong = (song) => {
    console.log('action' + song);
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

