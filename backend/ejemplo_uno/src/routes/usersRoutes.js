var express = require('express');
var router = express.Router();

let users = [
  {
    id: 1,
    name: 'Vicente'
  },
  {
    id: 2,
    name: 'Luis'
  },
  {
    id: 3,
    name: 'Joaquin'
  },
  {
    id: 4,
    name: 'Martin'
  }
]

const validateIdParam = (req, res, next) => {
  if (!req.params.id) {
    res.status(404).json({
      status: 400,
      message: 'id param is required.'
    });
  } else {
    next();
  }
};

const validateBody = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({
      status: 400,
      message: 'name field is required.'
    });
  } else {
    next();
  }
};

/* GET users listing. */
router.get('/', (req, res, next) => {
  if (req.query.search) {
    const searchCriteria = req.query.search;
    const usersFiltered = users.filter(user => user.name.toLowerCase().includes(searchCriteria.toLowerCase()));
    res.json(usersFiltered);
  } else {
    res.json(users);
  }
});

/* GET user by id. */
router.get('/:id', validateIdParam, (req, res, next) => {
  const user = users.find(user => user.id === Number(req.params.id));
  if (!user) {
    res.status(404).json({
      status: 404,
      message: 'User not found.'
    });
  } else {
    res.json(user);
  }
});

/* POST user. */
router.post('/', validateBody, (req, res, next) => {
  const lastUserIndex = Math.max(...users.map(user => user.id));
  const newUser = {
    id: lastUserIndex + 1,
    name: req.body.name
  }

  users.push(newUser);
  res.json(newUser);
});

/* DELETE user by id */
router.delete('/:id', validateIdParam, (req, res, next) => {
  const indexForDelete = users.map(user => user.id).indexOf(Number(req.params.id));
  users.splice(indexForDelete, 1);

  res.json('Ok');
});

module.exports = router;
