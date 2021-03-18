import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

 const serviceProvider = (provider) => {
   return firebase.auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const user = result.user;
            user.success = true;
            console.log(user);
            return user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error', errorCode, errorMessage);
        });
}
export const googleSignIn = () =>{
    return serviceProvider(googleProvider)
}
export const facebookSignIn = () =>{
    return serviceProvider(facebookProvider)
    .then(res => res)
}
export const githubSignIn = () =>{
    return serviceProvider(githubProvider)
    .then(res => res)
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            updateUserInfo(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.success = false;
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.success = false;
            newUserInfo.error = error.message;
            return newUserInfo;
        });
}
const updateUserInfo = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        console.log('User name saved Successfully');
    }).catch(function (error) {
        console.log(error.message);
    });
}
