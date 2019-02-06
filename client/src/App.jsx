import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCookie: {
        hashId: null,
        ballColor: null,
        visits: null,
      }
    };
  }

  componentDidMount() {
    this.renderBall();
    this.getCookie();   
    this.generateRandomId();
  }

  setCookie() {
    const { userCookie } = this.state;
   
    document.cookie = `hashId=${userCookie.hashId}; expires= Thu, 21 Aug 2019 20:00:00 UTC`;
    document.cookie = `ballColor=${userCookie.ballColor}; expires= Thu, 21 Aug 2019 20:00:00 UTC`;
    document.cookie = `visits=${userCookie.visits}; expires= Thu, 21 Aug 2019 20:00:00 UTC`;
  }

  renderBall() {
    const randNum = max => Math.floor(Math.random() * max);
    const colorClasses = ['blue-ball', 'red-ball'];
    const newId = this.generateRandomId();

    if (!this.state.userCookie.visits) {
      this.setState({ 
        userCookie: { hashId: newId, ballColor: colorClasses[randNum(colorClasses.length)], visits: 1 }
      }, () => this.setCookie());
    }
  }

  parseCookies(cookies) {
    const splitCookies = cookies.split('; ');
    let values = [];
    for (let item of splitCookies) {
      values.push(item.split('='));
    }

    let parsedItem = {};
    parsedItem[values[0][0]] = values[0][1];
    parsedItem[values[1][0]] = values[1][1];
    parsedItem[values[2][0]] = values[2][1];
     
    return parsedItem;
  }

  getCookie() {

    if (document.cookie) {
      const cookie = this.parseCookies(document.cookie);
      let hashId;
      let ballColor;
      let visits;
      
      for (let key in cookie) {
        if (key === 'visits') {
          visits = Number(cookie[key]) + 1;
        }
        if (key === 'hashId') {
          hashId = cookie[key];
        }
        if (key === 'ballColor') {
          ballColor = cookie[key];
        }
      }
      this.setState({ 
        userCookie: { hashId: hashId, ballColor: ballColor, visits: visits }
      }, () => this.setCookie());
    }

  }

  generateRandomId() {
    const randNum = max => Math.floor(Math.random() * max);

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '1234567890';
    const specials = '!@#$%&*';

    const allVals = [letters, upperLetters, nums, specials];

    let id = '';

    for (let val of allVals) {
      id += val.substring(randNum(val.length), randNum(val.length) + 1)
    }
    return id;
  }


  render() {
    const { userCookie } = this.state;
    
    return (
      <div className="container">
        <div className={`${userCookie.ballColor} ball`}></div>
      </div>
    )
  }
}

export default App;

  /*

  getHashId() {

    // const { userCookie } = this.state;

    // const visits = document.cookie.replace(/(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    // if (visits > 0) {
    //   document.cookie('visits', `${visits++}`);
    //   // this.setState({ userCookie[visits]: })
    // };
    
    fetch('/id')
      .then((response) => {
        this.setState({ userCookie: this.parseCookies(document.cookie) });
      })
      .catch(error => console.log(error));
  }


  alertCookie() {
    const color = document.cookie.replace(/(?:(?:^|.*;\s*)ball_color\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const id = document.cookie.replace(/(?:(?:^|.*;\s*)hash_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const visits = document.cookie.replace(/(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (visits > 0) {
      alert(`${color} ${id} ${visits}`)
    };
  }

  */