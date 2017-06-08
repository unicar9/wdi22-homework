function print(){// var same before
var $allParagraphs = $("p");
var $rand= $("#random");
$soup.fadeInOut(10000,function(){
$allParagraphs.each(function () {
    $(window).width()-$rand.width()
    var $maxLeft = $(window).width() - $rand.width();
var $maxTop = $(window).height() - $rand.height();
var $leftPos = Math.floor(Math.random() * ($maxLeft + 1))
var $topPos = Math.floor(Math.random() * ($maxTop + 1))

$span.css({ left: $leftPos, top: $topPos }).fadeInOut(10000);

});
};

print();
setInterval(print,5000);
