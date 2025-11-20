const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Spero</title>
      </head>
    </html>
    <body>
      <h1>I'm Spero! An experiment of a Node Express Js web server using CI/CD</h1>
      <p>Cosmic ipsum telescope opposition hydrogen precession corona mass dwarf planet asterism dark matter superior planets black body Mercury Bailey's beads gravitational constant binary star 
      Milky Way yellow dwarf Mars universe conjunction cluster new moon background radiation satellite Mir Uranus half moon translunar meteoroid moon Drake equation Venus Saturn cosmos white dwarf 
      outer planets magnitude space space station axial tilt perihelion Van Allen belt sky minor planet quasar gravity nadir sun</p>

      <p>Planetoid zenith geosynchronous circumpolar eclipse helium meridian inclination gamma ray flare transparency geostationary double star wormhole telemetry binary star hydrogen eccentricity 
      Alpha Centauri moon extragalactic heliocentric apogee sun celestial crescent moon shooting star ecliptic totality scintillation syzygy H-R diagram gas giant terminator cislunar local arm 
      equinox celestial equator interstellar visual magnitude red dwarf exoplanet transit total eclipse black body solar Kirkwood gaps inertia</p>

      <p>Solar light-year ecliptic totality interstellar waxing red dwarf astronomer hydrogen perihelion Roche limit quasar universe Oort cloud wavelength background radiation terrestrial 
      Pluto superior planets inner planets astronomy wormhole cluster telemetry eclipse falling star Sputnik meteor shower Messier object Earthshine singularity solstice Venus starlight 
      gamma ray Saturn solar wind local arm crescent moon cosmic rays gibbous moon lens escape velocity half moon docking new moon lunar Bailey's beads</p>
    </body>
    `);
  next();
});

module.exports = app;
