import { NextApiRequest, NextApiResponse } from "next";

// PrismaClient 가져오기 위한 모듈 불러오기
const { PrismaClient } = require("@prisma/client");
// PrismaClient 만들기
const client = new PrismaClient();

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const query=req.query;
    const {musicId} = query;
    const music = client.user.findUnique({
        where: {
          id: musicId,
        },
      })
    res.status(200).json({ text: {music} })
  }