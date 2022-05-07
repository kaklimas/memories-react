import React from "react";
import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div class="container-md">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Left</button>
                <button type="button" class="btn btn-primary">Middle</button>
                <button type="button" class="btn btn-primary">Right</button>
            </div>
        </div>
    )
};
export default App;