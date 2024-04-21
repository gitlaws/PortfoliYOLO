<div class="project-container">
  <figure class="project-figure project-figure-1">
    <img
      class="project-image"
      src="https://source.unsplash.com/random?1"
      alt="Project Image 1"
    />
    <figcaption class="project-description">
      <h2 class="project-title">Item Placeholder 1</h2>
      <p class="project-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </figcaption>
  </figure>

  <figure class="project-figure project-figure-2">
    <img
      class="project-image"
      src="https://source.unsplash.com/random?2"
      alt="Project Image 2"
    />
    <figcaption class="project-description">
      <h2 class="project-title">Item Placeholder 2</h2>
      <p class="project-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </figcaption>
  </figure>

  <figure class="project-figure project-figure-3">
    <img
      class="project-image"
      src="https://source.unsplash.com/random?3"
      alt="Project Image 3"
    />
    <figcaption class="project-description">
      <h2 class="project-title">Item Placeholder 3</h2>
      <p class="project-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </figcaption>
  </figure>

  <figure class="project-figure project-figure-4">
    <img
      class="project-image"
      src="https://source.unsplash.com/random?4"
      alt="Project Image 4"
    />
    <figcaption class="project-description">
      <h2 class="project-title">Item Placeholder 4</h2>
      <p class="project-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </figcaption>
  </figure>

  <figure class="project-figure project-figure-5">
    <img
      class="project-image"
      src="https://source.unsplash.com/random?5"
      alt="Project Image 5"
    />
    <figcaption class="project-description">
      <h2 class="project-title">Item Placeholder 5</h2>
      <p class="project-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </figcaption>
  </figure>

  <figure class="project-figure project-figure-6">
    <img
      class="project-image"
      src="https://source.unsplash.com/random?6"
      alt="Project Image 6"
    />
    <figcaption class="project-description">
      <h2 class="project-title">Item Placeholder 6</h2>
      <p class="project-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </figcaption>
  </figure>
</div>



@import "../../../styles/variables";

.project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6c7073;
  text-align: center;
}

.project-figure {
  position: relative;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); // Adjust the minmax values as needed
  padding: 20px;
  width: 100%;
  gap: 20px;
}

.project-figure::before {
  content: "";
  width: 100%;
  padding-bottom: 56.25%; // This will give a 16:9 aspect ratio. Adjust as needed.
}

.project-image {
  border-radius: 8px;
  width: 100%;
  height: 30vh;
  object-fit: cover;
}

// .project-figure {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   padding: 20px;
//   width: 100%;
//   gap: 20px;
// }

// .project-image {
//   border-radius: 8px;
//   width: 100%;
//   height: 25vh;
//   object-fit: cover;
//   gap: 20px;
// }

.project-description {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-color: #a3a8ac;
  color: #f4f4f6;
  padding: 20px;
  width: 100%;
  word-wrap: normal;

  h2 {
    margin-bottom: 20px;
    // font-size: 1.5rem;
    // font-weight: 700;
  }
}

@media (min-width: $desktop) {
  .project-figure {
    padding: 0 20px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .project-image {
      min-width: 500px;
    }

    .project-description {
      min-width: 500px;
    }
  }
}

// @media (min-width: $tablet) {
//   .project-figure {
//     padding: 0 250px;
//     gap: 20px;
//   }
// }

@media (max-width: $mobile) {
  .project-figure {
    grid-template-columns: 1fr;
  }
}
