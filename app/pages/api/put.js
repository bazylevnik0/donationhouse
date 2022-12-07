import { PrismaClient } from '@prisma/client'


export default function handler(req, res) {
  const prisma = new PrismaClient()
  
  async function put() {
    await prisma.dbMain.create({
      data: {
        address: req.body.address,
        phone: req.body.phone,
        requisites: req.body.requisites,
        signPut: req.body.signPut,
        signGet: ""
      },
    })
  }
  put()
  .then(async () => {
    await prisma.$disconnect()
    res.status(200).json({ status: '200' })
    res.end()
  })
}
