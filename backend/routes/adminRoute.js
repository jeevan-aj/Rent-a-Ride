import express from "express"
import { adminAuth ,adminProfiile } from "../controllers/adminControllers/adminController.js"
import { signIn } from "../controllers/authController.js"
import { signOut  } from "../controllers/userControllers/userController.js"
import { addProduct, deleteVehicle, editVehicle } from "../controllers/adminControllers/dashboardController.js"
import { showVehicles } from "../controllers/adminControllers/dashboardController.js"
import { multerUploads } from "../utils/multer.js"




const router = express.Router()

router.post('/dashboard',signIn,adminAuth)
router.post('/profile',adminProfiile)
router.get('/signout',signOut)
router.post('/addProduct',multerUploads,addProduct)
router.get('/showVehicles',showVehicles)
router.delete('/deleteVehicle/:id',deleteVehicle)
router.put('/editVehicle/:id',editVehicle)


export default router