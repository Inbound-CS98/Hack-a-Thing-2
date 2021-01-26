import React, { useState } from 'react';

import * as style from './AComponent.scss';

// test comment

const postUrl = 'http://localhost:9090/post';
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
          fetch(postUrl, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
              msg: 'hello there',
            }),
          }).then(response => response.json()).then(data => console.log(data));
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
      <TestButton name="SECOND-BUTTON" />
      <TestButton name="Phillip" />
    </>
  );
};

export default TalkAPI;
