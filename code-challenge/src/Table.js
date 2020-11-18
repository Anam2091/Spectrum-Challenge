import React, { useState } from "react";
import _ from "lodash";

const Table = (props) => {
  const [stateFilter, setStateFilter] = useState("");
  let data = props.restaurants.filter((restaurant) => {
    if (stateFilter.length) {
      return restaurant.state === stateFilter;
    }
    return restaurant;
  });

  const [genreFilter, setGenreFilter] = useState("");
  data = data.filter((restaurant) => {
    if (genreFilter.length) {
      return restaurant.genre.includes(genreFilter);
    }
    return restaurant
  });

  const [search, setSearch] = useState("");
  data = data.filter((restaurant) => {
    if (search.length) {
        return Object.keys(restaurant).filter(key => {
            return restaurant[key].includes(search)
        }).length;
    }
    return restaurant;
  });

  const genreHandleChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const searchHandleChange = (event) => {
    setSearch(event.target.value);
  };

  const sorted_restaurants = _.sortBy(data, ["name"]);
  const handleChange = (event) => {
    setStateFilter(event.target.value);
  };
  return (
    <div>
      <label>Filter By State</label>
      <input value={stateFilter} onChange={handleChange} />

      <label>Filter By Genre</label>
      <input value={genreFilter} onChange={genreHandleChange} />

      <label>Search</label>
      <input value={search} onChange={searchHandleChange} />
      <table>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Phone Number</th>
          <th>Genres</th>
        </tr>
        {sorted_restaurants.length ? sorted_restaurants.map((restaurant) => {
          return (
            <tr>
              <td>{restaurant.name}</td>
              <td>{restaurant.city}</td>
              <td>{restaurant.state}</td>
              <td>{restaurant.telephone}</td>
              <td>{restaurant.genre}</td>
            </tr>
          );
        }) : <p>No results found.</p>}
      </table>
    </div>
  );
};

export default Table;
