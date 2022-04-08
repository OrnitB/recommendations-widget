const api_url =
  "https://api.taboola.com/1.2/json/newsplace-tndemotester/recommendations.get?app.apikey=f44d224ed117102b74bed53b82e6079af28600d5&app.type=mobile&source.type=home&source.id=%2F&source.url=http%3A%2F%2Fexample.com&placement.name=Editorial%20Trending&placement.rec-count=100&placement.organic-type=mix&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init";

let dataList = [];

fetch(api_url).then((response) => {
  return response.json().then((data) => {
    dataList.push(data.list);
    createSingleItem();
  });
});

const nullChecker = (input) => {
  Object.keys(input).forEach((key) => {
    if (input[key] == null || input[key] == undefined) {
      return (input[key] = "");
    } else {
      return input[key];
    }
  });
};

const createSingleItem = () => {
  let content = "";
  const container = document.getElementsByClassName("container")[0];
  for (let item = 0; item < 6; item++) {
    nullChecker(dataList[0][item]);
    const { branding, name, thumbnail, url } = dataList[0][item];
    const thumbnailSRC = thumbnail[0]["url"];
    const singleItem = `<div class="specificFr"><a href=${url}><img src=${thumbnailSRC}></a><a href=${url}><span>${name}</span></a><br/><span class="branding">${branding}</span></div>`;
    content += singleItem;
  }
  container.innerHTML = content;
};
