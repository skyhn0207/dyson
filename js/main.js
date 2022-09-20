$(document).ready(function(){
  /* 검색창 */
  $('.search_close').click(function(){
    $('.search_full').slideUp(300);
  })
  $('.search_open').click(function(){
    $('.search_full').slideDown(300);
  })

  /* 히든메뉴 */
  $('.hd_ham').click(function(){
    $('.hd_all_menu').stop().slideToggle(300);
    $(this).toggleClass('on')
  })

  /* 히든메뉴 list */
  $('.hd_list_btn').click(function(){
    $(this).find(' ~ .hd_list').slideToggle(300);
    $(this).find(' > i ').toggleClass('on');
  })
})