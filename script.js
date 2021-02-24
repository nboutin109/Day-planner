$(function () {
    update();
    classCheck();
    storageCheck();
    setInterval(update, 1000);
    setInterval(classCheck, 1000);

    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    function storageCheck() {
        for (i = 9; i < 18; i++) {
            var grab = '#' + i;
            $(grab + " .description").val(localStorage.getItem(i))
        }
    }

    function classCheck() {
        for (i = 09; i < 18; i++) {
            var grab = '#' + i;
            var x = i;
            var y = moment().format('HH')
            if (x == y) {
                $(grab).removeClass('present past future');
                $(grab).addClass('present');
            }
            if (x > y) {
                $(grab).removeClass('present past future');
                $(grab).addClass('future')
            }
            if (x < y) {
                $(grab).removeClass('present past future');
                $(grab).addClass('past')
            }
        }
    }

    function update() {
        var date = moment().format('MMMM Do YYYY');
        var time = moment().format('h:mm:ss a');
        $('#currentDay').html(date);
        $('#currentTime').html(time);
    }
});