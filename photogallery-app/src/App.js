import logo from './logo.svg';
import React,{Component, Fragment} from "react";
import './App.css';
import './components/PhotoGallery'
import PhotoGallery from './components/PhotoGallery';
class App extends Component {

  render(){
    return(
      <Fragment>
        <PhotoGallery></PhotoGallery>
      </Fragment>
    )
  }
}

export default App;
