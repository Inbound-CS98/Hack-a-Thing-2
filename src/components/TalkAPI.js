import React, { useState } from 'react';
import axios from 'axios';

import * as style from './AComponent.scss';

// test comment

const postUrl = 'https://inbound-cs98-hack-a-thing-2.herokuapp.com/api/post';
/*
fetch(postUrl, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  body: JSON.stringify({
    msg: 'hello there',
  }),
});
*/

const TestButton = (props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div>
      <p className={style.title}>
        Hi this button is named {props.name} {isClicked ? 'and you better click me right now' : ', thanks for clicking me'}
      </p>
      <button type="button"
        onClick={() => {
          setIsClicked(false);
          axios(postUrl, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=UTF-8',
            },
            data: {
              msg: 'hello there',
            },
          }).then(response => console.log(response.data.turn));
        }}
      >
        {isClicked ? 'hey bro click me right here' : 'hey thanks man i appreciate it'}
      </button>
    </div>
  );
};

const TalkAPI = () => {
  return (
    <>
      <TestButton name="FIRST-BUTTON" />
    </>
  );
};

export default TalkAPI;
