import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { carRoutes } from "./car.routes";
import { categoriesRoutes } from "./categories.routes";
import { saleRoutes } from "./sales.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";

const router = Router()

router.use("/users", userRoutes)
router.use(authenticateRoutes)
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes)
router.use("/cars", carRoutes)
router.use("/sales", saleRoutes)

export { router }
