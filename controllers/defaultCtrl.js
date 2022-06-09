////monitoring.................


function get(req, res){
    res.status(200);
    res.send("Hello Express JS");

}

function health(req,res){
    res.status(200);
    const status = {status: 'up'};
    res.json(status);
    
}

function trip(req,res){
    res.status(200);
    const status = {status: 'enjoyed'};
    res.json(status);
    
}



module.exports = {
    get,
    health,
    trip
};