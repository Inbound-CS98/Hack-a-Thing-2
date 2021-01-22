import React from 'react';
import AComponent from 'components/AComponent';
import TalkAPI from 'components/TalkAPI';

// Tutorial on React API calls
// https://pusher.com/tutorials/consume-restful-api-react

// Fetch cheatsheet
// https://devhints.io/js-fetch

const getUrl = 'http://localhost:9090/api/ping';

fetch(getUrl).then(response => response.json()).then(data => console.log(data));

const postUrl = 'http://localhost:9090/post';

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

const Homepage = (props) => {
  return (
    <>
      <AComponent />
      <TalkAPI />
    </>
  );
};

export default Homepage;
