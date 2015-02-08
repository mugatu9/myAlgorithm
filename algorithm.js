$(document).ready(function(){

  function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  }

  function genertateDivs(){
    $('.sortable').each(function(){
      $(this).text(getRandomArbitrary(0, 1500));
    });
  }
  genertateDivs();

  $("#sort").on('click', function() {

    function gnomeSort(sortMe) {
       i=0;
       while (i < sortMe.length) {
          if (i==0||sortMe[i-1] <= sortMe[i]) {
             i++;
          }
          else {
             tmp=sortMe[i];
             sortMe[i]=sortMe[i-1];
             sortMe[--i]=tmp;
          }
       }
       return sortMe;
    }

    var toSort = [];
    $('.sortable').each(function(index) {
      toSort[index] = Number($(this).text());
    });

    gnomeSort(toSort);

    for (i=0; i < $('.sortable').length; i++) {
      $('.sortable').eq(i).text(toSort[i]);
    }

    setTimeout(genertateDivs, 10000);

  });
});
