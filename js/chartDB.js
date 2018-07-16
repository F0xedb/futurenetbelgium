// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartPiePlan);
google.charts.setOnLoadCallback(drawChartBarPlan);
google.charts.setOnLoadCallback(drawChartPieDog);
google.charts.setOnLoadCallback(drawChartBarDog);
google.charts.setOnLoadCallback(drawChartPieOscare);
google.charts.setOnLoadCallback(drawChartBarOscare);
google.charts.setOnLoadCallback(drawChartPieKanker);
google.charts.setOnLoadCallback(drawChartBarKanker);
google.charts.setOnLoadCallback(drawChartPieClini);
google.charts.setOnLoadCallback(drawChartBarClini);
google.charts.setOnLoadCallback(drawChartPieWWF);
google.charts.setOnLoadCallback(drawChartBarWWF);

// Draw the chart and set the chart values
function drawChartPiePlan() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Percentage'],
        ['Plan International', 8],
        ['Helping Dogs', 17],
        ['Oscare', 25],
        ['Kankerfonds', 8],
        ['CliniClowns', 17],
        ['WWF', 25]
    ]);
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in %)', 'width':400, 'height':400, slices: { 0: {offset: 0.2} } , is3D: true};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechartplan'));
    chart.draw(data, options);
}
function drawChartBarPlan() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Euro'],
        ['Plan', 10],
        ['Dogs', 20],
        ['Oscare', 30],
        ['Cancer', 10],
        ['Clowns', 20],
        ['WWF', 30]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in Euro)', 'width':400, 'height':400};

    // Display the chart inside the <div> element with id="barchart"
    var chart = new google.visualization.ColumnChart(document.getElementById('barchartplan'));
    chart.draw(data, options);
}
function drawChartPieDog() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Percentage'],
        ['Plan International', 8],
        ['Helping Dogs', 17],
        ['Oscare', 25],
        ['Kankerfonds', 8],
        ['CliniClowns', 17],
        ['WWF', 25]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in %)', 'width':400, 'height':400, slices: { 1: {offset: 0.2} } , is3D: true};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechartdog'));
    chart.draw(data, options);
}
function drawChartBarDog() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Euro'],
        ['Plan', 10],
        ['Dogs', 20],
        ['Oscare', 30],
        ['Cancer', 10],
        ['Clowns', 20],
        ['WWF', 30]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in Euro)', 'width':400, 'height':400};

    // Display the chart inside the <div> element with id="barchart"
    var chart = new google.visualization.ColumnChart(document.getElementById('barchartdog'));
    chart.draw(data, options);
}
function drawChartPieOscare() {
     var data = google.visualization.arrayToDataTable([
        ['Charity', 'Percentage'],
        ['Plan International', 8],
        ['Helping Dogs', 17],
        ['Oscare', 25],
        ['Kankerfonds', 8],
        ['CliniClowns', 17],
        ['WWF', 25]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in %)', 'width':400, 'height':400, slices: { 2: {offset: 0.2} } , is3D: true};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechartoscare'));
    chart.draw(data, options);
}
function drawChartBarOscare() {
     var data = google.visualization.arrayToDataTable([
        ['Charity', 'Euro'],
        ['Plan', 10],
        ['Dogs', 20],
        ['Oscare', 30],
        ['Cancer', 10],
        ['Clowns', 20],
        ['WWF', 30]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in Euro)', 'width':400, 'height':400};

    // Display the chart inside the <div> element with id="barchart"
    var chart = new google.visualization.ColumnChart(document.getElementById('barchartoscare'));
    chart.draw(data, options);
}
function drawChartPieKanker() {
     var data = google.visualization.arrayToDataTable([
        ['Charity', 'Percentage'],
        ['Plan International', 8],
        ['Helping Dogs', 17],
        ['Oscare', 25],
        ['Kankerfonds', 8],
        ['CliniClowns', 17],
        ['WWF', 25]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in %)', 'width':400, 'height':400, slices: { 3: {offset: 0.2} } , is3D: true};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechartkanker'));
    chart.draw(data, options);
}
function drawChartBarKanker() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Euro'],
        ['Plan', 10],
        ['Dogs', 20],
        ['Oscare', 30],
        ['Cancer', 10],
        ['Clowns', 20],
        ['WWF', 30]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in Euro)', 'width':400, 'height':400};

    // Display the chart inside the <div> element with id="barchart"
    var chart = new google.visualization.ColumnChart(document.getElementById('barchartkanker'));
    chart.draw(data, options);
}
function drawChartPieClini() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Percentage'],
        ['Plan International', 8],
        ['Helping Dogs', 17],
        ['Oscare', 25],
        ['Kankerfonds', 8],
        ['CliniClowns', 17],
        ['WWF', 25]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in %)', 'width':400, 'height':400, slices: { 4: {offset: 0.2} } , is3D: true};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechartclini'));
    chart.draw(data, options);
}
function drawChartBarClini() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Euro'],
        ['Plan', 10],
        ['Dogs', 20],
        ['Oscare', 30],
        ['Cancer', 10],
        ['Clowns', 20],
        ['WWF', 30]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in Euro)', 'width':400, 'height':400};

    // Display the chart inside the <div> element with id="barchart"
    var chart = new google.visualization.ColumnChart(document.getElementById('barchartclini'));
    chart.draw(data, options);
}
function drawChartPieWWF() {
    var data = google.visualization.arrayToDataTable([
        ['Charity', 'Percentage'],
        ['Plan International', 8],
        ['Helping Dogs', 17],
        ['Oscare', 25],
        ['Kankerfonds', 8],
        ['CliniClowns', 17],
        ['WWF', 25]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in %)', 'width':400, 'height':400, slices: { 5: {offset: 0.2} } , is3D: true};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechartwwf'));
    chart.draw(data, options);
}
function drawChartBarWWF() {
     var data = google.visualization.arrayToDataTable([
        ['Charity', 'Euro'],
        ['Plan', 10],
        ['Dogs', 20],
        ['Oscare', 30],
        ['Cancer', 10],
        ['Clowns', 20],
        ['WWF', 30]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Distribution Charity up till now (in Euro)', 'width':400, 'height':400};

    // Display the chart inside the <div> element with id="barchart"
    var chart = new google.visualization.ColumnChart(document.getElementById('barchartwwf'));
    chart.draw(data, options);
}

