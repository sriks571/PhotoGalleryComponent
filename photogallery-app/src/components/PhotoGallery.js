import React, { Component, Fragment } from "react";
import {Modal} from 'react-responsive-modal'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.imageList = [
            {
                url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
                caption: "Laptop",
                id: 1,
            },
            {
                url: "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
                caption: "Nasa",
                id: 2,
            },
            {
                url: "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
                caption: "Test",
                id: 3,
            },
            {
                url: "https://i.picsum.photos/id/1038/3914/5863.jpg?hmac=SGtXryWDkn_eVQdA1NjYrikcsrIfcfS4SFYHo4lCpkQ",
                caption: "Water",
                id: 4,
            }
        ];
        this.state = {
            images: this.imageList,
            currentImageId: this.imageList[0].id,
            showNextError:false,
            showPrevError:false,
        }
    }

   

    renderImages = (imageId) => {
        return this.state.images.map(image => {
            if (image.id === imageId) {
                this.state.currentImageId = image.id;
                return (
                    <Fragment>
                        <img src={image.url} alt={image.caption} title={image.caption} key={image.id} height="600" width="600"></img>
                    </Fragment>
                )
            }
        }

        )
    }

    checkIfImageExist=(currentImageId)=>{
        let hasImage=false
        for(let imageVal in this.imageList){
              if(this.imageList[imageVal].id===currentImageId){
               return true;
              }
        }
        return hasImage;
    }


    getNextImage = () => {
        let nextImageId=this.state.currentImageId + 1;
        let hasImage=this.checkIfImageExist(nextImageId);
        if(hasImage){
            this.setState({
                ...this.state.currentImageId,
                currentImageId: nextImageId,
                showNextError:false,
                showPrevError:false     
            })
        }
        else{
            this.setState({
                showNextError:true,
                showPrevError:false  
            })
        }
        

    }

    getPreviousImage = () => {
        let prevImageId=this.state.currentImageId - 1;
        let hasImage=this.checkIfImageExist(prevImageId);
        if(hasImage){
            this.setState({
                ...this.state.currentImageId,
                currentImageId: prevImageId,
                showPrevError:false,
                showNextError:false,
            })
        }
        else{
            this.setState({
                showPrevError:true,
                showNextError:false
            })
        }
    }

    render() {
        return (
            <Fragment>
                <h1>PhotoGallery App</h1>
                <div>
                    <button onClick={this.getNextImage} style={{
                        marginInline: "10px",
                        backgroundColor: "#4CAF50"
                    }}>Next &raquo;</button>
                    {this.renderImages(this.state.currentImageId)}
                   
                    <button onClick={this.getPreviousImage} style={{
                        marginInline: "10px",
                        backgroundColor: "#4CAF50"
                    }} >&laquo; Previous</button>
                </div>
                {this.state.showPrevError?<p><i><b>Previous Images are not available,Please go through next images</b></i></p>:""}
                {this.state.showNextError?<p><i><b>Next Images are not available,Please go through previous images</b></i></p>:""}
            </Fragment>
        )
    }

}

export default PhotoGallery;