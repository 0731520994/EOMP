const db = require('../config');



class Categories{
    fetchCategories(req, res) {
       
        const query = ` 
            SELECT categoryID, category
            FROM Categories
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }

      fetchCategory(req, res) {
       
        const query = `
            SELECT categoryID,category
            FROM Categories
            WHERE categoryID = ${req.params.categoryID}
        `;
        db.query(query, (err, results) => { 
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }
    
    addCategory(req, res) {
      const query = `
              INSERT INTO Categories
              SET ?
          `;
      db.query(query, [req.body], (err) => {
        if (!err) {
          res.json({
            status: res.statusCode,
            msg: "Category Added ",
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "An error occured",
            err:err
          });
        }
      });
    }
  
    updateCategory(req, res) {
      const query = `
              UPDATE Categories
              SET ? 
              WHERE categoryID = ${req.params.categoryID};
          `;
      db.query(query, [req.body], (err) => {
        if (!err) {
          res.json({
            status: res.statusCode,
            msg: "Category Updated! ",
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "An error occured",
            err:err
          });
        }
      });
    }
  
    


      deleteCategory(req, res) {
        const query = `
            DELETE FROM Categories
            WHERE categoryID = ${req.params.categoryID}
            `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "CATEGORY SUCCESFULLY DELETED",
          });
        });
      }


      fetchProductsInBeautyCategory(req, res) {
        const categoryName = 'Beauty'; 
    
        const query = `
          SELECT p.prodID, p.prodName, p.price, p.prodUrl, c.categoryID, c.category
          FROM Products p
          JOIN Categories c ON p.categoryID = c.categoryID
          WHERE c.category = ?;
        `;
    
        db.query(query, [categoryName], (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }
    


      fetchProductsInPerfumesCategory(req, res) {
        const categoryName = 'Perfumes'; 
    
        const query = `
          SELECT p.prodID, p.prodName, p.price, p.prodUrl, c.categoryID, c.category
          FROM Products p
          JOIN Categories c ON p.categoryID = c.categoryID
          WHERE c.category = ?;
        `;
    
        db.query(query, [categoryName], (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }
    

      fetchProductsAccessoriesCategory(req, res) {
        const categoryName = 'Accessories'; 
    
        const query = `
          SELECT p.prodID, p.prodName, p.price, p.prodUrl, c.categoryID, c.category
          FROM Products P
          JOIN Categories c ON p.categoryID = c.categoryID
          WHERE c.category = ?;
        `;
    
        db.query(query, [categoryName], (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }
    
}
    
   

    
    
    
  



module.exports = Categories