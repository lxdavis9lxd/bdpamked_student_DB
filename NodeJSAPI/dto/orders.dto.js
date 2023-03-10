module.exports = {
    
"orderNumber" : { required: true, type: "number"},
"orderDate" : { required: true, type: "date"},
"requiredDate" : { required: true, type: "date"},
"shippedDate" : { required: false, type: "date"},
"status" : { required: true, type: "string"},
"comments" : { required: false, type: "string"},
"customerNumber" : { required: true, type: "number"},
"createdBy" : { required: false, type: "string"},
"modifiedBy" : { required: false, type: "string"},
};

// allowed types - number, string, boolean, object, undefined
