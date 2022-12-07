import { PrismaClient } from '@prisma/client'

export default function handler(req, res) {
  if(req.query.db =='dbMain') {
    const prisma = new PrismaClient()

    var house
    async function get() {
      house = await prisma.dbMain.findFirst()
    }
    get()
    .then(async () => {
      await prisma.$disconnect()
      if(house) {
        res.status(200).json(house)
        res.end()
      } else {
        res.status(200).json({
          id: 0,
          address: "",
          phone: "",
          requisites: "",
          signPut: "",
          signGet: "",
        })
        res.end()
      }
    })
  }
  if(req.query.db =='dbSide') {
    const prisma = new PrismaClient()

    var house
    async function get() {
      house = await prisma.dbSide.findFirst()
    }
    get()
    .then(async () => {
      await prisma.$disconnect()
      if(house) {
        res.status(200).json(house)
        res.end()
      } else {
        res.status(200).json({
          id: 0,
          address: "",
          phone: "",
          requisites: "",
          signPut: "",
          signGet: "",
          signDonate: "",
        })
        res.end()
      }
    })
  }
}
  