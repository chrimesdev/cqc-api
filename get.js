const axios = require('axios');

async function getCQC(cqc_code) {
    try {
      const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${cqc_code}?partnerCode=OpenAnswers`);
      
      // Check if the location ID is registered and matches the ODS code
      if (locationAPI.data.registrationStatus === 'Registered') {
        console.log(locationAPI.data);
      }

    } catch (error) {
      console.error(error);
    }
  }

exports.getCQC = getCQC;
