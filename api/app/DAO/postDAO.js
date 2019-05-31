
'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

//import mongoConverter from '../service/mongoConverter';

const postSchema = new mongoose.Schema({
    name: {type: String},
    url: {type: String},
    title: {type: String},
    text: {type: String}
}, {
    collection: 'ma-post'
});
postSchema.plugin(uniqueValidator);

const postModel = mongoose.model('post', postSchema);

async function query() {
    const result = await postModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

export default {
    query: query,

    model: postModel
};