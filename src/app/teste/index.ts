import { NextApiHandler } from "next";
import { Users } from '@/types/users'
import prisma from '@/lib/prisma'


// Listar todos os usuários


// Inserir novo usuário
const handlerPost: NextApiHandler = async (req, res) => {
    const { name, email } = req.body
    const newUser = await prisma.user.create({
        data: { name, email }
    })
    res.status(201).json({ status: true, user: newUser })
}