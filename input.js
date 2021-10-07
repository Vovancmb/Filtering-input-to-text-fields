(function() {
        $.fn.keyFilter = function(type, callback) {
                return this.each(function() {
                        var obj = $(this);
                        obj.keypress(function(e) {
                                if (e.which==0) return true;
                                var isDigit = e.which>=48 && e.which<=57;
                                var isPoint = e.which==46 || e.which==44;
                                var isBack = e.which == 8;
                                if (type=='int' && isPoint) return false;
                                if (!isDigit && !isPoint && !isBack) return false;
                                obj.val(obj.val().replace(',','.'));
                                if (isPoint && obj.attr('value').indexOf('.')!=-1) return false;
                        }).keyup(function(e) {
                                obj.val(obj.val().replace(',','.'));
                                if (callback) callback();
                        });
                });
        };
})(jQuery);


$('input:text').keyFilter('int'); //возможен ввод только целых чисел во все элементы input с type=text
$('input:text').keyFilter('float'); //возможен ввод дробных чисел во все элементы input с type=text
$('input:text').keyFilter('int', f);//ввод только целых чисел, после каждого нажатия клавиши, уже после проверки вводимых значений срабатывает ф-ция f()
