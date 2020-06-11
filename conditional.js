//soal no.1
let position = prompt('Choose your position ...')

if (position === 'CEO') {
    console.log('Tugas Anda adalah Merancang dan mengkomunikasikan visi perusahaan')
} else if (position === 'CTO') {
    console.log('Tugas Anda adalahMenyatukan pengembangan produk')
} else if (position === 'CFO') {
    console.log('Tugas Anda adalahMembentuk strategi penggalangan dana')
} else if (position === 'COO') {
    console.log('Tugas Anda adalahMengatur perusahaan')
} else {
    console.log('Anda tidak mempunyai tugas')
}

//soal no.2
let number1 = Number(prompt('please write number here ..'))
let number2 = Number(prompt('please write number here ..'))

if (number1 >= number2) {
    console.log('Nilai number 1 lebih besar daripada number 2')
} else if (number1 <= number2) {
    console.log('Nilai number 2 lebih besar daripada number 1')
} else {
    console.log('Nilai number 2 sama dengan number 1')
}

//soal no.3
let day = Number(prompt('please write number here ..'))

switch (day) {
    case 1:
        console.log('Hari minggu')
        break;
    case 2:
        console.log('Hari senin')
        break;
    case 3:
        console.log('Hari selasa')
        break;
    case 4:
        console.log('Hari rabu')
        break;
    case 5:
        console.log('Hari kamis')
        break;
    case 6:
        console.log('Hari jumat')
        break;
    case 7:
        console.log('Hari sabtu')
        break;
    case 8:
        console.log('Hari minggu')
        break;
}

//soal no.4
let game = prompt('please write here ..')

switch (game) {
    case "UP":
        console.log('Karakter berjalan keatas')
        break;
    case "RIGHT":
        console.log('Karakter berjalan kekanan')
        break;
    case "BOTTOM":
        console.log('Karakter berjalan kebawah')
        break;
    case "LEFT":
        console.log('Karakter berjalan kekiri')
        break;
}