require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports  = {
    dialect: process.env.DB_DIALECT || "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    storage: "./__tests__/database.sqlite",
    define: {
        timestamps: true,
        underscored: true,
    },
};

