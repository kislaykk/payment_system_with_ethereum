import * as SQLite from 'expo-sqlite';

exports.gettingAnAccount = (address) =>{
    const db = SQLite.openDatabase('walletDb');
    db.transaction(tx=>{
        tx.executeSql('SELECT * from ACCOUNTS WHERE address is ?',
        [],
        (_,result)=>{
            console.log(result);
        },
        (_,error)=>{
            console.log('cant get the particular record');
            console.log(error);
        })
    })
}