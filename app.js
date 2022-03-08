const axios = require('axios');

async function getCQC(name) {
    try {
      // Retrieve location ID by practice name
      const locationsListAPI = await axios.get('https://api.cqc.org.uk/public/v1/locations?page=1&perPage=101513');
      const allLocations = locationsListAPI.data.locations;
      const locationIdByName = allLocations.find(location => location.locationName === name);

      // Return location ID
      // TODO: Fallback on postcode search
      console.log(`Using ${name} found location ID: ${locationIdByName.locationId}`);
      
      // Retrieve practice information using location ID
      const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${locationId.locationId}?partnerCode=OpenAnswers`);
      
      // Check if the location ID is registered
      if (locationAPI.data.registrationStatus === 'Registered') {
        // TODO: Match ODS code (if locationAPI.data.odsCode === '')
        console.log(locationAPI.data);
      }

    } catch (error) {
      console.error(error);
    }
  }

getCQC('Aireborough Family Practice');
