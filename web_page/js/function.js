/**
 * @author Administrator
 */
 
/**
 * GNB����
 * @namespace GNB ����޴� ���� �Լ�
 * 
 */
var gnbAction = (function(){
	
	return{
		/**
		 * �� ���ۿ� ���� gnb ���۵�
		 * 
		 */
		checkSubMenu : function( mainMenus,  crtMenu ) {
			mainMenus.removeClass( 'on' );
			crtMenu.parents( 'li' ).each(function(){
				if( $( this ).parent( '.main_menu' ).length == 1 ) {
					$( this ).addClass( 'on' );
				}
			});
		},
		
		closeSubByMouse : function( mainMenus ) {
			mainMenus.removeClass( 'on' );
		},
		
		closeSubByKeyboard : function( mainMenus ) {
			mainMenus.removeClass( 'on' );
		}
	};
})();

/**
 * bottom nav ����
 * @namespace �ϴܸ޴� ���� �Լ�
 * 
 */
var bottomNavAction = (function(){
	
	return{
		/**
		 * �޴� ���
		 * 
		 */
		toggleMenu : function( bottomNavWrap, bottomNavMenus, crtMenu ) {
			crtMenu = crtMenu.parent( 'li' );
			if( crtMenu.hasClass( 'on' ) ) {
				crtMenu.removeClass( 'on' );
				bottomNavWrap.removeClass( 'on' );
			} else {
				bottomNavMenus.removeClass( 'on' );
				bottomNavWrap.addClass( 'on' );
				crtMenu.addClass( 'on' );
			}
		}
	
	};
})();

/**
 * ������������ �Լ���
 * @namespace 
 * 
 */
var toggleListAction = (function(){
	
	return{
		/**
		 * �󼼺��� ���
		 * 
		 */
		detailView : function( details, idx ) {
			var crtDetail = details.eq( idx );
			if( crtDetail.is(':visible') ) {
				crtDetail.hide();
			} else {
				details.hide();
				details.eq( idx ).show();
			}
		}
	};
})();