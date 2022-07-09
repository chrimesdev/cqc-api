const axios = require('axios');

async function validateCQC(cqc_code) {
    try {
      const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${cqc_code}?partnerCode=OpenAnswers`);
      
      if (locationAPI.data) {
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.error(error);
    }
  }

exports.validateCQC = validateCQC;
