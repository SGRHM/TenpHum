import React, {Component} from 'react'

import api2 from '../services/api2'
import io from 'socket.io-client'

class Teste extends Component {

  state = {
    
    teste: [],
    
  }



 
    async componentDidMount() {


       
    this.registerToSocket();

      const response = await api2.get('historicoList')
      this.setState({teste: response.data})
    }

    registerToSocket = () => {

     const socket = io('http://localhost:3000');

     socket.on('tempEtHum', newPost => {

       this.setState({teste: newPost });
     })


    }

  
   
  render(){

    return (
      <section id="post-list">
        
       {this.state.teste.map(data => (
            <article  key= {data._id}>
  

            <p>
              
              {console.log(data.Humidity)}
              {data.Temperature}
            </p>

        </article>

          ))}
  
      </section>
      );
  }
}


export default Teste;