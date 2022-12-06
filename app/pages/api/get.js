import { PrismaClient } from '@prisma/client'

export default function handler(req, res) { 
  const prisma = new PrismaClient()

  var house
  async function get() {
    house = await prisma.dbMain.findFirst()
  }
  get()
  .then(async () => {
    await prisma.$disconnect()
    res.status(200).json(house)
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
}
  