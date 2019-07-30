import * as firebase from 'firebase';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyFireService {

    constructor(private user: UserService){}

 
    getUserFromDatabase (uid) {

        const ref = firebase.database().ref('users/' + uid);
        return ref.once('value')
            .then(snapshot => snapshot.val());
    }

    uploadFile(file) {
        const fileName = 'abc.png';
        const fileRef = firebase.storage().ref().child('image/' + fileName);
        const uploadTask = fileRef.put(file);

        return new Promise((resolve, reject) => {

        uploadTask.on('state_changed', snapshot => {
        }, error => {
            reject(error);
        }, () => {
            const fileUrl = uploadTask.snapshot.downloadURL;
            resolve({fileName, fileUrl});
        });
    });
}

    
    handleImageUpload(data) {

        const user = this.getUserFromDatabase.getProfile();

        const newPersonalPostKey = firebase.database().ref().child('myposts').push().key;
        const personalPostDetails = {
            fileUrl: data.fileUrl,
            name: data.fileName,
            creationDate: new Date().toString()
        };

        const allPostsKey = firebase.database().ref('allposts').push().key;
        const allPostsDetails = {
            fileUrl: data.fileUrl,
            name: data.fileName,
            creationDate: new Date().toString(),
            uploadedBy: user
        };

        const imageDetails = {
            fileUrl: data.fileUrl,
            name: data.fileName,
            creationDate: new Date().toString(),
            uploadedBy: user,
            favoriteCount: 0
        };



        const updates = {};
        updates['/myposts/' + user.uid + "/" + newPersonalPostKey ] = personalPostDetails;
        updates['/allposts/' + allPostsKey] = allPostsDetails;
        updates['/images/' + data.fileName] = imageDetails;

        return firebase.database().ref().update(updates);
    };
}  