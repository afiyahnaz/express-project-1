class InterfaceCtrl {

    get (req, res){
    
        const interfaces = [
            {id:1 , name: 'Mumbai', cost: 140, stock:'true' },
            {id:2 , name: 'andhra', cost: 140, stock:'false' },
            {id:3 , name: 'bangalore', cost: 140, stock:'true' },
        ];
        res.status(200);
        res.json(interfaces);
    
    }
    }
    module.exports = new InterfaceCtrl();