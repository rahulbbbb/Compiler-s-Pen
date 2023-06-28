import { MongoClient } from "mongodb";


let db;

async function connectToDb(callback){
    const client=new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.cfrsgra.mongodb.net/`);
    await client.connect();
 
    db=client.db('react-blog-db');
    callback();
}

export{
    db,
    connectToDb,
};