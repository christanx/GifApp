export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=FSSv1qgJs8tVREKZ4s3YNWaIP21hsi7s&q=${decodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map(({ images, id, title }) => {
    return {
      id: id,
      title: title,
      url: images.downsized_medium.url,
    };
  });

  return gifs;
};
