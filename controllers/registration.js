import { registrationModel } from "../models/registration.js";

export const addDetails = async (req, res, next) => {

  const result = await registrationModel.create(req.body);

  res.status(200).json({result});
};

export const getDetails = async (req, res, next) => {
  try {
    const result = await registrationModel.find({});
  
    res.status(200).json({result});
  } catch (error) {
    next(error);
    
  }
};

export const updateDetails = async (req, res, next) => {
  try {
    const result = await registrationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({result});
  } catch (error) {
    next(error);
  }
};

export const deleteDetails = async (req, res, next) => {
  try {
    const result = await registrationModel.findByIdAndDelete(req.params.id);
    res.status(200).json({result});
  } catch (error) {
    next(error);
  }
};
