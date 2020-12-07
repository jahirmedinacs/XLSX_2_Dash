// Style per exampleParent //

$(document).ready(function () {

    $("#but_upload").click(function(){

        var fd = new FormData();
        var files = $('#file')[0].files;

        // Check file selected or not
        if(files.length > 0 ){
            fd.append('file',files[0]);

            $.ajax({
                url: 'upload.php',
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function(response){
                    if(response != 0){
                        $("#img").attr("src",response);
                        $(".preview img").show(); // Display image element
                    }else{
                        alert('file not uploaded');
                    }
                },
            });
        }else{
            alert("Please select a file.");
        }
    });


        (function( $ ) {
        let demoJsonUrl = "https://gist.githubusercontent.com/jahirmedinacs/cfbe78f6c4618836fe61d46553c5ca2a/raw/cb0c341ea54a5a8800f52bd5dc14d14b974ac880/Empleados.JSON";
        $.getJSON( demoJsonUrl)
            .done( function( data ) {

                var currentSheet = new Array();
                currentSheet = data[Object.keys(data)[0]];

                        google.charts.load('current', {'packages':['table']});
                        google.charts.setOnLoadCallback(drawTable);

                        function drawTable() {
                            var innerDataTable = new google.visualization.DataTable();

                            let columnKeys = Object.keys(currentSheet[0]);

                            for (let columnKeysReference in columnKeys){
                                let currentColumnKey = columnKeys[columnKeysReference];
                                innerDataTable.addColumn(typeof(currentSheet[1][currentColumnKey]), currentSheet[0][currentColumnKey]);
                            }

                            let rowsWithValues = currentSheet.slice(1,currentSheet.length);

                            let rowsCarry = new Array();
                            for (let rowReference in rowsWithValues){
                                let currentRow = rowsWithValues[rowReference];

                                console.log(Object.values(currentRow));
                                rowsCarry.push(Object.values(currentRow));

                            }
                            innerDataTable.addRows(rowsCarry);

                            var table = new google.visualization.Table(document.getElementById('dataTable'));
                            table.draw(innerDataTable, {showRowNumber: true, width: '100%', height: '100%'});
                        }
            });
        })( jQuery );


});
