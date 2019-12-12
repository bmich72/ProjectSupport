// Home route
const homeRoute = (app) => {
    app.get('/', (req, res) => {
      res.redirect('/api');
    });
    app.get('/api', (req, res) => {
      res.status(200).json({
        message: 'Welcome to Project Support',
      });
    });
  };
  export default homeRoute;