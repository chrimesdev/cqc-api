# CQC location ID lookup

Find a GP practice CQC location ID using postcode and ODS code

## Running the application

```
npm install
```

### Get a CQC location ID by postcode and ODS code

```
const findCQC = require('./find');
findCQC.findCQC('TS11 7BL', 'A81048');
```

### Validate a CQC location ID

```
const validateCQC = require('./validate');
validateCQC.validateCQC('1-547292114');
```

### Get CQC data by CQC location ID

```
const getCQC = require('./get');
getCQC.getCQC('1-547292114')
```
