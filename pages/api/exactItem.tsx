import { connectToDatabase } from "@/db/db";
import { ObjectId } from "mongodb";
import { NextApiRequest,NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.body;

    const client = await connectToDatabase();
    const db = client.db();
    const object = new ObjectId(id)
    try {
      const clothesCollection = db.collection('clothes');
    const item = await clothesCollection.findOne({ _id: object });

      if (!item) {
        const featuredClothesCollection = db.collection('Featured');
        const Featureditem = await featuredClothesCollection.findOne({ _id: object });
        if(Featureditem){
          return res.status(200).json(Featureditem);
        }
        return res.status(404).json({ error: 'Item not found' });
      }

      return res.status(200).json(item);
    } catch (error) {
      console.error('Error fetching item by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      client.close();
    }
  }
}
