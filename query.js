const pool = require("./config.js");
const express = require("express");
const { response } = require("express");
const router = express.Router();


// DATA LIST FILM
router.get("/film", (req, res) =>{

    const query =`
        SELECT * FROM film
    `
    pool.query(query,(err, response) =>{
        if(err) throw err

        res.status(200).json(response.rows)
    })
    
    console.log(response);
})

// film tertentu sesuai id
router.get("/film/:id", (req, res) =>{
    const {id} = req.params;

    const findQuery = `
        SELECT 
            *  
        FROM film 
            WHERE id = $1
    `
    pool.query(findQuery,[id], (err, response)=> {
        if(err) throw err

        res.status(200).json(response.rows);
    })
})

// kategori film
router.get("/film_category", (req,res) =>{

    const findQuery = `
    SELECT * FROM film_category;
    
    `
    pool.query(findQuery, (err, response ) =>{
        if(err) throw err
        
        res.status(200).json(response.rows)
    })
 
})
// id kategori film
router.get("/fil,_category/:category_id", (req,res)=>{
    const findQuery =`
    SELECT * FROM film_category
    where category_id =$3
    `

    pool.query(fgiindQuery,[category_id], (err , response) =>{
        if(err) throw err
    })
})

module.exports = router;
