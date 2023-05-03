module.exports = {
  apps: [
    {
      name: 'your-app-name',
      script: 'npm',
      args: 'dev',
      watch: '.',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
