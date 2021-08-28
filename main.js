var channelID = "UCrvdN4QN6Zk7aUg7ZkiXH8Q";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID, function (data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=") + 1);
   $("#youtube_video").attr("href", "https://youtube.com/watch?v=" + id);
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.width = "80px";
      document.getElementById("navbar").style.paddingTop = "0";
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("navbar").style.backgroundColor = "white";
   } 
   if (document.body.scrollTop < 80 && document.documentElement.scrollTop < 80) {
      document.getElementById("logo").style.width = "200px";
      document.getElementById("navbar").style.paddingTop = "50px";
      document.getElementById("navbar").style.height = "200px";
      document.getElementById("navbar").style.backgroundColor = "#00DAA1";
   }
}