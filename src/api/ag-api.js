/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {
    /**
* 获取经销商信息列表。

* @method
* @name Ag#getAgentPageList
*/
    getAgentPageList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/agents';

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

            if (parameters['agCode'] !== undefined) {
                queryParameters['agCode'] = parameters['agCode'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'GET',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
* 新增经销商信息。

* @method
* @name Ag#addAgent
*/
        addAgent(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/agents';

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

            if (parameters['payBonus'] !== undefined) {
                form['payBonus'] = parameters['payBonus'];
            }

            if (parameters['rpBonus'] !== undefined) {
                form['rpBonus'] = parameters['rpBonus'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'POST',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
         * 修改经销商信息
         * @method
         * @name Ag#updateAgent
         */
        updateAgent(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/agents/{agCode}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{agCode}', parameters['agCode']);

            if (parameters['agCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: agCode'));
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

            if (parameters['payBonus'] !== undefined) {
                form['payBonus'] = parameters['payBonus'];
            }

            if (parameters['rpBonus'] !== undefined) {
                form['rpBonus'] = parameters['rpBonus'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'PUT',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
* 根据agCode获取经销商信息。

* @method
* @name Ag#getAgent
*/
        getAgent(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/agents/{agCode}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{agCode}', parameters['agCode']);

            if (parameters['agCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: agCode'));
                return Promise;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'GET',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
* 根据usId锁定或解锁经销商。

* @method
* @name Ag#lockAgent
*/
        lockAgent(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/agents/{agCode}/lock';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{agCode}', parameters['agCode']);

            if (parameters['agCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: agCode'));
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
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'POST',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
* 经销商后台登陆接口。

* @method
* @name Ag#agentLogin
*/
        agentLogin(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/admins/login';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['agCode'] !== undefined) {
                form['agCode'] = parameters['agCode'];
            }

            if (parameters['agCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: agCode'));
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
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'POST',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
* 经销商后台登出接口。将sessionid传入后台

* @method
* @name Ag#agentLoginOut
*/
        agentLoginOut(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/admins/loginout';

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
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'DELETE',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
        /**
* 经销商密码修改接口。

* @method
* @name Ag#agentUpdatePwd
*/
        agentUpdatePwd(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ag/admins/resetpwd';

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
            var url = domain + path;
            var options = {
                timeout: parameters.$timeout,
                method: 'PUT',
                url: url,
                params: queryParameters,
                body: body,
                headers: headers
            };
            if (Object.keys(form).length > 0) {
                options.body = form;
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                options.emulateJSON = true;
            }

            const req = Vue.http(options);
            return req;
        },
}