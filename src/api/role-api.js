/*jshint -W069 */
/*global angular:false */

import Vue from 'vue';
export default {
    /**
* 根据权限组（菜单组）id获取权限集合，返回结果英文逗号分割。

* @method
* @name Role#getMenuByGroup
*/
    getMenuByGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/groupmenus/{groupId}';

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
* 设置权限组（菜单组）的权限。

* @method
* @name Role#buildGroupMenu
*/
        buildGroupMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/groupmenus';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['groupId'] !== undefined) {
                form['groupId'] = parameters['groupId'];
            }

            if (parameters['groupId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: groupId'));
                return Promise;
            }

            if (parameters['menus'] !== undefined) {
                form['menus'] = parameters['menus'];
            }

            if (parameters['menus'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: menus'));
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
* 根据权限组（菜单组）id获取组信息。

* @method
* @name Role#getMenuGroup
*/
        getMenuGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menugroups/{autoId}';

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
* 修改权限组（菜单组）信息。

* @method
* @name Role#updateMenuGroup
*/
        updateMenuGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menugroups/{autoId}';

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

            if (parameters['groupName'] !== undefined) {
                form['groupName'] = parameters['groupName'];
            }

            if (parameters['groupName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: groupName'));
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
* 删除权限组（菜单组）信息。

* @method
* @name Role#deleteMenuGroup
*/
        deleteMenuGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menugroups/{autoId}';

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
* 新增权限组（菜单组）的权限。

* @method
* @name Role#addMenuGroup
*/
        addMenuGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menugroups';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['groupName'] !== undefined) {
                form['groupName'] = parameters['groupName'];
            }

            if (parameters['groupName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: groupName'));
                return Promise;
            }

            if (parameters['code'] !== undefined) {
                form['code'] = parameters['code'];
            }

            if (parameters['code'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: code'));
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
* 根据权限组或菜单组的code获取组信息集合。

* @method
* @name Role#getMenuGroupList
*/
        getMenuGroupList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menugroups';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['code'] !== undefined) {
                queryParameters['code'] = parameters['code'];
            }

            if (parameters['code'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: code'));
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
* 新增菜单。

* @method
* @name Role#addMenu
*/
        addMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus';

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

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: name'));
                return Promise;
            }

            if (parameters['descpt'] !== undefined) {
                form['descpt'] = parameters['descpt'];
            }

            if (parameters['path'] !== undefined) {
                form['path'] = parameters['path'];
            }

            if (parameters['icon'] !== undefined) {
                form['icon'] = parameters['icon'];
            }

            if (parameters['order'] !== undefined) {
                form['order'] = parameters['order'];
            }

            if (parameters['order'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: order'));
                return Promise;
            }

            if (parameters['enable'] !== undefined) {
                form['enable'] = parameters['enable'];
            }

            if (parameters['enable'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: enable'));
                return Promise;
            }

            if (parameters['parentId'] !== undefined) {
                form['parentId'] = parameters['parentId'];
            }

            if (parameters['parentId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: parentId'));
                return Promise;
            }

            if (parameters['roleKey'] !== undefined) {
                form['roleKey'] = parameters['roleKey'];
            }

            if (parameters['assign'] !== undefined) {
                form['assign'] = parameters['assign'];
            }

            if (parameters['assign'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: assign'));
                return Promise;
            }

            if (parameters['isShow'] !== undefined) {
                form['isShow'] = parameters['isShow'];
            }

            if (parameters['isShow'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: isShow'));
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
* 根据权限组或菜单组的id获取子菜单集合。

* @method
* @name Role#getMenuList
*/
        getMenuList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['parentId'] !== undefined) {
                queryParameters['parentId'] = parameters['parentId'];
            }

            if (parameters['parentId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: parentId'));
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
* 根id获取菜单信息。

* @method
* @name Role#getMenu
*/
        getMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus/{autoId}';

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
* 修改菜单信息。

* @method
* @name Role#updateMenu
*/
        updateMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus/{autoId}';

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

            if (parameters['type'] !== undefined) {
                form['type'] = parameters['type'];
            }

            if (parameters['type'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: type'));
                return Promise;
            }

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['name'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: name'));
                return Promise;
            }

            if (parameters['descpt'] !== undefined) {
                form['descpt'] = parameters['descpt'];
            }

            if (parameters['path'] !== undefined) {
                form['path'] = parameters['path'];
            }

            if (parameters['icon'] !== undefined) {
                form['icon'] = parameters['icon'];
            }

            if (parameters['order'] !== undefined) {
                form['order'] = parameters['order'];
            }

            if (parameters['order'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: order'));
                return Promise;
            }

            if (parameters['enable'] !== undefined) {
                form['enable'] = parameters['enable'];
            }

            if (parameters['enable'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: enable'));
                return Promise;
            }

            if (parameters['parentId'] !== undefined) {
                form['parentId'] = parameters['parentId'];
            }

            if (parameters['parentId'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: parentId'));
                return Promise;
            }

            if (parameters['roleKey'] !== undefined) {
                form['roleKey'] = parameters['roleKey'];
            }

            if (parameters['assign'] !== undefined) {
                form['assign'] = parameters['assign'];
            }

            if (parameters['assign'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: assign'));
                return Promise;
            }

            if (parameters['isShow'] !== undefined) {
                form['isShow'] = parameters['isShow'];
            }

            if (parameters['isShow'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: isShow'));
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
* 删除菜单信息。

* @method
* @name Role#deleteMenu
*/
        deleteMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus/{autoId}';

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
* 获取当前用户的菜单信息。

* @method
* @name Role#getUserMenu
*/
        getUserMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus/usermenus';

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
* 获取全部菜单信息树状结构。

* @method
* @name Role#getAllMenu
*/
        getAllMenu(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/menus/tree';

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
* 新增客户端key和服务端key的关系。

* @method
* @name Role#addRoleRelation
*/
        addRoleRelation(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/rolerelations';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['clientSys'] !== undefined) {
                form['clientSys'] = parameters['clientSys'];
            }

            if (parameters['clientSys'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientSys'));
                return Promise;
            }

            if (parameters['clientOperKey'] !== undefined) {
                form['clientOperKey'] = parameters['clientOperKey'];
            }

            if (parameters['clientOperKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientOperKey'));
                return Promise;
            }

            if (parameters['clientOperName'] !== undefined) {
                form['clientOperName'] = parameters['clientOperName'];
            }

            if (parameters['serverRoleKey'] !== undefined) {
                form['serverRoleKey'] = parameters['serverRoleKey'];
            }

            if (parameters['serverRoleKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: serverRoleKey'));
                return Promise;
            }

            if (parameters['serverRoleName'] !== undefined) {
                form['serverRoleName'] = parameters['serverRoleName'];
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
* 根据条件查询客户端key和服务段key的对应关系。

* @method
* @name Role#getRoleRelationList
*/
        getRoleRelationList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/rolerelations';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['clientSys'] !== undefined) {
                queryParameters['clientSys'] = parameters['clientSys'];
            }

            if (parameters['clientSys'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientSys'));
                return Promise;
            }

            if (parameters['clientOperKey'] !== undefined) {
                queryParameters['clientOperKey'] = parameters['clientOperKey'];
            }

            if (parameters['clientOperKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientOperKey'));
                return Promise;
            }

            if (parameters['clientOperName'] !== undefined) {
                queryParameters['clientOperName'] = parameters['clientOperName'];
            }

            if (parameters['serverRoleKey'] !== undefined) {
                queryParameters['serverRoleKey'] = parameters['serverRoleKey'];
            }

            if (parameters['serverRoleKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: serverRoleKey'));
                return Promise;
            }

            if (parameters['serverRoleName'] !== undefined) {
                queryParameters['serverRoleName'] = parameters['serverRoleName'];
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
* 根id获取菜单信息。

* @method
* @name Role#getRoleRelation
*/
        getRoleRelation(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/rolerelations/{autoId}';

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
* 修改客户端和服务端key关系信息。

* @method
* @name Role#updateRoleRelation
*/
        updateRoleRelation(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/rolerelations/{autoId}';

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

            if (parameters['clientSys'] !== undefined) {
                queryParameters['clientSys'] = parameters['clientSys'];
            }

            if (parameters['clientSys'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientSys'));
                return Promise;
            }

            if (parameters['clientOperKey'] !== undefined) {
                queryParameters['clientOperKey'] = parameters['clientOperKey'];
            }

            if (parameters['clientOperKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientOperKey'));
                return Promise;
            }

            if (parameters['clientOperName'] !== undefined) {
                queryParameters['clientOperName'] = parameters['clientOperName'];
            }

            if (parameters['serverRoleKey'] !== undefined) {
                queryParameters['serverRoleKey'] = parameters['serverRoleKey'];
            }

            if (parameters['serverRoleKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: serverRoleKey'));
                return Promise;
            }

            if (parameters['serverRoleName'] !== undefined) {
                queryParameters['serverRoleName'] = parameters['serverRoleName'];
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
* 删除客户端和服务端key关系信息。

* @method
* @name Role#deleteRoleRelation
*/
        deleteRoleRelation(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/rolerelations/{autoId}';

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
* 根clientOperKey获取菜单信息。

* @method
* @name Role#getRoleRelationByClientKey
*/
        getRoleRelationByClientKey(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/rolerelations/getbykey/{clientOperKey}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{clientOperKey}', parameters['clientOperKey']);

            if (parameters['clientOperKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: clientOperKey'));
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
* 新增权限。

* @method
* @name Role#createRole
*/
        createRole(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['roleName'] !== undefined) {
                form['roleName'] = parameters['roleName'];
            }

            if (parameters['roleName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: roleName'));
                return Promise;
            }

            if (parameters['descpt'] !== undefined) {
                form['descpt'] = parameters['descpt'];
            }

            if (parameters['descpt'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: descpt'));
                return Promise;
            }

            if (parameters['keyCode'] !== undefined) {
                form['keyCode'] = parameters['keyCode'];
            }

            if (parameters['keyCode'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: keyCode'));
                return Promise;
            }

            if (parameters['parentId'] !== undefined) {
                form['parentId'] = parameters['parentId'];
            }

            if (parameters['category'] !== undefined) {
                form['category'] = parameters['category'];
            }

            if (parameters['category'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: category'));
                return Promise;
            }

            if (parameters['enable'] !== undefined) {
                form['enable'] = parameters['enable'];
            }

            if (parameters['enable'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: enable'));
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
* 根据条件查询权限集合。

* @method
* @name Role#getRoleList
*/
        getRoleList(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['roleName'] !== undefined) {
                queryParameters['roleName'] = parameters['roleName'];
            }

            if (parameters['roleName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: roleName'));
                return Promise;
            }

            if (parameters['descpt'] !== undefined) {
                queryParameters['descpt'] = parameters['descpt'];
            }

            if (parameters['descpt'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: descpt'));
                return Promise;
            }

            if (parameters['roleKey'] !== undefined) {
                queryParameters['roleKey'] = parameters['roleKey'];
            }

            if (parameters['roleKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: roleKey'));
                return Promise;
            }

            if (parameters['category'] !== undefined) {
                queryParameters['category'] = parameters['category'];
            }

            if (parameters['category'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: category'));
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
* 根id获取权限信息。

* @method
* @name Role#getRole
*/
        getRole(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles/{autoId}';

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
* 权限信息。

* @method
* @name Role#updateRole
*/
        updateRole(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles/{autoId}';

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

            if (parameters['roleName'] !== undefined) {
                form['roleName'] = parameters['roleName'];
            }

            if (parameters['roleName'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: roleName'));
                return Promise;
            }

            if (parameters['descpt'] !== undefined) {
                form['descpt'] = parameters['descpt'];
            }

            if (parameters['descpt'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: descpt'));
                return Promise;
            }

            if (parameters['roleKey'] !== undefined) {
                form['roleKey'] = parameters['roleKey'];
            }

            if (parameters['roleKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: roleKey'));
                return Promise;
            }

            if (parameters['parentId'] !== undefined) {
                form['parentId'] = parameters['parentId'];
            }

            if (parameters['category'] !== undefined) {
                form['category'] = parameters['category'];
            }

            if (parameters['category'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: category'));
                return Promise;
            }

            if (parameters['enable'] !== undefined) {
                form['enable'] = parameters['enable'];
            }

            if (parameters['enable'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: enable'));
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
* 删除权限信息。

* @method
* @name Role#deleteRole
*/
        deleteRole(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles/{autoId}';

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
* 获取权限树。

* @method
* @name Role#getRoleTree
*/
        getRoleTree(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles/roleTree';

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
* 权限信息是否存在。

* @method
* @name Role#isHasTheRole
*/
        isHasTheRole(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/roles/isroleok/{roleKey}';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            path = path.replace('{roleKey}', parameters['roleKey']);

            if (parameters['roleKey'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: roleKey'));
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
* 新增用户和组关系。

* @method
* @name Role#buildUserMenuGroup
*/
        buildUserMenuGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/usermenugroups';

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

            if (parameters['groups'] !== undefined) {
                form['groups'] = parameters['groups'];
            }

            if (parameters['groups'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: groups'));
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
* 根据username查询权限组集合。

* @method
* @name Role#getMenuGroupListByUsername
*/
        getMenuGroupListByUsername(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/usermenugroups';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['username'] !== undefined) {
                queryParameters['username'] = parameters['username'];
            }

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
* 给权限组添加用户。

* @method
* @name Role#buildUserMenuGroupByUser
*/
        buildUserMenuGroupByUser(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/usermenugroups/adduser';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            headers['Content-Type'] = ['application/x-www-form-urlencoded'];

            if (parameters['usernames'] !== undefined) {
                form['usernames'] = parameters['usernames'];
            }

            if (parameters['usernames'] === undefined) {
                Promise.reject(new Error('Missing required  parameter: usernames'));
                return Promise;
            }

            if (parameters['groupId'] !== undefined) {
                form['groupId'] = parameters['groupId'];
            }

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
* 给权限组添加用户。

* @method
* @name Role#getUserListByGroup
*/
        getUserListByGroup(parameters) {
            'use strict';
            if (parameters === undefined) {
                parameters = {};
            }

            var domain = 'https://' + window.shop.domain + '/api';
            var path = '/role/usermenugroups/getuserbygroup';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            if (parameters['groupId'] !== undefined) {
                queryParameters['groupId'] = parameters['groupId'];
            }

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
}