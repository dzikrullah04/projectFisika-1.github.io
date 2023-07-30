(function() {
	$('.scroll-page').on('click', function() {
		var offset = 0;
		var speed = 800;
		var target = $(this.hash);

		$('nav .menu a').each(function() {
			$(this).removeClass('active');
		});

		$(this).addClass('active');

		$('html, body').animate({
			scrollTop: target.offset().top - offset
		}, speed, 'swing'); });

});

(window).scroll(function(event) {
	var scrollPos = $(document).scrollTop();
	console.log(scrollPos);
	$('nav .menu a').each(function() {
		var curLink = $(this);
		var refElement = $(curLink.attr('href'));

		if (refElement.position().top <= scrollPos + 60) {
			$('nav .menu a').removeClass('active');
			curLink.addClass('active');

		} else {
			curLink.removeClass('active');
		}
	});
});


// rumus hitung
  // Tambahkan event listener pada kedua input untuk menghitung penjumlahan secara otomatis
  var input1 = document.getElementById('r');
  var input11 = document.getElementById('rr');
  var input2 = document.getElementById('q1');
  var input22 = document.getElementById('q11');
  var input3 = document.getElementById('q2');
  var input33 = document.getElementById('q21');

  input1.addEventListener('input', hitungPenjumlahan);
  input11.addEventListener('input', hitungPenjumlahan);
  input2.addEventListener('input', hitungPenjumlahan);
  input22.addEventListener('input', hitungPenjumlahan);
  input3.addEventListener('input', hitungPenjumlahan);
  input33.addEventListener('input', hitungPenjumlahan);

function hitungPenjumlahan() {
	// Ambil nilai dari input angka pertama dan kedua
	const r = parseFloat(document.getElementById('r').value);
	const rr = parseFloat(document.getElementById('rr').value);
	const q1 = parseFloat(document.getElementById('q1').value);
	const q11 = parseFloat(document.getElementById('q11').value);
	const q2 = parseFloat(document.getElementById('q2').value);
	const q21 = parseFloat(document.getElementById('q21').value);

	// Lakukan penjumlahan
	const Q11 = 10 ** q11;
	const Q21 = 10 ** q21;
	const Q1 = q1 * Q11;
	const Q2 = q2 * Q21;
	const q = Q1 * Q2;
	const RR = 10 ** rr;
	const R = r * RR;
	const RRR = R * R;
	const k = 9 * 10 ** 9;
	const qr = q / RRR;
	const hasil = qr * k;
	console.log(hasil);
	

// convert jawaban
const bilangan = hasil;

// Hitung logaritma basis 10 dari bilangan
const log10Bilangan = Math.log10(bilangan);

// Pisahkan bilangan menjadi dua bagian, yaitu angka utama dan eksponen
const angkaUtama = Math.floor(log10Bilangan);
const eksponen = log10Bilangan - angkaUtama;

// Hitung angka utama dan eksponen menjadi bentuk berpangkat
const angkaUtamaBerPangkat = bilangan / Math.pow(10, angkaUtama);
const eksponenBerPangkat = Math.pow(10, eksponen);

const hasilAkhir = `${angkaUtamaBerPangkat} x 10^${angkaUtama}`;


// const base = hasil;
// while (hasil % 10 === 0 && hasil !== 0) {
// 	hasil /= 10;
// 	exponent++;
//   }

//   if (exponent > 0) {
// 	const hasilAkhir = `${hasil} * 10^${exponent}`;
//   } else {
// 	return number;
//   }



	// Tampilkan hasil penjumlahan di elemen <p>
	var resultElement = document.getElementById('result');
	resultElement.textContent = "F = " + hasilAkhir + "N";
  }


