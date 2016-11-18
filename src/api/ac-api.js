/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {
    /**
     * 获取用户账户信息
     * @method
     * @name Ac#getAcAppInfo
     */
    getAcAppInfo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/app/info';

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
         * 获取账户余额
         * @method
         * @name Ac#getAcAdminBalanceByAcId
         */
        getAcAdminBalanceByAcId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/balance/{acId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{acId}', parameters['acId']);

            if (parameters['acId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: acId'));
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
         * 获取用户账单信息
         * @method
         * @name Ac#getAcAppBill
         */
        getAcAppBill(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/app/bill';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            if (parameters['count'] !== undefined) {
                queryParameters['count'] = parameters['count'];
            }

            if (parameters['lastTime'] !== undefined) {
                queryParameters['lastTime'] = parameters['lastTime'];
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
         * 获取账单信息
         * @method
         * @name Ac#getAcAdminBill
         */
        getAcAdminBill(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/bill';

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

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            if (parameters['type'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: type'));
                return Promise;
            }

            if (parameters['agentCode'] !== undefined) {
                queryParameters['agentCode'] = parameters['agentCode'];
            }

            if (parameters['supplierCode'] !== undefined) {
                queryParameters['supplierCode'] = parameters['supplierCode'];
            }

            if (parameters['usName'] !== undefined) {
                queryParameters['usName'] = parameters['usName'];
            }

            if (parameters['flowNo'] !== undefined) {
                queryParameters['flowNo'] = parameters['flowNo'];
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
         * 获取类型的统计信息
         * @method
         * @name Ac#getAcAdminStat
         */
        getAcAdminStat(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/stat';

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
         * 对账
         * @method
         * @name Ac#getAcAdminBillcheck
         */
        getAcAdminBillcheck(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/billcheck';

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
         * 结算经销商佣金
         * @method
         * @name Ac#postAcAdminAgentclear
         */
        postAcAdminAgentclear(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/agentclear';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['accountId'] !== undefined) {
                form['accountId'] = parameters['accountId'];
            }

            if (parameters['amount'] !== undefined) {
                form['amount'] = parameters['amount'];
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
         * 批量建卡
         * @method
         * @name Ac#postAcAdminPrecard
         */
        postAcAdminPrecard(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/precard';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['createNo'] !== undefined) {
                form['createNo'] = parameters['createNo'];
            }

            if (parameters['createNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: createNo'));
                return Promise;
            }

            if (parameters['money'] !== undefined) {
                form['money'] = parameters['money'];
            }

            if (parameters['money'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: money'));
                return Promise;
            }

            if (parameters['count'] !== undefined) {
                form['count'] = parameters['count'];
            }

            if (parameters['count'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: count'));
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
         * 获取充值卡分页数据
         * @method
         * @name Ac#getAcAdminPrecard
         */
        getAcAdminPrecard(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/precard';

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

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: status'));
                return Promise;
            }

            if (parameters['cardNo'] !== undefined) {
                queryParameters['cardNo'] = parameters['cardNo'];
            }

            if (parameters['createNo'] !== undefined) {
                queryParameters['createNo'] = parameters['createNo'];
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
         * 更新卡状态。 0： 初始，未制卡不可用  1：已制卡，已激活
         * @method
         * @name Ac#putAcAdminPrecard
         */
        putAcAdminPrecard(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/precard';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['cardNo'] !== undefined) {
                form['cardNo'] = parameters['cardNo'];
            }

            if (parameters['cardNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: cardNo'));
                return Promise;
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: status'));
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
         * 根据制卡批次号查询本批所有卡的卡号，用于复制到文件去制卡
         * @method
         * @name Ac#getAcAdminPrecardCardnos
         */
        getAcAdminPrecardCardnos(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/precard/cardnos';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['createNo'] !== undefined) {
                queryParameters['createNo'] = parameters['createNo'];
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
         * 获取批量制卡记录
         * @method
         * @name Ac#getAcAdminPrecardcraterecods
         */
        getAcAdminPrecardcraterecods(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/precardcraterecods';

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

            if (parameters['startTime'] !== undefined) {
                queryParameters['startTime'] = parameters['startTime'];
            }

            if (parameters['endTime'] !== undefined) {
                queryParameters['endTime'] = parameters['endTime'];
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
         * 根据制卡批次批量 更新卡状态。
         * @method
         * @name Ac#putAcAdminPrecardBatchupdate
         */
        putAcAdminPrecardBatchupdate(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/admin/precard/batchupdate';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['createNo'] !== undefined) {
                form['createNo'] = parameters['createNo'];
            }

            if (parameters['createNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: createNo'));
                return Promise;
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: status'));
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
         * 用户使用充值卡充值
         * @method
         * @name Ac#putAcAppPrecard
         */
        putAcAppPrecard(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/app/precard';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

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
         * 账户余额
         * @method
         * @name Ac#getAcAccountsByAcIdBalance
         */
        getAcAccountsByAcIdBalance(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/accounts/{acId}/balance';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{acId}', parameters['acId']);

            if (parameters['acId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: acId'));
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
         * 用户支付订单
         * @method
         * @name Ac#postAcAppOrderpay
         */
        postAcAppOrderpay(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/ac/app/orderpay';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['orderNo'] !== undefined) {
                form['orderNo'] = parameters['orderNo'];
            }

            if (parameters['orderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: orderNo'));
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