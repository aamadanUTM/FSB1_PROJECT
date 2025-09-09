import express from 'express';
import {
   getAllPropertyType,
getPropertyTypeByIds,
insertPropertyType,
updatePropertyTypes,
deletePropertyTypes,
} from '../controllers/PropertyTypesController.js';

const router = express.Router();

// GET all property types
router.get('/', getAllPropertyType);

// GET property type by ID
router.get('/:id', getPropertyTypeByIds);

// POST create new property type
router.post('/save_property', insertPropertyType);

// PUT update property type
router.put('/update_property/:id', updatePropertyTypes);

// DELETE property type
router.delete('/delete_property/:id', deletePropertyTypes);

export default router;