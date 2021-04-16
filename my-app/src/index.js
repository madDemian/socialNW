import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerender} from "./render";
import state from "./redux/state";

rerender(state)

reportWebVitals();
