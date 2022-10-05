import mongoose from "mongoose";
import NewPost from "../models/newPost.js";

export const getPosts = async (req, res) => {

    try{

        const newPost = await NewPost.find();

        res.status(200).json(newPost);

    } catch (error) {

        res.status(404).json({message: error.message});

    }

};

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new NewPost(post);

    try {

        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {

        res.status(409).json({ message: error.message });

    }

};

export const updatePost = async (req, res) => {

    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    const updatedPost = await NewPost.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);

}

export const deletePost = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await NewPost.findByIdAndDelete(id);

    res.json({ message: 'Post deleted' });

}

export const likePost = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    const post = await NewPost.findById(id);
    const updatedPost = await NewPost.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res.json(updatedPost);

}