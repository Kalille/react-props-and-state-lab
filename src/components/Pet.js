import React from 'react';
import PetBrowser from './PetBrowser.js';
import pets from './pets.js'


class Pet extends React.Component {
  constructor(props){
    super(props)
  }
  generatePetCards = () => {
    
   
  
   return pets.map(( index) => <PetBrowser 
         name={pets.name}
         gender={pets.gender} 
           type={pets.type}
           age={pets.age}
           weight={pets.weight}

        key={index}
      /> )
  
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            '♀' OR '♂'
            PET NAME
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
