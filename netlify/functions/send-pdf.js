"use strict";
var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));
var _jspdf = require("jspdf");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _busboy = _interopRequireDefault(require("busboy"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var transporter = _nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "jacob@hyperionweb.dev",
        pass: process.env.MAIL_PASS
    }
});
exports.handler = function() {
    var _ref = _asyncToGenerator(_regeneratorRuntime.default.mark(function _callee(event) {
        var fields, pdf, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ref, report, info;
        return _regeneratorRuntime.default.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("starting function...");
                    _ctx.next = 3;
                    return parseMultipartForm(event);
                case 3:
                    fields = _ctx.sent;
                    console.log(fields);
                    console.log("Sending PDF report");
                    pdf = new _jspdf.jsPDF();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 8;
                    for(_iterator = Object.entries(fields)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        ;
                        ref = _slicedToArray(_step.value, 2), key = ref[0], field = ref[1], ref;
                        pdf.text(field, 10, 10);
                    }
                    _ctx.next = 16;
                    break;
                case 12:
                    _ctx.prev = 12;
                    _ctx.t0 = _ctx["catch"](8);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 16:
                    _ctx.prev = 16;
                    _ctx.prev = 17;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 19:
                    _ctx.prev = 19;
                    if (!_didIteratorError) {
                        _ctx.next = 22;
                        break;
                    }
                    throw _iteratorError;
                case 22:
                    return _ctx.finish(19);
                case 23:
                    return _ctx.finish(16);
                case 24:
                    report = Buffer.from(pdf.output("arraybuffer"));
                    _ctx.next = 27;
                    return transporter.sendMail({
                        from: process.env.MAILGUN_SENDER,
                        to: "info@ionia.apartments",
                        subject: "Your report is ready!",
                        text: "See attached report PDF",
                        attachments: [
                            {
                                filename: "report-".concat(new Date().toDateString(), ".pdf"),
                                content: report,
                                contentType: "application/pdf"
                            }, 
                        ]
                    });
                case 27:
                    info = _ctx.sent;
                    console.log("PDF report sent: ".concat(info.messageId));
                case 29:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                8,
                12,
                16,
                24
            ],
            [
                17,
                ,
                19,
                23
            ]
        ]);
    }));
    return function(event) {
        return _ref.apply(this, arguments);
    };
}();
function parseMultipartForm(event) {
    return new Promise(function(resolve) {
        var fields = {};
        var busboy = (0, _busboy).default({
            headers: event.headers
        });
        // busboy.on('file', (fieldname, filestream, filename, _, mimeType) => {
        //   filestream.on('data', (data) => {
        //     fields[fieldname] = {
        //       content: data,
        //       filename,
        //       type: mimeType,
        //     };
        //   });
        // });
        busboy.on("field", function(fieldName, value) {
            fields[fieldName] = value;
        });
        busboy.on("finish", function() {
            resolve(fields);
        });
        // This was the bastard!
        busboy.write(Buffer.from(event.body, "base64"));
    });
}

"use strict";
var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));
var _jspdf = require("jspdf");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _busboy = _interopRequireDefault(require("busboy"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var transporter = _nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "jacob@hyperionweb.dev",
        pass: process.env.MAIL_PASS
    }
});
exports.handler = function() {
    var _ref = _asyncToGenerator(_regeneratorRuntime.default.mark(function _callee(event) {
        var fields, pdf, placement, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, key, field, report, info;
        return _regeneratorRuntime.default.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("starting function...");
                    _ctx.next = 3;
                    return parseMultipartForm(event);
                case 3:
                    fields = _ctx.sent;
                    console.log(fields);
                    console.log("Sending PDF report");
                    pdf = new _jspdf.jsPDF();
                    placement = 10;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 9;
                    for(_iterator = Object.entries(fields)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        _value = _slicedToArray(_step.value, 2), key = _value[0], field = _value[1];
                        pdf.text(key, 10, placement);
                        placement += 10;
                        pdf.text(field, 10, placement);
                        placement += 10;
                    }
                    _ctx.next = 17;
                    break;
                case 13:
                    _ctx.prev = 13;
                    _ctx.t0 = _ctx["catch"](9);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 17:
                    _ctx.prev = 17;
                    _ctx.prev = 18;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 20:
                    _ctx.prev = 20;
                    if (!_didIteratorError) {
                        _ctx.next = 23;
                        break;
                    }
                    throw _iteratorError;
                case 23:
                    return _ctx.finish(20);
                case 24:
                    return _ctx.finish(17);
                case 25:
                    report = Buffer.from(pdf.output("arraybuffer"));
                    _ctx.next = 28;
                    return transporter.sendMail({
                        from: process.env.MAILGUN_SENDER,
                        to: "info@ionia.apartments",
                        subject: "Your report is ready!",
                        text: "See attached report PDF",
                        attachments: [
                            {
                                filename: "report-".concat(new Date().toDateString(), ".pdf"),
                                content: report,
                                contentType: "application/pdf"
                            }, 
                        ]
                    });
                case 28:
                    info = _ctx.sent;
                    console.log("PDF report sent: ".concat(info.messageId));
                case 30:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                9,
                13,
                17,
                25
            ],
            [
                18,
                ,
                20,
                24
            ]
        ]);
    }));
    return function(event) {
        return _ref.apply(this, arguments);
    };
}();
function parseMultipartForm(event) {
    return new Promise(function(resolve) {
        var fields = {};
        var busboy = (0, _busboy).default({
            headers: event.headers
        });
        // busboy.on('file', (fieldname, filestream, filename, _, mimeType) => {
        //   filestream.on('data', (data) => {
        //     fields[fieldname] = {
        //       content: data,
        //       filename,
        //       type: mimeType,
        //     };
        //   });
        // });
        busboy.on("field", function(fieldName, value) {
            fields[fieldName] = value;
        });
        busboy.on("finish", function() {
            resolve(fields);
        });
        // This was the bastard!
        busboy.write(Buffer.from(event.body, "base64"));
    });
}


//# sourceMappingURL=send-pdf.js.map