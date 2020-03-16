module.exports = {
  ['GET /api/product']: (req, res) => {
    const params = req.query;
    res.send({ name: '高粱' });
  }
};
