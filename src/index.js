import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title = 'Person manager'/>, document.getElementById('root'));  //Al posto di App potremmo renderizzare normale codice HTML, 
                                                            //non per forza un Component
registerServiceWorker();
