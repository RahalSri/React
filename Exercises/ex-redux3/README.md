why middleware must used in asyn operations in action creators
================================================================
* Action create must return plain JS object with type property

export const fetchPosts = async() => {
    const resp = await fetchposts.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: resp
    }
}

check above code in https://babeljs.io/rep it returns something else in case statement


See img/1.jpg how redux-thunk works

Rules of reducers
=====================
1. Must return any value but 'undefined'
2. Change current state only by using previous state and action (img/2.png)
3. Must not reach 'out of itself' to decide what value to return (img/3.png)
4. Must not mutate it's input "state" argument

  -- String and number are immutable (usually arrays and objects are mutable)

  === means it exactly match object/array REFERENCES

  see img/4.png how to achive immutability