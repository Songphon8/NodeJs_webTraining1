const data = [
    {id:1 , title: 'Route',desc:'Lesvest Route let you manage and check your version in one place'},
    {id:2 , title: 'All your project secure', desc:'Our top grade encyption make sure all you file are protected'},
    {id:3 , title: 'Work together, in REAL TIME!' , desc: 'With Lesvest Route, you can share and upload all your file with your coworker in realtime'}
];

function frontquote(){
    return Promise.resolve(data);
}

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://songphon:atlas@fortesting.hgsoevc.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

mongoose.pluralize(null);

const ticket = mongoose.model('ticket', {
    id: Number,
    problem: String,
    describe: String,
});

async function getAll(){
    return ticket.find({});
}

async function get(){
    return ticket.findOne({ id });
}

async function remove(id){
    return ticket.findOneAndDelete({ id });
}

async function save(tickets) {
    const newTicket = new ticket(tickets);
    newTicket.id = Date.now();
    return newTicket.save();
}
module.exports = {frontquote, getAll, get,remove,save};