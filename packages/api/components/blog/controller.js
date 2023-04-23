const { Post } = require('../../db/models')

module.exports = class BlogController {

  async list (req, res) {
    const posts = await Post.findAll()
    res.json(posts)
  }

  async get (req, res) {
    const { params: { id } } = req
    const post = await Post.findByPk(id)
    if (!post) {
      res.status(404).json({ message: 'not_found' })
    } else {
      res.json(post)
    }
  }

  async create (req, res) {
    const post = await Post.create(req.body)
    res.json(post)
  }

  async update (req, res) {
    const { body, params: { id } } = req
    await Post.update(body, { where: { id } })
    const result = await Post.findByPk(id)
    if (!result) {
      res.status(404).json({ message: 'not_found' })
    }
    res.json()
  }

  async delete (req, res) {
    const { params: { id } } = req
    const result = await Post.destroy({ where: { id } })
    if (!result) {
      res.status(404).json({ message: 'not_found' })
    }
    res.json({ result })
  }

}