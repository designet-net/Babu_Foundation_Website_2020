$(function() {
	var gid = readCookie('wni_Supporter_GlobalId');
	var gidHeader = $('.c-nav-modal__details').text().trim().split('Sponsor ID:')[1];

	if (!gid && gidHeader) {
		gid = gidHeader;

		setCookie('wni_Supporter_GlobalId', gid);
	}

	var tests = optimizely.get('state').getVariationMap();
	var test = 'var1';
	var children = [];
	var commitments = [];

	if (!gid) {
		render();
		return false;
	}

	getChildren().then(function() {
		if (
			commitments.length > 0
			&& typeof tests['18792820207'] !== 'undefined' 
			&& tests['18792820207']['id'] !== '18812991083'
		) {
			for (var i = 0; i < commitments.length; i++) {
				if (commitments[i].displayType === 'commitments') {
					children.push(commitments[i].needDescription.split(' ')[0]);
				}
			}

			if (children.length > 0) test = 'var2';
		}

		render();
	}).catch(function() {
		render();
	});

	function getChildren() {
		return $.ajax({
			url: '/api/commitments',
			type: 'GET',
			dataType: 'json'
		}).done(function(json) {
			commitments = json;
		});
	}

	function init() {
		$('.donate-array').each(function() {
			new DonateArray(this);
		});

		$('.js-donate').each(function() {
			new DonateForm(this);
		});

		$('.js-faq').each(function () {
			new Faq(this);
		});

		$('.js-homepage-sac').click(function(e) {
			setCookie('homepage-test-sac', 'true', 3);
		});
	}

	function render() {
		renderTemplate();
		init();

		if (test === 'var1') {
			window["optimizely"].push({
				"type": "bucketVisitor",
				"experimentId": "18792820207",
				"variationId": '18812991083'
			});
			return false;
		}

		if (
			typeof tests['18792820207'] !== 'undefined'
			&& tests['18792820207']['id'] === '18814991627'
		) {
				// know, personalized

				if (children.length === 1) {
					$('.js-var1__child-name').text(children[0]).addClass('text-cursive').addClass('text-blue-light');
				} else if (children.length > 1) {
					$('.js-var1__child-name').text('Your Children');
				}
			}
	}

	function renderTemplate() {
		var template = 'homepage-test-v4-' + test;

		$('.c-main-content').prepend(document.getElementById(template).innerHTML);
	}
});

function readCookie(a) {
	var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function addToCart(amount, tcmid, frequency) {
	if (typeof amount !== 'number' || typeof tcmid !== 'string') return false;

	if (typeof frequency === 'undefined') frequency = 'OneTime';

	if (['OneTime', 'Monthly'].indexOf(frequency) < 0) frequency = 'OneTime';

	if (amount < 5 || isNaN(amount)) return false;

	setCookie('homepage-test-donate', amount, 3);

	window.location.href = '/cart/addfund.aspx?tcmid=' + tcmid + '-16&amount=' + amount + '&frequency=' + frequency;
	return true;
}

function Message(element, content, type, removeMessages) {
	if (typeof element !== 'object' || typeof content === 'undefined') return false;

	if (typeof type === 'undefined') type = 'error';

	if (typeof removeMessage === 'undefined') removeMessages = true;

	var $element = $(element);

	if (removeMessages) $element.find('.message').remove();

	$element.append('<div class="message message-' + type + '">' + content + '</div>');
}

function DonateArray(element) {
	if (typeof element !== 'object') return false;

	var $form = $(element);
	var $amounts = $form.find('.donate-array__amount');
	var $amountOther = $form.find('.donate-array__amount-other');
	var $submit = $form.find('.donate-array__submit');
	var amount = 0;
	var frequency = $form.data('frequency');
	var fund = $form.data('fund');

	$amounts.each(function() {
		if ($(this).attr('selected')) {
			setAmount(parseFloat($(this).val()));
		}
	});

	$amounts.click(function(e) {
		e.preventDefault();

		var $amount = $(this);
		$amount.attr('selected', true).siblings('.donate-array__amount').attr('selected', false);

		amount = $amount.val();

		if (amount === 'Other') {
			amount = $amountOther.val();
			$amountOther.focus();
		}

		setAmount(parseFloat(amount));
	});

	$amountOther.keyup(function(e) {
		if (e.keyCode === 13) {
			submit();
			return false;
		}

		setAmount(parseFloat($amountOther.val()));
	});

	$submit.click(function(e) {
		e.preventDefault();

		submit();
	});

	function setAmount(number) {
		amount = number;

		if (amount >= 5 && !isNaN(amount)) {
			$form.find('.message').remove();
		} else {
			new Message($form[0], 'Please enter an amount greater than or equal to $5.00', 'error');
		}
	}

	function submit() {
		$submit.prop('disabled', true);

		if (!addToCart(amount, fund, frequency)) {
			new Message($form[0], 'Please enter an amount greater than or equal to $5.00', 'error');
			$submit.prop('disabled', false);
			return false;
		}
	}
}


function DonateForm(element) {
	if (typeof element !== 'object') return false;

	var $form = $(element);
	var $frequency = $form.find('.js-donate__frequency');
	var $input = $form.find('.js-donate__input');
	var $amount = $form.find('.js-donate__amount');
	var $submit = $form.find('.js-donate__submit');

	var state = {
		amount: 0,
		fund: null,
		frequency: 'OneTime'
	};

	setAmount($amount.val());
	setFund($form.data('fund'));

	$amount.keyup(function(e) {
		if (e.keyCode === 13) {
			submit();
			return false;
		}

		setAmount($amount.val());
	});

	$submit.click(function(e) {
		e.preventDefault();

		submit();
	});

	function setAmount(number) {
		if (typeof number === 'undefined') number = 0;

		state.amount = parseFloat(number);

		if (state.amount >= 5 && !isNaN(state.amount)) {
			$form.find('.message').remove();
		} else {
			new Message($form[0], 'Please enter an amount greater than or equal to $5.00', 'error');
		}
	}

	function setFund(tcmid) {
		if (typeof tcmid !== 'string') return false;

		state.fund = tcmid;
	}

	function submit() {

		$submit.prop('disabled', true);
		setAmount($amount.val());

		if (!addToCart(state.amount, state.fund, state.frequency)) {
			$submit.prop('disabled', false);
			return false;
		}
	}
}

function Faq(element) {
	if (typeof element !== 'object') {
		return false;
	}

	var $list = $(element);
	var $labels = $list.find('.js-faq__label');

	$labels.click(function (e) {
		e.preventDefault();

		$(this).parents('.js-faq__item').toggleClass('is-active');
		$(this).siblings('.js-faq__answer').slideToggle(200);
	});
}