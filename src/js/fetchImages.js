import axios from 'axios';

async function fetchImages(name, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '30619319-9b2a2781e13a956bdb9c2416c';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };
