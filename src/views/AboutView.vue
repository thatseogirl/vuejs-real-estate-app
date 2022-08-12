<template>
  <main>
    <header class="header">About</header>
    <div class="container">
      <div>
        <h1>About DTT Real Estate</h1>
        <div class="about">
          <p class="about_text_1">
            DTT is not your average software development company because besides
            technical knowledge we also have a solid marketing background. With
            passion, we work on a perfect mix of technology, strategy, and
            creativity. DTT was established in 2010, and in a short period we
            have made significant steps forward; a substantial portfolio,
            excellent credentials, respectable clients, and most importantly a
            competent and driven team.
          </p>
          <p class="about_text_2">Design and Development</p>
          <div class="flex">
            <img :src="require('../assets/images/logo.png')" alt="logo" />
            <div class="dtt_link">
              <p>By DTT</p>
              <a href="https://www.d-tt.nl/en/" target="_blank">www.d-tt.nl</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
main {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding: 5em 0 0;
  background-color: var(--secondary-background);
}
.container {
  width: 75%;
  max-width: 100%;
  margin: auto;
}
h1 {
  font: bold 1.5em var(--secondary-font);
  margin-top: 1em;
}
.about_text_1 {
  font: 400 2.5vh var(--primary-font);
  word-spacing: 0.15em;
  line-height: 1.9;
  margin-top: 3em;
}
.flex {
  display: flex;
  gap: 1em;
  margin-top: 1em;
}
.about_text_2 {
  font: bold 1.3em var(--secondary-font);
  margin-top: 5em;
}
img {
  width: 10vw;
  /* height: 6vh; */
}
.header {
  display: none;
}
a {
  text-decoration: none;
  color: var(--hyperlink-text-color);
}
.dtt_link {
  font-size: 1em;
}
@media (max-width: 996px) {
  main {
    padding: 8em 2.5em;
  }
}
@media (max-width: 840px) {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font: bold 2em var(--secondary-font);
  }
  main {
    padding: 4em 0 0;
  }
  img {
    width: 23%;
  }
  .about_text_1 {
    font-size: 1.75vh;
  }
  .about_text_2,
  .about_text_1,
  h1 {
    margin-top: 2em;
  }
  .dtt_link {
    font-size: 0.7em;
  }
}
@media (max-width: 550px) {
  .about_text_2 {
    font-size: 1em;
  }
  h1 {
    font-size: 1.2em;
  }
}
@media (max-width: 300px) {
  .about_text_2 {
    font-size: 0.9em;
  }
  h1 {
    font-size: 1em;
  }
}
</style>
