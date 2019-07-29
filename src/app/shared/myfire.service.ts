import * as firebase from 'firebase';

export class MyFireService {
//   handleImageUpload() {
//     throw new Error("Method not implemented.");
//   }
 
    getUserFromDatabase (uid) {

        const ref = firebase.database().ref('users/' + uid);
        return ref.once('value')
            .then(snapshot => snapshot.val());
    }

    uploadFile(file) {
        const fileName = 'abc.png';
        const fileRef = firebase.storage().ref().child('image/' + fileName);
        fileRef.put(file)
    };
}