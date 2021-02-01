import * as SQLite from 'expo-sqlite'

exports.additionOfAccounts=async (address,privateKey)=>{
    const db = SQLite.openDatabase('walletDb');
    db.transaction(tx=>{
        tx.executeSql('INSERT INTO accounts (address , privateKey) VALUES ( ? , ? );',
        [address , privateKey] ,
        (_,response)=>{console.log(response)},
        (_,error)=>{
            console.log('ERROR in addition of accounts');
            console.log(error);
        })
    })
}