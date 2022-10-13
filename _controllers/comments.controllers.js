const {
  selectCommentsByArticleId,
  addCommentToArticle,
} = require("../_models/comments.models");

exports.getCommentsByArticleId = (req, res, next) => {
  const articleId = req.params.article_id;
  selectCommentsByArticleId(articleId)
    .then((comments) => {
      if (comments.error) {
        next(comments);
      } else {
        res.status(200).send(comments);
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.postCommentToArticle = (req, res, next) => {
  const articleId = req.params.article_id;
  const { body } = req;
  addCommentToArticle(articleId, body)
    .then((comment) => {
      if (comment.error) {
        next(comment);
      } else {
        res.status(201).send(comment);
      }
    })
    .catch((err) => {
      next(err);
    });
};