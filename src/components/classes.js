import React, { Component } from 'react';
import '../css/classes.css';

class Classes extends Component {
  constructor() {
    super();
    // this.state = {
    //   isDataLoaded: false,
    //   classes: [],
    //   classObjects: []
    // }
  }

  // componentDidMount() {
  //   fetch('http://www.dnd5eapi.co/api/classes')
  //   .then(response => response.json())
  //   .then(data => {
  //     let classObjs = data.results.map((classItem, i) => {
  //       return (
  //         <li key={i} className='classNode'>
  //           <a href={classItem.url}>{classItem.name}</a>
  //         </li>
  //       );        
  //     })
  //     this.setState({
  //       classes: data.results.map(item => item.name),
  //       classObjects: classObjs
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  render() {
    return (
      <div className="character-classes">
        <ul>
          {/* {this.state.classObjects} */}
        </ul>
        <div className="character-info-display">

        </div>
      </div>
    );
  }
}

export default Classes;
