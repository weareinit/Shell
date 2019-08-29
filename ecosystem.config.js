module.exports = {
  apps: [
    {
      name: "Dashboard",
      script: "server.js",
      watch_delay: 15000,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
