var width = 1920;
var height = 1080;

var w = 1920;
var h = 1080;
var rsr = Raphael('map');
rsr.setViewBox(0, 0, w, h, true);


var svg = document.querySelector("svg");
svg.removeAttribute("width");
svg.removeAttribute("height");

var bg_1_ = rsr.set();
var backgroundbox = rsr.rect(-1.4, 0, 1921.8, 1080).attr({id: 'backgroundbox', x: '-1.4', parent: 'bg_1_', fill: '#F7F0E0', stroke: '#45999C', "stroke-width": '25', "stroke-miterlimit": '10', 'stroke-opacity': '1'}).data('id', 'backgroundbox');
bg_1_.attr({'id': 'bg_1_', 'name': 'bg_1_'});
var beach = rsr.set();
var beachbackgroundbox = rsr.rect(11.5, 11.5, 1896, 95.5).attr({id: 'beachbackgroundbox', x: '11.5', y: '11.5', parent: 'beach', fill: '#527CE4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'beachbackgroundbox');
beach.attr({'id': 'beach', 'name': 'beach'});
var beachtext = rsr.set();
var path_b = rsr.path("M875.7,60c2,2.1,3,5,3,8.5c0,4.3-1.5,7.6-4.6,9.9c-3.1,2.3-7.7,3.4-13.8,3.4h-21.9V31.4h20.4c5.3,0,9.5,1.1,12.5,3.3    c3,2.2,4.5,5.4,4.5,9.5c0,3-0.8,5.5-2.4,7.5c-1.6,2-3.9,3.4-6.8,4.2C870.7,56.5,873.7,57.9,875.7,60z M840.9,33.6v21.6H859    c4.7,0,8.3-0.9,10.8-2.8c2.5-1.8,3.8-4.5,3.8-8c0-3.5-1.3-6.2-3.8-8c-2.5-1.8-6.1-2.8-10.8-2.8H840.9z M872.3,76.9    c2.6-1.8,4-4.6,4-8.4c0-3.8-1.3-6.7-4-8.5c-2.6-1.8-6.6-2.7-11.8-2.7h-19.6v22.4h19.6C865.7,79.6,869.7,78.7,872.3,76.9z").attr({parent: 'beach', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_b');
var path_c = rsr.path("M926.5,79.6v2.2h-34.1V31.4h33v2.2h-30.6v21.5h27.4v2.2h-27.4v22.2H926.5z").attr({parent: 'beach', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_c');
var path_d = rsr.path("M971.4,67h-30.2l-6.8,14.8h-2.7l23.3-50.4h2.4l23.3,50.4h-2.7L971.4,67z M970.5,65l-14.1-30.7L942.2,65H970.5z").attr({parent: 'beach', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_d');
var path_e = rsr.path("M997.5,78.8c-4-2.2-7.1-5.3-9.3-9.1c-2.3-3.9-3.4-8.2-3.4-13c0-4.8,1.1-9.1,3.4-13c2.3-3.9,5.4-6.9,9.3-9.1    c4-2.2,8.4-3.3,13.3-3.3c3.5,0,6.7,0.6,9.7,1.7c3,1.1,5.6,2.8,7.8,5l-1.5,1.6c-4.2-4-9.5-6-15.9-6c-4.4,0-8.4,1-12,3.1    c-3.6,2-6.4,4.8-8.5,8.4c-2.1,3.6-3.1,7.5-3.1,11.8c0,4.3,1,8.3,3.1,11.8c2.1,3.6,4.9,6.3,8.5,8.4c3.6,2,7.6,3.1,12,3.1    c6.4,0,11.7-2,15.9-6.1l1.5,1.6c-2.2,2.2-4.7,3.9-7.7,5c-3,1.2-6.3,1.7-9.8,1.7C1005.9,82.1,1001.5,81,997.5,78.8z").attr({parent: 'beach', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_e');
var path_f = rsr.path("M1081.5,31.4v50.4h-2.4V57.3h-35.4v24.5h-2.4V31.4h2.4v23.7h35.4V31.4H1081.5z").attr({parent: 'beach', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_f');
beachtext.attr({'id': 'beachtext', 'parent': 'beach', 'name': 'beachtext'});
var viewleft = rsr.set();
var viewleftbg_1_ = rsr.path("M762,342H371c-6.6,0-12-5.4-12-12v-54.3c0-6.6,5.4-12,12-12h391   c6.6,0,12,5.4,12,12V330C774,336.6,768.6,342,762,342z").attr({id: 'viewleftbg_1_', parent: 'viewleft', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'viewleftbg_1_');
var viewleftbg = rsr.rect(359, 263, 415, 10).attr({id: 'viewleftbg', x: '359', y: '263', parent: 'viewleft', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'viewleftbg');
var viewleft3 = rsr.rect(691.8, 285.8, 47.5, 33.5).attr({id: '17', x: '691.8', y: '285.8', parent: 'viewleft', fill: '#D2A304', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '17');
var viewleft2 = rsr.rect(541.8, 285.8, 47.5, 33.5).attr({id: '16', x: '541.8', y: '285.8', parent: 'viewleft', fill: '#D2A304', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '16');
viewleft.attr({'id': 'viewleft', 'name': 'viewleft'});
var group_a = rsr.set();
var viewleft1 = rsr.rect(391.8, 285.8, 47.5, 33.5).attr({id: '15', x: '391.8', y: '285.8', parent: 'viewleft', fill: '#D2A304', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '15');
group_a.attr({'parent': 'viewleft', 'name': 'group_a'});
var viewright = rsr.set();
var viewrightbg_1_ = rsr.path("M1551,342h-391c-6.6,0-12-5.4-12-12v-54.3c0-6.6,5.4-12,12-12h391   c6.6,0,12,5.4,12,12V330C1563,336.6,1557.6,342,1551,342z").attr({id: 'viewrightbg_1_', parent: 'viewright', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'viewrightbg_1_');
var viewrightbg = rsr.rect(1148, 263, 415, 10).attr({id: 'viewrightbg', x: '1148', y: '263', parent: 'viewright', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'viewrightbg');
var viewright3 = rsr.rect(1481.8, 285.8, 47.5, 33.5).attr({id: '20', x: '1481.8', y: '285.8', parent: 'viewright', fill: '#D2A304', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '20');
var viewright2 = rsr.rect(1331.8, 285.8, 47.5, 33.5).attr({id: '19', x: '1331.8', y: '285.8', parent: 'viewright', fill: '#D2A304', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '19');
var viewright1 = rsr.rect(1181.8, 285.8, 47.5, 33.5).attr({id: '18', x: '1181.8', y: '285.8', parent: 'viewright', fill: '#D2A304', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '18');
viewright.attr({'id': 'viewright', 'name': 'viewright'});
var beachleft = rsr.set();
var beachleft7 = rsr.rect(248.8, 224.8, 33.5, 47.5).attr({id: '7', x: '248.8', y: '224.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '7');
var beachleft6 = rsr.rect(98.8, 224.8, 33.5, 47.5).attr({id: '6', x: '98.8', y: '224.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '6');
var beachleft5 = rsr.rect(698.8, 146.8, 33.5, 47.5).attr({id: '5', x: '698.8', y: '146.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '5');
var beachleft4 = rsr.rect(548.8, 146.8, 33.5, 47.5).attr({id: '4', x: '548.8', y: '146.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '4');
var beachleft3 = rsr.rect(398.8, 149.8, 33.5, 47.5).attr({id: '3', x: '398.8', y: '149.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '3');
var beachleft2 = rsr.rect(248.8, 146.8, 33.5, 47.5).attr({id: '2', x: '248.8', y: '146.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '2');
var beach1 = rsr.rect(98.8, 146.8, 33.5, 47.5).attr({id: '1', x: '98.8', y: '146.8', parent: 'beachleft', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '1');
beachleft.attr({'id': 'beachleft', 'name': 'beachleft'});
var beachright = rsr.set();
var beachright7 = rsr.rect(1637.8, 224.8, 33.5, 47.5).attr({id: '13', x: '1637.8', y: '224.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '13');
var beachright6 = rsr.rect(1787.8, 224.8, 33.5, 47.5).attr({id: '14', x: '1787.8', y: '224.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '14');
var beachright5 = rsr.rect(1188.8, 146.8, 33.5, 47.5).attr({id: '8', x: '1188.8', y: '146.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '8');
var beachright4 = rsr.rect(1338.8, 146.8, 33.5, 47.5).attr({id: '9', x: '1338.8', y: '146.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '9');
var beachright3 = rsr.rect(1488.8, 146.8, 33.5, 47.5).attr({id: '10', x: '1488.8', y: '146.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '10');
var beachright2_1_ = rsr.rect(1637.8, 146.8, 33.5, 47.5).attr({id: '11', x: '1637.8', y: '146.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '11');
var beachright1_1_ = rsr.rect(1787.8, 146.8, 33.5, 47.5).attr({id: '12', x: '1787.8', y: '146.8', parent: 'beachright', fill: '#CFB8BB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '12');
beachright.attr({'id': 'beachright', 'name': 'beachright'});
var balconytwo = rsr.set();
var balconytwobg_3_ = rsr.path("M720,473H261c-6.6,0-12-5.4-12-12v-54.3c0-6.6,5.4-12,12-12h459   c6.6,0,12,5.4,12,12V461C732,467.6,726.6,473,720,473z").attr({id: 'balconytwobg_3_', parent: 'balconytwo', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'balconytwobg_3_');
var balconytwobg_2_ = rsr.path("M328,406v459c0,6.6-5.4,12-12,12h-54.3c-6.6,0-12-5.4-12-12V406   c0-6.6,5.4-12,12-12H316C322.6,394,328,399.4,328,406z").attr({id: 'balconytwobg_2_', parent: 'balconytwo', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'balconytwobg_2_');
var balconytwobg_1_ = rsr.rect(249, 394, 483, 10).attr({id: 'balconytwobg_1_', x: '249', y: '394', parent: 'balconytwo', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'balconytwobg_1_');
var balconytwobg = rsr.rect(12.5, 630.5, 483, 10).attr({id: 'balconytwobg', x: '12.5', y: '630.5', parent: 'balconytwo', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m4.489659e-11 -1 1 4.489659e-11 -381.5 889.5").data('id', 'balconytwobg');
var balconytwo10 = rsr.rect(267.8, 815.8, 33.5, 47.5).attr({id: '21', x: '267.8', y: '815.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '21');
var balconytwo9 = rsr.rect(267.8, 725.8, 33.5, 47.5).attr({id: '22', x: '267.8', y: '725.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '22');
var balconytwo8 = rsr.rect(267.8, 635.8, 33.5, 47.5).attr({id: '23', x: '267.8', y: '635.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '23');
var balconytwo7 = rsr.rect(267.8, 545.8, 33.5, 47.5).attr({id: '24', x: '267.8', y: '545.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '24');
var balconytwo6 = rsr.rect(267.8, 414.8, 47.5, 33.5).attr({id: '25', x: '267.8', y: '414.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '25');
var balconytwo5 = rsr.rect(347.8, 414.8, 47.5, 33.5).attr({id: '26', x: '347.8', y: '414.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '26');
var balconytwo4 = rsr.rect(427.8, 414.8, 47.5, 33.5).attr({id: '27', x: '427.8', y: '414.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '27');
var balconytwo3 = rsr.rect(507.8, 414.8, 47.5, 33.5).attr({id: '28', x: '507.8', y: '414.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '28');
var balconytwo2 = rsr.rect(587.8, 414.8, 47.5, 33.5).attr({id: '29', x: '587.8', y: '414.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '29');
var balconytwo1 = rsr.rect(667.8, 416.8, 47.5, 33.5).attr({id: '30', x: '667.8', y: '416.8', parent: 'balconytwo', fill: '#45999C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '30');
balconytwo.attr({'id': 'balconytwo', 'name': 'balconytwo'});
var balconyone = rsr.set();
var balconyonebg_3_ = rsr.path("M1660,471h-459c-6.6,0-12-5.4-12-12v-54.3c0-6.6,5.4-12,12-12h459   c6.6,0,12,5.4,12,12V459C1672,465.6,1666.6,471,1660,471z").attr({id: 'balconyonebg_3_', parent: 'balconyone', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'balconyonebg_3_');
var balconyonebg_2_ = rsr.path("M1593,528V404c0-6.6,5.4-12,12-12h54.3c6.6,0,12,5.4,12,12v124   c0,6.6-5.4,12-12,12H1605C1598.4,540,1593,534.6,1593,528z").attr({id: 'balconyonebg_2_', parent: 'balconyone', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'balconyonebg_2_');
var balconyonebg_1_ = rsr.rect(1189, 392, 483, 10).attr({id: 'balconyonebg_1_', x: '1189', y: '392', parent: 'balconyone', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'balconyonebg_1_');
var balconyonebg = rsr.rect(1593, 461, 148, 10).attr({id: 'balconyonebg', x: '1593', y: '461', parent: 'balconyone', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-4.396023e-10 1 -1 -4.396023e-10 2132.9998 -1200.9999").data('id', 'balconyonebg');
var balconyone7 = rsr.rect(1619.8, 481.8, 33.5, 47.5).attr({id: '37', x: '1619.8', y: '481.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '37');
var balconyone6 = rsr.rect(1605.8, 417.8, 47.5, 33.5).attr({id: '36', x: '1605.8', y: '417.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '36');
var balconyone5 = rsr.rect(1525.8, 415.8, 47.5, 33.5).attr({id: '35', x: '1525.8', y: '415.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '35');
var balconyone4 = rsr.rect(1445.8, 415.8, 47.5, 33.5).attr({id: '34', x: '1445.8', y: '415.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '34');
var balconyone3 = rsr.rect(1365.8, 415.8, 47.5, 33.5).attr({id: '33', x: '1365.8', y: '415.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '33');
var balconyone2 = rsr.rect(1285.8, 415.8, 47.5, 33.5).attr({id: '32', x: '1285.8', y: '415.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '32');
var balconyone1 = rsr.rect(1205.8, 415.8, 47.5, 33.5).attr({id: '31', x: '1205.8', y: '415.8', parent: 'balconyone', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '31');
balconyone.attr({'id': 'balconyone', 'name': 'balconyone'});
var thetop = rsr.set();
var thetopbg_1_ = rsr.path("M1593,865V591c0-6.6,5.4-12,12-12h54.3c6.6,0,12,5.4,12,12v274c0,6.6-5.4,12-12,12   H1605C1598.4,877,1593,871.6,1593,865z").attr({id: 'thetopbg_1_', parent: 'thetop', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'thetopbg_1_');
var thetopbg = rsr.rect(1518, 723, 298, 10).attr({id: 'thetopbg', x: '1518', y: '723', parent: 'thetop', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-2.182905e-10 1 -1 -2.182905e-10 2395.001 -938.9998").data('id', 'thetopbg');
var thetop1 = rsr.rect(1619.8, 590.8, 33.5, 47.5).attr({id: '43', x: '1619.8', y: '590.8', parent: 'thetop', fill: '#D04BDB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '43');
var thetop2 = rsr.rect(1619.8, 666.8, 33.5, 47.5).attr({id: '44', x: '1619.8', y: '666.8', parent: 'thetop', fill: '#D04BDB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '44');
var thetop3 = rsr.rect(1619.8, 742.8, 33.5, 47.5).attr({id: '45', x: '1619.8', y: '742.8', parent: 'thetop', fill: '#D04BDB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '45');
var thetop4 = rsr.rect(1619.8, 818.8, 33.5, 47.5).attr({id: '46', x: '1619.8', y: '818.8', parent: 'thetop', fill: '#D04BDB', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '46');
thetop.attr({'id': 'thetop', 'name': 'thetop'});
var vip = rsr.set();
var vipbg_4_ = rsr.path("M1660,1047h-552.5c-6.6,0-12-5.4-12-12V899c0-6.6,5.4-12,12-12H1660   c6.6,0,12,5.4,12,12v136C1672,1041.6,1666.6,1047,1660,1047z").attr({id: 'vipbg_4_', parent: 'vip', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'vipbg_4_');
var vipbg_3_ = rsr.rect(1268, 756, 261, 131).attr({id: 'vipbg_3_', x: '1268', y: '756', parent: 'vip', fill: '#DDDDDD', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'vipbg_3_');
var vipbg_2_ = rsr.rect(1587, 962, 160, 10).attr({id: 'vipbg_2_', x: '1587', y: '962', parent: 'vip', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-4.066331e-10 1 -1 -4.066331e-10 2634.0005 -699.9996").data('id', 'vipbg_2_');
var vipbg_1_ = rsr.rect(1095, 1037, 577, 10).attr({id: 'vipbg_1_', x: '1095', y: '1037', parent: 'vip', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'vipbg_1_');
var vipbg = rsr.rect(1020, 962, 160, 10).attr({id: 'vipbg', x: '1020', y: '962', parent: 'vip', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-4.066331e-10 1 -1 -4.066331e-10 2067.0005 -132.9996").data('id', 'vipbg');
var vip14 = rsr.circle(1598, 916, 15).attr({id: '63', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '63');
var vip13 = rsr.circle(1488, 916, 15).attr({id: '62', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '62');
var vip12 = rsr.circle(1378, 916, 15).attr({id: '61', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '61');
var vip11 = rsr.circle(1268, 916, 15).attr({id: '60', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '60');
var vip10 = rsr.circle(1158, 916, 15).attr({id: '59', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '59');
var vip9 = rsr.circle(1213, 963, 15).attr({id: '64', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '64');
var vip8 = rsr.circle(1323, 963, 15).attr({id: '65', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '65');
var vip7 = rsr.circle(1433, 963, 15).attr({id: '66', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '66');
var vip6 = rsr.circle(1543, 963, 15).attr({id: '67', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '67');
var vip5 = rsr.circle(1598, 1010, 15).attr({id: '72', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '72');
var vip4 = rsr.circle(1488, 1010, 15).attr({id: '71', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '71');
var vip3 = rsr.circle(1378, 1010, 15).attr({id: '70', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '70');
var vip2 = rsr.circle(1268, 1010, 15).attr({id: '69', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '69');
var vip1 = rsr.circle(1158, 1010, 15).attr({id: '68', parent: 'vip', fill: '#9B723B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '68');
vip.attr({'id': 'vip', 'name': 'vip'});
var djboxtext = rsr.set();
var path_g = rsr.path("M1294.5,798.9h16.2c4.4,0,8.2,0.9,11.6,2.7c3.4,1.8,6,4.3,7.9,7.5c1.9,3.2,2.8,6.8,2.8,10.8c0,4-0.9,7.7-2.8,10.8    c-1.9,3.2-4.5,5.7-7.9,7.5c-3.4,1.8-7.3,2.7-11.6,2.7h-16.2V798.9z M1310.6,839c4.1,0,7.7-0.8,10.7-2.5c3.1-1.6,5.4-3.9,7.1-6.8    s2.5-6.2,2.5-9.9c0-3.7-0.8-7-2.5-9.9s-4-5.2-7.1-6.8c-3.1-1.6-6.6-2.5-10.7-2.5h-14V839H1310.6z").attr({parent: 'vip', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_g');
var path_h = rsr.path("M1340.2,839.6c-1.9-1.1-3.4-2.5-4.6-4.3l1.3-1.3c1.2,1.8,2.6,3.1,4.2,4c1.6,0.9,3.4,1.4,5.4,1.4c3,0,5.2-0.8,6.6-2.6    c1.4-1.7,2.1-4.3,2.1-7.8v-28.1h-15.6v-1.9h17.6V829c0,8.1-3.6,12.2-10.8,12.2C1344.2,841.1,1342.1,840.6,1340.2,839.6z").attr({parent: 'vip', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_h');
var path_i = rsr.path("M1418.3,822.8c1.7,1.8,2.5,4.2,2.5,7.1c0,3.6-1.3,6.3-3.8,8.2s-6.4,2.8-11.5,2.8h-18.2v-42h17c4.4,0,7.9,0.9,10.4,2.8    c2.5,1.8,3.8,4.5,3.8,7.9c0,2.5-0.7,4.6-2,6.2c-1.4,1.6-3.2,2.8-5.6,3.5C1414.2,819.8,1416.7,821,1418.3,822.8z M1389.4,800.7v18    h15.1c3.9,0,6.9-0.8,9-2.3c2.1-1.5,3.2-3.8,3.2-6.7s-1.1-5.2-3.2-6.7c-2.1-1.5-5.1-2.3-9-2.3H1389.4z M1415.5,836.8    c2.2-1.5,3.3-3.9,3.3-7c0-3.2-1.1-5.6-3.3-7.1c-2.2-1.5-5.5-2.3-9.8-2.3h-16.3v18.7h16.3C1410,839.1,1413.3,838.3,1415.5,836.8z").attr({parent: 'vip', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_i');
var path_j = rsr.path("M1438.7,838.4c-3.3-1.8-5.9-4.4-7.8-7.6c-1.9-3.2-2.8-6.9-2.8-10.9c0-4,0.9-7.6,2.8-10.9c1.9-3.2,4.5-5.8,7.8-7.6    c3.3-1.8,7-2.8,11.1-2.8s7.8,0.9,11.1,2.8c3.3,1.8,5.9,4.4,7.8,7.6c1.9,3.2,2.8,6.9,2.8,10.9c0,4-0.9,7.6-2.8,10.9    c-1.9,3.2-4.5,5.8-7.8,7.6c-3.3,1.8-7,2.8-11.1,2.8S1442,840.2,1438.7,838.4z M1459.7,836.8c3-1.7,5.4-4,7.1-7    c1.7-3,2.6-6.3,2.6-9.9c0-3.6-0.9-6.9-2.6-9.9c-1.7-3-4.1-5.3-7.1-7s-6.3-2.5-10-2.5c-3.7,0-7,0.8-10,2.5s-5.3,4-7,7    s-2.6,6.3-2.6,9.9c0,3.6,0.9,6.9,2.6,9.9c1.7,3,4.1,5.3,7,7c3,1.7,6.3,2.5,10,2.5C1453.4,839.3,1456.7,838.4,1459.7,836.8z").attr({parent: 'vip', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_j');
var path_k = rsr.path("M1507.4,840.9l-15.1-20.2l-15.2,20.2h-2.3l16.3-21.7l-15.1-20.3h2.4l14,18.8l14-18.8h2.3l-15.1,20.3l16.3,21.7H1507.4z").attr({parent: 'vip', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_k');
djboxtext.attr({'id': 'djboxtext', 'parent': 'vip', 'name': 'djboxtext'});
var behindmain = rsr.set();
var behindmainbg_1_ = rsr.path("M1821,754V403c0-6.6,5.4-12,12-12h54.3c6.6,0,12,5.4,12,12v351   c0,6.6-5.4,12-12,12H1833C1826.4,766,1821,760.6,1821,754z").attr({id: 'behindmainbg_1_', parent: 'behindmain', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'behindmainbg_1_');
var behindmainbg = rsr.rect(1707.5, 573.5, 375, 10).attr({id: 'behindmainbg', x: '1707.5', y: '573.5', parent: 'behindmain', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-1.734641e-10 1 -1 -1.734641e-10 2473.501 -1316.4999").data('id', 'behindmainbg');
var behindmain5 = rsr.rect(1847.8, 706.8, 33.5, 47.5).attr({id: '42', x: '1847.8', y: '706.8', parent: 'behindmain', fill: '#E58200', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '42');
var behindmain4 = rsr.rect(1847.8, 630.8, 33.5, 47.5).attr({id: '41', x: '1847.8', y: '630.8', parent: 'behindmain', fill: '#E58200', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '41');
var behindmain3 = rsr.rect(1847.8, 554.8, 33.5, 47.5).attr({id: '40', x: '1847.8', y: '554.8', parent: 'behindmain', fill: '#E58200', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '40');
var behindmain2 = rsr.rect(1847.8, 478.8, 33.5, 47.5).attr({id: '39', x: '1847.8', y: '478.8', parent: 'behindmain', fill: '#E58200', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '39');
var behindmain1 = rsr.rect(1847.8, 402.8, 33.5, 47.5).attr({id: '38', x: '1847.8', y: '402.8', parent: 'behindmain', fill: '#E58200', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '38');
behindmain.attr({'id': 'behindmain', 'name': 'behindmain'});
var bobar = rsr.set();
var bobarbg_3_ = rsr.path("M842,848H575c-6.6,0-12-5.4-12-12v-55c0-6.6,5.4-12,12-12h267c6.6,0,12,5.4,12,12   v55C854,842.6,848.6,848,842,848z").attr({id: 'bobarbg_3_', parent: 'bobar', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'bobarbg_3_');
var bobarbg_2_ = rsr.rect(812.5, 805.5, 73, 10).attr({id: 'bobarbg_2_', x: '812.5', y: '805.5', parent: 'bobar', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-8.912455e-10 1 -1 -8.912455e-10 1659.5004 -38.4996").data('id', 'bobarbg_2_');
var bobarbg_1_ = rsr.rect(531.5, 805.5, 73, 10).attr({id: 'bobarbg_1_', x: '531.5', y: '805.5', parent: 'bobar', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-8.912455e-10 1 -1 -8.912455e-10 1378.5004 242.5004").data('id', 'bobarbg_1_');
var bobarbg = rsr.rect(563, 769, 291, 10).attr({id: 'bobarbg', x: '563', y: '769', parent: 'bobar', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'bobarbg');
var bobarbg_4_ = rsr.path("M903,1047H520c-6.6,0-12-5.4-12-12V859c0-6.6,5.4-12,12-12h383c6.6,0,12,5.4,12,12   v176C915,1041.6,909.6,1047,903,1047z").attr({id: 'bobarbg_4_', parent: 'bobar', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'bobarbg_4_');
var bobarbg_5_ = rsr.rect(810, 942, 200, 10).attr({id: 'bobarbg_5_', x: '810', y: '942', parent: 'bobar', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-3.253071e-10 1 -1 -3.253071e-10 1857.0004 37.0004").data('id', 'bobarbg_5_');
var bobarbg_6_ = rsr.rect(413, 942, 200, 10).attr({id: 'bobarbg_6_', x: '413', y: '942', parent: 'bobar', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-3.253071e-10 1 -1 -3.253071e-10 1460.0004 434.0004").data('id', 'bobarbg_6_');
var bobarbg_7_ = rsr.rect(508, 1037, 407, 10).attr({id: 'bobarbg_7_', x: '508', y: '1037', parent: 'bobar', fill: '#878787', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'bobarbg_7_');
var bobar9 = rsr.rect(670.8, 991.8, 47.5, 33.5).attr({id: '56', x: '670.8', y: '991.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '56');
var bobar8 = rsr.rect(750.8, 991.8, 47.5, 33.5).attr({id: '57', x: '750.8', y: '991.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '57');
var bobar7 = rsr.rect(830.8, 991.8, 47.5, 33.5).attr({id: '58', x: '830.8', y: '991.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '58');
var bobar6 = rsr.rect(830.8, 925.8, 47.5, 33.5).attr({id: '55', x: '830.8', y: '925.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '55');
var bobar5 = rsr.rect(750.8, 925.8, 47.5, 33.5).attr({id: '54', x: '750.8', y: '925.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '54');
var bobar4 = rsr.rect(670.8, 925.8, 47.5, 33.5).attr({id: '53', x: '670.8', y: '925.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '53');
var bobar3 = rsr.rect(670.8, 859.8, 47.5, 33.5).attr({id: '50', x: '670.8', y: '859.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '50');
var bobar2 = rsr.rect(750.8, 859.8, 47.5, 33.5).attr({id: '51', x: '750.8', y: '859.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '51');
var bobar1 = rsr.rect(830.8, 859.8, 47.5, 33.5).attr({id: '52', x: '830.8', y: '859.8', parent: 'bobar', fill: '#4871E0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '52');
bobar.attr({'id': 'bobar', 'name': 'bobar'});
var stage = rsr.set();
var stage1 = rsr.rect(764.8, 791.8, 47.5, 33.5).attr({id: '49', x: '764.8', y: '791.8', parent: 'stage', fill: '#4BDBA7', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '49');
var stage2 = rsr.rect(684.8, 791.8, 47.5, 33.5).attr({id: '48', x: '684.8', y: '791.8', parent: 'stage', fill: '#4BDBA7', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '48');
var stage3 = rsr.rect(604.8, 791.8, 47.5, 33.5).attr({id: '47', x: '604.8', y: '791.8', parent: 'stage', fill: '#4BDBA7', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', '47');
stage.attr({'id': 'stage', 'name': 'stage'});
var barsbarsbg = rsr.set();
var barbg_3_ = rsr.rect(492, 546, 149, 120).attr({id: 'barbg_3_', x: '492', y: '546', parent: 'barsbarsbg', fill: '#DDDDDD', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'barbg_3_');
var barbg_2_ = rsr.rect(1529, 580, 63.1, 158).attr({id: 'barbg_2_', x: '1529', y: '580', parent: 'barsbarsbg', fill: '#DDDDDD', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'barbg_2_');
var barbg_1_ = rsr.rect(928.7, 313.6, 63.1, 273.5).attr({id: 'barbg_1_', x: '928.7', y: '313.6', parent: 'barsbarsbg', fill: '#DDDDDD', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m7.764995e-11 -1 1 7.764995e-11 509.9189 1410.5885").data('id', 'barbg_1_');
var barbg = rsr.rect(519.7, 848.4, 46.3, 187.7).attr({id: 'barbg', x: '519.7', y: '848.4', parent: 'barsbarsbg', fill: '#DDDDDD', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m-1 -1.146386e-10 1.146386e-10 -1 1085.6996 1884.5109").data('id', 'barbg');
barsbarsbg.attr({'id': 'barsbarsbg', 'name': 'barsbarsbg'});
var bartext_3_ = rsr.set();
var path_l = rsr.path("M538.8,606.8c1.7,1.8,2.5,4.2,2.5,7.1c0,3.6-1.3,6.3-3.8,8.2c-2.6,1.9-6.4,2.8-11.5,2.8h-18.2v-42h17    c4.4,0,7.9,0.9,10.4,2.8c2.5,1.8,3.8,4.5,3.8,7.9c0,2.5-0.7,4.6-2,6.2c-1.4,1.6-3.2,2.8-5.6,3.5    C534.6,603.8,537.1,605,538.8,606.8z M509.8,584.7v18h15.1c3.9,0,6.9-0.8,9-2.3c2.1-1.5,3.2-3.8,3.2-6.7s-1.1-5.2-3.2-6.7    c-2.1-1.5-5.1-2.3-9-2.3H509.8z M536,620.8c2.2-1.5,3.3-3.9,3.3-7c0-3.2-1.1-5.6-3.3-7.1c-2.2-1.5-5.5-2.3-9.8-2.3h-16.3v18.7    h16.3C530.5,623.1,533.8,622.3,536,620.8z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_l');
var path_m = rsr.path("M578.5,612.6h-25.1l-5.6,12.3h-2.2l19.4-42h2l19.4,42h-2.2L578.5,612.6z M577.7,610.9L566,585.2l-11.8,25.6H577.7z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_m');
var path_n = rsr.path("M624,624.9l-10.4-14.5c-1.4,0.2-2.9,0.4-4.6,0.4h-12.5v14.1h-2v-42h14.6c5.2,0,9.3,1.2,12.3,3.7c2.9,2.5,4.4,5.9,4.4,10.2    c0,3.4-0.9,6.2-2.6,8.4c-1.7,2.3-4.2,3.8-7.5,4.7l10.7,14.9H624z M609.2,608.9c4.7,0,8.3-1.1,10.8-3.2s3.8-5.1,3.8-9    c0-3.8-1.3-6.8-3.8-8.9c-2.5-2.1-6.1-3.1-10.8-3.1h-12.7v24.2H609.2z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_n');
bartext_3_.attr({'id': 'bartext_3_', 'parent': 'barsbarsbg', 'name': 'bartext_3_'});
var bartext_2_ = rsr.set();
var path_o = rsr.path("M1556.5,629c-1.8,1.7-4.2,2.5-7.1,2.5c-3.6,0-6.3-1.3-8.2-3.8c-1.9-2.6-2.8-6.4-2.8-11.5V598h42v17    c0,4.4-0.9,7.9-2.8,10.4c-1.8,2.5-4.5,3.8-7.9,3.8c-2.5,0-4.6-0.7-6.2-2c-1.6-1.4-2.8-3.2-3.5-5.6    C1559.5,624.8,1558.3,627.3,1556.5,629z M1542.5,626.2c1.5,2.2,3.9,3.3,7,3.3c3.2,0,5.6-1.1,7.1-3.3c1.5-2.2,2.3-5.5,2.3-9.8V600    h-18.7v16.3C1540.2,620.7,1540.9,624,1542.5,626.2z M1578.6,600h-18v15.1c0,3.9,0.8,6.9,2.3,9c1.5,2.1,3.8,3.2,6.7,3.2    s5.2-1.1,6.7-3.2c1.5-2.1,2.3-5.1,2.3-9V600z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_o');
var path_p = rsr.path("M1550.7,668.7v-25.1l-12.3-5.6v-2.2l42,19.4v2l-42,19.4v-2.2L1550.7,668.7z M1552.4,667.9l25.6-11.8l-25.6-11.8V667.9z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_p');
var path_q = rsr.path("M1538.4,714.2l14.5-10.4c-0.2-1.4-0.4-2.9-0.4-4.6v-12.5h-14.1v-2h42v14.6c0,5.2-1.2,9.3-3.7,12.3    c-2.5,2.9-5.9,4.4-10.2,4.4c-3.4,0-6.2-0.9-8.4-2.6c-2.3-1.7-3.8-4.2-4.7-7.5l-14.9,10.7V714.2z M1554.3,699.4    c0,4.7,1.1,8.3,3.2,10.8c2.1,2.5,5.1,3.8,9,3.8c3.8,0,6.8-1.3,8.9-3.8c2.1-2.5,3.1-6.1,3.1-10.8v-12.7h-24.2V699.4z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_q');
bartext_2_.attr({'id': 'bartext_2_', 'parent': 'barsbarsbg', 'name': 'bartext_2_'});
var bartext_1_ = rsr.set();
var path_r = rsr.path("M933.3,451.4c1.7,1.8,2.5,4.2,2.5,7.1c0,3.6-1.3,6.3-3.8,8.2c-2.6,1.9-6.4,2.8-11.5,2.8h-18.2v-42h17    c4.4,0,7.9,0.9,10.4,2.8c2.5,1.8,3.8,4.5,3.8,7.9c0,2.5-0.7,4.6-2,6.2c-1.4,1.6-3.2,2.8-5.6,3.5    C929.1,448.4,931.6,449.6,933.3,451.4z M904.3,429.3v18h15.1c3.9,0,6.9-0.8,9-2.3c2.1-1.5,3.2-3.8,3.2-6.7c0-2.9-1.1-5.1-3.2-6.7    c-2.1-1.5-5.1-2.3-9-2.3H904.3z M930.5,465.4c2.2-1.5,3.3-3.9,3.3-7c0-3.2-1.1-5.6-3.3-7.1c-2.2-1.5-5.5-2.3-9.8-2.3h-16.3v18.7    h16.3C925,467.7,928.3,466.9,930.5,465.4z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_r');
var path_s = rsr.path("M973,457.2h-25.1l-5.6,12.3H940l19.4-42h2l19.4,42h-2.2L973,457.2z M972.2,455.5l-11.8-25.6l-11.8,25.6H972.2z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_s');
var path_t = rsr.path("M1018.5,469.5l-10.4-14.5c-1.4,0.2-2.9,0.4-4.6,0.4h-12.5v14.1h-2v-42h14.6c5.2,0,9.3,1.2,12.3,3.7s4.4,5.9,4.4,10.2    c0,3.4-0.9,6.2-2.6,8.4s-4.2,3.8-7.5,4.7l10.7,14.9H1018.5z M1003.7,453.5c4.7,0,8.3-1,10.8-3.1c2.5-2.1,3.8-5.1,3.8-9    c0-3.8-1.3-6.8-3.8-8.9c-2.5-2.1-6.1-3.1-10.8-3.1h-12.7v24.2H1003.7z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_t');
bartext_1_.attr({'id': 'bartext_1_', 'parent': 'barsbarsbg', 'name': 'bartext_1_'});
var bartext = rsr.set();
var path_u = rsr.path("M544.9,962.6c1.5-1.4,3.5-2.1,5.9-2.1c3,0,5.3,1.1,6.9,3.2c1.6,2.1,2.4,5.3,2.4,9.5v15.2h-35v-14.2c0-3.7,0.8-6.6,2.3-8.7    c1.5-2.1,3.7-3.2,6.6-3.2c2.1,0,3.8,0.6,5.2,1.7c1.4,1.1,2.3,2.7,2.9,4.7C542.4,966.1,543.4,964,544.9,962.6z M526.5,986.8h15    v-12.5c0-3.2-0.6-5.7-1.9-7.5c-1.3-1.8-3.1-2.7-5.6-2.7c-2.4,0-4.3,0.9-5.6,2.7c-1.3,1.8-1.9,4.3-1.9,7.5V986.8z M556.6,965    c-1.3-1.8-3.2-2.8-5.9-2.8c-2.7,0-4.6,0.9-5.9,2.8c-1.3,1.8-1.9,4.6-1.9,8.2v13.6h15.5v-13.6C558.5,969.6,557.9,966.8,556.6,965z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_u');
var path_v = rsr.path("M549.8,929.5v21l10.2,4.7v1.9l-35-16.2v-1.7l35-16.2v1.8L549.8,929.5z M548.3,930.2L527,940l21.3,9.8V930.2z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_v');
var path_w = rsr.path("M560,891.6l-12,8.7c0.2,1.1,0.3,2.4,0.3,3.8v10.4H560v1.7h-35V904c0-4.4,1-7.8,3.1-10.2c2-2.5,4.9-3.7,8.5-3.7    c2.8,0,5.1,0.7,7,2.2c1.9,1.5,3.2,3.5,3.9,6.2l12.5-9V891.6z M546.7,903.9c0-3.9-0.9-6.9-2.6-9s-4.2-3.1-7.5-3.1    c-3.2,0-5.7,1-7.4,3.1s-2.6,5.1-2.6,9v10.5h20.2V903.9z").attr({parent: 'barsbarsbg', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'path_w');
bartext.attr({'id': 'bartext', 'parent': 'barsbarsbg', 'name': 'bartext'});


var groupTables = [viewleft, viewright, beachleft, beachright, balconytwo, balconyone, thetop, vip, behindmain, bobar, stage];
viewleft.push(viewleft3, viewleft2, viewleft1);
viewright.push(viewright3, viewright2, viewright1);
beachleft.push(beachleft7, beachleft6, beachleft5, beachleft4, beachleft3, beachleft2, beach1);
beachright.push(beachright7, beachright6, beachright5, beachright4, beachright3, beachright2_1_, beachright1_1_);
balconytwo.push(balconytwo10, balconytwo9, balconytwo8, balconytwo7, balconytwo6, balconytwo5, balconytwo4, balconytwo3, balconytwo2, balconytwo1);
balconyone.push(balconyone7, balconyone6, balconyone5, balconyone4, balconyone3, balconyone2, balconyone1);
thetop.push(thetop1, thetop2, thetop3, thetop4);
vip.push(vip14, vip13, vip12, vip11, vip10, vip9, vip8, vip7, vip6, vip5, vip4, vip3, vip2, vip1);
behindmain.push(behindmain5, behindmain4, behindmain3, behindmain2, behindmain1);
bobar.push(bobar9, bobar8, bobar7, bobar6, bobar5, bobar4, bobar3, bobar2, bobar1);
stage.push(stage1, stage2, stage3);



var tables = [beach1, beachleft2, beachleft3, beachleft4, beachleft5, beachleft6, beachleft7, beachright1_1_, beachright2_1_, beachright3, beachright4, beachright5, beachright6, beachright7, viewleft1, viewleft2, viewleft3, viewright1, viewright2, viewright3,
    balconytwo1, balconytwo2, balconytwo3, balconytwo4, balconytwo5, balconytwo6, balconytwo7, balconytwo8, balconytwo9, balconytwo10, balconyone1, balconyone2, balconyone3, balconyone4, balconyone5, balconyone6, balconyone7,
    behindmain1, behindmain2, behindmain3, behindmain4, behindmain5, thetop1, thetop2, thetop3, thetop4, stage1, stage2, stage3, bobar1, bobar2, bobar3, bobar4, bobar5, bobar6, bobar7, bobar8, bobar9,
    vip1, vip2, vip3, vip4, vip14, vip6, vip7, vip8, vip9, vip10, vip11, vip12, vip13, vip5];