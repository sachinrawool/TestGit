am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_continentsLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["antarctica"];
polygonSeries.useGeodata = true;

// Create an image series that will hold pie charts
var pieSeries = chart.series.push(new am4maps.MapImageSeries());
var pieTemplate = pieSeries.mapImages.template;
pieTemplate.propertyFields.latitude = "latitude";
pieTemplate.propertyFields.longitude = "longitude";

var pieChartTemplate = pieTemplate.createChild(am4charts.PieChart);
pieChartTemplate.adapter.add("data", function(data, target) {
  if (target.dataItem) {
    return target.dataItem.dataContext.pieData;
  }
  else {
    return [];
  }
});
pieChartTemplate.propertyFields.width = "width";
pieChartTemplate.propertyFields.height = "height";
pieChartTemplate.horizontalCenter = "middle";
pieChartTemplate.verticalCenter = "middle";

var pieTitle = pieChartTemplate.titles.create();
pieTitle.text = "{title}";

var pieSeriesTemplate = pieChartTemplate.series.push(new am4charts.PieSeries);
pieSeriesTemplate.dataFields.category = "category";
pieSeriesTemplate.dataFields.value = "value";
pieSeriesTemplate.labels.template.disabled = true;
pieSeriesTemplate.ticks.template.disabled = true;

pieSeries.data = [{
  "title": "North America",
  "latitude": 39.563353,
  "longitude": -99.316406,
  "width": 100,
  "height": 100,
  "pieData": [{
    "category": "Category #1",
    "value": 1200
  }, {
    "category": "Category #2",
    "value": 500
  }, {
    "category": "Category #3",
    "value": 765
  }, {
    "category": "Category #4",
    "value": 260
  }]
}, {
  "title": "Europe",
  "latitude": 50.896104,
  "longitude": 19.160156,
  "width": 50,
  "height": 50,
  "pieData": [{
    "category": "Category #1",
    "value": 200
  }, {
    "category": "Category #2",
    "value": 600
  }, {
    "category": "Category #3",
    "value": 350
  }]
}, {
  "title": "India",
  "latitude": 20.212106,
  "longitude": 78.183594,
  "width": 80,
  "height": 80,
  "pieData": [{
    "category": "Category #1",
    "value": 352
  }, {
    "category": "Category #2",
    "value": 266
  }, {
    "category": "Category #3",
    "value": 512
  }, {
    "category": "Category #4",
    "value": 199
  }]
}, {
  "title": "Africa",
  "latitude": 11.081385,
  "longitude": 21.621094,
  "width": 50,
  "height": 50,
  "pieData": [{
    "category": "Category #1",
    "value": 200
  }, {
    "category": "Category #2",
    "value": 300
  }, {
    "category": "Category #3",
    "value": 599
  }, {
    "category": "Category #4",
    "value": 512
  }]
}];

}); // end am4core.ready()

$(document).ready(function(){
	$("#datatable").DataTable();
})


