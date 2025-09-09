import {
   getAllPropertyTypeModel,
getPropertyTypeByIdModel,
insertPropertyTypeModel,
updatePropertyTypeModel,
deletePropertyTypeModel
} from "../models/PropertyTypeModels.js";

// Get all property types
export const getAllPropertyType = (req, res) => {

       getAllPropertyTypeModel((err, propertyTypes) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to retrieve  property types' });
        }
        res.json(propertyTypes);
      });
    };
  

    //  Get property type by id
    export const getPropertyTypeByIds = (req, res) => {
      const { id } = req.params;    
        getPropertyTypeByIdModel(id, (err, propertyType) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to retrieve  property type' });
            }
            if (!propertyType) {
                return res.status(404).json({ error: ' property type not found' });
            }
            res.json(propertyType);
        });
    };

// Insert new property type
export const insertPropertyType = (req, res) => {
    const { name } = req.body;
    if (!name ) {
      return res.status(400).json({ error: 'Name is required' });
    }   
    insertPropertyTypeModel(name, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to insert  property type' });
      }
        res.status(201).json({ message: ' property type inserted successfully', id: result.insertId });
    });
    };

// Update property type by id
export const updatePropertyTypes = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;  
    if (!name ) {
        return res.status(400).json({ error: 'Name is required' });
        }
    updatePropertyTypeModel(id, name, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update  property type' });
        }
        res.json({ message: ' property type updated successfully' });
    });
    };
// Delete property type by id
export const deletePropertyTypes = (req, res) => {
    const { id } = req.params;
    deletePropertyTypeModel(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete  property type' });
        }
        res.json({ message: ' property type deleted successfully' });
    });
    };


