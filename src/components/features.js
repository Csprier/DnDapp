import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllFeatures } from '../actions/featuresActions';

// import '../css/features.css';

class Features extends Component {
  componentDidMount() {
    this.props.dispatch(listAllFeatures());
  }

  render() {
    return (
      <div className="features">
        <h3>Features</h3>
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
    );
  }
}

const mapStateToProps = state => ({
  features: state.features.features
});

export default connect(mapStateToProps)(Features);