import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllFeatures } from '../actions/featuresActions';

// import '../css/features.css';

class Features extends Component {
  constructor() {
    super();

    this.state = {
      display: false
    }
  }

  toggleDisplay = () => {
    console.log('Toggle display button clicked. Changing the state from:', this.state.display);
    this.setState({
      display: !this.state.display
    });
    // console.log('this.setState has occurred in toggleDisplay()');
  }

  componentDidMount() {
    this.props.dispatch(listAllFeatures());
  }

  render() {
    return (
      <div className="features">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Features</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.features.map((feature, i) => {
              return (
                <li key={i} className="featureNode">
                  <a href={feature.url}>{feature.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  features: state.features.features
});

export default connect(mapStateToProps)(Features);
