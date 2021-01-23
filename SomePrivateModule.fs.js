import { printf, toConsole } from "./.fable/fable-library.3.1.1/String.js";

function hello(name) {
    toConsole(printf("Hello %s"))(name);
}

