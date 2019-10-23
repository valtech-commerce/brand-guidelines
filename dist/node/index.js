"use strict";

exports.styleguide = void 0;

var _pkgDir = _interopRequireDefault(require("pkg-dir"));

var _fss = _interopRequireDefault(require("@absolunet/fss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Styleguide
//--------------------------------------------------------
const styleguide = _fss.default.readJson(`${_pkgDir.default.sync(__dirname)}/dist/styleguide.json`);

exports.styleguide = styleguide;