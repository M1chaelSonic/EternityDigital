
// ЮТУБ ШНЯГА ДЛЯ ОПТИМИЗАЦИИ 
function youTubes_makeDynamic() {
			var $ytIframes = $('iframe[src*="youtube.com"]');
			$ytIframes.each(function (i,e) {
						var $ytFrame = $(e);
						var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];
						var $ytLoader = $('<div class="ytLoader">');
						$ytLoader.append($('<img class="cover" src="https://i.ytimg.com/vi/'+ytKey+'/hqdefault.jpg">'));
						$ytLoader.data('$ytFrame',$ytFrame);
						$ytFrame.replaceWith($ytLoader);
						$ytLoader.click(function () {
								var $ytFrame = $ytLoader.data('$ytFrame');
								$ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
								$ytLoader.replaceWith($ytFrame);
						});
			});
};


$(document).ready(function () {youTubes_makeDynamic()});





			function youTubes_makeDynamic() {


							var $ytIframes = $('iframe[src*="youtube.com"]');


							$ytIframes.each(function (i,e) {


											var $ytFrame = $(e);


											var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];


											var $ytLoader = $('<div class="ytLoader">');


											$ytLoader.append($('<img class="cover" src="images/постер.JPEG">'));

											$ytLoader.data('$ytFrame',$ytFrame);


											$ytFrame.replaceWith($ytLoader);


											$ytLoader.click(function () {


															var $ytFrame = $ytLoader.data('$ytFrame');


															$ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');


															$ytLoader.replaceWith($ytFrame);


											});


							});


			};


                $(document).ready(function () {youTubes_makeDynamic()});




// БУРГЕР
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("burger").addEventListener("click", function(){
		document.querySelector("header").classList.toggle("open")
	})
})


// ЗАКРЫТЬ БУРГЕР ПРИ НАЖАТИИ НА ССЫЛКУ

$('.menu-item').click(function (event) {
        $('.menu-item').toggleClass('active');
        $('header').toggleClass('open');
});


// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector(".header").classList.remove("open")
    }
});


// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function () {
	document.getElementById("my-modal").classList.add("open")
})


document.getElementById("open-modal-btn2").addEventListener("click", function () {
	document.getElementById("my-modal").classList.add("open")
})

document.getElementById("open-modal-btn3").addEventListener("click", function () {
	document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
	document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("my-modal").classList.remove("open")
	}
});


