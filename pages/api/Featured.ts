import { connectToDatabase } from "@/db/db";

import { NextApiRequest,NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET'){
        const client = await connectToDatabase();
        const db = client.db();
        try{
            const featuredClothesCollection = db.collection('Featured')
            const featuredClothes = await featuredClothesCollection.find({}).toArray();
            
            res.status(200).json(featuredClothes)
        }catch(error){
            console.error('Error fetching featured clothes:', error);
            res.status(500).json({ error: 'Internal server error' });
        }finally {
            client.close();
          }
    }
}