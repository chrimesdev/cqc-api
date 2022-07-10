const axios = require('axios');

async function validateCQC(cqc_code) {
  try {
    const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${cqc_code}?partnerCode=OpenAnswers`);
    
    if (locationAPI.data) {
      console.log(`${cqc_code} is a valid CQC location ID`);
    } else {
      console.log(`${cqc_code} is an invalid CQC location ID`);
    }

  } catch (error) {
    console.error(error);
  }
}

async function validateCQCtoODS(cqc_code, ods_code) {
  try {
    const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${cqc_code}?partnerCode=OpenAnswers`);
    
    if (locationAPI.data.odsCode === ods_code) {
      console.log(`CQC location ID: ${cqc_code} matches ODS code: ${ods_code}`);
    } else {
      console.log(`CQC location ID: ${cqc_code} does not match ODS code: ${ods_code}`);
    }

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  validateCQC,
  validateCQCtoODS
};
