import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const { Consumer: LocaleConsumer, Provider: LocaleProvider } = createContext();

export default class localeContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    locale: 'english',
  };

  render() {
    const { children } = this.props;
    const { locale } = this.state;
    return (
      <div>
        <select value={locale} onChange={e => this.setState({ locale: e.target.value })}>
          <option value="english">English</option>
          <option value="Spanish">Spanish</option>
        </select>
        <LocaleProvider value={{ locale }}>{children}</LocaleProvider>
      </div>
    );
  }
}
