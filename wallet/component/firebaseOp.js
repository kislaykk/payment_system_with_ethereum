const {firebase} = require('./auth');

fetchBusInfo = async(docId)=>{
    try {
        console.log(docId);
        let db = firebase.default.firestore();
        const info = await db.collection('Bus-collection-public').doc(docId).get();
        if(info.exists) return info.data();
        return null;
    } catch (error) {
        console.log(error);
    }
    
}

export default fetchBusInfo;