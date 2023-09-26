import {MongoClient} from "mongodb"

export async function connectToDatabase(){
    const client = await MongoClient.connect("mongodb+srv://jczekanski123:UMjnFl6noaJPBHtP@e-commerce.aincbco.mongodb.net/E-commerce")

    return client
}