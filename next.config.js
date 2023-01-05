 
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Elyon Devs',
        titleDescription: 'Internet simple',
    },
};

// next.config.js
module.exports = {
    experimental: {
      forceSwcTransforms: true,
    },
  }
