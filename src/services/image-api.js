import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api';

const apiKey = '19511472-50aab653a67a58395e1eec2d3';

const fetchImages = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default fetchImages;

fetchImages.propTypes = {
  searchQuery: PropTypes.string,
  currentPage: PropTypes.number,
};
