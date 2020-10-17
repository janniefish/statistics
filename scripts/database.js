var firebaseConfig = {
    apiKey: "AIzaSyAXiUTIROoj9WD8y2yjNn-K39WYO1fnbbA",
    authDomain: "linebrary-528b4.firebaseapp.com",
    projectId: "linebrary-528b4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
var ref = db.collection('libraryStatus');
ref.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, doc.data());
    });
});