import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Todos from './components/Todos';
// todomvc styles
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const App = () => (
    <div>
        <Routes>
            <Route exact="true" path='/' render={() =>  <Navigate to="/react-rxjs-todos/"></Navigate>}></Route>
        </Routes>
        <Routes basename='/react-rxjs-todos/'>
            <React.Fragment>
                <Route exact="true" path="/" element={<Todos />}></Route>
                <Route exact="true" path="/:filter" element={<Todos />}></Route>
            </React.Fragment>
        </Routes>
    </div>
)

export default App;
