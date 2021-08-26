import './App.css';
import Player from './Components/Player'
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      champ_nom : "",
        playerslist : [
          {
            "id" : 0,
            "name" : "jean",
            "points" : 12
          },
      
          {
            "id" : 1,
            "name" : "pierre",
            "points" : 0
          },
      
      
          {
            "id" : 2,
            "name" : "tombale",
            "points" : 150
          },
      
          {
            "id" : 3,
            "name" : "calaisse",
            "points" : 8
          },
        ]
    }
    
   

    this.SortAlphabetical = this.SortAlphabetical.bind(this)
    this.sortbyPointDesc = this.sortbyPointDesc.bind(this)
    this.sortbyPointASC = this.sortbyPointASC.bind(this)
    this.AddPlayer = this.AddPlayer.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    
    
  }
  
  handleInputChange(event){

    this.setState({
        champ_nom : event.target.value
    })
    console.log(this.state.champ_nom)
  }


  AddPlayer(event){
    event.preventDefault();
    let newitem = {
      "id" : this.state.playerslist.length + 1,
      "name" : this.state.champ_nom,
      "points" : 0
    }
  
    this.setState(previousState => ({
      playerslist: [...previousState.playerslist, newitem]
  }));
  }
  
  SortAlphabetical(){ 
    this.setState({
      playerslist : 
      this.state.playerslist.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    })
  }

  sortbyPointDesc(){ 
    this.setState({
      playerslist : 
      this.state.playerslist.sort(function(a, b){
        return  b.points - a.points;
      })
    })
  }

  sortbyPointASC(){ 
    this.setState({
      playerslist : 
      this.state.playerslist.sort(function(a, b){
        return  a.points - b.points;
      })
    })
  }
 
  render(){
    
    
    return <div className="App">
        <ul className="tools">
            <li> <button onClick={this.SortAlphabetical} >A-Z</button></li>
            <li> <button onClick={this.sortbyPointDesc} ><FontAwesomeIcon icon={faArrowDown} /></button></li>
            <li> <button onClick={this.sortbyPointASC} ><FontAwesomeIcon icon={faArrowUp} /></button></li>
            
        </ul>
        <ul className="liste">
          {this.state.playerslist.map( player=> (  <Player key={player.id} name={player.name} points={player.points} ></Player>))}
          <li>
            <input id="champ_nom" type="text" placeholder="Entrez le nom" value={this.state.champ_nom} onChange={this.handleInputChange}/> 
            <p></p>
            <div>
                <button onClick={this.AddPlayer}>+</button>
  
            </div> 
            </li>
        </ul>
          
      </div>
  }
    
  
}

export default App;
