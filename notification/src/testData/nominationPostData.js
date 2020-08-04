const nominationTestingData = {
    correct : { 
        "name":"Tushar Raut",
        "type":"NOMINATION_SUBMITTED",
        "email":"tushar.samyama2@gmail.com",
        "training": "TGA Batch 2020"
    },
    incorrectType : { 
        "name":"Tushar Raut",
        "type":"NOMINATION_SUBMITTE",
        "email":"tushar.samyama2@gmail.com",
        "training": "TGA Batch 2020"
    },
    incorrectName : { 
        "name":"",
        "type":"NOMINATION_SUBMITTED",
        "email":"tushar.samyama2@gmail.com",
        "training": "TGA Batch 2020"
    },
    incorrectEmail : { 
        "name":"Tushar Raut",
        "type":"NOMINATION_SUBMITTED",
        "email":"",
        "training": "TGA Batch 2020"
    },
    incorrectTraining : { 
        "name":"Tushar Raut",
        "type":"NOMINATION_SUBMITTED",
        "email":"tushar.samyama2@gmail.com",
        "training": ""
    }
}

module.exports = nominationTestingData;