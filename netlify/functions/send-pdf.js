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
                        to: [
                            "info@ionia.apartments",
                            "scout.tosi@gmail.com"
                        ],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Z1bmN0aW9ucy1zcmMvc2VuZC1wZGYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNQREYgfSBmcm9tICdqc3BkZic7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCBCdXNib3kgZnJvbSAnYnVzYm95JztcblxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLCAvLyB1c2UgVExTXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAnamFjb2JAaHlwZXJpb253ZWIuZGV2JyxcbiAgICBwYXNzOiBwcm9jZXNzLmVudi5NQUlMX1BBU1MsXG4gIH0sXG59KTtcblxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGZpZWxkcyA9IGF3YWl0IHBhcnNlTXVsdGlwYXJ0Rm9ybShldmVudCk7XG5cbiAgY29uc3QgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICBmcm9tOiAnaW5mb0Bpb25pYS5hcGFydG1lbnRzJyxcbiAgICB0bzogWydpbmZvQGlvbmlhLmFwYXJ0bWVudHMnLCAnc2NvdXQudG9zaUBnbWFpbC5jb20nXSxcbiAgICBzdWJqZWN0OiBgQXBwbGljYXRpb24gZm9yICR7ZmllbGRzLmZpcnN0bmFtZX0gJHtmaWVsZHMubGFzdG5hbWV9IHwgJHtmaWVsZHMuc2VsZWN0ZWRVbml0fSB8ICR7ZmllbGRzLmRhdGVzdGFtcH1gLFxuICAgIHRleHQ6ICdTZWUgYXR0YWNoZWQgcmVwb3J0IFBERicsXG4gICAgYXR0YWNobWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgZmlsZW5hbWU6IGAke2ZpZWxkcy5zZWxlY3RlZFVuaXR9LWFwcGxpY2F0aW9uLSR7XG4gICAgICAgICAgZmllbGRzLmxhc3RuYW1lXG4gICAgICAgIH0tJHtuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpfS5wZGZgLFxuICAgICAgICBjb250ZW50OiBCdWZmZXIuZnJvbShmaWVsZHMucGRmUmVuZGVyLmNvbnRlbnQpLFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGBQREYgcmVwb3J0IHNlbnQ6ICR7aW5mby5tZXNzYWdlSWR9YCk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGhlYWRlcnM6IHsgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyB9LFxuICAgIGJvZHk6IGBQREYgcmVwb3J0IHNlbnQ6ICR7aW5mby5tZXNzYWdlSWR9YCxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlTXVsdGlwYXJ0Rm9ybShldmVudCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBmaWVsZHMgPSB7fTtcblxuICAgIGNvbnN0IGJ1c2JveSA9IEJ1c2JveSh7XG4gICAgICBoZWFkZXJzOiBldmVudC5oZWFkZXJzLFxuICAgIH0pO1xuXG4gICAgYnVzYm95Lm9uKCdmaWxlJywgKGZpZWxkbmFtZSwgZmlsZXN0cmVhbSwgZmlsZW5hbWUsIF8sIG1pbWVUeXBlKSA9PiB7XG4gICAgICBmaWxlc3RyZWFtLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgZmllbGRzW2ZpZWxkbmFtZV0gPSB7XG4gICAgICAgICAgY29udGVudDogZGF0YSxcbiAgICAgICAgICBmaWxlbmFtZSxcbiAgICAgICAgICB0eXBlOiBtaW1lVHlwZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYnVzYm95Lm9uKCdmaWVsZCcsIChmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBmaWVsZHNbZmllbGROYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgYnVzYm95Lm9uKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICByZXNvbHZlKGZpZWxkcyk7XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIHdhcyB0aGUgYmFzdGFyZCFcbiAgICBidXNib3kud3JpdGUoQnVmZmVyLmZyb20oZXZlbnQuYm9keSwgJ2Jhc2U2NCcpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsidHJhbnNwb3J0ZXIiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9QQVNTIiwiZXhwb3J0cyIsImhhbmRsZXIiLCJldmVudCIsImZpZWxkcyIsImluZm8iLCJwYXJzZU11bHRpcGFydEZvcm0iLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInNlbGVjdGVkVW5pdCIsImRhdGVzdGFtcCIsInRleHQiLCJhdHRhY2htZW50cyIsImZpbGVuYW1lIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImNvbnRlbnQiLCJCdWZmZXIiLCJwZGZSZW5kZXIiLCJjb250ZW50VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlSWQiLCJzdGF0dXNDb2RlIiwiaGVhZGVycyIsImJvZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImJ1c2JveSIsIkJ1c2JveSIsIm9uIiwiZmllbGRuYW1lIiwiZmlsZXN0cmVhbSIsIl8iLCJtaW1lVHlwZSIsImRhdGEiLCJ0eXBlIiwiZmllbGROYW1lIiwidmFsdWUiLCJ3cml0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQXNCLElBQUEsTUFBTyxXQUFQLE9BQU8sQ0FBQTtBQUNOLElBQUEsV0FBWSxrQ0FBWixZQUFZLEVBQUE7QUFDaEIsSUFBQSxPQUFRLGtDQUFSLFFBQVEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUEsV0FBVyxHQUFHQyxXQUFVLFNBQUNDLGVB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
