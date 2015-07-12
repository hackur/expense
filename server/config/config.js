const base = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  LOGPATH: "server/expenses.log",
  COOKIE_SECRET: "menusecretkey",
  DBURL: "mongodb://localhost/expenses"
}

module.exports = base
