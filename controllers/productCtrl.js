class ProductCtrl  {

get (req,res){
    const product = [
        {id:1 , name: 'fast', cost: 140, stock:'true' },
        {id:2 , name: 'slow', cost: 140, stock:'false' },
        {id:3 , name: 'very fast', cost: 140, stock:'true' },
    ];
    res.status(200);
    res.json(product);

}
}

module.exports = new ProductCtrl();