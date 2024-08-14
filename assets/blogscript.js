const URL = "https://dev.to/api/articles?username=arwazkhan189";
fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((resultArray) => {
    let dataset = "";
    resultArray.map((data) => {
      let imageurl = "./assets/images/noImage.png";
      if (data.cover_image != null) imageurl = data.cover_image;
      dataset += `<div class="row justify-content-start">
        <div class="col-md-5">
            <img id="cover_image" src="${imageurl}" class="img-fluid" loading="lazy">
        </div>
        <div class="col-md-7 ">
            <h2 >${data.title}</h2>
            <h5><b>Published on ${data.readable_publish_date}</b></h5>
            <p class="font-italic">${data.description}</p>
            <a class="btn btn-primary"  href="${data.canonical_url}" target="_blank" role="button">Read More »</a>
        </div>
    </div>
    <hr>`;
    });
    document.getElementById("blog").innerHTML = dataset;
  })
  .catch((err) => {
    console.log(err);
  });

  //Navbar Close code
$(document).ready(function () {
  $(".navbar-nav a").on("click", function () {
    if ($(".navbar-toggler").is(":visible")) {
      $(".navbar-toggler").click();
    }
  });
});

