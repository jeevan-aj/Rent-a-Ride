import express from "express";

import { verifyToken } from "../utils/verifyUser.js";
import { updateUser ,deleteUser , signOut , test} from "../controllers/userControllers/userController.js";
import { listAllVehicles, searchCar, showVehicleDetails } from "../controllers/userControllers/userAllVehiclesController.js";
import { editUserProfile } from "../controllers/userControllers/userProfileController.js";
import { BookCar, razorpayOrder, getVehiclesWithoutBooking } from "../controllers/userControllers/userBookingController.js";


const router = express.Router()

router.get('/',test)
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/signout',signOut)
router.get('/listAllVehicles',listAllVehicles)
router.post('/showVehicleDetails',showVehicleDetails)
router.post('/editUserProfile/:id',editUserProfile)
router.post('/searchCar',searchCar)
router.post('/getVehiclesWithoutBooking',getVehiclesWithoutBooking)
// router.post('/checkAvailability',checkAvailability)
router.post('/razorpay',razorpayOrder)
router.post('/bookCar',BookCar)








export default router
