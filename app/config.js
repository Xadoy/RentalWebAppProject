module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost:27017/Team45API",
  adminName: process.env.ADMIN_NAME || "admin",
  adminPassword: process.env.ADMIN_PASSWORD || "admin"
};
