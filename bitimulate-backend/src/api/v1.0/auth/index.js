const Router = require('koa-router');

const auth = new Router();


auth.get('/', (ctx) => {
    ctx.body = 'Router Setting Finished!';
})
module.exports = auth;