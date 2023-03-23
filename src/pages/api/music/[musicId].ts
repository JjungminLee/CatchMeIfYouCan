import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const POST="POST"
const GET="GET"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method===GET){
        const { musicId } = req.query;
        const music = await client.music.findUnique({
            where: { id: +(musicId||'0')},
            select:{name:true,imgUrl:true}
        });
        return res.json({ music });
        }
}