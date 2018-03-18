import _ from 'lodash';

const hospitals = [
  {
    'id': 1,
    'code': 'UHW',
    'name': 'University Hospital Waterford',
    'address': 'Ardkeen, Waterford',
    'phone_number': '051-848000'
  },
  {
    'id': 2,
    'code': 'WGH',
    'name': 'Wexford General Hospital',
    'address': 'Newtown Road, Wexford',
    'phone_number': '053-9153000',
  },
  {
    'id': 3,
    'code': 'STGH',
    'name': 'South Tipperary General Hospital',
    'address': 'Clonmel, Tipperary',
    'phone_number': '052 6177000'
  },
  {
    'id': 4,
    'code':'SLGH',
    'name': 'Saint Luke\'s General Hospital',
    'address': 'Freshford Road, Kilkenny',
    'phone_number': '056 7785000'
  },
];

const stubAPI = {
         getAll: () => {
            return hospitals;
          },
         add: (c, n, a, p) => {
              if (!(c && n && a && p)) return false;
              let id = 1;
              const last = _.last(hospitals);
              if (last) {
                 id = last.id + 1;
              }
              let len = hospitals.length;
              let newLen = hospitals.push({
                  'id': id,
                 'code': c, 'name': n, 'address': a, 'phone_number': p});
               return newLen > len?id:-1;
              },
         getHospital: (id) => {
            let result = null;
            const index = _.findIndex(hospitals,
                   (hospital) => {
                    return hospital.id == id;
                  } );
             if (index !== -1) {
                result = hospitals[index];
                    }
            return result;
            },
         updateHospital: (hospitalId) => {
            let result = null;
            const hospital = hospitals.getHospital(hospitalId)
            let id = hospital.id;
            if (hospital) {
              result = hospital.update({'id': id, 'code': '', 'name': '', 'address':'',
                'phone_number':''})
            }
            return result

         }

         
      };
    export default stubAPI;