const pool = require('../database');
const queries = require('../controllers/queries');

const getAllPastes = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).render('index.ejs' , { name: results.rows });
    });
};

const getPasteById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPasteById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).render('viewPaste.ejs', { id: id, name: results.rows[0].name, text: results.rows[0].text });
    });
};

const getPasteByName = (req, res) => {
    const name = req.params.name;
    const id = parseInt(req.params.id);
    pool.query(queries.getPasteByName, [name], (error, results) => {
        if (error) throw error;
        res.status(200).render('deletePaste.ejs', { id: id, name: results.rows[0].name, text: results.rows[0].text });
    });
};

const addPaste = (req, res) => {
    const { name, text} = req.body;
    //check if the name exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Name / Title already exists.");
            return;
        }

        //add paste to database
        pool.query(queries.addPastebin, [name, text], (error, results) => {
            if (error) throw error;
            res.status(201).render('paste.ejs' , { name: name, text: text });
        })
    });
};

const deletePaste = (req, res) => {
    const name = req.params.name;
    pool.query(queries.deletePaste, [name], (error, results) => {
        if (error) throw error;
        res.status(200).redirect('/');
    });
};

const updatePaste = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, text } = req.body;

    //check if the name/title exists
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Name / Title already exists.");
            return;
        }

        pool.query(queries.updatePaste, [name, text, id], (error, results) => {
            if (error) throw error;
            res.status(200).render('viewPaste.ejs', { id: id, name: name, text: text });
        });
    });
};

module.exports = {
    getAllPastes,
    getPasteById,
    getPasteByName,
    addPaste,
    deletePaste,
    updatePaste,
};