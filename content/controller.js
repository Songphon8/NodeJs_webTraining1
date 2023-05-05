const { request, response } = require('express');
const {getAll, frontquote,remove,save} = require('./model');


async function listAction(request,response){
    const data = await frontquote();
    const pugPath = `${__dirname}/views/index`;
    response.render(pugPath,{data});
}

async function formView(request,response){
    const allticket = await getAll();
    const formPath = `${__dirname}/views/form`;
    response.render(formPath,{allticket});
}

async function removeAction(request,response){
    const id = parseInt(request.params.id,10);
    await remove(id);
    response.redirect(request.baseUrl);
}

async function saveAction(request,response){
    const ticket = {
        id: request.body.id,
        problem: request.body.problem,
        describe: request.body.describe,
    };

    await save(ticket);
    response.redirect(request.baseUrl);
}

module.exports = {listAction,formView,removeAction,saveAction};