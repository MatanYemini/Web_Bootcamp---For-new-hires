// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const posts = {};

// app.get('/posts', (req, res) => {
//   res.send(posts);
// });

// app.get('/events', (req, res) => {
//   const { type, data } = req.body;
//   console.log('here1');
//   if (type === 'PostCreated') {
//     console.log('here2');
//     const { id, title } = data;
//     posts[id] = { id, title, comments: [] };
//   }
//   if (type === 'CommentCreated') {
//     console.log('here3');
//     const { id, content, postId } = data;
//     const post = posts[postId];
//     post.comments.push({ id, content });
//   }

//   console.log(posts);
//   res.send({});
// });

// app.listen(4002, () => {
//   console.log('Running on port 4002');
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const post = post[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
