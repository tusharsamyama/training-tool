var Service = require('../services');
var notificationService = new Service();

class Controller {
    constructor(){
        
    }
    async sendNotification(body) {
        var error = null;
        var res;

        if(body.name.length < 1) {
           Promise.reject('invalid name'); 
        }

        if(body.email.length < 1) {
            Promise.reject('invalid email'); 
         }

         if(body.training.length < 1) {
            Promise.reject('invalid training'); 
         }

        switch (body.type) {
            case 'NOMINATION_SUBMITTED':
                res = await notificationService.notifyForSubmission(body);
                console.log('Email sent NOMINATION_SUBMITTED success ..');
                break;
            case 'NOMINATION_ACCEPTED':
                res = await notificationService.notifyForAcceptance();
                console.log('Email sent NOMINATION_ACCEPTED success ..');
                break;
            case 'NOMINATION_REJECTED':
                res = await notificationService.notifyForRejection();
                console.log('Email sent NOMINATION_REJECTED success ..');
                break;
            default :
                error = 'INVALID NOTIFICATION TYPE. Should be one of (NOMINATION_SUBMITTED, NOMINATION_ACCEPTED, NOMINATION_REJECTED)';
        }

        if (error){
            console.log('sending response .. error');
            return Promise.reject(error);
        }
        console.log('sending response .. success');
        return Promise.resolve('success');
    }
}

module.exports = Controller;