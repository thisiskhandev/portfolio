import React from "react";

const JamesWebBlog = () => {
  return (
    <>
      <main className="container my-5 py-5 inner_blogs">
        <section className="row">
          <div className="col-12">
            <h1 className="title pb-5 text-center">James Webb Telescope</h1>
          </div>
        </section>
        <section className="row">
          <div className="col-10">
            <article className="article">
              <img
                src={
                  require("../../../../Assets/Images/BlogsImages/webb-telescope-min.jpg")
                    .default
                }
                alt="NASA's James Webb telescope set for launch"
                className="img-fluid"
              />
              <small>
                <span>|</span> Source of Image: Hasselblad X1D
              </small>

              <h5>
                The $10bn James Webb telescope has left Earth on its mission to
                show the first stars to light up the Universe.
              </h5>
              <p>
                The observatory was lifted skyward by an Ariane rocket from the
                Kourou spaceport in French Guiana.
              </p>
              <p>
                Its flight to orbit lasted just under half an hour, with a
                signal confirming a successful outcome picked up by a ground
                antenna at Malindi in Kenya.
              </p>
              <p>
                Webb, named after one of the architects of the Apollo Moon
                landings, is the successor to the Hubble telescope.
              </p>
              <p>
                Engineers working with the US, European and Canadian space
                agencies have built the new observatory to be 100 times more
                powerful, however.
              </p>
              <p>
                <blockquote>
                  "Lift off from a tropical rainforest to the edge of time
                  itself, James Webb begins a voyage back to the birth of the
                  Universe,"
                </blockquote>
                said American space agency (Nasa) TV commentator Rob Navias at
                the moment the rocket left the Earth.
              </p>
              <p>
                Lift-off was eagerly awaited but accompanied also by a good deal
                of anxiety. Thousands of people worldwide have worked on the
                project over the past 30 years, and even though the Ariane is a
                very dependable vehicle - there are no guarantees when it comes
                to rockets.
              </p>
              <img
                src={
                  require("../../../../Assets/Images/BlogsImages/ARIANESPACE-telescope.jpg")
                    .default
                }
                alt="ARIANESPACE"
                className="img-fluid"
              />
              <small>
                <span>|</span>
                An image taken from the top of the Ariane as Webb separates to
                begin the next phase of its journey
              </small>
              <p>
                Webb's launch is only the start of what will be a complex series
                of initial activities over the next six months.
              </p>
              <p>
                Webb's launch is only the start of what will be a complex series
                of initial activities over the next six months.
              </p>
              <p>
                This won't be easy, conceded Nasa administrator Bill Nelson:{" "}
                <blockquote>
                  "We have to realise there are still innumerable things that
                  have to work and they have to work perfectly. But we know that
                  in great reward, there is great risk. And that's what this
                  business is all about. And that's why we dare to explore."
                </blockquote>
              </p>
              <img
                src={
                  require("../../../../Assets/Images/BlogsImages/jwst_hubble_comparison-min.png")
                    .default
                }
                alt="NASA Hubble vs James Webb telescope"
                className="img-fluid"
              />
              <small>
                <span>|</span>
                Source: NASA
              </small>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default JamesWebBlog;
