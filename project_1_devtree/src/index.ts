//ESM sintaxis
import server from './server';
import colors from 'colors';
// const port = process.env.PORT || 4000;
server.listen(4000, ()=> {
    console.log(colors.bgBlue.magenta.italic("Server is running..."));
});