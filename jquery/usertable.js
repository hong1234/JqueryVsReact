var userTableModule = (function($) {

    function initTab(url) {
        $("#unsetButton").remove();
        $("#app").append('<button id="loadButton">LOAD DATA</button>');
        $('#loadButton').on('click', function() {
                unsetTab(url);          
                userTable(url);      
        });
    }

    function unsetTab(url) {
        $("#loadButton").remove();
        $("#app").append('<button id="unsetButton">UNSET DATA</button>');
        $('#unsetButton').on('click', function() {
                $("#tab").remove();
                initTab(url);
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
        init: initTab,
    };
})(jQuery)
