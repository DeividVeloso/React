import React from 'react';
import ReactDOM from 'react-dom';
import Family from './Family';
import Member from './member';

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Guilherme' />
         <Member name='Samanta' />
          <Member name='Fabio' />
    </Family>, 
document.getElementById('app'))