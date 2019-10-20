import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUploade extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        this.props.handleImage(this.state.pictures.concat(picture));
    }
 
    render() {
        return (<div className="col-sm-6">
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                maxFileSize={52428800}
                withPreview label={this.props.label} singleImage={this.props.singleImage}
            /></div>
        );
    }
}
export default ImageUploade;