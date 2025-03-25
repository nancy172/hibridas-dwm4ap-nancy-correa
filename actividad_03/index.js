const fs = require('fs');

// Se lee nota1.txt
fs.readFile('nota1.txt', function (err, data1) {
    if(err){
        console.error("Ups...hubo un error al leer nota1:", err);
    } else{
        // Se lee nota2.txt
        fs.readFile('nota2.txt', function (err, data2){
            if(err){
                console.error("Ups...hubo un error al leer nota2:", err);
            } else {
                // Se concatena y se pasa a mayúsculas
                const frase = (data1 + data2).toUpperCase();

                // Se escribe frase.txt
                fs.writeFile('frase.txt', frase, function(err){
                    if(err){
                        console.error("Ups...hubo un error al escribir frase.txt:", err);
                    } else {
                        console.log("Frase creada correctamente.")
                    }
                })

            }
        })
    }
})