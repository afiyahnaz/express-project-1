class ServiceCtrl {

    get (req, res){
    
        const services = [
            {id:1 , name: 'fastfast', cost: 140, stock:'true' },
            {id:2 , name: 'slowslow', cost: 140, stock:'false' },
            {id:3 , name: 'very fast', cost: 140, stock:'true' },
        ];
        res.status(200);
        res.json(services);
    
    }
    }
    module.exports = new ServiceCtrl();