import { BaseComponent } from "../BaseComponent.js";

class IndexScreen extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
    }

    render() {
        const template = `
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
       
        <link rel="stylesheet" href="../css/owl.carousel.min.css">
        <link rel="stylesheet" href="../css/owl.theme.default.min.css">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
        <script src="//unpkg.com/navigo@6"></script>

        <link rel="stylesheet" href="../css/aos.css">
    
        <link rel="stylesheet" href="../css/styles_home.css">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
        
        <nav-Login></nav-Login>
    <main>
        <div data-aos="fade-in" data-aos-delay="100">
            <site-title></site-title>
        </div>
        <section>
            <div class="blog">
                <div class="container">
                    <div class="owl-carousel owl-theme blog-post">
                        <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="../img/Slide01.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Book with us and book it out of here!</h3>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-in" data-aos-delay="200">
                            <img src="../img/Slide02.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Someday I’M gonna travel the world</h3>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-left" data-aos-delay="200">
                            <img src="../img/Slide03.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Don’t just book it. Thomas Cook it</h3>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="../img/Slide04.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Go and see all you possibly can</h3>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="../img/Slide05.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Travel more to discover yourself</h3>
                            </div>
                        </div>
                        <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="../img/Slide06.jpg" alt="post-1">
                            <div class="blog-title">
                                <h3>Don’t be a tourist, be a traveler</h3>
                            </div>
                        </div>
                    </div>
                    <div class="owl-navigation">
                        <span class="owl-nav-prev" data-aos="fade-in" data-aos-delay="200"><i
                                class="fas fa-long-arrow-alt-left"></i></span>
                        <span class="owl-nav-next" data-aos="fade-in" data-aos-delay="200"><i
                                class="fas fa-long-arrow-alt-right"></i></span>
                    </div>
                </div>
            </div>
        </section>

        <section class="container" id="exploree" data-aos="zoom-in" data-aos-delay="200">
            <div class="site-content">
                <div class="posts">

                </div>
                <aside class="sidebar">
                    <slide-bar></slide-bar>
                </aside>
            </div>
        </section>
    </main>

    <footer-main></footer-main>
        `;
        this._shadowRoot.innerHTML = template;

    }

}

window.customElements.define('index-screen', IndexScreen);