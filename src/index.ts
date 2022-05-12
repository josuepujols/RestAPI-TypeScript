import app from './app';
import "./database";

function Main() {
    app.listen(app.get('port'));
    console.log("The server is running on port: ", app.get('port'));
}

Main();