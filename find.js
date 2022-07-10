const axios = require('axios');

async function findCQC(postalCode) {
  try {
    // Retrieve all locations
    const locationsListAPI = await axios.get('https://api.cqc.org.uk/public/v1/locations?page=1&perPage=15000&primaryInspectionCategoryName=GP+Practices');
    const allLocations = locationsListAPI.data.locations;

    // Filter locations by postalCode
    const locationByPostalCode = allLocations.find(location => location.postalCode === postalCode);
    console.log(`Using ${postalCode} found "${locationByPostalCode.locationName}" CQC location ID: "${locationByPostalCode.locationId}"`);
    
    // Retrieve practice information using location ID
    const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${locationByPostalCode.locationId}?partnerCode=OpenAnswers`);
    
    // Check if the location ID is registered
    if (locationAPI.data.registrationStatus === 'Registered') {
      console.log(locationAPI.data);
    }

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  findCQC,
};
  
