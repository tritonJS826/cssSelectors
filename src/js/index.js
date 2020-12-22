import '../css/style.scss';

import App from './baseClasses/App';

const app = new App();
app.start();


// как тут обернуть эти строчки,
// чтоб если будет ошибка где-то в app -- происходило просто перезагрузка app 