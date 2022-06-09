class BookCtrl {

get (req, res){

    const books = [
        {id:1 , name: 'fast', cost: 140, stock:'true' },
        {id:2 , name: 'slow', cost: 140, stock:'false' },
        {id:3 , name: 'very fast', cost: 140, stock:'true' },
    ];
    res.json(books);

}
}
module.exports = new BookCtrl();