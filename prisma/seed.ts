import { prisma } from './prisma-client'
import { brands, cars, newCars, news } from './constants'

async function up() {
	const filteredNewCars = newCars.filter(car => car !== undefined)
	const filteredCars = cars.filter(car => car !== undefined)
	const filteredBrand = brands.filter(brand => brand !== undefined)
	const filteredNews = news.filter(article => article !== undefined)

	await prisma.news.createMany({ data: filteredNews })
	await prisma.brand.createMany({ data: filteredBrand })
	await prisma.newCar.createMany({ data: filteredNewCars })
	await prisma.car.createMany({ data: filteredCars })
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "News" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Car" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "NewCar" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
