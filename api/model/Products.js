const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl
            FROM Products
        `
        db.query(query, (err, data) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              results: data,
            });
          });
    }
    fetchProduct(req, res){
        const query = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl 
            FROM Products 
            WHERE prodID = ${req.params.prodID}
        `
        db.query(query, (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProduct(req, res){
        const query = `
            INSERT INTO Products SET ?
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product inserted successfully"
            })
        })
    }
    removeProduct(req, res){
        const query = `
            DELETE FROM Products WHERE prodID = ${req.params.prodID}
        `
        db.query(query, [req.params.prodID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"User record deleted successfully"
            })
        })
    }
    updateProduct(req, res){
        const query = `
            UPDATE Products SET ? WHERE prodID = ${req.params.prodID}
        `
        db.query(query, [req.body, req.params.prodID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Product record was updated succesfully"
            })
        })
    }
}

module.exports = { Products }