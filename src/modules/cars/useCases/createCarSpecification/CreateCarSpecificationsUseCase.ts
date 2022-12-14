import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Car } from "../../../../shared/infra/prisma/entities/Car"
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository"
import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationsRepository"

interface IRequest {
    car_id: string,
    specifications_id: string[]
}
@injectable()
class CreateCarSpecificationsUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationsRepository
    ) { }
    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carExists = await this.carsRepository.findById(car_id)
        if (!carExists) throw new AppError("Car does not exist")
        const specifications = await this.specificationsRepository.findByIds(specifications_id)
        carExists.specifications = specifications
        await this.carsRepository.update(carExists)
        return carExists
    }
}

export { CreateCarSpecificationsUseCase }