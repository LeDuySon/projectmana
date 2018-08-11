import React, { Component } from 'react';
import './App.css';
import Project from './Components/upload.js'

class App extends Component {
  constructor(props){
    super(props);
    this.Aproject = this.Aproject.bind(this);  
    this.state = {
      project : {
        name: '',
        content: '',
        members: [],
        deadline: '',
        upload: null,
        goal:'',

       },    
       
    }
  }


    Aproject(nameproj, contentproj, memberproj, deadlineproj, fileproj, goalproj)  {
    this.setState({
      project: {
        name: nameproj,
        content: contentproj,
        members: memberproj,
        deadline: deadlineproj,
        upload: fileproj,
        goal: goalproj,

      }
    })



  }

    



  render() {
    return (
    <div className="container ">
      

          <Project createproj={this.Aproject} proj={this.state.project} />
          

            
    </div>
          
    );
  }
}

export default App;
