const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;

const host = 'localhost';
const port = 3000;

const requestListener = (request, response) => {
    arr = request.url.split('.')
    str = arr[arr.length - 1]

    if ( !(request.url.includes('.')) ) {
        if (request.url === '/') {
            fileResponse('/public/view/main.html', "text/html", response);
        } else if (request.url.startsWith('/analytics')) {
            fileResponse('/public/view/analytics.html', "text/html", response);
        } else {
            fileResponse('/public/view/error.html', "text/html", response);
        }
    } else {
        switch (str) {
            case 'css':
                fileResponse('/public/css' + request.url, "text/css", response);
                break;
            case 'js':
                fileResponse('/public/js' + request.url, "text/javascript", response);
                break;
            case 'svg':
                fileResponse(
                    '/public/assets/icons' + request.url, 
                    "image/svg+xml", 
                    response
                    );
                break;
            case 'png':
                fileResponse('/public/assets/img' + request.url, "image/" + str, response);
                break;
            default:
                console.log('Error. Unknown type.')
                break;
        }
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

function fileResponse(src, type, res) {
    fsPromises.readFile(__dirname + src)
        .then(contents => {
            res.writeHead(200, {"Content-Type": type});
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(String(err));
        });
}


// [
//     {
//         "card-header": {
//             "title": "pH-метр Mettler-Toledo International, Inc. SevenCompact S220",
//             "subtitle_1": "S1.4.I14-9.001",
//             "subtitle_2": "00-024004",
//             "status": "В работе",
//             "is_favorite": true
//         },
//         "card-action-bar": {},
//         "card-filters": {
//             "date_at": "2021-10-07T10:55",
//             "date_to": "2021-10-07T10:55",
//             "selected_interval": 14,
//         },
//         "card-table-rows": {
//             "row_1": {
//                 "date": "09.10.2021, 15:46",
//                 "job_status": "В работе",
//                 "job_type": "Измерение",
//                 "jobs": {
//                     "str_1": {
//                         "header": "Образец/серия:",
//                         "text": "000100057935_170000010325_0000251849"
//                     }
//                 },
//                 "result": "",
//                 "check": true,
//                 "user": {
//                     "name": "morozovava",
//                     "link": "#"
//                 }
//             },
//             "row_2": {
//                 "date": "12.10.2021, 12:17",
//                 "job_status": "В работе",
//                 "job_type": "Калибровка",
//                 "jobs": {
//                     "str_1": {
//                         "header": "Номер колонки:",
//                         "text": "Колонка 2"
//                     },
//                     "str_2": {
//                         "header": "Образец:",
//                         "text": "образец 2"
//                     },
//                     "str_3": {
//                         "header": "Образец:",
//                         "text": "образец 1"
//                     },
//                     "str_4": {
//                         "header": "Метод::",
//                         "text": "метов тестовый"
//                     },
//                     "str_5": {
//                         "header": "Номер колонки:",
//                         "text": "Колонка 1"
//                     }
//                 },
//                 "result": "Промывка с указанием вещества: Вещество. Комментарий:тест успешности",
//                 "check": true,
//                 "user": {
//                     "name": "morozovava",
//                     "link": "#"
//                 }
//             },"row_2": {
//                 "date": "12.10.2021, 12:17",
//                 "job_status": "В работе",
//                 "job_type": "Калибровка",
//                 "jobs": {
//                     "str_1": {
//                         "header": "Номер колонки:",
//                         "text": "Колонка 2"
//                     },
//                     "str_2": {
//                         "header": "Образец:",
//                         "text": "образец 2"
//                     },
//                     "str_3": {
//                         "header": "Образец:",
//                         "text": "образец 1"
//                     },
//                     "str_4": {
//                         "header": "Метод::",
//                         "text": "метов тестовый"
//                     },
//                     "str_5": {
//                         "header": "Номер колонки:",
//                         "text": "Колонка 1"
//                     }
//                 },
//                 "result": "Промывка с указанием вещества: Вещество. Комментарий:тест успешности",
//                 "check": true,
//                 "user": {
//                     "name": "morozovava",
//                     "link": "#"
//                 }
//             },
//         }
//     }
// ]