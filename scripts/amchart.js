
function getword(){
  am4core.useTheme(am4themes_frozen);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  wordchart = am4core.create("dashboard_amchart_1", am4plugins_wordCloud.WordCloud);
  
  // var data = $('#Language').value;
  // Add data
  wordchart.data = WordCloudData.chinese;

  //logo disable
  wordchart.logo.disabled = true;
   
  // Create series
  var series = wordchart.series.push(new am4plugins_wordCloud.WordCloudSeries());
  
  // series.accuracy = 4;
  series.step = 15;
  series.rotationThreshold = 0.7;
  series.maxCount = 200;
  series.minWordLength = 1;
  series.labels.template.tooltipText = "{word}: {value}";
  series.fontFamily = "Courier New";
  series.maxFontSize = am4core.percent(30);
  
  series.colors = new am4core.ColorSet();
  series.colors.passOptions = {}; // makes it loop
  
  //series.labelsContainer.rotation = 45;
  series.angles = [0, -90];
  series.fontWeight = "700"
  series.dataFields.word = "tag";
  series.dataFields.value = "weight";
  setInterval(function () {
    series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
  }, 10000)
}

function getpie(){

  am4core.useTheme(am4themes_frozen);
  am4core.useTheme(am4themes_animated);
  piechart = am4core.create("dashboard_amchart_2", am4charts.PieChart);

  // Add data
  piechart.data =PieData.September;

  //logo disable
  piechart.logo.disabled = true;

  pieSeries = piechart.series.push(new am4charts.PieSeries());
  // Add and configure Series
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
}


