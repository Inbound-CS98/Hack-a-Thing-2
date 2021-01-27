import React from 'react';
import {Helmet} from "react-helmet";

import * as style from './AComponent.scss';

const { NlpManger } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'], forceNER: true})
manager.addDocument('en', 'hello there', 'greetings.hello');

const AnotherComponent = () => (

);

export default AnotherComponent;