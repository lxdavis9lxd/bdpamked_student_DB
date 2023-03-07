module.exports = {
    
"orderNumber" : { required: true, type: "number"},
"productCode" : { required: true, type: "string"},
"quantityOrdered" : { required: true, type: "number"},
"priceEach" : { required: true, type: "number"},
"orderLineNumber" : { required: true, type: "number"},
"createdBy" : { required: false, type: "string"},
"modifiedBy" : { required: false, type: "string"},
};

// allowed types - number, string, boolean, object, undefined
