$('.verMais').click(function() {
	id = $(this).attr( 'id' );
	$(this).toggleClass("verMaisActive");
	if ('#clublist' + id) {
		$('#clublist' + id).toggleClass("listActiveClub");
		$('html, body').animate({scrollTop: $('#clublist' + id)[0].scrollHeight}, 800);
	};
	if ('#escolalist' + id) {
		$('#escolalist' + id).toggleClass("listActiveEscola");
		$('html, body').animate({scrollTop: $('#escolalist' + id)[0].scrollHeight}, 800);
	};
	if ('#investidorlist' + id) {
		$('#investidorlist' + id).toggleClass("listActiveInvestidor");
		$('html, body').animate({scrollTop: $('#investidorlist' + id)[0].scrollHeight}, 800);
	};
	if ('#familialist' + id) {
		$('#familialist' + id).toggleClass("listActiveFamilia");
		$('html, body').animate({scrollTop: $('#familialist' + id)[0].scrollHeight}, 800);
	};

});