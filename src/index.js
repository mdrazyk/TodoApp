import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
import ErrorBoundary from '../src/containers/errorBoundary/ErrorBoundary'

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>, document.getElementById('root')
)
registerServiceWorker()
