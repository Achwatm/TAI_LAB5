
'use strict';

import postDAO from '../DAO/postDAO';

function create(context) {
    async function query() {
        let result = postDAO.query();
        if (result) {
            return result;
        }
    }

    return {
        query: query
    };
}

export default {
    create: create
};