import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/pdpsActions';
// import FuelSavingsForm from '../components/FuelSavingsForm';
import PdpList from '../components/PdpList';

export const PdpsPage = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.actions.createPdp();
  }

  return (
      <div>
<button type="button" onClick={handleClick}>Click Me!</button>
    <PdpList
      pdps={props.pdps}
    /></div>
  );
};

PdpsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  pdps: PropTypes.object.isRequired
};
  
function mapStateToProps(state) {
  return {
    pdps: state.pdps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PdpsPage);
