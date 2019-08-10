var userTableModule = (function($) {

    function init(url) {
        $("#reset_button").remove();
        $("#app").append('<button id="load_button">LOAD DATA</button>');
        $('#load_button').on('click', function() {
                reset(url);          
                userTable(url);      
        });
    }

    function reset(url) {
        $("#load_button").remove();
        $("#app").append('<button id="reset_button">RESET DATA</button>');
        $('#reset_button').on('click', function() {
                $("#tab").remove();
                init(url);
        });
    }

    function userTable(url) {     
        $("#app").append('<table id="tab"><thead><tr><th>Name</th><th>Email</th></tr></thead><tbody id="tabbody"></tbody></table>');
        $.get(url, function(data, status){
            for (let i = 0; i < data.length; i++) {
                $("#tabbody").append('<tr><td>'+data[i].name+'</td><td>'+data[i].email+'</td></tr>');
            }
        });
    }

    return {
        init: init,
        //initUserTable: function() {
        //    initUserTable();
        //},
    };
})(jQuery)
