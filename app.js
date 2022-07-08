const axios = require('axios');

async function getCQC(name, ods_code) {
    try {
      // Retrieve location ID by practice name
      const locationsListAPI = await axios.get('https://api.cqc.org.uk/public/v1/locations?page=1&perPage=80000&careHome=N');
      const allLocations = locationsListAPI.data.locations;
      const locationIdByName = allLocations.find(location => location.locationName === name);

      if (locationIdByName.locationId) {
        console.log(`Using ${name} found location ID: ${locationIdByName.locationId}`);
      }
      
      // Retrieve practice information using location ID
      const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${locationIdByName.locationId}?partnerCode=OpenAnswers`);
      
      // Check if the location ID is registered and matches the ODS code we have
      if (locationAPI.data.registrationStatus === 'Registered' && locationAPI.data.odsCode == ods_code) {
        console.log(locationAPI.data);
      }

    } catch (error) {
      console.error(error);
    }
  }

getCQC('Aireborough Family Practice', 'B86070');
