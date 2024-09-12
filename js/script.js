function hitungluassegitiga(){
    let nilaialas = document.getElementById("alas").value;
    let nilaitinggi = document.getElementById("tinggi").value;

    if (nilaialas == '' || nilaitinggi == '') {
        alert('Harap mengisi nilai dengan benar');
     }

    let hasilluassegitiga = (parseInt(nilaialas) * parseInt(nilaitinggi))/2;

    document.getElementById('resultluassegitiga').value = hasilluassegitiga;
}

// KELILINGJAJARGENJANG
function hitungkelilingsegitiga(){
    let nilaiab = document.getElementById("sisiab").value;
    let nilaibc = document.getElementById("sisibc").value;
    let nilaica = document.getElementById("sisica").value;

    if (nilaiab == '' || nilaibc == '' || nilaica == '') {
        alert('Harap mengisi nilai dengan benar');
     }

    let hasilkelilingsegitiga = parseInt(nilaiab) + parseInt(nilaibc) + parseInt(nilaica);

    document.getElementById('resulkelilingsegitiga').value = hasilkelilingsegitiga;
}

// LUAS JAJARGENJANG
function hitungluasjajargenjang(){
    let nilaialas = document.getElementById("alasjajargenjang").value;
    let nilaitinggi = document.getElementById("tinggijajargenjang").value;

    if (nilaialas == '' || nilaitinggi == '') {
        alert('Harap mengisi nilai dengan benar');
     }

    let hasilluasjajargenjang = parseInt(nilaialas) * parseInt(nilaitinggi);

    document.getElementById('resultluasjajargenjang').value = hasilluasjajargenjang;
}

// KELILING JAJARGENJANG
function hitungkelilingjajargenjang(){
    let nilaia = document.getElementById("nilaia-jajargenjang").value;
    let nilaib = document.getElementById("nilaib-jajargenjang").value;

    if (nilaia == '' || nilaib == '') {
        alert('Harap mengisi nilai dengan benar');
     }

    let hasilkelilingjajargenjang = (2 * parseInt(nilaia)) + (2 * parseInt(nilaib));

    document.getElementById('resultkelilingjajargenjang').value = hasilkelilingjajargenjang;
}

function reset(){
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('resultluasssegitiga').value = '';
}