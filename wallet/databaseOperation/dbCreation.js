import * as SQLite from 'expo-sqlite';

exports.dbCreation=async ()=>{
    const db = SQLite.openDatabase('walletDb');
    db.transaction((tx)=>{
        tx.executeSql('CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY AUTOINCREMENT , address STRING UNIQUE , privateKey STRING UNIQUE)'
        ,[]
        ,()=>{console.log('success')}
        ,(_,error)=>{
            console.log('failed');
            console.log(error);
        })
    })
}