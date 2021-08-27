var numposts = 20;
var standardstyling = true;
function showRecentPosts(json) {
document.write('<table>');
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }}
    posttitle = posttitle.link(posturl);
    if (standardstyling) 
    document.write('<tr><td>');
    document.write('<span class="fb-comments-count" data-href="'+posturl+'"></span>');
    document.write('</td><td>');
    document.write('<span class="fb-share-button" data-layout="button_count" data-href="'+posturl+'"></span>');
    document.write('</td><td>');
    document.write(posttitle);
    document.write('</td></tr>');
  }
document.write('</table>');
}
