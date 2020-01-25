import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  //Al posto di App potremmo renderizzare normale codice HTML, 
                                                            //non per forza un Component
registerServiceWorker();
