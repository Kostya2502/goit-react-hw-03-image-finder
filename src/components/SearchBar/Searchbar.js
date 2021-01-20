import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = ({ currentTarget }) => {
    this.setState({ query: currentTarget.value });
  };


  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;

    if (query.trim() === '') {
      alert('Enter what you are looking for.');
      return;
    }

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={query}
            onChange={this.handleChangeQuery}
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
