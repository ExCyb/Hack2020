const express = require('express');
const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post('/', function (req, res) {

  if (req.body.request.command == "no text")
  {
    res.json({
      version: req.body.version,
      session: req.body.session,
      response: {
        text: "",
        end_session: false,
      },
    });
  }

  else if (req.body.request.command == "no version")
  {
    res.json({
      session: req.body.session,
      response: {
        text: '������ �������� 3 ����������� �����',
        end_session: true,
      },
    });
  }

  else if (req.body.request.command == "no session")
  {
    res.json({
      version: req.body.version,
      response: {
        text: '������ �������� 3 ����������� �����',
        end_session: true,
      },
    });
  }

  else if (req.body.request.command == "end session")
  {
    res.json({
      version: req.body.version,
      session: req.body.session,
      response: {
        text: '������ �������� 3 ����������� �����',
        end_session: true,
      },
    });
  }

  else
  {
    res.json({
      version: req.body.version,
      session: req.body.session,
      response: {
        text: '������ �������� 3 ����������� �����',
        end_session: true,
      },
    })
    ;}
});

app.use('*', function (req, res) {
  res.sendStatus(404);
});

https.createServer({
  key: fs.readFileSync('docker/nginx/prod/ssl/privkey.pem'),
  cert: fs.readFileSync('docker/nginx/prod/ssl/fullchain.pem')
}, app).listen(port);