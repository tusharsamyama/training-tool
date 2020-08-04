var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
var Handelbar = require('handlebars');
var Config = require('../config');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tgatestmailid@gmail.com', // need to allow less secure app at https://myaccount.google.com/u/1/lesssecureapps?pli=1
    pass: 'tga@2020'
  }
});

class Service {
    notifyForSubmission(data) {
        console.log('sending email for nomination submission..');
        var htmlContent = fs.readFileSync(path.join(__dirname, '../email-templates/nomination-submission.hbs'), 'utf-8');
        var compiled = Handelbar.compile(htmlContent);
        var finalHtml = compiled({
            name: data.name,
            training: data.training
        });

        var mailOptions = {
            from: Config.FROM_EMAIL,
            to: data.email,
            subject: 'Sending Email using Node.js',
            html: finalHtml
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                return Promise.reject('error');
            } else {
                console.log('Email sent: ' + info.response);
                return Promise.resolve('success');
            }
        });
    }

    notifyForAcceptance() {

    }

    notifyForRejection() {

    }
}

module.exports = Service;