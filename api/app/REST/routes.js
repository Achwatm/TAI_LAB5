'use strict';

import postEndpoint from './post.endpoint'
import categoryEndpoint from './category.endpoint';
import productEndpoint from './product.endpoint';

const routes = (router, config) => {
    //categoryEndpoint(router);
  //  productEndpoint(router);
    postEndpoint (router);

};

export default routes;