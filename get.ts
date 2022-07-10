const axios = require('axios');

export async function getCQC(cqc_code: string) {
  try {
    const locationAPI = await axios.get(`https://api.cqc.org.uk/public/v1/locations/${cqc_code}?partnerCode=OpenAnswers`);
    
    if (locationAPI.data.registrationStatus === 'Registered') {
      console.log(locationAPI.data);
    }

  } catch (error) {
    console.error(error);
  }
}
