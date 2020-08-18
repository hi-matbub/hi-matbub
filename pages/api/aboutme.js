const Data = require('../../shared/json/about_me.json');

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(Data)
}
