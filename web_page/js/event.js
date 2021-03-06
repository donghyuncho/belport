$(function(){
	/* GNB */
	(function(){
		var gnb = $( '#gnb' ),
			mainMenus = gnb.find( '.main_menu > li' ),
			mainMenuLinks = gnb.find( 'a' ),
			closeItems = $( '.key_out' );
			
		mainMenuLinks.on( 'mouseenter focus', function(){
			gnbAction.checkSubMenu( mainMenus, $( this ) );
		});
		
		gnb.on( 'mouseleave', function(){
			gnbAction.closeSubByMouse( mainMenus );
		});
		closeItems.on( 'focus', function(){
			gnbAction.closeSubByKeyboard( mainMenus );
		});
	})();
	
	/* Bottom Nav */
	(function(){
		var bottomNav = $( '#bottom_nav' ),
			bottomNavWrap = bottomNav.find( '.bottom_nav_wrap' ),
			bottomNavMenus = bottomNav.find( 'nav > ul > li' ),
			bottomNavMenuLinks = bottomNav.find( 'nav > ul > li > a' );
		
		bottomNavMenuLinks.on( 'click', function( e ){
			e.preventDefault();
			bottomNavAction.toggleMenu( bottomNavWrap, bottomNavMenus, $( this ) );
		});
	})();
	
	/*=====================================
	 * 고객센터
	 ======================================*/
	// FAQ
	(function(){
		
		if( $('section').is('.faq') ){
			var $question = $('.list_table .title');
			$question.data('open', 'false');
			$question.on('click', function(e){
				e.preventDefault();
				if( $(this).data('open') == 'false' ){
					$(this).parent().next('.answer').show();
					$(this).data('open', 'true');					
				} else {
					$(this).parent().next('.answer').hide();
					$(this).data('open', 'false');
				}
			});
		}
		
	})();
	
 /*============================================================
  * 마이페이지
  =============================================================*/
	/* 달력컨트롤 */
	(function(){
		$('#date_picker_1, #date_picker_2').datepicker({
			duration: 'fast',
			dateFormat: 'yymmdd',
			showMonthAfterYear: true,
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토']
		});
		$('.btn_start_date').on('click',function() {
			$('#date_picker_1').datepicker('show');
		});
		$('.btn_end_date').on('click',function() {
			$('#date_picker_2').datepicker('show');
		});
	})();
	
	/* 나의활통 게시판 */
	(function() {
		var list = $( '.toggle_list' ),
			titleLinks = list.find( '.link' ),
			detailViews = list.find( '.detail' );
			
		titleLinks.on( 'click', function( e ){
			e.preventDefault();
			
			var idx = titleLinks.index( this );
			toggleListAction.detailView( detailViews, idx );
		});
	})();
	
	
});