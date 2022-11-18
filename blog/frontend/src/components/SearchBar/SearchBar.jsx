import React from 'react'

function SearchBar() {
  return (
    // Creating a search bar for the user to search for a specific blog post
    <div className="container mb-3">
        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Search</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar