$(document).ready(function() {

    //Основные переменные приложения.
    var arrayAds = Array(); // Добавление новых переменных.

    $('#modal').hide();
$('#add').click(function() {
    $('#modal').show();


});

$('#close').click(function() {
    $('#modal').hide();


});

    // Добавляем новое объявление. 
$("#new").click(function() {
    var ad = {
        text: $("textarea[name='text']").val(),
        contactName: $("input[name='name']").val(), 
        contactPhone: $("input[name='phone']").val(),
    }
    

    arrayAds.push(ad);
    console.log(arrayAds);
    
    // Отрисовка новый объявлений.
    renderAds();

    // Скрыть модальное окно.
    $('#modal').hide();

    $("textarea[name='text']").val("");
    $("input[name='name']").val("");
    $("input[name='phone']").val("");
    });



    // Функция отрисовки новых объявлений. 
    function renderAds() {
        

        // Очищаем блок контента.
        $("#content").html("");

        // Отрисовываем новый блок контента.
        arrayAds.map(ad => {
            var adHTML = 
            '<div class="Content__box">'+
                    '<div class="Box__info">' + ad.text + '</div>'+
                    '<div class="Box__name">' + ad.contactName + '</div>'+
                    '<div class="Box__phone">' + ad.contactPhone + '</div>'+
                '</div>';
        
        $("#content").append(adHTML);

        });


    }

});



