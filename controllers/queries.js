const getUsers = "SELECT * FROM users";
const getPasteById = "SELECT * FROM users WHERE id = $1";
const getPasteByName = "SELECT * FROM users WHERE name = $1";
const checkNameExists = "SELECT s FROM users s WHERE s.name = $1";
const addPastebin = "INSERT INTO users (name, text) VALUES ($1, $2)";
const deletePaste = "DELETE FROM users WHERE name = $1";
const updatePaste = "UPDATE users SET name = $1, text = $2 WHERE id = $3";

module.exports = {
    getUsers,
    getPasteById,
    getPasteByName,
    checkNameExists,
    addPastebin,
    deletePaste,
    updatePaste,
};