const db = require('../config');

class Orders {
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, prodID, status, orderDate
        FROM Orders;
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status:res.statusCode,
                    results
                })
            }
            )
    };

    fetchOrder(req, res){
        const query =`
        SELECT orderID, userID, prodID, status, orderDate
        FROM Orders;
        WHERE id = ${req.params.id};
        `
        db.query(query,(err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,result
                })
            })
    };

    updateBookAuthor(req, res) {
        const query =`
        UPDATE Order
        SET?
        WHERE id = ?;
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg:'The order record was updated'
                })
            }
            )
    };
    deleteBookAuthor(req, res){
        const query = `
        DELETE FROM Orders
        WHERE orderID= ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Order deleted from the list'
            })
        })
    }

}

module.exports = Orders