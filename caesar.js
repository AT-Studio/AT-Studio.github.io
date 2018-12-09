/**
JavaScript file for caesar.html
By: Alexander Thieler
*/

window.onload = function() {

	var plainText = document.getElementById('plaintext');
	var cipherText = document.getElementById('ciphertext');

	var plainTextShift = document.getElementById('plantext-shift');

	var encodeButton = document.getElementById('encode-button');
	var decodeButton = document.getElementById('decode-button');

	encodeButton.onclick = function() {

		var text = plainText.value.toLowerCase();
		var shift = Number(plainTextShift.value);
		var cipher = '';

		for (var i = 0; i < text.length; i++) {
			var c = text.charCodeAt(i);
			if (c >= 97 && c <= 122) {
				c -= 97;
				c = (c + shift) % 26;
				c += 97;
			}
			c = String.fromCharCode(c);
			cipher += c;
		}

		cipherText.value = cipher;

	}

	decodeButton.onclick = function() {

		var cipher = cipherText.value.toLowerCase();
		var shift = -Number(plainTextShift.value);
		var text = '';

		for (var i = 0; i < cipher.length; i++) {
			var c = cipher.charCodeAt(i);
			if (c >= 97 && c <= 122) {
				c -= 97;
				c = (c + shift + 26) % 26;
				c += 97;
			}
			c = String.fromCharCode(c);
			text += c;
		}

		plainText.value = text;

	}

}

