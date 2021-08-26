import react from "react"

class Player extends react.Component{
    constructor(props){
        super(props)
        
        this.points = this.props.points
        this.name = this.props.name
    }
    render(){
        return <li style={this.style}>
            <h1>{this.name}</h1> 
            <p>{this.points}</p>
            <div>
                <button>+</button>
                <button>-</button>        
            </div>              
        </li>
    }
       
    
}
export default Player