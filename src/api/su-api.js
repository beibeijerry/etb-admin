/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {

    /**
* 获取供应商信息列表。

* @method
* @name Su#getSupplierPageList
*/
    getSupplierPageList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['pageIndex'] !== undefined) {
                queryParameters['pageIndex'] = parameters['pageIndex'];
            }

            if (parameters['pageIndex'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: pageIndex'));
                return Promise;
            }

            if (parameters['pageSize'] !== undefined) {
                queryParameters['pageSize'] = parameters['pageSize'];
            }

            if (parameters['pageSize'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: pageSize'));
                return Promise;
            }

            if (parameters['name'] !== undefined) {
                queryParameters['name'] = parameters['name'];
            }

            if (parameters['bankName'] !== undefined) {
                queryParameters['bankName'] = parameters['bankName'];
            }

            if (parameters['cardNo'] !== undefined) {
                queryParameters['cardNo'] = parameters['cardNo'];
            }

            if (parameters['suCode'] !== undefined) {
                queryParameters['suCode'] = parameters['suCode'];
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
* 新增供应商信息。

* @method
* @name Su#addSupplier
*/
        addSupplier(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: name'));
                return Promise;
            }

            if (parameters['phone'] !== undefined) {
                form['phone'] = parameters['phone'];
            }

            if (parameters['phone'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: phone'));
                return Promise;
            }

            if (parameters['addr'] !== undefined) {
                form['addr'] = parameters['addr'];
            }

            if (parameters['bankName'] !== undefined) {
                form['bankName'] = parameters['bankName'];
            }

            if (parameters['bankName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: bankName'));
                return Promise;
            }

            if (parameters['cardNo'] !== undefined) {
                form['cardNo'] = parameters['cardNo'];
            }

            if (parameters['cardNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: cardNo'));
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
         * 修改供应商信息
         * @method
         * @name Su#updateSupplier
         */
        updateSupplier(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers/{suCode}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{suCode}', parameters['suCode']);

            if (parameters['suCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: suCode'));
                return Promise;
            }

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: name'));
                return Promise;
            }

            if (parameters['phone'] !== undefined) {
                form['phone'] = parameters['phone'];
            }

            if (parameters['phone'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: phone'));
                return Promise;
            }

            if (parameters['addr'] !== undefined) {
                form['addr'] = parameters['addr'];
            }

            if (parameters['bankName'] !== undefined) {
                form['bankName'] = parameters['bankName'];
            }

            if (parameters['bankName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: bankName'));
                return Promise;
            }

            if (parameters['cardNo'] !== undefined) {
                form['cardNo'] = parameters['cardNo'];
            }

            if (parameters['cardNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: cardNo'));
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
                method: 'PUT',
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
            var mt = "PUT".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
* 根据suCode获取供应商信息。

* @method
* @name Su#getSupplier
*/
        getSupplier(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers/{suCode}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{suCode}', parameters['suCode']);

            if (parameters['suCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: suCode'));
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
* 根据sucode锁定或解锁供应商。

* @method
* @name Su#lockSupplier
*/
        lockSupplier(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers/{suCode}/lock';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{suCode}', parameters['suCode']);

            if (parameters['suCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: suCode'));
                return Promise;
            }

            if (parameters['lock'] !== undefined) {
                form['lock'] = parameters['lock'];
            }

            if (parameters['lock'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: lock'));
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
* 供应商后台登陆接口。

* @method
* @name Su#supplierLogin
*/
        supplierLogin(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers/login';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['suCode'] !== undefined) {
                form['suCode'] = parameters['suCode'];
            }

            if (parameters['suCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: suCode'));
                return Promise;
            }

            if (parameters['password'] !== undefined) {
                form['password'] = parameters['password'];
            }

            if (parameters['password'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: password'));
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
* 供应商后台登出接口。将sessionid传入后台

* @method
* @name Su#supplierLoginOut
*/
        supplierLoginOut(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers/loginout';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var options = {
                timeout: parameters.$timeout,
                method: 'DELETE',
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
            var mt = "DELETE".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
        /**
* 供应商密码修改接口。

* @method
* @name Su#supplierUpdatePwd
*/
        supplierUpdatePwd(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var path = '/su/suppliers/resetpwd';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['oldPassword'] !== undefined) {
                form['oldPassword'] = parameters['oldPassword'];
            }

            if (parameters['oldPassword'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: oldPassword'));
                return Promise;
            }

            if (parameters['newPassword'] !== undefined) {
                form['newPassword'] = parameters['newPassword'];
            }

            if (parameters['newPassword'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: newPassword'));
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
                method: 'PUT',
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
            var mt = "PUT".toLowerCase();
            const req = Vue.http[mt](path, options.data, options);
            return req;
        },
}