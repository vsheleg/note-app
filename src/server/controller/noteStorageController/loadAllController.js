const service = require("../../services/storageServices/index");

module.exports = function getNotes(req, res) {
  let file = service.getNotes();
  let result = [];
  file.then(data => {
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].id);
    }
    res.end(JSON.stringify(result));
  });
};
