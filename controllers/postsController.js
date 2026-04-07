let posts = require('../data/posts');

const index = (req, res) => {
    const tag = req.query.tag;

    if (tag) {
        const filteredPosts = posts.filter(post => post.tags.includes(tag));

        if (filteredPosts.length === 0) {
            res.json({
                status: 404,
                message: `Post with tag ${tag} not found`
            });
        } else {
            res.json(filteredPosts);
        }

    } else {
        res.json(posts);
    }

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

    if (!deletedPost) {
        res.json({
            status: 404,
            message: `Post ${id} not found`
        });
    } else {
        posts = posts.filter(p => p.id !== id);

        console.log(posts);

        res.json({
            status: 204,
            message: `Post ${id} deleted`
        });
    }

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}