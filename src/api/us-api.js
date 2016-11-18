/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {
    /**
* 微信公众号开发时，调用此接口进行微信网页授权。授权完成后会在header中返回sessionid，每次授权完成后
sessionid会自动更新，用户信息也会自动同步微信端信息进行更新。前端请求时需将sessionid放在header中进行
请求，服务段会验证sessionid是否合法。

* @method
* @name Us#WeChatOAuth2
*/
    WeChatOAuth2(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/wechats/oauth2';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['uri'] !== undefined) {
                queryParameters['uri'] = parameters['uri'];
            }

            if (parameters['uri'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: uri'));
                return Promise;
            }

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            if (parameters['type'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: type'));
                return Promise;
            }

            if (parameters['code'] !== undefined) {
                queryParameters['code'] = parameters['code'];
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
         * app调用微信返回code app使用code访问服务器换回该用户的sessionId 用户把sessionId放到头部中，即可识别该用户（如果用户不存在则新建用户） 若三个参数都有则 将手机号绑定到微信账户  若无code参数  查询手机账户是否存在，不存在创建账户，存在则手机号账户登录 若只有code则是微信授权登录
         * @method
         * @name Us#WeChatAppOAuth2
         */
        WeChatAppOAuth2(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/wechats/app/oauth2';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['code'] !== undefined) {
                queryParameters['code'] = parameters['code'];
            }

            if (parameters['mobile'] !== undefined) {
                queryParameters['mobile'] = parameters['mobile'];
            }

            if (parameters['verifycode'] !== undefined) {
                queryParameters['verifycode'] = parameters['verifycode'];
            }

            if (parameters['bussId'] !== undefined) {
                queryParameters['bussId'] = parameters['bussId'];
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
* 获取微信js授权配置信息。

* @method
* @name Us#WeChatOAuth2JsConfig
*/
        WeChatOAuth2JsConfig(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/wechats/jsconfig';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['url'] !== undefined) {
                queryParameters['url'] = parameters['url'];
            }

            if (parameters['url'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: url'));
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
* 微信临时素材下载。

* @method
* @name Us#WeChatDownloadMedia
*/
        WeChatDownloadMedia(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/wechats/media';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['mediaIds'] !== undefined) {
                form['mediaIds'] = parameters['mediaIds'];
            }

            if (parameters['mediaIds'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: mediaIds'));
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
* 更新微信公众号的菜单时调用。

* @method
* @name Us#WeChatCreateMenu
*/
        WeChatCreateMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/wechats/menus';

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
* 前端请求时需将sessionid放在header中进行请求，服务段会验证sessionid是否合法，并根据sessionid，获取用户信息并返回到。

* @method
* @name Us#getUserOwnInfo
*/
        getUserOwnInfo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/users/owninfo';

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
* 根据usId获取用户信息。

* @method
* @name Us#getUserInfo
*/
        getUserInfo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/users/{autoId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{autoId}', parameters['autoId']);

            if (parameters['autoId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: autoId'));
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
* web端根据id  绑定经销商信息。

* @method
* @name Us#bindAgent
*/
        bindAgent(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/users/{autoId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{autoId}', parameters['autoId']);

            if (parameters['autoId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: autoId'));
                return Promise;
            }

            if (parameters['agCode'] !== undefined) {
                form['agCode'] = parameters['agCode'];
            }

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
* 根据usId锁定或解锁用户。

* @method
* @name Us#lockUser
*/
        lockUser(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/users/{usId}/lock';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{usId}', parameters['usId']);

            if (parameters['usId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: usId'));
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
* web端分页获取用户信息列表

* @method
* @name Us#getUserPageList
*/
        getUserPageList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/users';

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

            if (parameters['startTime'] !== undefined) {
                queryParameters['startTime'] = parameters['startTime'];
            }

            if (parameters['endTime'] !== undefined) {
                queryParameters['endTime'] = parameters['endTime'];
            }

            if (parameters['grade'] !== undefined) {
                queryParameters['grade'] = parameters['grade'];
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
* 后台登陆接口。

* @method
* @name Us#adminLogin
*/
        adminLogin(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/login';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['username'] !== undefined) {
                form['username'] = parameters['username'];
            }

            if (parameters['username'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: username'));
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
* 后台登出接口。将sessionid传入后台

* @method
* @name Us#adminLoginOut
*/
        adminLoginOut(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/loginout';

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
* 后台管理员添加接口。

* @method
* @name Us#adminUpdatePwd
*/
        adminUpdatePwd(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/resetpwd';

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
        /**
* 重置密码。

* @method
* @name Us#resetPwd
*/
        resetPwd(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/{autoId}/resetpwd';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{autoId}', parameters['autoId']);

            if (parameters['autoId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: autoId'));
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
        /**
* 后台管理员添加接口。

* @method
* @name Us#addAdmin
*/
        addAdmin(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
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
* 获取管理员信息列表。

* @method
* @name Us#getAdminList
*/
        getAdminList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins';

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
* 根据groupid获取管理员信息。

* @method
* @name Us#getAdminByGroupId
*/
        getAdminByGroupId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/groups/{groupId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{groupId}', parameters['groupId']);

            if (parameters['groupId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: groupId'));
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
* 根据username获取管理员信息。

* @method
* @name Us#getAdminByUsername
*/
        getAdminByUsername(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/getbyusername/{username}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{username}', parameters['username']);

            if (parameters['username'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: username'));
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
* 后台管理员修改接口。

* @method
* @name Us#updateAdmin
*/
        updateAdmin(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/{autoId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{autoId}', parameters['autoId']);

            if (parameters['autoId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: autoId'));
                return Promise;
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
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
* 根据id获取管理员信息。

* @method
* @name Us#getAdminById
*/
        getAdminById(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/{autoId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{autoId}', parameters['autoId']);

            if (parameters['autoId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: autoId'));
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
* 根据id删除管理员信息。

* @method
* @name Us#deleteAdminById
*/
        deleteAdminById(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/admins/{autoId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{autoId}', parameters['autoId']);

            if (parameters['autoId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: autoId'));
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
* 获取会员级别信息列表。

* @method
* @name Us#getGradeList
*/
        getGradeList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/grades';

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
* 新增会员级别信息。

* @method
* @name Us#addGrade
*/
        addGrade(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/grades';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['grade'] !== undefined) {
                form['grade'] = parameters['grade'];
            }

            if (parameters['grade'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: grade'));
                return Promise;
            }

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: name'));
                return Promise;
            }

            if (parameters['money'] !== undefined) {
                form['money'] = parameters['money'];
            }

            if (parameters['money'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: money'));
                return Promise;
            }

            if (parameters['inviteMax'] !== undefined) {
                form['inviteMax'] = parameters['inviteMax'];
            }

            if (parameters['inviteMax'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: inviteMax'));
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
* 设置会员级别信息。

* @method
* @name Us#setGrade
*/
        setGrade(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/grades/{grade}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{grade}', parameters['grade']);

            if (parameters['grade'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: grade'));
                return Promise;
            }

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: name'));
                return Promise;
            }

            if (parameters['money'] !== undefined) {
                form['money'] = parameters['money'];
            }

            if (parameters['money'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: money'));
                return Promise;
            }

            if (parameters['inviteMax'] !== undefined) {
                form['inviteMax'] = parameters['inviteMax'];
            }

            if (parameters['inviteMax'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: inviteMax'));
                return Promise;
            }

            if (parameters['payBonus'] !== undefined) {
                form['payBonus'] = parameters['payBonus'];
            }

            if (parameters['payBonus'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: payBonus'));
                return Promise;
            }

            if (parameters['rpBonus'] !== undefined) {
                form['rpBonus'] = parameters['rpBonus'];
            }

            if (parameters['rpBonus'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: rpBonus'));
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
        /**
* 根据id获取会员级别信息。

* @method
* @name Us#getGrade
*/
        getGrade(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/grades/{grade}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{grade}', parameters['grade']);

            if (parameters['grade'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: grade'));
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
* 绑定邀请信息。

* @method
* @name Us#bindIntro
*/
        bindIntro(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/user/relation';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['inviteCode'] !== undefined) {
                form['inviteCode'] = parameters['inviteCode'];
            }

            if (parameters['inviteCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: inviteCode'));
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
* 获取我的好友列表。

* @method
* @name Us#getFriends
*/
        getFriends(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/user/friend';

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
* app设备注册接口。

* @method
* @name Us#setDeviceToken
*/
        setDeviceToken(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/devices';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['type'] !== undefined) {
                form['type'] = parameters['type'];
            }

            if (parameters['type'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: type'));
                return Promise;
            }

            if (parameters['deviceToken'] !== undefined) {
                form['deviceToken'] = parameters['deviceToken'];
            }

            if (parameters['deviceToken'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: deviceToken'));
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
* 微信绑定手机号接口。

* @method
* @name Us#bindMobile
*/
        bindMobile(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/us/mobile/bind';

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

            if (parameters['verifycode'] !== undefined) {
                form['verifycode'] = parameters['verifycode'];
            }

            if (parameters['verifycode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: verifycode'));
                return Promise;
            }

            if (parameters['bussId'] !== undefined) {
                form['bussId'] = parameters['bussId'];
            }

            if (parameters['bussId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: bussId'));
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
}