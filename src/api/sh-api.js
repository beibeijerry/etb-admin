/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {
    /**
     * 获取版本信息
     * @method
     * @name Sh#getShVersion
     */
    getShVersion(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/version';

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
         * 获取客服信息
         * @method
         * @name Sh#getShQq
         */
        getShQq(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/qq';

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
         * 获取首页推荐啊位置商品简单信息。
         * @method
         * @name Sh#getShHomesetting
         */
        getShHomesetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/homesetting';

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
         * 更新首页推荐位商品
         * @method
         * @name Sh#putShHomesetting
         */
        putShHomesetting(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/homesetting';

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
         * 添加商品进入首页轮播图/取消商品首页轮播图
         * @method
         * @name Sh#postShHomesettingToggle
         */
        postShHomesettingToggle(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/homesetting/toggle';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['goodsId'] !== undefined) {
                form['goodsId'] = parameters['goodsId'];
            }

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
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
         * app获取商品分类列表
         * @method
         * @name Sh#getShAppGoodsCategorys
         */
        getShAppGoodsCategorys(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/goods/categorys';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['sort'] !== undefined) {
                queryParameters['sort'] = parameters['sort'];
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
         * 后台获取商品分类列表
         * @method
         * @name Sh#getShAdminGoodsCategorys
         */
        getShAdminGoodsCategorys(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/categorys';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

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
         * 添加分类
         * @method
         * @name Sh#postShAdminGoodsCategorys
         */
        postShAdminGoodsCategorys(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/categorys';

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
         * 获取单个分类信息
         * @method
         * @name Sh#getShAdminGoodsCategorysByAuId
         */
        getShAdminGoodsCategorysByAuId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/categorys/{auId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{auId}', parameters['auId']);

            if (parameters['auId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: auId'));
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
         * 更新分类信息
         * @method
         * @name Sh#putShAdminGoodsCategorysByAuId
         */
        putShAdminGoodsCategorysByAuId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/categorys/{auId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{auId}', parameters['auId']);

            if (parameters['auId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: auId'));
                return Promise;
            }

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
         * 删除分类
         * @method
         * @name Sh#deleteShAdminGoodsCategorysByAuId
         */
        deleteShAdminGoodsCategorysByAuId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/categorys/{auId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{auId}', parameters['auId']);

            if (parameters['auId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: auId'));
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
         * 获取商品列表
         * @method
         * @name Sh#getShAppGoods
         */
        getShAppGoods(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/goods';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['categoryId'] !== undefined) {
                queryParameters['categoryId'] = parameters['categoryId'];
            }

            if (parameters['categoryId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: categoryId'));
                return Promise;
            }

            if (parameters['lastTopTime'] !== undefined) {
                queryParameters['lastTopTime'] = parameters['lastTopTime'];
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
         * 获取商品详情
         * @method
         * @name Sh#getShGoodsByGoodsId
         */
        getShGoodsByGoodsId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/goods/{goodsId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{goodsId}', parameters['goodsId']);

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
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
         * 后台获取商品列表
         * @method
         * @name Sh#getShAdminGoods
         */
        getShAdminGoods(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

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

            if (parameters['categoryId'] !== undefined) {
                queryParameters['categoryId'] = parameters['categoryId'];
            }

            if (parameters['title'] !== undefined) {
                queryParameters['title'] = parameters['title'];
            }

            if (parameters['supplierId'] !== undefined) {
                queryParameters['supplierID'] = parameters['supplierId'];
            }

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
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
         * 新增商品
         * @method
         * @name Sh#postShAdminGoods
         */
        postShAdminGoods(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods';

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
         * 删除商品
         * @method
         * @name Sh#deleteShAdminGoodsByGoodsId
         */
        deleteShAdminGoodsByGoodsId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/{goodsId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{goodsId}', parameters['goodsId']);

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
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
         * 修改商品
         * @method
         * @name Sh#putShAdminGoodsByGoodsId
         */
        putShAdminGoodsByGoodsId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/{goodsId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{goodsId}', parameters['goodsId']);

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
                return Promise;
            }

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
         * 置顶商品
         * @method
         * @name Sh#putShAdminGoodsByGoodsIdTop
         */
        putShAdminGoodsByGoodsIdTop(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/{goodsId}/top';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{goodsId}', parameters['goodsId']);

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
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
         * 上下架接口
         * @method
         * @name Sh#putShAdminGoodsByGoodsIdSales
         */
        putShAdminGoodsByGoodsIdSales(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/{goodsId}/sales';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{goodsId}', parameters['goodsId']);

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
                return Promise;
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: status'));
                return Promise;
            }

            if (parameters['remarks'] !== undefined) {
                form['remarks'] = parameters['remarks'];
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
         * 新增商品库存（弃用）
         * @method
         * @name Sh#postShAdminGoodsReqs
         */
        postShAdminGoodsReqs(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/reqs';

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
         * 删除商品库存（弃用）
         * @method
         * @name Sh#deleteShAdminGoodsReqsByReqId
         */
        deleteShAdminGoodsReqsByReqId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/reqs/{reqId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{reqId}', parameters['reqId']);

            if (parameters['reqId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: reqId'));
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
         * 新增商品库存（弃用）
         * @method
         * @name Sh#putShAdminGoodsReqsByReqId
         */
        putShAdminGoodsReqsByReqId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/goods/reqs/{reqId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{reqId}', parameters['reqId']);

            if (parameters['reqId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: reqId'));
                return Promise;
            }

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
         * 获取评论
         * @method
         * @name Sh#getShAppComments
         */
        getShAppComments(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/comments';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['goodsId'] !== undefined) {
                queryParameters['goodsId'] = parameters['goodsId'];
            }

            if (parameters['goodsId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: goodsId'));
                return Promise;
            }

            if (parameters['lastComentTime'] !== undefined) {
                queryParameters['lastComentTime'] = parameters['lastComentTime'];
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
         * 发表评论
         * @method
         * @name Sh#postShAppComments
         */
        postShAppComments(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/comments';

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
         * 后台获取商品评论列表
         * @method
         * @name Sh#getShAdminComments
         */
        getShAdminComments(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/comments';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['goodsId'] !== undefined) {
                queryParameters['goodsId'] = parameters['goodsId'];
            }

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
         * 屏蔽商品评论
         * @method
         * @name Sh#deleteShAdminCommentsByCommentId
         */
        deleteShAdminCommentsByCommentId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/comments/{commentId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{commentId}', parameters['commentId']);

            if (parameters['commentId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: commentId'));
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
         * 获取用户地址
         * @method
         * @name Sh#getShAppShippingaddress
         */
        getShAppShippingaddress(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/shippingaddress';

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
         * 新增收货地址
         * @method
         * @name Sh#postShAppShippingaddress
         */
        postShAppShippingaddress(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/shippingaddress';

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
         * 删除用户地址
         * @method
         * @name Sh#deleteShAppShippingaddressByAddressId
         */
        deleteShAppShippingaddressByAddressId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/shippingaddress/{addressId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{addressId}', parameters['addressId']);

            if (parameters['addressId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: addressId'));
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
         * 修改收货地址
         * @method
         * @name Sh#putShAppShippingaddressByAddressId
         */
        putShAppShippingaddressByAddressId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/shippingaddress/{addressId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{addressId}', parameters['addressId']);

            if (parameters['addressId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: addressId'));
                return Promise;
            }

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
         * 获取单个收货地址信息
         * @method
         * @name Sh#getShAppShippingaddressByAddressId
         */
        getShAppShippingaddressByAddressId(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/shippingaddress/{addressId}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{addressId}', parameters['addressId']);

            if (parameters['addressId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: addressId'));
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
         * 获取我的订单
         * @method
         * @name Sh#getShAppOrders
         */
        getShAppOrders(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/orders';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
            }

            if (parameters['count'] !== undefined) {
                queryParameters['count'] = parameters['count'];
            }

            if (parameters['lastCreateTime'] !== undefined) {
                queryParameters['lastCreateTime'] = parameters['lastCreateTime'];
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
         * 创建订单
         * @method
         * @name Sh#postShAppOrders
         */
        postShAppOrders(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/orders';

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
         * 获取订单详情
         * @method
         * @name Sh#getShAppOrdersByOrderNo
         */
        getShAppOrdersByOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/orders/{orderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{orderNo}', parameters['orderNo']);

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
         * 确认收货/取消订单
         * @method
         * @name Sh#putShAppOrdersByOrderNo
         */
        putShAppOrdersByOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/orders/{orderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{orderNo}', parameters['orderNo']);

            if (parameters['orderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: orderNo'));
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
         * 后台获取商品订单列表
         * @method
         * @name Sh#getShAdminOrders
         */
        getShAdminOrders(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/orders';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['goodsId'] !== undefined) {
                queryParameters['goodsId'] = parameters['goodsId'];
            }

            if (parameters['usName'] !== undefined) {
                queryParameters['usName'] = parameters['usName'];
            }

            if (parameters['startTime'] !== undefined) {
                queryParameters['startTime'] = parameters['startTime'];
            }

            if (parameters['endTime'] !== undefined) {
                queryParameters['endTime'] = parameters['endTime'];
            }

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
            }

            if (parameters['title'] !== undefined) {
                queryParameters['title'] = parameters['title'];
            }

            if (parameters['orderNo'] !== undefined) {
                queryParameters['orderNo'] = parameters['orderNo'];
            }

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

            if (parameters['supplierId'] !== undefined) {
                queryParameters['supplierID'] = parameters['supplierId'];
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
         * 获取订单详情
         * @method
         * @name Sh#getShAdminOrdersByOrderNo
         */
        getShAdminOrdersByOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/orders/{orderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{orderNo}', parameters['orderNo']);

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
         * 发货
         * @method
         * @name Sh#putShAdminOrdersByOrderNo
         */
        putShAdminOrdersByOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/orders/{orderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{orderNo}', parameters['orderNo']);

            if (parameters['orderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: orderNo'));
                return Promise;
            }

            if (parameters['logisticsName'] !== undefined) {
                form['logisticsName'] = parameters['logisticsName'];
            }

            if (parameters['logisticsNo'] !== undefined) {
                form['logisticsNo'] = parameters['logisticsNo'];
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
         * 后台获取退货管理列表
         * @method
         * @name Sh#getShAdminRefundOrders
         */
        getShAdminRefundOrders(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/refund/orders';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['goodsId'] !== undefined) {
                queryParameters['goodsId'] = parameters['goodsId'];
            }

            if (parameters['usName'] !== undefined) {
                queryParameters['usName'] = parameters['usName'];
            }

            if (parameters['startTime'] !== undefined) {
                queryParameters['startTime'] = parameters['startTime'];
            }

            if (parameters['endTime'] !== undefined) {
                queryParameters['endTime'] = parameters['endTime'];
            }

            if (parameters['refundStatus'] !== undefined) {
                queryParameters['refundStatus'] = parameters['refundStatus'];
            }

            if (parameters['title'] !== undefined) {
                queryParameters['title'] = parameters['title'];
            }

            if (parameters['oldOrderNo'] !== undefined) {
                queryParameters['oldOrderNo'] = parameters['oldOrderNo'];
            }

            if (parameters['refundOrderNo'] !== undefined) {
                queryParameters['refundOrderNo'] = parameters['refundOrderNo'];
            }

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

            if (parameters['supplierId'] !== undefined) {
                queryParameters['supplierID'] = parameters['supplierId'];
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
         * 获取订单详情
         * @method
         * @name Sh#getShAdminRefundOrdersByRefundOrderNo
         */
        getShAdminRefundOrdersByRefundOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/refund/orders/{refundOrderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{refundOrderNo}', parameters['refundOrderNo']);

            if (parameters['refundOrderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: refundOrderNo'));
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
         * 通过或驳回退款申请  确认退款
         * @method
         * @name Sh#putShAdminRefundOrdersByRefundOrderNo
         */
        putShAdminRefundOrdersByRefundOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/admin/refund/orders/{refundOrderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{refundOrderNo}', parameters['refundOrderNo']);

            if (parameters['refundOrderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: refundOrderNo'));
                return Promise;
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: status'));
                return Promise;
            }

            if (parameters['refundRefuseReason'] !== undefined) {
                form['refundRefuseReason'] = parameters['refundRefuseReason'];
            }

            if (parameters['refundAmt'] !== undefined) {
                form['refundAmt'] = parameters['refundAmt'];
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
         * 获取我的退货订单
         * @method
         * @name Sh#getShAppRefundOrders
         */
        getShAppRefundOrders(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/refund/orders';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            if (parameters['refundStatus'] !== undefined) {
                queryParameters['refundStatus'] = parameters['refundStatus'];
            }

            if (parameters['count'] !== undefined) {
                queryParameters['count'] = parameters['count'];
            }

            if (parameters['lastCreateTime'] !== undefined) {
                queryParameters['lastCreateTime'] = parameters['lastCreateTime'];
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
         * 申请退货
         * @method
         * @name Sh#postShAppRefundOrders
         */
        postShAppRefundOrders(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/refund/orders';

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
         * 获取订单详情
         * @method
         * @name Sh#getShAppRefundOrdersByRefundOrderNo
         */
        getShAppRefundOrdersByRefundOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/refund/orders/{refundOrderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{refundOrderNo}', parameters['refundOrderNo']);

            if (parameters['refundOrderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: refundOrderNo'));
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
         * 买家发 退货
         * @method
         * @name Sh#putShAppRefundOrdersByRefundOrderNo
         */
        putShAppRefundOrdersByRefundOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/refund/orders/{refundOrderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            path = path.replace('{refundOrderNo}', parameters['refundOrderNo']);

            if (parameters['refundOrderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: refundOrderNo'));
                return Promise;
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: status'));
                return Promise;
            }

            if (parameters['logisticsName'] !== undefined) {
                form['logisticsName'] = parameters['logisticsName'];
            }

            if (parameters['logisticsName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: logisticsName'));
                return Promise;
            }

            if (parameters['logisticsNo'] !== undefined) {
                form['logisticsNo'] = parameters['logisticsNo'];
            }

            if (parameters['logisticsNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: logisticsNo'));
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
         * 重新 申请退货
         * @method
         * @name Sh#postShAppRefundOrdersByRefundOrderNo
         */
        postShAppRefundOrdersByRefundOrderNo(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/sh/app/refund/orders/{refundOrderNo}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/json'];

            path = path.replace('{refundOrderNo}', parameters['refundOrderNo']);

            if (parameters['refundOrderNo'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: refundOrderNo'));
                return Promise;
            }

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
}