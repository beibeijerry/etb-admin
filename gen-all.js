#! /usr/bin/env node
var gen = require('./api-gen');
gen.gen('http://api.json/mrshop/rp.json','./src/api/rp-api.js','Rp');
gen.gen('http://api.json/mrshop/ag.json','./src/api/ag-api.js','Ag');
gen.gen('http://api.json/mrshop/sh.json','./src/api/sh-api.js','Sh');
gen.gen('http://api.json/mrshop/us.json','./src/api/us-api.js','Us');
gen.gen('http://api.json/mrshop/ac.json','./src/api/ac-api.js','Ac');
gen.gen('http://api.json/mrshop/sys.json','./src/api/sys-api.js','Sys');
gen.gen('http://api.json/mrshop/role.json','./src/api/role-api.js','Role')
gen.gen('http://api.json/mrshop/su.json','./src/api/su-api.js','Su')
