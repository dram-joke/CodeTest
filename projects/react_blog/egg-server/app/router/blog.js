'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/blog/index', controller.blog.home.index);
  router.get('/blog/articleList', controller.blog.home.getArticleList);
  router.get('/blog/articleDetail/', controller.blog.home.getDetailById);
};
