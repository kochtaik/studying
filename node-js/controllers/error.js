exports.get404Page = (req, res, next) => {
  res.status(404).render('404-page', { pageTitle: 'Page not found' });
};