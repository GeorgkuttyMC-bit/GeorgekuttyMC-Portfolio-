import fs from 'fs';
fetch('https://www.youtube.com/@georgescreativestudio/shorts')
  .then(res => res.text())
  .then(text => {
    const match = text.match(/\/shorts\/([a-zA-Z0-9_-]{11})/g);
    if (match) {
        console.log(match.filter((v, i, a) => a.indexOf(v) === i).slice(0, 5));
    } else {
        console.log('no shorts found');
    }
  });
