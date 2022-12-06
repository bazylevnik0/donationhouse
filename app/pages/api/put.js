import { PrismaClient } from '@prisma/client'


export default function handler(req, res) {
  console.log("put handler")
 
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
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })   
}
