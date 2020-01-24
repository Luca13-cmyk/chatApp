import { Firebase } from "./Firebase";

export class Upload
{
    static send(file, from)
    {
        return new Promise((s, f) => {

        let fileRef = Firebase.hd().ref(from).child(Date.now() + "_" + file.name);
        let task = fileRef.put(file);

        task.on("state_changed", e=>{
    
            console.log('upload', e);
    
            }, err => {
    
                f(err);
    
            }, ()=>{
    
                fileRef.getDownloadURL().then(url => {
                    console.log("upload **********************", url);
                    s(url);
                    
                });
            
            });
        });
    }
}