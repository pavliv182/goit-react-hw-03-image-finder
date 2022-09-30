import { Component } from 'react';

import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    q: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.q);
    this.reset();
  };

  reset() {
    this.setState({ q: '' });
  }

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            name="q"
            value={this.state.q}
            className={css.searchFormInput}
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

export default Searchbar;

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
