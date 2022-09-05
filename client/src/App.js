import React, { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header'
import Posts from './components/Posts/Posts';

const App = () => {

    const [showForm, setShowForm] = useState(false);

    return (

        <div>

            <Header onFormAdd={ () => setShowForm(!showForm) } />
            { showForm && <Form />}
            <Posts />

        </div>
        

    )

}

export default App;