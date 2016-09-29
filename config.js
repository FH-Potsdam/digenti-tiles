var config = {};

// Tile Server Settings
config.server = {};
config.server.host = 'localhost';
// config.server.host = 'tostnik.deneb.uberspace.de/digenti-tiles';
config.server.port = 61001; // https://wiki.uberspace.de/system:ports

// Tile Settings
config.tile = 'ndvi_gradient.mbtiles';
// config.tile = 'colombia_fos.mbtiles';

module.exports = config;
