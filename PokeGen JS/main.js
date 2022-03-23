$(document).ready(function() {

    $('#get-poke-button').on('click', function() {

        $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status){
            console.log(data);

            var string = "";
            string += "<table class='table'>";

            $.each(data.results, function(index, item){
                string += "<tr><td><a href='"+item.url+"'>"+item.name+"</td><td><button class='cath-button btn btn-primary'>Cath</button></td></tr>";
            })

            string += "</table>";

            $('#poke-list').html(string);
        })

    });

});