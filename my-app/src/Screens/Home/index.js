import { connect } from 'react-redux';
import home from './home';

function mapStateToProps(state) {
  return {
    locale: state.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: locale => dispatch({ type: 'CHANGE_LOCALE', payload: locale }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
