import {MongoClient, ObjectId} from "mongodb"

export async function connectToDatabase(){
    const client = await MongoClient.connect("mongodb+srv://jczekanski123:UMjnFl6noaJPBHtP@e-commerce.aincbco.mongodb.net/E-commerce")

    return client
}
import { NextApiRequest,NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const { type,category } = req.body;

    const client = await connectToDatabase();
    const db = client.db();
    try {
      const clothesCollection = db.collection('clothes');
      let items
      if(category === 'all'){
        items = await clothesCollection.find({ type: type}).toArray();
      }else{
        items = await clothesCollection.find({ type: type, category:category }).toArray();
      }


      if (!items) {
        return res.status(404).json({ error: 'Item not found' });
      }

      return res.status(200).json(items);
    } catch (error) {
      console.error('Error fetching item by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      client.close();
    }
  }
}
