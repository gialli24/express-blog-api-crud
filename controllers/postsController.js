let posts = require('../data/posts');

const index = (req, res) => {
    let filteredPosts = posts;

    const tag = req.query.tag;

    if (tag) {
        filteredPosts = posts.filter(post => post.tags.includes(tag));
    }

    res.json(filteredPosts);
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

    console.log(posts);

    res.json({
        status: 204,
        message: `Post ${id} deleted`
    });
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}