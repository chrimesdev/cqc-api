const findCQC = require('./find');
const getCQC = require('./get');
const validateCQC = require('./validate');

validateCQC.validateCQC('1-547292114');
getCQC.getCQC('1-547292114')
findCQC.findCQC('TS11 7BL', 'A81048');
