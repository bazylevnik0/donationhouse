import { PrismaClient } from '@prisma/client'


export default function handler(req, res) {
  const prisma = new PrismaClient()
  
  async function put() {
    await prisma.dbMain.delete({
      where: {
        id: +req.body.id
      }
    })
  }
  put()
  .then(async () => {
    await prisma.$disconnect()
    res.status(200).json({ status: '200' })
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })   
}
