import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import firebase from 'firebase';
import { storage, db } from "./firebase";


function ImageUpload({username}) {
    
    const [image, setImage] = useState(null);
    //const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');
    

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }

    };

    const handleUpload = () => {
        const uploadTask = storage.ref('images/{image.name}').put(image);
        
        uploadTask.on(
            "state_changed",
            snapshot => {},

            error => {
                console.log(error);
        
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username
                    });
                    //setProgress(0);
                    setCaption("");
                    setImage(null);
                });
            }
            
        );
    };
    console.log("image: ", image);
    return (
        <div className="imageupload">
            
            <input type="text" placeholder='Enter a caption' onChange={event => setCaption(event.target.value)} value={caption}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
            Upload
            </Button>
        </div> 
    )
}

export default ImageUpload
