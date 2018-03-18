import express from 'express';
import {hospitals} from './hospitals';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.send({hospitals: hospitals});
});

router.post('/', (req, res) => {
        let newHospital = req.body;
        if (newHospital) {
          hospitals.push({id: newHospital.id, name: newHospital.name, address: newHospital.address,
          phone_number: newHospital.phone_number});
          res.status(201).send({message: 'Hospital Created'});
      } else {
            res.status(400).send({message:
            'Unable to find Hospital in request. No Hospital Found in body'});
      }
});

// Update a hospital
router.put('/:id', (req, res) => {
     const key = req.params.id;
     const updateHospital = req.body;
     const index = hospitals.map((hospital)=>{
return hospital.id;
}).indexOf(key);
            if (index !== -1) {
               hospitals.splice(index, 1, {id: updateHospital.id, name: updateHospital.name, address: updateHospital.address,
               phone_number: updateHospital.phone_number});
               res.status(200).send({message: 'Hospital Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Hospital in request. No Hospital Found in body'});
      }
});

// Delete a hospital
router.delete('/:id', (req, res) => {
     const key = req.params.id;
     const index = hospitals.map((hospital)=>{
return hospital.id;
}).indexOf(key);
    if (index > -1) {
hospitals.splice(index, 1);
        res.status(200).send({message: `Deleted Hospital with id: ${key} `});
    } else {
      res.status(400).send({message: `Unable to find hospital with id: ${key}. No Hospital Deleted`});
      }
});

export default router;
