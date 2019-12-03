const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "177356ftp1",
  password: ".x0olssd23bo",
  host: "e113743-ftp.services.easyname.eu",
  port: 21,
  remoteRoot: "apps/web/",
  localRoot: __dirname + "/dist",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["**"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ["**/*.map", ".git/**"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true
};

ftpDeploy.deploy(config, function(err, res) {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  else {
    // eslint-disable-next-line no-console
    console.log("finished:", res);
    return true;
  }
});
