import { PrismaClient } from '@prisma/client'

export default function handler(req, res) { 
    const prisma = new PrismaClient() 
 
    //find element & copy
    var house
    async function start() {
      console.log("api/donate: start by "+req.query.sessionUserEmail)
    }
    start()
    .then(async ()=> {
      house = await prisma.dbSide.findUnique({
        where: {
            id: +req.query.id,
        },
      })
    })
    .then( async()=>{
      await prisma.dbSide.delete({
        where: {
          id: +req.query.id,
        },
      })
    })
    .then( async()=>{
      await prisma.dbSide.create({
        data: {
          address: house.address,
          phone: house.phone,
          requisites: house.requisites,
          signPut: house.signPut,
          signGet: house.signGet,
          signDonate: house.signDonate + "," + req.query.sessionUserEmail,
        }
      })
    })
    .then(async () => {
      await prisma.$disconnect()
      res.status(200).json({ status: '200' })
      res.end()
    })
}
  