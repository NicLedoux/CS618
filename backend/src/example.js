import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'

import dotenv from 'dotenv'

dotenv.config()
await initDatabase()

const post = new Post({
  title: 'Hello there, number three',
  author: 'Bond, James',
  contents:
    'This post is a third post stored in a MongoDB database using Mongoose.',
  tags: ['other'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
