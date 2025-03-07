import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  handleChange=({target: {value}})=>{
    this.setState({
      filters: {
    
      type: value
      }
    })
  }
    handleFetch=()=>{
      let baseUrl = '/api/pets'
      if(this.state.filters.type !== 'all'){
         baseUrl += `?type=${this.state.filters.type}`
      }

      fetch(baseUrl)
      .then(res=>res.json)
      .then(petData=>this.setState({
        pets: petData
      }))
  

    }
    adopted=(petId)=>{
      let petData = this.state.pets.map(pet=>{
        if (pet.id === petId){
          return {
            ...pet, 
            isAdopted: true
          }
          
          }
          else{
            return pet
          }
        }
      )
      this.setState({
        pets: petData 
      })

    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
               onChangeType={this.handleChange}
               onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.adopted}
               />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
