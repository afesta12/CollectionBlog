import mongoose from "mongoose";

/**
 * Schema -
 * title: Title of the post
 * message: Any message / facts about the new item
 * user: The user / owner 
 * tags: Relevant tags
 * likeCount: eventually other users will be able to like posts etc
 * selectedFile: an image to go along with the post
 * createdAt: time of post creation
 */
const postSchema = mongoose.Schema( {

    title: String,
    message: String,
    user: String,
    tags: [String],
    selectedFile: String,
    likeCount: {

        type: Number,
        default: 0

    },
    createdAt: {

        type: Date,
        default: new Date()

    }

} )

const NewPost = mongoose.model('NewPost', postSchema);

export default NewPost;