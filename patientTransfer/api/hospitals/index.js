import express from 'express';
import stubAPI from './hospitals';

const router = express.Router(); // eslint-disable-line

//get all hospitals
router.get('/', (req, res) => {
  const hospitals = stubAPI.getAll();
  res.send({hospitals: hospitals});
});

// Add a hospital
router.post('/', (req, res) => {
      const newHospital = req.body;

      if (newHospital && stubAPI.add(newHospital.code, newHospital.name,
        newHospital.address, newHospital.phone_number)){
        return res.status(201).send({message: 'Hospital Added'});
      }
      return  res.status(400).send({message:
             'Unable to find Hospital in request. No Hospital Found in body'});
});

//get a hospital
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const hospital = stubAPI.getHospital(id);

    if (hospital) {
      return res.status(200).send(hospital);
    }
    return res.status(404).send({message: 'Unable to find Hospital ${id}'});
})

// Update a hospital
router.put('/:id', (req, res) => {
     const key = req.params.id;
     const updateHospital = req.body;
     const index = hospitals.map((hospital)=>{
return hospital.code;
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
