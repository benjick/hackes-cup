import React from 'react';

const Previous = ({tournaments}) => (
  <section className="hero is-light" id="previous">
    <div className="hero-body">
      <div className="container">
        <h6 className="title is-6">Previous tournaments</h6>
        {tournaments.filter(tourny => !tourny.promote).map(tourny => (
          <div key={`tourny-${tourny.year}`}>
            <p className="title is-3">{tourny.year}</p>
            <p className="subtitle is-5">
              <a className="button" href={tourny.schedule}>
                <span className="icon">
                  <i className="fas fa-external-link-alt" />
                </span>
                <span>Visit tournament page</span>
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Previous;
