import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/modalActions';

class Modal extends React.Component {
  onClick() {
    this.props.dispatch(toggleModal(this.props.isOpen))
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <button onClick={(e) => this.onClick()}>
            Close
          </button>
          <ul>
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.isOpen.isOpen
});

export default connect(mapStateToProps)(Modal);