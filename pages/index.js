import React from 'react';
import Layout from '../src/components/Layout';
import Previous from '../src/components/Previous';
import {Hero, Logo, MenuButton} from '../src/components/ui';
import tournaments from '../src/db';

const current = tournaments.find(tourny => tourny.promote);

export default () => (
  <Layout>
    <Hero className="hero is-light is-bold is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Logo src="/static/logo.png" alt="Logo" />
          <div>
            {current && (
              <MenuButton href={current.schedule}>
                {current.year} tournament
              </MenuButton>
            )}
            <MenuButton scrollTo="previous">
              Previous {current ? 'ones' : 'tournaments'}
            </MenuButton>
          </div>
        </div>
      </div>
    </Hero>
    <Previous tournaments={tournaments} />
  </Layout>
);
