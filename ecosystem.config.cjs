module.exports = {
  apps: [
    {
      name: 'VoidTales Portal',
      port: '3072',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}