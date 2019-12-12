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

function func(event) {

    debugger;

    var first_name = inputFirstName.value;
    var last_name = inputLastName.value;
    var address = inputAddress.value;
    var coordinate_mobile = inputMobile.value;
    var coordinate_phone_number = inputPhone.value;
    var gender = 'f'

    if (male.checked == true) {
        gender = 'm'
    }

    var form = new FormData();
    form.append("first_name", first_name);
    form.append("last_name", last_name);
    form.append("gender", gender);
    form.append("address", address);
    form.append("coordinate_mobile", coordinate_mobile);
    form.append("coordinate_phone_number", coordinate_phone_number);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/api/profile/",
        "method": "POST",
        dataType: "JSON",
        "headers": {
            "X-CSRFToken": getCookie('csrftoken'),
            "User-Agent": "PostmanRuntime/7.11.0",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Postman-Token": "f34ecd63-f5af-4cde-8bcd-f876cff98a7c,de157247-7ca8-4c47-a13a-ad88a89d72c1",
            "Host": "127.0.0.1:8000",
            // "cookie": "csrftoken=tBUqeCLo7rLqQqzYAlH3IVsz7kOPBrMXtZ01eAnlgcwtOThVhLQMTBnbb2bJUah9",
            "accept-encoding": "gzip, deflate",
            "content-length": "521",
            "Connection": "keep-alive",
            "cache-control": "no-cache"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        alert('ثبت اطلاعات با موفقیت انجام شد')
        window.location.replace("/info/");
    });

}


$(document).ready(function () {
    document.getElementById('female').checked = true;

    $("form").submit(function (e) {
        // if ($('form').valid()) {
        // } else {
        // e.preventDefault();//برای اینکه صفحه بعد از سابمیت رفرش نشود!!!!!
        // }
        e.preventDefault()
        func()

    });

});