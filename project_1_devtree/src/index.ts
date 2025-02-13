//ESM sintaxis
import server from './server';
// const port = process.env.PORT || 4000;
server.listen(4000, ()=> {
    console.log("Server is running...");
});