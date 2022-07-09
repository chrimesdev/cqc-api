const axios = require('axios');

async function findCQC(postalCode, ods_code) {
    try {
      // Retrieve all locations
      const locationsListAPI = await axios.get('https://api.cqc.org.uk/public/v1/locations?page=1&perPage=80000&careHome=N');
      const allLocations = locationsListAPI.data.locations;

      // Filter locations by postalCode
      const locationByPostalCode = allLocations.find(location => location.postalCode === postalCode);
      console.log(`Using ${postalCode} found "${locationByPostalCode.locationName}" CQC location ID: "${locationByPostalCode.locationId}"`);
      
      // Retrieve practice information using location ID
      const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${locationByPostalCode.locationId}?partnerCode=OpenAnswers`);
      
      // Check if the location ID is registered and matches the ODS code
      if (locationAPI.data.registrationStatus === 'Registered' && locationAPI.data.odsCode == ods_code) {
        console.log(locationAPI.data);
      }

    } catch (error) {
      console.error(error);
    }
  }

exports.findCQC = findCQC;
