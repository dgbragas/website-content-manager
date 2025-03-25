module.exports = ({ env }) => ({
  upload: require('./plugins/upload')({ env }),
});
