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
  }

  setCookie() {
    const { userCookie } = this.state;
   
    document.cookie = `${userCookie.hashId}=hashId; expires= Thu, 21 Aug 2019 20:00:00 UTC`;
    document.cookie = `${userCookie.ballColor}=ballColor; expires= Thu, 21 Aug 2019 20:00:00 UTC`;
    document.cookie = `${userCookie.visits}=visits; expires= Thu, 21 Aug 2019 20:00:00 UTC`;
  }

  renderBall() {
    const randNum = max => Math.floor(Math.random() * max);
    const colorClasses = ['blue-ball', 'red-ball'];
    

    if (!this.state.userCookie.hashId) {
      this.setState({ 
        userCookie: { hashId: 'ndvbwvu348hsdc', ballColor: colorClasses[randNum(colorClasses.length)], visits: 1 }
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
      console.log(this.parseCookies(document.cookie));
    }
    // this.setState({
    //   userCookie: this.browser.cookies.getAll({hashId: this.state.userId})
    // })
  }

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