<main data-page="home" class="visible">
  <section class="hero">
  	<div class="hero__inner">
  		<h1>We are digital engagment specialists</h1>
  		<p>Using little escapes to connect 25 million shoppers with brands along the path to purchase.</p>

  		<button id="scroll-btn" class="btn btn--grayscale">What we do<img src="/src/assets/images/chevron-down.svg" alt=""></a>
  		</button>

  		<a href="#/interactive-gallery" class="btn btn--grayscale" data-page-name="interactive-gallery">
  			See our work
  		</a>

  	</div>
  </section>

  <section class="secondary-hero">
    <?php include("src/templates/shared/secondary_hero.php"); ?>
  </section>

  <section class="results-section">
    <?php include("src/templates/shared/results-section.php"); ?>
  </section>

	<div class="info-section-wrap">
    <section class="info-section">
    	<div class="info-section__inner">
    		<div class="info-section__details">
    		  <h2>
    		    Shopper
    		  </h2>
    		  <p>
    		    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
    		   </p>
    		  <a href="#/shopper" data-page-name="shoppper" class="btn btn--grayscale">Learn more</a>
    		</div>

        <figure class="info-section__figure">
          <img src="http://placehold.it/320x320" alt="Shopper Image">
        </figure>

    	</div>
    </section>

    <section class="info-section">
      <div class="info-section__inner">
        <div class="info-section__details">
          <h2>
            Brand
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
           </p>
          <a href="#/brand" data-page-name="brand" class="btn btn--grayscale">Learn more</a>
        </div>

        <figure class="info-section__figure">
          <img src="http://placehold.it/320x320" alt="Shopper Image">
        </figure>

      </div>
    </section>
	</div>

  <section class="client-section">
    <?php include("src/templates/shared/recent_clients.php"); ?>
  </section>

  <?php include("src/templates/featured_quote.php"); ?>

  <section class="feature-section">
    <h2>We'd <strong>love</strong> to hear from you.</h2>
    <?php include("src/templates/shared/contact_form.php"); ?>
  </section>
</main>
