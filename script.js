document.getElementById("run-button").addEventListener("click", function() {
    const code = document.getElementById("code-editor").value;
    try {
        // Limpiar la consola antes de ejecutar el código
        document.getElementById("console-output").value = '';

        // Redirigir la salida de la consola al visualizador
        const consoleOutput = document.getElementById("console-output");
        const oldConsoleLog = console.log;

        // Desactivar temporalmente la impresión predeterminada en la consola del navegador
        console.log = function() {};

        // Definir una función para imprimir en el visualizador
        const printToVisualizer = function(message) {
            consoleOutput.value += message + '\n';
        };

        // Redefinir console.log para imprimir en el visualizador
        console.log = printToVisualizer;

        // Ejecutar el código
        eval(code);

        // Restaurar la función original de console.log
        console.log = oldConsoleLog;
    } catch (error) {
        // En caso de error, mostrarlo en la consola
        console.error("Error al ejecutar el código:", error);
    }
});





