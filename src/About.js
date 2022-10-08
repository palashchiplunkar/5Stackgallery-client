import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      // <div classNmae="container">
      //   <h1>About Us</h1>
      //   <p>Generating random paragraphs can be an excellent way for writers to get their creative
      //      flow going at the beginning of the day. The writer has no idea what topic the random paragraph
      //       will be about when it appears. This forces the writer to use creativity to complete one of three
      //        common writing challenges. The writer can use the paragraph as the first one of a short story and
      //         build upon it.</p>
      // </div>
      <div class='container'>
        <h1>About Us</h1>

        <div class='row content'>
          <div class='col-lg-6' data-aos='fade-right' data-aos-delay='100'>
            <p>
              5stackgallery is a platform to gain access to thousands of images
              for free.here you can also upload images to 5stack community.we
              are the team of developers helping creators around the world to
              share and contribute.U can now use photos from our website without
              worrying about copyrights and trademarks.
            </p>

            <div class='row align-items-stretch no-gutters contact-wrap'>
              <div class='col-md-6'>
                <div class='form h-100'>
                  <h3>Talk To Us</h3>
                  <form
                    class='mb-5'
                    method='post'
                    id='contactForm'
                    name='contactForm'>
                    <div class='row'>
                      <div class='col-md-6 form-group mb-5'>
                        <label
                          for=''
                          class='col-form-label'
                          style={{ color: "white" }}>
                          Name *
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          name='name'
                          id='name'
                          placeholder='Your name'
                        />
                      </div>
                      <div class='col-md-6 form-group mb-5'>
                        <label
                          for=''
                          class='col-form-label'
                          style={{ color: "white" }}>
                          Email *
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          name='email'
                          id='email'
                          placeholder='Your email'
                        />
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-md-12 form-group mb-5'>
                        <label
                          for='message'
                          class='col-form-label'
                          style={{ color: "white" }}>
                          Message *
                        </label>
                        <textarea
                          class='form-control'
                          name='message'
                          id='message'
                          cols='30'
                          rows='4'
                          placeholder='Write your message'></textarea>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-12 form-group'>
                        <input
                          type='submit'
                          value='Send Message'
                          class='btn btn-primary rounded-0 py-2 px-4'></input>
                        <span class='submitting'></span>
                      </div>
                    </div>
                  </form>

                  <div id='form-message-warning mt-4'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
