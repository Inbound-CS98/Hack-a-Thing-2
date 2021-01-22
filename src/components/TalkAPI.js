import React, { useState } from 'react';

import * as style from './AComponent.scss';

// test comment

const TestButton = (props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div>
      <p className={style.title}>
        Hi this button is named {props.name} {isClicked ? 'and you better click me right now' : ', thanks for clicking me'}
      </p>
      <button type="button" onClick={() => { setIsClicked(false); }}>
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
