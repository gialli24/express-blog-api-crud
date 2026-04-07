let posts = require('../data/posts');

const index = (req, res) => {
    res.json(posts);
}

const show = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    res.json(post);
}

const store = (req, res) => {
    res.send('Creating post');
}

const update = (req, res) => {
    const id = parseInt(req.params.id);

    res.send('Update post with id ' + id);
}

const modify = (req, res) => {
    const id = parseInt(req.params.id);

    res.send('Modify post with id ' + id);
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedPost = posts.find(p => p.id === id);
    posts = posts.filter(p => p.id !== id);

    res.json(deletedPost);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}