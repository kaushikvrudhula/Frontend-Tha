gapi.load("client", loadClient);

function loadClient() {
  gapi.client.setApiKey("AIzaSyAH0dSnkblz8VFdGVWA_DWL96kyFZMTYZM");
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
const ytForm = document.getElementById("yt-form");
const keywordInput = document.getElementById("keyword-input");
const maxresultInput = document.getElementById("maxresult-input");
const orderInput = document.getElementById("order-input");
const videoList = document.getElementById("videoListContainer");
var pageToken = "";

ytForm.addEventListener("submit", (e) => {
  e.preventDefault();
  execute();
});

function paginate(e, obj) {
  e.preventDefault();
  pageToken = obj.getAttribute("data-id");
  execute();
}

// Make sure the client is loaded before calling this method.
function execute() {
  const searchString = keywordInput.value;
  const maxresult = maxresultInput.value;
  const orderby = orderInput.value;

  var arr_search = {
    part: "snippet",
    type: "video",
    order: orderby,
    maxResults: maxresult,
    q: searchString,
  };

  if (pageToken != "") {
    arr_search.pageToken = pageToken;
  }

  return gapi.client.youtube.search.list(arr_search).then(
    function (response) {
      // Handle the results here (response.result has the parsed body).
      const listItems = response.result.items;
      if (listItems) {
        let output = "<h4>Videos</h4><div class='grid-container'>";

        listItems.forEach((item) => {
          const videoId = item.id.videoId;
          const videoTitle = item.snippet.title;
          output += `
                    <div class='grid-item'><a data-fancybox class='Link' href="https://www.youtube.com/watch?v=${videoId}"><img class='container-image'src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /><p>${videoTitle}</p></a><br></div>
                `;
        });
        output += "</div>";

        if (response.result.prevPageToken) {
          output += `<br><a class="paginate" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
        }

        if (response.result.nextPageToken) {
          output += `<a href="#" class="paginate" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
        }

        // Output list
        videoList.innerHTML = output;
      }
    },
    function (err) {
      console.error("Execute error", err);
    }
  );
}
