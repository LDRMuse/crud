import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    {/* https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html */}
    <section className="hero is-info is-medium is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            FAQ Application - Where all your questions are answered!
          </h1>
        </div>
      </div>
    </section>

    <div className="container">
      <section className="articles">
        <div className="column is-8 is-offset-2">
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">Welcome Guests!</p>
                  <div className="has-text-centered mb-4 tags has-addons level-item">
<<<<<<< HEAD
                    <Link to='/admins/FAQ' className="button is-primary is-small mt-3">Go to FAQs</Link>
=======
                    <span className="tag is-rounded is-info">
                      @melissaheying{" "}
                    </span>
                    <span className="tag is-rounded">
                      Est. November 13, 2020
                    </span>
>>>>>>> 69971f72f34887b60652fdea928612717c3a0b5c
                  </div>
                </div>
              </div>
              <div className="content article-body">
                <p className="has-text-centered">
                  {" "}
                  Want to visit our FAQ page?
                </p>
                <div className="has-text-centered mb-4 tags has-addons level-item">
                  <Link
                    to="/admin/FAQ"
                    className="button is-primary is-small mt-3"
                  >
                    Go to FAQs
                  </Link>
                </div>
                <hr></hr>
                <p>
                  <p>
                    Non arcu risus quis varius quam quisque. Dictum varius duis
                    at consectetur lorem. Posuere sollicitudin aliquam ultrices
                    sagittis orci a scelerisque purus semper.{" "}
                  </p>
                  <p>
                    Metus aliquam eleifend mi in nulla posuere sollicitudin
                    aliquam ultrices. In hac habitasse platea dictumst
                    vestibulum rhoncus est pellentesque elit. Accumsan lacus vel
                    facilisis volutpat. Non sodales neque sodales ut etiam. Est
                    pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis feugiat vivamus.
                  </p>
                  <hr></hr>
                  Voluptat ut farmacium tellus in metus vulputate. Feugiat in
                  fermentum posuere urna nec. Pharetra convallis posuere morbi
                  leo urna molestie. Accumsan lacus vel facilisis volutpat est
                  velit egestas. Fermentum leo vel orci porta. Faucibus interdum
                  posuere lorem ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
