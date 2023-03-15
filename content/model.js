const data = [
    {id:1 , title: 'Route',desc:'Lesvest Route let you manage and check your version in one place'},
    {id:2 , title: 'All your project secure', desc:'Our top grade encyption make sure all you file are protected'},
    {id:3 , title: 'Work together, in REAL TIME!' , desc: 'With Lesvest Route, you can share and upload all your file with your coworker in realtime'}
];

function getAll(){
    return Promise.resolve(data);
}

module.exports = getAll;