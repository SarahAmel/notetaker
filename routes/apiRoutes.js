app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);






app.get('api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);


// POST Route for a new UX/UI tip
app.post('api/notes', (req, res) => {
  console.log(req.body);

  const { title,text } = req.body;

  if (title, text) {
    const newNote = {
      username,
      title,
      text,
      // note_id: uuidv4(),
      id: uuid()
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