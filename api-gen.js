#! /usr/bin/env node

var type = 'angular';

var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;

var request = require('request');


var gen = function(url,dest,className){
  request(url, function (error, response, body) {
    if (error) {
      console.error("Error fetching "+url);
      console.error(error);
      return;
    }

    if (!error && response.statusCode == 200) {
      //console.log(body);
      var swagger = JSON.parse(body);
      var code = null;
      if (type=='angular') {
        // code = CodeGen.getAngularCode({ className: className, swagger: swagger });
        code = CodeGen.getCustomCode({
          moduleName:className,
          className:className,
          swagger:swagger,
          template:{
            class: fs.readFileSync('./template/angular-class.mustache', 'utf-8'),
            method: fs.readFileSync('./template/method.mustache', 'utf-8'),
            request: fs.readFileSync('./template/angular-request.mustache','utf-8')
          }
        });

      } else {
        code = CodeGen.getNodeCode({ className: className, swagger: swagger });
      }

      fs.writeFile(dest, code, function(err) {
        if(err) {
          return console.error(err);
        }
      });

    }



  });
}

// gen(url,dest,className);

exports.gen = gen;
