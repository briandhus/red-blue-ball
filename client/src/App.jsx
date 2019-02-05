import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // visited: false,
      // ballColor: null,
      userCookie: {
        ballColor: null,
        visits: null,
        hashId: null,
      }
    };
  }

  componentDidMount() {
    this.alertCookie();
    this.renderBall();
    // docCookies.getItem(name)
    // this.getHashId;
  }

  renderBall() {
    const randNum = max => Math.floor(Math.random() * max);
    const colorClasses = ['blue-ball', 'red-ball'];
    

    if (!this.state.userCookie.hashId) {
      this.setState({ userCookie: { ballColor: colorClasses[randNum(colorClasses.length)] }});
    }
  }

  getHashId() {
    fetch(`/id`)
      .then(response => response.json())
      .then((cookie) => {
        this.setState({ userCookie: cookie });
      })
      .catch(error => console.log(error));
  }

  getCookie() {
    this.setState({
      userCookie: this.browser.cookies.getAll({hashId: this.state.userId})
    })
  }

  alertCookie() {
    alert(document.cookie);
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