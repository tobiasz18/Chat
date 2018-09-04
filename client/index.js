import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    )
}
render(App)

if (module.hot) {
    module.hot.accept('./Components/App', () => {
        render(App)
    })
}
/*
ReactDOM.render(
    <App />, document.getElementById('app')
);*/
