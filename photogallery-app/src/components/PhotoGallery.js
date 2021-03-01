import React, { Component,Fragment } from "react";

class PhotoGallery extends Component {
constructor(props){
    super(props);
    this.state={
      images:[
        {
            url:"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
            caption:"Laptop",
            id:"1",
        },
        {
            url:"https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
            caption:"Nasa",
            id:"2",
        },
        {
            url:"https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
            caption:"Test",
            id:"3",
        },
        {
            url:"https://i.picsum.photos/id/1038/3914/5863.jpg?hmac=SGtXryWDkn_eVQdA1NjYrikcsrIfcfS4SFYHo4lCpkQ",
            caption:"Water",
            id:"4",
        }
      ]
    }
}



renderImages=()=>{
    return this.state.images.map(image=>{
        return(
            <Fragment>
           
            <img src={image.url} alt={image.caption} title={image.caption}   key={image.id} height="300" width="300"></img>
            </Fragment>
        )
    }

    )
}

render(){

    return(
        <Fragment>
        <h1>PhotoGallery App</h1>
        <h5></h5>
        {this.renderImages()}
        </Fragment>
    )
}

}

export default PhotoGallery;