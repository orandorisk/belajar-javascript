  // inputan player
//   var tanya=true;
//   while(true){

 
//         var p = prompt('pilih: kertas, batu, gunting');
//         // inputan komputer
//         var comp = Math.random();

//         if(comp < 0.34){
//             comp = 'gajah';
//         }else if(comp >= 0.34 && comp < 0.67){
//            comp = 'orang'; 
//         }else{
//             comp = 'semut';
//         }
//         // peraturan
//         var hasil = '';
//         if( p == comp ) {
//             hasil = 'SERI!';
//         } else if ( p == 'gajah' ) {
//             hasil = ( comp =='orang' ) ? 'MENANG!' : 'KALAH!';
//         } else if (p == 'orang'){
//             hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
//         } else if ( p == 'semut'){
//             hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
//         } else {
//             hasil = 'memasukan nilai yang salah';
//         }
//         // jawaban
//         alert('anda memilih '+ p + ' computer memilih ' + comp + '\n hasilnya adalah ' + hasil);
//         // keluar
//      }
let play = true;
const kesempatan = 3;
alert("Tebak Angka dari 1 - 10\nKamu punya "+ kesempatan +" kali kesempatan");

const com = Math.floor(Math.random() * 10) + 1;
while(play){
    let i = kesempatan;
    for(i; i>0; i--){
        const p = prompt("Kesempatan ke- " + i);
        let j = i-1;
        if(p == com){
            alert('Angka yg kamu masukkan : ' + p +'\nSelamat Kamu Benar');
            break;
        }else if(p < com){
            if(j == 0){
                alert('gagal');
            }else{
                alert('Terlalu Rendah...\nAyo kamu masih punya ' + j + ' Kesempatan!');
            }
        }else if(p > com){
            if(j == 0){
                alert('gagal');
            }else{
                alert('Terlalu Tinggi...\nAyo kamu masih punya ' + j + ' kesempatan!');
            }
        }

    }

    play = confirm("Main Lagi?");
}