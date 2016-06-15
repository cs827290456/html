// JavaScript Document
$(function() {
	
	var oListNavLi = $('.list-nav-sub').siblings();
	var oListFootNavLi = $('.footer-nav-sub').siblings();
	
	oListNavLi.on('click',function() {
		var _selfChild = $(this).siblings('.list-nav-sub');
		if(_selfChild.is(':hidden')) {
			_selfChild.slideDown('fast');
			$(this).parent().find('i:first').attr('class','icon minus');
		}else {
			_selfChild.slideUp('fast');
			$(this).parent().find('i:first').attr('class','icon plus');
		}
	});
	
	oListFootNavLi.on('click',function() {
		var _selfChild = $(this).siblings('.footer-nav-sub');
		if(_selfChild.is(':hidden')) {
			oListFootNavLi.parent().removeClass('active');
			$(this).parent().addClass('active');
		}else {
			$(this).parent().removeClass('active');
		}
		return false;
	});
	
	
	/*$('.fold-nav').find('a img').on('click',function() {
		if($('.fold-nav-list').is(':hidden')) {
			$('.fold-nav').addClass('active');
		}else {
			$('.fold-nav').removeClass('active');
		}
		return false;
	});*/
	
	$('.comment-sort-list').find('a').on('click',function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		return false;
	});
	
	$(document).click(function() {
		$('.fold-nav').removeClass('active');
		//oListFootNavLi.parent().removeClass('active');
	});
	
	$(document).on('touchmove',function() {
		$('.fold-nav').removeClass('active');
		oListFootNavLi.parent().removeClass('active');
	});
	
	
	$('.plusNum').on('click',function() {
		var val = parseInt($(this).siblings('.li-amount').val());
		var _amount = $(this).siblings('.li-amount');
		_amount.val(val + 1);
	});
	
	$('.minusNum').on('click',function() {
		var val = parseInt($(this).siblings('.li-amount').val());
		var _amount = $(this).siblings('.li-amount');
		if(val <= 1)
			return false;
		_amount.val(val - 1);
	});
	
	$('.tube-edit').on('click',function() {
		var oTubeDel = $(this).parent().siblings().find('.tube-del');
		if(oTubeDel.is(':hidden')) {
			oTubeDel.show();
		}else {
			oTubeDel.hide();
		}
	});
});