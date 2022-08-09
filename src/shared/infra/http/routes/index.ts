import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";



const router = Router()

router.use("/users", userRoutes)
router.use(authenticateRoutes)
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes)

export { router }