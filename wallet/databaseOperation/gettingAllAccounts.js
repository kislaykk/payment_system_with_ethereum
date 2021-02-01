import * as SQLite from 'expo-sqlite';

exports.gettingAllAccounts =  ()=>{
    let promise = new Promise((resolve,reject)=>{
        const db = SQLite.openDatabase('walletDb');
        db.transaction(tx=>{
            tx.executeSql('SELECT * FROM accounts',
            [],
            (_,response)=>{
                resolve(response.rows._array)
            },
            (_,error)=>{
                console.log('fetch fail');
                console.log(error);
                reject(error.message)
            });
        })
    })
    return promise;
    
}