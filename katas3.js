const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x){
    const newh2 = document.createElement("li");
    const newContent = document.createTextNode(x);
    newh2.appendChild(newContent);
    const bodyy = document.querySelector("ul");
    bodyy.appendChild(newh2)
}


function kata1() {
    let meuRetorno = [];

    for (let a = 1; a <= 25; a++) {
        meuRetorno.push(a)

    }

    return 'kata 1: '+meuRetorno
}

showResults(kata1())


function kata2() {
    let meuRetorno = [];

    for (let a = 25; a >= 1; a--) {
        meuRetorno.push(a)

    }

    return 'kata 2: '+meuRetorno
}

showResults(kata2())

function kata3() {
    let meuRetorno = [];

    for (let a = -1; a >= -25; a--) {
        meuRetorno.push(a)

    }

    return 'kata 3: '+meuRetorno
}

showResults(kata3())

function kata4() {
    let meuRetorno = [];

    for (let a = -25; a <= -1; a++) {
        meuRetorno.push(a)

    }

    return 'kata 4: '+meuRetorno
}

showResults(kata4())

function kata5() {
    let meuRetorno = [];

    for (let a = 25; a >= -25; a--) {
        meuRetorno.push(a)

    }

    return 'kata 5: '+meuRetorno
}

showResults(kata5())

function kata6() {
    let meuRetorno = [];

    for (let a = 3; a <= 100; a += 3) {
        meuRetorno.push(a)

    }

    return 'kata 6: '+meuRetorno
}

showResults(kata6())

function kata7() {
    let meuRetorno = [];

    for (let a = 7; a <= 100; a += 7) {
        meuRetorno.push(a)

    }

    return 'kata 7: '+meuRetorno
}

showResults(kata7())

function kata8() {
    let meuRetorno = [];

    for (let i = 100; i >= 1; i--) {
        if(i % 3 == 0 & i % 7 == 0){meuRetorno.push(i)}
        else if (i % 3 == 0){meuRetorno.push(i)}
        else if (i % 7 == 0){meuRetorno.push(i)}

    }
    return 'kata 8: '+meuRetorno
}

showResults(kata8())

function kata9() {
    let meuRetorno = [];

    for (let a = 5; a <= 95; a += 10) {
        meuRetorno.push(a)

    }

    return 'kata 9: '+meuRetorno
}

showResults(kata9())

function kata10() {
    let meuRetorno = [];

    for (let a = 0; a <= 19; a++) {
        meuRetorno.push(sampleArray[a])

    }

    return 'kata 10: '+meuRetorno
}

showResults(kata10())

function kata11() {
    let meuRetorno = [];

    for (let a = 0; a < sampleArray.length; a++) {

        if (sampleArray[a] % 2 == 0) { meuRetorno.push(sampleArray[a]) }

    }

    return 'kata 11: '+meuRetorno
}

showResults(kata11())

function kata12() {
    let meuRetorno = [];

    for (let a = 0; a < sampleArray.length; a++) {

        if (sampleArray[a] % 2 == 1) { meuRetorno.push(sampleArray[a]) }

    }

    return 'kata 12: '+meuRetorno
}

showResults(kata12())

function kata13() {
    let meuRetorno = [];

    for (let a = 0; a < sampleArray.length; a++) {
        if (sampleArray[a] % 8 == 0) { meuRetorno.push(sampleArray[a]) }
        
    }

    return 'kata 13: '+meuRetorno
}

showResults(kata13())

function kata14() {

    let meuRetorno = [];

    for (let a = 0; a < sampleArray.length; a++) {

        meuRetorno.push(sampleArray[a] * sampleArray[a])

    }

    return 'kata 14: '+meuRetorno
}

showResults(kata14())

function kata15() {
    let meuRetorno = [];
    let x = 0
    for (let a = 1; a <= 20; a++) {
        x += a

    }
    meuRetorno.push(x)
    return 'kata 15: '+meuRetorno
}

showResults(kata15())

function kata16() {
    let meuRetorno = [];
    let x = 0
    for (let a = 0; a < sampleArray.length; a++) {
        x += sampleArray[a]

    }
    meuRetorno.push(x)
    return 'kata 16: '+meuRetorno
}

showResults(kata16())

function kata17() {
    let x = 9999999999999999
    for (let a = 0; a < sampleArray.length; a++) {
if (sampleArray[a] < x) {
    x = sampleArray[a]
}
    }
    return 'kata 17: '+ x
}

showResults(kata17())

function kata18() {
    let x = 0
    for (let a = 0; a < sampleArray.length; a++) {
if (sampleArray[a] > x) {
    x = sampleArray[a]
}
    }
    return 'kata 18: '+ x
}

showResults(kata18())

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
