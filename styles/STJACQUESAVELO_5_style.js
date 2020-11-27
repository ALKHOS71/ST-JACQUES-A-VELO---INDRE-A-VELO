var size = 0;
var placement = 'point';
function categories_STJACQUESAVELO_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ANTENNE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(14,134,7,1.0)', lineDash: [1,5], lineCap: 'square', lineJoin: 'bevel', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ST JACQUES A VELO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(14,134,7,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_STJACQUESAVELO_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ITINERAIRE");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_STJACQUESAVELO_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
