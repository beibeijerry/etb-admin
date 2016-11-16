/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {

    /**
     * 获取服务器的版本信息
     * @method
     * @name Sys#getSysVersion
     */
    getSysVersion(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/sys/version';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'GET',
                url: path,
                params: queryParameters,
                data: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.data = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }
            var mt = "GET".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
         * 发送手机验证码短信，注册登录等。
         * @method
         * @name Sys#sendSMS
         */
        sendSMS(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/sys/sms';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['mobile'] !== undefined) {
                form['mobile'] = parameters['mobile'];
            }

            if (parameters['mobile'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: mobile'));
                return Promise;
            }

            if (parameters['type'] !== undefined) {
                form['type'] = parameters['type'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'POST',
                url: path,
                params: queryParameters,
                data: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.data = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }
            var mt = "POST".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
         * 获取用户文件列表
         * @method
         * @name Sys#getUserFiles
         */
        getUserFiles(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/sys/files';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'GET',
                url: path,
                params: queryParameters,
                data: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.data = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }
            var mt = "GET".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
         * 获取七牛文件上传的token
         * @method
         * @name Sys#getUploadFileToken
         */
        getUploadFileToken(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/sys/files/upLoadToken';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            if (parameters['type'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: type'));
                return Promise;
            }

            if (parameters['subType'] !== undefined) {
                queryParameters['subType'] = parameters['subType'];
            }

            if (parameters['key'] !== undefined) {
                queryParameters['key'] = parameters['key'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'GET',
                url: path,
                params: queryParameters,
                data: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.data = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }
            var mt = "GET".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
         * 这里使用服务器直接上传文件，客户端不用在调用七牛上传文件
         * @method
         * @name Sys#uploadFile
         */
        uploadFile(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/sys/files/upload';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['multipart/form-data'];

            if (parameters['file'] !== undefined) {
                form['file'] = parameters['file'];
            }

            if (parameters['file'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: file'));
                return Promise;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'POST',
                url: path,
                params: queryParameters,
                data: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.data = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }
            var mt = "POST".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
         * 获取省市区信息
         * @method
         * @name Sys#getAreas
         */
        getAreas(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/sys/area';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['code'] !== undefined) {
                queryParameters['code'] = parameters['code'];
            }

            if (parameters['recursion'] !== undefined) {
                queryParameters['recursion'] = parameters['recursion'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'GET',
                url: path,
                params: queryParameters,
                data: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.data = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }
            var mt = "GET".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
}