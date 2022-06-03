const router = require("express").Router()
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

router.get('/notes', (req, res) =>
  readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
);


// POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title,text } = req.body;

  if (title, text) {
    const newNote = {
      username,
      title,
      text,
      // note_id: uuidv4(),
      id: uuidv4()
    };

    readAndAppend(newTip, './db/tips.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});



// POST Route for a error logging
// diagnostics.post('/', (req, res) => {
//   console.log(req.body);

//   const { isValid, errors } = req.body;

//   const payload = {
//     time: Date.now(),
//     error_id: uuidv4(),
//     errors,
//   };

//   if (!isValid) {
//     readAndAppend(payload, './db/diagnostics.json');
//     res.json(`Diagnostic information added 🔧`);
//   } else {
//     res.json({
//       message: 'Object is valid, not logging. Check front end implementation',
//       error_id: payload.error_id,
//     });
//   }
// });


module.exports = router