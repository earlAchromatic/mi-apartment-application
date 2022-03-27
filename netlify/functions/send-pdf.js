"use strict";
var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));
var _jspdf = require("jspdf");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _busboy = _interopRequireDefault(require("busboy"));
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
        var fields, info;
        return _regeneratorRuntime.default.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return parseMultipartForm(event);
                case 2:
                    fields = _ctx.sent;
                    _ctx.next = 5;
                    return transporter.sendMail({
                        from: "info@ionia.apartments",
                        to: "info@ionia.apartments",
                        subject: "Application for ".concat(fields.firstname, " ").concat(fields.lastname, " | ").concat(fields.selectedUnit, " | ").concat(fields.datestamp),
                        text: "See attached report PDF",
                        attachments: [
                            {
                                filename: "".concat(fields.selectedUnit, "-application-").concat(fields.lastname, "-").concat(new Date().toDateString(), ".pdf"),
                                content: Buffer.from(fields.pdfRender.content),
                                contentType: "application/pdf"
                            }, 
                        ]
                    });
                case 5:
                    info = _ctx.sent;
                    console.log("PDF report sent: ".concat(info.messageId));
                    return _ctx.abrupt("return", {
                        statusCode: 200,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        },
                        body: "PDF report sent: ".concat(info.messageId)
                    });
                case 8:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
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
        busboy.on("file", function(fieldname, filestream, filename, _, mimeType) {
            filestream.on("data", function(data) {
                fields[fieldname] = {
                    content: data,
                    filename: filename,
                    type: mimeType
                };
            });
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9ucy1zcmMvc2VuZC1wZGYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNQREYgfSBmcm9tICdqc3BkZic7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCBCdXNib3kgZnJvbSAnYnVzYm95JztcblxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLCAvLyB1c2UgVExTXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAnamFjb2JAaHlwZXJpb253ZWIuZGV2JyxcbiAgICBwYXNzOiBwcm9jZXNzLmVudi5NQUlMX1BBU1MsXG4gIH0sXG59KTtcblxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGZpZWxkcyA9IGF3YWl0IHBhcnNlTXVsdGlwYXJ0Rm9ybShldmVudCk7XG5cbiAgY29uc3QgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICBmcm9tOiAnaW5mb0Bpb25pYS5hcGFydG1lbnRzJyxcbiAgICB0bzogJ2luZm9AaW9uaWEuYXBhcnRtZW50cycsXG4gICAgc3ViamVjdDogYEFwcGxpY2F0aW9uIGZvciAke2ZpZWxkcy5maXJzdG5hbWV9ICR7ZmllbGRzLmxhc3RuYW1lfSB8ICR7ZmllbGRzLnNlbGVjdGVkVW5pdH0gfCAke2ZpZWxkcy5kYXRlc3RhbXB9YCxcbiAgICB0ZXh0OiAnU2VlIGF0dGFjaGVkIHJlcG9ydCBQREYnLFxuICAgIGF0dGFjaG1lbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbGVuYW1lOiBgJHtmaWVsZHMuc2VsZWN0ZWRVbml0fS1hcHBsaWNhdGlvbi0ke1xuICAgICAgICAgIGZpZWxkcy5sYXN0bmFtZVxuICAgICAgICB9LSR7bmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKX0ucGRmYCxcbiAgICAgICAgY29udGVudDogQnVmZmVyLmZyb20oZmllbGRzLnBkZlJlbmRlci5jb250ZW50KSxcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhgUERGIHJlcG9ydCBzZW50OiAke2luZm8ubWVzc2FnZUlkfWApO1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBoZWFkZXJzOiB7ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfSxcbiAgICBib2R5OiBgUERGIHJlcG9ydCBzZW50OiAke2luZm8ubWVzc2FnZUlkfWAsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBwYXJzZU11bHRpcGFydEZvcm0oZXZlbnQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0ge307XG5cbiAgICBjb25zdCBidXNib3kgPSBCdXNib3koe1xuICAgICAgaGVhZGVyczogZXZlbnQuaGVhZGVycyxcbiAgICB9KTtcblxuICAgIGJ1c2JveS5vbignZmlsZScsIChmaWVsZG5hbWUsIGZpbGVzdHJlYW0sIGZpbGVuYW1lLCBfLCBtaW1lVHlwZSkgPT4ge1xuICAgICAgZmlsZXN0cmVhbS5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGZpZWxkc1tmaWVsZG5hbWVdID0ge1xuICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgICAgZmlsZW5hbWUsXG4gICAgICAgICAgdHlwZTogbWltZVR5cGUsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJ1c2JveS5vbignZmllbGQnLCAoZmllbGROYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgZmllbGRzW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGJ1c2JveS5vbignZmluaXNoJywgKCkgPT4ge1xuICAgICAgcmVzb2x2ZShmaWVsZHMpO1xuICAgIH0pO1xuXG4gICAgLy8gVGhpcyB3YXMgdGhlIGJhc3RhcmQhXG4gICAgYnVzYm95LndyaXRlKEJ1ZmZlci5mcm9tKGV2ZW50LmJvZHksICdiYXNlNjQnKSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInRyYW5zcG9ydGVyIiwibm9kZW1haWxlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwicHJvY2VzcyIsImVudiIsIk1BSUxfUEFTUyIsImV4cG9ydHMiLCJoYW5kbGVyIiwiZXZlbnQiLCJmaWVsZHMiLCJpbmZvIiwicGFyc2VNdWx0aXBhcnRGb3JtIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzZWxlY3RlZFVuaXQiLCJkYXRlc3RhbXAiLCJ0ZXh0IiwiYXR0YWNobWVudHMiLCJmaWxlbmFtZSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJjb250ZW50IiwiQnVmZmVyIiwicGRmUmVuZGVyIiwiY29udGVudFR5cGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZUlkIiwic3RhdHVzQ29kZSIsImhlYWRlcnMiLCJib2R5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJidXNib3kiLCJCdXNib3kiLCJvbiIsImZpZWxkbmFtZSIsImZpbGVzdHJlYW0iLCJfIiwibWltZVR5cGUiLCJkYXRhIiwidHlwZSIsImZpZWxkTmFtZSIsInZhbHVlIiwid3JpdGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUFzQixJQUFBLE1BQU8sV0FBUCxPQUFPLENBQUE7QUFDTixJQUFBLFdBQVksa0NBQVosWUFBWSxFQUFBO0FBQ2hCLElBQUEsT0FBUSxrQ0FBUixRQUFRLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1BLFdBQVcsR0FBR0MsV0FBVSxTQUFDQyxlQUFlLENBQUM7SUFDN0NDLElBQUksRUFBRSxn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
