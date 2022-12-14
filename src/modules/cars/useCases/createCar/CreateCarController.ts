import { Response, Request } from "express"
import { container } from "tsyringe"
import { CreateCarUseCase } from "./CreateCarUseCase"

class CreateCarController {
    async handle(req: Request, res: Response) {
        const { name, description, license_plate, price, brand, category_id } = req.body
        const { id } = req.user
        const createCarUseCase = container.resolve(CreateCarUseCase)
        const car = await createCarUseCase.execute({ name, description, license_plate, price, brand, category_id, user_id: id })
        return res.status(201).json(car)
    }
}

export { CreateCarController }