module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || "mongodb+srv://<username>:<password>@cluster0-xixwd.mongodb.net/<collection>?retryWrites=true&w=majority"
}