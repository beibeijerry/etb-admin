/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {
    /**
     * 前端->获取用户签到、摇红包基本信息：今日是否已签到、签到红包海报广告地址、签到红包阅读时间、摇红包总次数、今日用户剩余次数
     * @method
     * @name Rp#getRpAppInfo
     */
    getRpAppInfo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/info';

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
         * 前端->用户签到
         * @method
         * @name Rp#postRpAppCheckin
         */
        postRpAppCheckin(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/checkin';

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
         * 前端->用户摇红包
         * @method
         * @name Rp#postRpAppShakerp
         */
        postRpAppShakerp(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/shakerp';

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
         * 前端->获取实时摇红包信息
         * @method
         * @name Rp#getRpAppShakerpList
         */
        getRpAppShakerpList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/shakerp/list';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['count'] !== undefined) {
                queryParameters['count'] = parameters['count'];
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
         * 前端->获取特权红包列表，上拉加载更多
         * @method
         * @name Rp#getRpAppViprp
         */
        getRpAppViprp(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/viprp';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['time'] !== undefined) {
                queryParameters['time'] = parameters['time'];
            }

            if (parameters['count'] !== undefined) {
                queryParameters['count'] = parameters['count'];
            }

            if (parameters['upOrDown'] !== undefined) {
                queryParameters['upOrDown'] = parameters['upOrDown'];
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
         * 获取单个红包
         * @method
         * @name Rp#getRpAppViprpByViprpid
         */
        getRpAppViprpByViprpid(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/viprp/{viprpid}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{viprpid}', parameters['viprpid']);

            if (parameters['viprpid'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: viprpid'));
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
         * 前端->获取红包领取列表
         * @method
         * @name Rp#getRpAppViprpByViprpidGetlist
         */
        getRpAppViprpByViprpidGetlist(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/viprp/{viprpid}/getlist';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{viprpid}', parameters['viprpid']);

            if (parameters['viprpid'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: viprpid'));
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
         * 前端->领取特权红包
         * @method
         * @name Rp#postRpAppViprpByViprpidGet
         */
        postRpAppViprpByViprpidGet(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/viprp/{viprpid}/get';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{viprpid}', parameters['viprpid']);

            if (parameters['viprpid'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: viprpid'));
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
         * 后台->获取设置信息
         * @method
         * @name Rp#getRpAdminGradesByGradeSetting
         */
        getRpAdminGradesByGradeSetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/admin/grades/{grade}/setting';

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
         * 后台->设置红包相关设置
         * @method
         * @name Rp#putRpAdminGradesSetting
         */
        putRpAdminGradesSetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/admin/grades/setting';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: body'));
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
         * 获取签到广告链接，阅读描述设置
         * @method
         * @name Rp#getRpAdminSetting
         */
        getRpAdminSetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/admin/setting';

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
         * 修改签到广告链接，阅读描述设置
         * @method
         * @name Rp#putRpAdminSetting
         */
        putRpAdminSetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/admin/setting';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: body'));
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
         * 后台->分页
         * @method
         * @name Rp#getRpAdminViprp
         */
        getRpAdminViprp(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/admin/viprp';

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
         * 后台->生成派发红包
         * @method
         * @name Rp#postRpAdminViprp
         */
        postRpAdminViprp(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/admin/viprp';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: body'));
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
         * 获取排名列表
         * @method
         * @name Rp#getRpAppRank
         */
        getRpAppRank(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/rank';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['lastRank'] !== undefined) {
                queryParameters['lastRank'] = parameters['lastRank'];
            }

            if (parameters['count'] !== undefined) {
                queryParameters['count'] = parameters['count'];
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
         * 获取会员权益
         * @method
         * @name Rp#getRpAppGradesSetting
         */
        getRpAppGradesSetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/rp/app/grades/setting';

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
}