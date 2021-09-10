const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x){
    const newh2 = document.createElement("li");
    const newContent = document.createTextNode(x);
    newh2.appendChild(newContent);
    const bodyy = document.querySelector("ol");
    bodyy.appendChild(newh2)
}


function kata1() {
    let meuRetorno = [];

    for (let a = 1; a <= 25; a++) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}




function kata2() {
    let meuRetorno = [];

    for (let a = 25; a >= 1; a--) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata3() {
    let meuRetorno = [];

    for (let a = -1; a >= -25; a--) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata4() {
    let meuRetorno = [];

    for (let a = -25; a <= -1; a++) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata5() {
    let meuRetorno = [];

    for (let a = 25; a >= -25; a--) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata6() {
    let meuRetorno = [];

    for (let a = 3; a <= 100; a += 3) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata7() {
    let meuRetorno = [];

    for (let a = 7; a <= 100; a += 7) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata8() {
    let meuRetorno = [];

    for (let a = 99; a >= 1; a -= 3) {
        meuRetorno.push(a)



        for (let b = 98; b >= 1; b -= 7) {
            meuRetorno.push(b)


        }


    }
    return showResults(meuRetorno);
}

function kata9() {
    let meuRetorno = [];

    for (let a = 5; a <= 100; a += 5) {
        meuRetorno.push(a)

    }

    return showResults(meuRetorno);
}

function kata10() {
    let meuRetorno = [];

    for (let a = 0; a <= 19; a++) {
        meuRetorno.push(sampleArray[a])

    }

    return showResults(meuRetorno);
}

function kata11() {
    let meuRetorno = [];

    for (let a = 1; a <= 19; a++) {

        if (sampleArray[a] % 2 == 0) { meuRetorno.push(sampleArray[a]) }

    }

    return showResults(meuRetorno);
}


function kata12() {
    let meuRetorno = [];

    for (let a = 0; a <= 19; a++) {

        if (sampleArray[a] % 2 == 1) { meuRetorno.push(sampleArray[a]) }

    }

    return showResults(meuRetorno);
}

function kata13() {
    let meuRetorno = [];

    for (let a = 0; a <= 19; a++) {
        if (sampleArray[a] === 712) { meuRetorno.push(sampleArray[a]) }
        else if (sampleArray[a] === 456) { meuRetorno.push(sampleArray[a]) }
        else if (sampleArray[a] === 848) { meuRetorno.push(sampleArray[a]) }
        else if (sampleArray[a] === 472) { meuRetorno.push(sampleArray[a]) }

    }

    return showResults(meuRetorno);
}

function kata14() {

    let meuRetorno = [];

    for (let a = 0; a <= 19; a++) {

        meuRetorno.push(sampleArray[a] * sampleArray[a])

    }

    return showResults(meuRetorno);
}

function kata15() {
    let meuRetorno = [];
    let x = 0
    for (let a = 1; a <= 20; a++) {
        x += a

    }
    meuRetorno.push(x)
    return showResults(meuRetorno);
}

function kata16() {
    let meuRetorno = [];
    let x = 0
    for (let a = 0; a <= 19; a++) {
        x += sampleArray[a]

    }
    meuRetorno.push(x)
    return showResults(meuRetorno);
}

function kata17() {
    let x = sampleArray[0]
    for (let a = 0; a <= 19; a++) {
if (sampleArray[a] < x) {
    x = sampleArray[a]
}
    }
    return showResults(x);
}

function kata18() {
    let x = sampleArray[0]
    for (let a = 0; a <= 19; a++) {
if (sampleArray[a] > x) {
    x = sampleArray[a]
}
    }
    return showResults(x);
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
