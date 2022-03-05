module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b17f34dcb98561f992847c26f6d22eb0'),
  },
});
