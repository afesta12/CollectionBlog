import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header'
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux'

const App = () => {

    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getPosts());

    }, [dispatch])

    return (

        <div>

            <Header onFormAdd={ () => setShowForm(!showForm) } />
            { showForm && <Form />}
            <Posts />

        </div>
        

    )

}

export default App;