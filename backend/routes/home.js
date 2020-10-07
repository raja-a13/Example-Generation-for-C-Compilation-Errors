const express = require('express');
const router = express.Router();
const cors = require('cors');

//const User = require('../models/Users');

const fs = require('fs');

var spawn = require('child_process').spawnSync;

router.use(cors());

router.get('/', getHome);

function getHome(req, res) {
  res.send('Home page');
}

router.post('/code', async (req, res) => {
  try {
    const { code } = req.body.code;

    fs.truncate(
      '../btp_example_generation/data/examples/run.c',
      0,
      function () {
        fs.writeFile(
          '../btp_example_generation/data/examples/run.c',
          code,
          (err) => {
            if (err) throw err;
          }
        );
      }
    );

    res.send('Code written');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/run', async (req, res) => {
  try {
    var child = spawn(
      'cd btp_example_generation && python3 -m src.run ./data/examples/run.c',

      {
        shell: true,
        stdio: 'pipe',
        maxBuffer: 1024 * 512000,
        encoding: 'utf-8',
        timeout: 100000000,
      }
    );

    var stdout = child.output[1];
    var stderr = child.output[2];

    var array = stdout.match(/[^\s.!?]+[^.!?\r\n]+[.!?]*/g);

    var index_clang = array.indexOf('Clang output on the given code ...');
    var index_clang_end = array.indexOf('Erroneous lineNums:');
    var index_examples = array.indexOf('Examples:');

    var clang = array.slice(index_clang + 1, index_clang_end);
    var examples = array.slice(index_examples + 1);

    clang = clang.join('\n');
    examples = examples.join('\n');

    // console.log(clang);
    // console.log(999999999999);
    // console.log(examples);

    if (stdout === null && stderr == null) {
      console.log('Execution Error');
      res.send('Execution Error');
    } else {
      res.send({
        clang: clang,
        examples: examples,
        msg: 'Execution OK',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
