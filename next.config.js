const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "cturgeon",
        mongodb_password: "Jo11CzndYC0dExko",
        mongodb_clustername: "cluster0",
        mongodb_database: "gym-data",
      },
    };
  }
};
