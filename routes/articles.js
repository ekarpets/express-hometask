const express = require('express');
const router = express.Router();
const data = require('../db.json').articles;

const articleMdware = require('../middlewares/articles.middlewares');

router.get('/', (req, res) => {
  res.send(data)
});

router.post('/', (req, res) => {
  const inputData = req.body;
  if(inputData.name && inputData.description) {
    data.push(inputData)
  }

  res.send(data)
})
/* data for body
 {  
    "name": "JS - introduction",
    "description": "JS - text",
    "type": "j",
    "tags": ["k", "7", "3"]
  }
*/

router.patch('/:name', articleMdware.validateTags, (req, res) => {
  const updatedData = data.map(article => {
    if (article.name === req.params.name) {
      while (article.tags.length) {
        article.tags.pop();
      }

      req.body.forEach(tag => article.tags.push(tag));
    }
      
    return article;
  });

  res.send(updatedData);
});
/* ["new", "tag", "123"] */
module.exports = router;