// 명칭과 이미지src를 가진 map
const itemMap = new Map([
  ["01", {name : "ハンドフォーク", img : "../images/shop/img-item01.jpg"}],
  ["02", {name : "オニオンホー", img : "../images/shop/img-item02.jpg"}],
  ["03", {name : "除草ピック", img : "../images/shop/img-item03.jpg"}],
  ["04", {name : "ガーデン捕虫器", img : "../images/shop/img-item04.jpg"}],
  ["05", {name : "誘引麻ひも", img : "../images/shop/img-item05.jpg"}],
  ["06", {name : "ラバーグローブ", img : "../images/shop/img-item06.jpg"}],
  ["07", {name : "種保存袋", img : "../images/shop/img-item07.jpg"}],
  ["08", {name : "クロス", img : "../images/shop/img-item08.jpg"}],
]);

$(function(){

  console.log(location.search) // ?item=n
  console.log("item", getUrlVars()["item"]);
  
  let itemNo = getUrlVars()["item"];

  // 아이템명
  $(".item-group h2").text(itemMap.get(itemNo)["name"]);
  // 이미지
  $(".item-group h2").text(itemMap.get(itemNo)["name"]);
  $(".item-group img").attr("src",itemMap.get(itemNo)["img"]);
  


})

/**
 * url 쿼리스트링에서 파라미터 취득
 * @returns obj
 * @see https://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
 */
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}