import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePetCards = () => {
    
   
  
    return this.props.pets.map(( pet) => <Pet
          name={pet.name}
          gender={pet.gender} 
           type={pet.type}
           age={pet.age}
           weight={pet.weight}
           key={pet.id}
       /> )
   
   }
  render() {
    console.log('pet browser props',this.props)
  return <div className="ui cards">{this.generatePetCards()}</div>
  }
}

export default PetBrowser
