import mongoose from 'mongoose';
import Cause from '../models/cause';

// create new cause
export function createEventCause(req, res) {
  const cause = new Cause({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
  });
  return cause
    .save()
    .then((newCause) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        Cause: newCause,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}  
export function createCause(req, res) {
    const cause = new Cause({
      _id: mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
    });
    return cause
      .save()
      .then((newCause) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          Cause: newCause,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message,
        });
      });
  }  
