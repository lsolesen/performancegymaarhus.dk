/** ********************************************** **
	@Author			Dorin Grigoras
	@Website		www.stepofweb.com
	@Last Update	10:05 AM Sunday, January 12, 2014

	TABLE CONTENTS
	-------------------------------
		01. SCROLL TO
		02. SLIDER
		03. FITVIDS [removed on v1.3]
		04. OWL CAROUSEL
		05. ELEMENTS ANIMATION
		06. COUNT TO (number animate)
		07. CONTACT FORM
		08. NEWSLETTER SUBSCRIBE
		09. BACKSTRETCH BACKGROUND [STATIC LOGO - NOSLIDER]
		10. VIDEO BACKGROUND
		11. GOOGLE MAP
		12. MAGNIFIC POPUP
		13. PORTFOLIO
		14. STICKY TOP NAV
		15. FULLSCREEN
		16. VIDEO BACKGROUND
*************************************************** **/

	var _scrollSpeed			= 1000,
		_slider_delay			= 0, //4000,

		// @CONTACT FORM - TRANSLATE OR EDIT
		errMsg 					= 'Please complete all fields!',
		errEmail				= 'Invalid Email!',
		okSent					= '<strong>Thank You!</strong> Your message successfully sent!',
		buttonDisabled			= 'MESSAGE SENT';

		// set header height!
		window.navHeight 		= jQuery("#header").height();


/**	01. SCROLL TO
*************************************************** **/
	jQuery("a.scrollTo").bind("click", function(e) {
		e.preventDefault();

		var href = jQuery(this).attr('href');
		if(href != '#') {
			jQuery('html,body').stop().animate({scrollTop: jQuery(href).offset().top - window.navHeight}, _scrollSpeed, 'easeInOutExpo');
		}
	});

	jQuery("a.toTop").bind("click", function(e) {
		e.preventDefault();
		jQuery('html,body').stop().animate({scrollTop: 0}, 1000, 'easeInOutExpo');
	});





/**	02. SLIDER
*************************************************** **/
// jQuery(window).load(function() {

	// Home Slider (top)
	if(jQuery("#slider").length > 0) {
		jQuery("#slider").superslides({
			animation: "fade", 		// slide|fade
			pagination: true, 		// true|false
			play: false,	 		// false to disable autoplay -OR- miliseconds (eg.: 1000 = 1s)
			animation_speed: 600,	// animation transition

			elements: {
			  preserve: '.preserve',
			  nav: '.slides-navigation',
			  container: '.slides-container',
			  pagination: '.slides-pagination'
			}

		});
	}

	/* 
	// Stop on mouse over ! 
	jQuery('#slides').on('mouseenter', function() {
		jQuery(this).superslides('stop');
		// console.log('Stopped')
	});
	jQuery('#slides').on('mouseleave', function() {
		jQuery(this).superslides('start');
		// console.log('Started')
	});
	*/

// });

	

/**	03. FITVIDS
*************************************************** **/
	/*
		Removed on v1.3 - bootstrap used instead!
	*/


	

/**	04. CAROUSEL
	@OWL USAGE
	<div class="owl-carousel text-left" data-navigation="false" data-singleitem="true" data-autoplay="true" data-transition="fade" data-items="">
		<div class="item dragCursor">#item 1</div>
		<div class="item dragCursor">#item 2</div>
		<div class="item dragCursor">#item 3</div>
		<div class="item dragCursor">#item N</div>
	</div>
*************************************************** **/
	if(jQuery().owlCarousel) {
		owlCarouselInit(".owl-carousel");
	}

	function owlCarouselInit(divClass) {
		jQuery(divClass).each(function() {
			var t 			= jQuery(this),
				navigation 	= t.attr('data-navigation'),
				singleItem 	= t.attr('data-singleitem'),
				autoPlay 	= t.attr('data-autoplay'),
				transition 	= t.attr('data-transition'), // fade or false
				items 		= t.attr('data-items'), 	 // no of items

				navigation 	= (navigation == 'true') 	? true 		: false,
				singleItem 	= (singleItem == 'true') 	? true 		: false,
				autoPlay 	= (autoPlay == 'true') 		? true 		: false;
				transition 	= (transition == 'fade') 	? 'fade' 	: false;
				items 		= (items > 0) 				? items 	: 5;

			jQuery(t).owlCarousel({
				items: 				items,
				slideSpeed: 		300,
				paginationSpeed: 	600,
				navigation: 		navigation,
				singleItem: 		singleItem,
				autoPlay:			autoPlay,
				stopOnHover: 		true,
				autoHeight: 		false,
				transitionStyle: 	transition
			});
		});
	}

	// Services slider
	if(jQuery().carouFredSel) {
		jQuery('ul.services').carouFredSel({
			auto: false,
			swipe: {
				onTouch: true,
				onMouse: false
			},
			prev: '#service-prev',
			next: '#service-next',
			responsive: true,
			width: '100%',
			height: 'variable', 
			scroll: 1,
			items: {
				width: 292,
				height: 'variable',
				visible: {
					min: 1,
					max: 4
				}
			}
		});
	}






/**	05. ELEMENTS ANIMATION
*************************************************** **/
	jQuery('.animate_from_top').each(function () {
		jQuery(this).appear(function() {
			jQuery(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});	
	});

	jQuery('.animate_from_bottom').each(function () {
		jQuery(this).appear(function() {
			jQuery(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});	
	});


	jQuery('.animate_from_left').each(function () {
		jQuery(this).appear(function() {
			jQuery(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});	
	});


	jQuery('.animate_from_right').each(function () {
		jQuery(this).appear(function() {
			jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});

	jQuery('.animate_fade_in').each(function () {
		jQuery(this).appear(function() {
			jQuery(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});

	/**	@ANIMATE ELEMENTS **/
	if(jQuery().appear) {
		jQuery('*').each(function() {
			if(jQuery(this).attr('data-animation')) {
				var $animationName = jQuery(this).attr('data-animation');
				jQuery(this).appear(function() {
					jQuery(this).addClass('animated').addClass($animationName);
				});
			}
		});
	}

/**	06. COUNT TO (number animate)
*************************************************** **/
	if(jQuery().appear) {
		if(jQuery().countTo) {
			jQuery('.countTo').appear(function() {
				jQuery(this).each(function() {
					var $to = parseInt(jQuery(this).html());
					jQuery(this).countTo({
						from: 				0,
						to: 				$to,
						speed: 				4000,
						refreshInterval: 	120
					});
				});
			});
		}
	};


/**	08. NEWSLETTER SUBSCRIBE
*************************************************** **/
jQuery("#newsletter-subscribe").bind("click", function(e) {
		e.preventDefault();

		var email 			= jQuery("#newsletter_email").val(),		// required
			captcha 		= jQuery("#newsletter_captcha").val(),		// required TO BE EMPTY if humans
			_action			= jQuery("#newsletterForm").attr('action'),	// form action URL
			_method			= jQuery("#newsletterForm").attr('method');	// form method

		// Remove error class
		jQuery("input, textarea").removeClass('err');


		// SEND VIA AJAX
		$.ajax({
			url: 	_action,
			data: 	{ajax:"true", action:'newsletter_subscribe', email:email},
			type: 	_method,
			error: 	function(XMLHttpRequest, textStatus, errorThrown) {

				alert('Server Internal Error'); // usualy on headers 404

			},

			success: function(data) {
				data = data.trim(); // remove output spaces


				// PHP RETURN: Mandatory Fields
				if(data == '_required_') {
					alert(errMsg);
				} else

				// PHP RETURN: INVALID EMAIL
				if(data == '_invalid_email_') {
					alert(errEmail);
				} else

				// VALID EMAIL
				if(data == '_ok_') {

					jQuery("#newsletter_email").val('');
					$('#newsletterModal').modal();

				} else {

					// PHPMAILER ERROR
					alert(data); 

				}
			}
		});

});





/**	09. BACKSTRETCH BACKGROUND [STATIC LOGO - NOSLIDER]
*************************************************** **/
	if(jQuery().backstretch && jQuery("#static-logo").length > 0) {
		var background_image = jQuery("#static-logo").attr('data-background');

		if(background_image) {
			jQuery("#slider").backstretch(background_image, {speed: 150});
			jQuery("#slider").css({"background":"none"});
		}

	}

/**	10. VIDEO BACKGROUND
*************************************************** **/
/*
	var videoBg = {
		mp4:'video.mp4',
		ogv:'video.ogv',
		webm:'video.webm',
		poster:'video.jpg',
		scale:true,
		zIndex:0,
		position:"absolute",
		opacity:1,
		fullscreen:true
	};
*/
	if(jQuery().videoBG && jQuery('#videoBg').length > 0) {
		jQuery('#videoBg').videoBG(videoBg);
	}



/**	12. MAGNIFIC POPUP
*************************************************** **/
	function _popups() {
		if(jQuery().magnificPopup) {

			jQuery('.popup, .popup-image').magnificPopup({ 
				type: 'image',
				fixedContentPos: 	false,
				fixedBgPos: 		false,
				mainClass: 			'mfp-no-margins mfp-with-zoom',
				image: {
					verticalFit: 	true
				},
				zoom: {
					enabled: 		true,
					duration: 		300
				}
			});

			// Magnific Popup for videos and google maps
			jQuery('.popup-video, .popup-gmap').magnificPopup({
				disableOn: 			700,
				type: 				'iframe',
				fixedContentPos: 	false,
				fixedBgPos: 		false,
				mainClass: 			'mfp-fade',
				removalDelay: 		160,
				preloader: 			false
			});

			// Magnific Popup for a normal inline element
			jQuery('.popup-inline').magnificPopup({
				type: 		'inline'
			});

			// Magnific Popup for a project with rich content
			jQuery('.popup-project').magnificPopup({
				type: 		'inline',
				alignTop: 	true
			});

			// Magnific Popup for an ajax popup without rich content
			jQuery('.popup-ajax').magnificPopup({
				type: 		'ajax',
				alignTop:	 true
			});

		}
	}	_popups();



/**	13. PORTFOLIO
*************************************************** **/
	jQuery(window).load(function() {
		jQuery(".masonry-list").each(function() {

			var $container = jQuery(this);

			$container.waitForImages(function() {

				$container.masonry({
					itemSelector: '.masonry-item'
				});

			});

		});
	});


	jQuery("ul.isotope-filter").each(function() {

		var source = jQuery(this);
		var destination = jQuery("ul.sort-destination[data-sort-id=" + jQuery(this).attr("data-sort-id") + "]");

		if(destination.get(0)) {

			jQuery(window).load(function() {

				destination.isotope({
					itemSelector: "li",
					layoutMode: 'sloppyMasonry'
				});

				source.find("a").click(function(e) {

					e.preventDefault();

					var $this = jQuery(this),
						sortId = $this.parents(".sort-source").attr("data-sort-id"),
						filter = $this.parent().attr("data-option-value");

					source.find("li.active").removeClass("active");
					$this.parent().addClass("active");

					destination.isotope({
						filter: filter
					});

					// self.location = "#" + filter.replace(".","");

					jQuery(".sort-source-title[data-sort-id=" + sortId + "] strong").html($this.html());

					return false;

				});


				/*
					jQuery(window).bind("hashchange", function(e) {

						var hashFilter = "." + location.hash.replace("#",""),
							hash = (hashFilter == "." || hashFilter == ".*" ? "*" : hashFilter);

						source.find("li.active").removeClass("active");
						source.find("li[data-option-value='" + hash + "']").addClass("active");

						destination.isotope({
							filter: hash
						});

					});
					var hashFilter = "." + (location.hash.replace("#","") || "*");


					var initFilterEl = source.find("li[data-option-value='" + hashFilter + "'] a");

					if(initFilterEl.get(0)) {
						source.find("li[data-option-value='" + hashFilter + "'] a").click();
					} else {
						source.find("li:first-child a").click();
					}
				*/


			});

		}

	});


	
	// External Portfolio
	jQuery("a.ajax-project").bind("click", function(e) {
		e.preventDefault();

		var href = jQuery(this).attr('href');

		$.ajax({
			url: 	href,
			data: 	{ajax:"true"},
			type: 	"get",
			error: 	function(XMLHttpRequest, textStatus, errorThrown) {

				alert('Server Internal Error'); // usualy on headers 404

			},

			success: function(data) {
				jQuery('body').append('<div id="ajax_modal">' + data + '</div>');
				jQuery("#ajax_modal").fadeIn(300, function() {
					// jQuery("body").fitVids();			// fitvids
					owlCarouselInit(".owl-carousel");	// carousel
					_popups();

					// close modal
					jQuery("button.close-modal").bind("click", function(e) {
						jQuery("#ajax_modal").fadeOut(300, function() {
							jQuery('html,body').css({"overflow-y":"auto"});
							jQuery(this).remove();
						});
					});

					// Esc key
					jQuery(document).keydown(function(e){
						var code = e.keyCode ? e.keyCode : e.which;
						if(code === 27) {
							jQuery("#ajax_modal").fadeOut(300, function() {
								jQuery('html,body').css({"overflow-y":"auto"});
								jQuery(this).remove();
							});
						}
					});

				});

				// hide page scroll
				jQuery('html,body').css({"overflow-y":"hidden"});
			}
		});
		
	});



/**	14. STICKY TOP NAV
*************************************************** **/
	// -----------------------------------------------------------------------------------
		// Fullscreen Height - keep it here to avoid sticky menu bug!
		if(jQuery(".full-screen").length > 0) {
			_fullscreen();

			jQuery(window).resize(function() {
				_fullscreen();
			});
		}
		function _fullscreen() {

			var _screenHeight = jQuery(window).height();
			jQuery(".full-screen, .full-screen ul, .full-screen li").height(_screenHeight);

		}
	// -----------------------------------------------------------------------------------

	if(jQuery("#home").length > 0) {

		window.isOnTop 		= true;
		window.homeHeight 	= jQuery("#home").height() - window.navHeight;
		 /*
			window.isOnTop = avoid bad actions on each scroll
			Benefits: no unseen jquery actions, faster rendering
		 */
		jQuery(window).scroll(function() {
			if(jQuery(document).scrollTop() > window.homeHeight) {
				if(window.isOnTop === true) {
					jQuery('#header').addClass('fixed');
					window.isOnTop = false;
				}
			} else {
				if(window.isOnTop === false) {
					jQuery('#header').removeClass('fixed');
					window.isOnTop = true;
				}
			}
		});

		jQuery(window).resize(function() {
			window.homeHeight = jQuery("#home").height() - window.navHeight;
		});

	}

	// mobile - hide on click!
	jQuery(document).bind("click", function() {
		if(jQuery("div.navbar-collapse").hasClass('in')) {
			jQuery("#mobileMenu").trigger('click');
		}
	});




/**	15. FULLSCREEN
 *************************************************** **/
	if(navigator.userAgent.indexOf("MSIE") > 0) {
		/* ie */
	} else { 
		jQuery("a.btn-fullscreen").show(); 
	}

	jQuery("a.btn-fullscreen").bind("click", function(e) {
		e.preventDefault();

		if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods

			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}

		} else {

			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}

		}
	});





/**	16. VIDEO BACKGROUND
	<script type="text/javascript" src="assets/plugins/jquery.mb.YTPlayer.js"></script>

	<!-- video audio icon -->
	<a href="#" id="video-volume"><i class="fa fa-volume-down"></i></a>

	<!-- Video Background - replace videoURL with your youtube video URL -->
	<a id="YTPlayer" class="player" data-property="{videoURL:'http://www.youtube.com/watch?v=_zkf7aliGKk',containment:'body',autoPlay:true, mute:true, startAt:18, opacity:1}">youtube</a>
	<!--/Video Background -->
*************************************************** **/
	if(jQuery().mb_YTPlayer) {

		// var onMobile = false;
		// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }

		// if((onMobile === false)) {

			jQuery(".player").mb_YTPlayer();
			jQuery("#home").css({"background":"none"});

			jQuery("#video-volume").bind("click", function(e) {
				e.preventDefault();

				jQuery('#YTPlayer').toggleVolume();
			});

		// } else {

			// jQuery(".player , #video-volume").hide();

		// }

	}




/** MISC
*************************************************** **/
	// hide body scroll if modal is open
	jQuery("#contactModal").mouseenter(function(){
		jQuery("html, body").css("overflow", "hidden"); 
	}).mouseleave(function(){
		jQuery("html, body").css("overflow", "visible");
	});

	// easing - only needed
	jQuery.extend( jQuery.easing,{
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
	});

	// Hover Effect - opacity effect
	jQuery('#portfolio li, #quick-blog .quick-hover').hover(function(){
		jQuery(this).siblings().addClass('faded');
	}, function(){
		jQuery(this).siblings().removeClass('faded');
	});

	jQuery(document).euCookieLawPopup().init({
		cookiePolicyUrl : 'http://performancegymaarhus.dk/privatlivspolitik',
		popupPosition : 'bottom',
		colorStyle : 'default',
		compactStyle : false,
		popupTitle : 'Dette website bruger cookies',
		popupText : 'Vi bruger cookies for at du får den bedste oplevelse af vores website. Hvis du fortsætter, så går vi ud fra, at du også elsker småkager.',
		buttonContinueTitle : 'Fortsæt',
		buttonLearnmoreTitle : 'Se mere',
		buttonLearnmoreOpenInNewWindow : true,
		agreementExpiresInDays : 30,
		autoAcceptCookiePolicy : false,
		htmlMarkup : null
	});
