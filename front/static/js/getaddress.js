
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

function myAjax(url, resultFunction, method = 'GET') {
    var auth = btoa('ali:201747matin');
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": method,
        username: 'ali',
        password: '201747matin',
        "headers": {
            "Authorization": "Basic " + auth,
            "X-CSRFToken": getCookie('csrftoken'),
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "cache-control": "no-cache",
            'Access-Control-Allow-Origin': '*',


        }
    };

    $.ajax(settings).done(function (response) {
        resultFunction(response);
    });

    // error: function (err) {
    //     console.log("error in request is:", errorMessage);
    // };


    // ajax.then(function (value) {
    //     resultFunction(value);
    // });
}

function getAddress(value) {
    $.each(value, function (index, field) {
        debugger;
        console.log(value)
        const first_name = field.first_name;
        const last_name = field.last_name;
        const address = field.address;
        const coordinate_mobile = field.coordinate_mobile;

        $('#informations').append(
            '            <div class="col-md-4">\n' +
    '                <div class="card">\n' +
    '                    <div class="">\n' +
    '                        <div class="p "><h6>نام</h6></div>\n' +
    '                        <div class="p "><p>'+ first_name +'</p></div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="">\n' +
    '                        <div class="p "><h6>نام خانوادگی </h6></div>\n' +
    '                        <div class="p"><p>'+ last_name +'</p></div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="">\n' +
    '                        <div class="p"><h6>شماره موبایل</h6></div>\n' +
    '                        <div class="p"><p>'+ coordinate_mobile +'</p></div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="">\n' +
    '                        <div class="p"><h6>آدرس</h6></div>\n' +
    '                        <div class="p"><p>'+ address +'</p></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>'
        );
    });
}


$(document).ready(function () {
        myAjax('/api/profile/', getAddress, 'GET');
    }
);