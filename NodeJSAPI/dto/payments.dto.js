module.exports = {
    
"customerNumber" : { required: true, type: "number"},
"transactionNumber" : { required: true, type: "string"},
"paymentDate" : { required: true, type: "date"},
"amount" : { required: true, type: "number"},
"createdBy" : { required: false, type: "string"},
"modifiedBy" : { required: false, type: "string"},
};

// allowed types - number, string, boolean, object, undefined
