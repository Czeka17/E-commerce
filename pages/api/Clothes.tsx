import { connectToDatabase } from "@/db/db";
import { NextApiRequest,NextApiResponse } from "next"


export default async (req:NextApiRequest,res:NextApiResponse) => {
    if(req.method === 'GET'){
        const {slug} = req.query
        const client = await connectToDatabase();
        const db = client.db();
        try {

            const clothesCollection = db.collection('clothes');
            const allClothes = await clothesCollection.find({category:slug}).toArray();
      
            res.status(200).json(allClothes);
          } catch (error) {
            console.error('Error fetching clothes:', error);
            res.status(500).json({ error: 'Internal server error' });
          } finally {
            client.close();
          }
    }
}