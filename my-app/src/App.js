/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import LocaleContext from './context/localeContext';
import NoMatch from './Screens/NoMatch';
// import Home from './Screens/Home';
// import About from './Screens/About';
// import About from './Screens/Users';

const HomeAsync = loadable(() => import('./Screens/Home'), {
  fallback: <div>Loading...</div>,
});
const AboutAsync = loadable(() => import('./Screens/About'), {
  fallback: <div>Loading...</div>,
});
const UsersAsync = loadable(() => import('./Screens/Users'), {
  fallback: <div>Loading...</div>,
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth) {
          // eslint-disable-next-line react/jsx-no-undef
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/',
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

class App extends PureComponent {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <LocaleContext>
            <Switch>
              <Route path="/" exact component={HomeAsync} />
              <Route path="/about/" component={AboutAsync} />
              <PrivateRoute path="/users/" auth component={UsersAsync} />
              <Route component={NoMatch} />
            </Switch>
          </LocaleContext>
          <div>footer</div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;

// import React, { Component } from 'react';
// import Child from './test';

// export default class App extends Component {
//   state = {
//     label: '',
//     user: {
//       name: {
//         firstName: 'yagnesh',
//         lastName: 'modi',
//       },
//     },
//   };

//   click = () => {
//     let { user } = this.state;
//     user = { ...user, name: { ...user.name, lastName: 'modh' } };
//     console.log(user);
//     this.setState({ user });
//   };

//   render() {
//     console.log('render parent');
//     const { label, user } = this.state;
//     return (
//       <div>
//         <h1>Hello from Parent</h1>
//         <button type="button" onClick={this.click}>
//           Click Parent
//         </button>
//         <Child text="Hello From Props" label={label} user={user} />
//       </div>
//     );
//   }
// }
