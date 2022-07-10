# CQC location ID lookup

- Find a GP practice CQC location ID by postcode 
- Validate a CQC location ID exists
- Validate a CQC location ID matches an ODS code 
- Get CQC data by CQC location ID

all using the [CQC Syndication API](https://anypoint.mulesoft.com/exchange/portals/care-quality-commission-5/4d36bd23-127d-4acf-8903-ba292ea615d4/cqc-syndication-1/).

## Running the application

```
npm install
```

```
npm start
```

### Get a CQC location ID by postcode

```
const findCQC = require('./find');

findCQC.findCQC('TS11 7BL');
```

### Validate a CQC location ID exists

```
const validateCQC = require('./validate');

validateCQC.validateCQC('1-547292114');
```

### Validate a CQC location ID matches a CQC code

```
const validateCQC = require('./validate');

validateCQC.validateCQCtoODS('1-541013617', 'A83040');
```

### Get CQC data by CQC location ID

```
const getCQC = require('./get');

getCQC.getCQC('1-547292114')
```
