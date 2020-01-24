const firebase = require('firebase');
require('firebase/firestore');

export class Firebase
{
    constructor()
    {
        this._config = {

            apiKey: "AIzaSyA4fiG9tT_llcwHduZjzAkw-awKJ4Ezr2Y",
            authDomain: "whatsapp-clone-c4dc2.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-c4dc2.firebaseio.com",
            projectId: "whatsapp-clone-c4dc2",
            storageBucket: "whatsapp-clone-c4dc2.appspot.com",
            messagingSenderId: "624052180720",
            appId: "1:624052180720:web:5686a0b7d814665d61d435",
            measurementId: "G-MEEE5NRR5H"
        }
        this.init();
    }

    init()
    {
        if (!window._initializedFirebase)
        {

            firebase.initializeApp(this._config);

            // firebase.firestore().settings({
            //     timestampsInSnapshots: true
            // });

            window._initializedFirebase = true;
        }
    }

    static db()
    {
        return firebase.firestore(); // Real Time DB
    }

    static hd()
    {
        return firebase.storage(); // Arquivos na nuvem
    }

    initAuth()
    {
        return new Promise((s, f)=>{

            if (sessionStorage.login)
            {
                let data = JSON.parse(sessionStorage.login);
                let token = data.credential.accessToken;
                let user = data.user;

                s({
                    user, token
                });
                return;
            }

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result=>{

                sessionStorage.login = JSON.stringify(result);

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, token
                });

            })
            .catch(err => {
                f(err);
            });

        });
    }
}