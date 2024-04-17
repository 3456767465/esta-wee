const pantallaCalc = document.querySelector(".pantallaCalculadora")

const botones = document.querySelectorAll(".btnCalc")

botones.forEach(varBoton => {
    varBoton.addEventListener("click", () => {
        console.log(varBoton.textContent)
        if (varBoton.id == "resetCalculadora") {
            pantallaCalc.textContent = "0";
            return;
        }

        if (varBoton.id == "borrarCalculadora") {
            if (pantallaCalc.textContent.length == 1 || pantallaCalc.textContent == "Error!") {
                pantallaCalc.textContent = "0";
            } else {
                pantallaCalc.textContent = pantallaCalc.textContent.slice(0, -1)
            }
            return
        }


        if (varBoton.id == "igualCalculadora") {
            try {
                pantallaCalc.textContent = eval(pantallaCalc.textContent)
            } catch {
                pantallaCalc.textContent = "Error!";
            }
            return;
        }

        if(pantallaCalc.textContent == "0" || pantallaCalc.textContent == "Error!") {
            pantallaCalc.textContent = varBoton.textContent
        } else {
            pantallaCalc.textContent += varBoton.textContent
        }

    })
});