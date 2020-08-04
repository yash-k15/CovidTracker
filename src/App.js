import React from 'react';
import Home from './pages/Home/Home';
import Map from './pages/map/map';
import Symptom from './pages/Symptoms/Symptons';
import MessageBoard from './pages/MessageBoard/MessageBoard';
import Nav from './pages/menu/Nav';
import styles from './App.module.css';
import headImage from './pages/images/image.png';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './pages/MessageBoard/Reducers/index'
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
function App() {
    return (
        <div>
        <div className = {styles.container}>
            <img className = {styles.image} src={headImage} alt="Covid-19" />
        </div>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/map" component={Map} />
                    <Route path="/symptoms" component={Symptom} />
                    <Provider store={createStoreWithMiddleware(reducers)}>
                        <Route path="/messageboard" component={MessageBoard} />
                    </Provider>
                </Switch>
            </div>
        </Router></div>
    );
}
export default App;