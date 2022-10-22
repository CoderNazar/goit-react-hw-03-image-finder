const getImages = async (page) => {
  const images = await fetch(
    `https://pixabay.com/api/?q=cat&page=${page}&key=30781634-23656411acc28ebbb78901b75&image_type=photo&orientation=horizontal&per_page=12`
  ).then(r => r.json());
  return images;
};

export { getImages };
