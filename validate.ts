const axios = require('axios');

export async function validateCQC(cqc_code: string) {
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

export async function validateCQCtoODS(cqc_code: string, ods_code: string) {
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
