import { Router } from "express";
import { addDetails, deleteDetails, getDetails, updateDetails } from "../controllers/registration.js";

const registrationRouter=Router();

//add details route
registrationRouter.post('/registration', addDetails);

//get details route
registrationRouter.get('/registration', getDetails);

// update details route
registrationRouter.patch('/registration/:id', updateDetails);

//delete details route
registrationRouter.delete('/registration/:id', deleteDetails);

// count details route
// registrationRouter.post('/registration', count items);

export default registrationRouter;
