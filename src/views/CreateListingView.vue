<template>
  <div class="new_listing_section">
    <div class="listing_container">
      <router-link to="/" class="back_link">
        <img :src="require('../assets/images/back.png')" class="back" />Back to
        overview</router-link
      >
      <router-link to="/" class="back_link_mobile">
        <img :src="require('../assets/images/back.png')" class="back" /> Create
        new Listing</router-link
      >
      <div class="form_section">
        <h3>Create new listing</h3>
        <form @submit.prevent="onSubmit">
          <div class="flex_items">
            <label for="streetName">Street name*</label>
            <input
              type="text"
              v-model="formData.streetName"
              name="streetName"
              placeholder="Enter the street name"
              :class="{
                'error-input': v$.formData.streetName.$invalid,
              }"
            />
          </div>

          <section>
            <div class="flex_items">
              <label for="houseNumber">House Number*</label>
              <input
                type="text"
                v-model="formData.houseNumber"
                name="houseNumber"
                placeholder="Enter house number"
                :class="{
                  'error-input': v$.formData.houseNumber.$invalid,
                }"
              />
            </div>

            <div class="flex_items">
              <label for="numberAddition">Addition (optional)</label>
              <input
                type="text"
                v-model="formData.numberAddition"
                name="numberAddition"
                placeholder="e.g A"
              />
            </div>
          </section>

          <div class="flex_items">
            <label for="postalCode">Postal code*</label>
            <input
              type="text"
              v-model="formData.zip"
              name="zip"
              placeholder="e.g 1000 AA"
              :class="{
                'error-input': v$.formData.zip.$invalid,
              }"
            />
          </div>

          <div class="flex_items">
            <label for="city">City*</label>
            <input
              type="text"
              v-model="formData.city"
              name="city"
              placeholder="e.g Utrecht"
              :class="{
                'error-input': v$.formData.city.$invalid,
              }"
            />
          </div>

          <!-- image -->
          <div class="flex_items">
            <div class="image-upload">
              <label for="file-input"
                >Upload Image (PNG OR JPG)*
                <div
                  class="box image-upload"
                  :class="{
                    'error-input': v$.formData.upload.$invalid,
                  }"
                >
                  <img
                    :src="require('../assets/images/upload.png')"
                    class="box_img"
                    id="file_upload"
                    @change="uploadImage"
                  />
                </div>
              </label>

              <input
                id="file-input"
                type="file"
                name="upload"
                accept=" .png, .jpg, .jpeg"
                @change="uploadImage"
              />
            </div>
          </div>

          <div class="flex_items">
            <label for="price">Price*</label>
            <input
              type="number"
              v-model.number="formData.price"
              name="price"
              placeholder="e.g €150.000"
              :class="{
                'error-input': v$.formData.price.$invalid,
              }"
            />
          </div>

          <section>
            <div class="flex_items">
              <label for="size">Size*</label>
              <input
                type="text"
                v-model.number="formData.size"
                name="size"
                placeholder="e.g 60m2"
                :class="{
                  'error-input': v$.formData.size.$invalid,
                }"
              />
            </div>

            <div class="flex_items">
              <label for="garage">Garage*</label>
              <select
                name="garage"
                v-model="formData.hasGarage"
                id="select"
                :class="{
                  'error-input': v$.formData.hasGarage.$invalid,
                }"
              >
                <option disabled value="">Select</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </section>

          <section>
            <div class="flex_items">
              <label for="bedrooms">Bedrooms*</label>
              <input
                type="text"
                v-model.number="formData.bedrooms"
                name="bedrooms"
                placeholder="Enter amount"
                :class="{
                  'error-input': v$.formData.bedrooms.$invalid,
                }"
              />
            </div>

            <div class="flex_items">
              <label for="bathrooms">Bathrooms*</label>
              <input
                type="text"
                v-model.number="formData.bathrooms"
                name="bathrooms"
                placeholder="Enter amount"
                :class="{
                  'error-input': v$.formData.bathrooms.$invalid,
                }"
              />
            </div>
          </section>

          <div class="flex_items">
            <label for="constructionDate">Construction date*</label>
            <input
              type="text"
              v-model="formData.constructionYear"
              name="constructionYear"
              placeholder="e.g 1990"
              :class="{
                'error-input': v$.formData.constructionYear.$invalid,
              }"
            />
          </div>

          <div class="flex_items">
            <label for="description">Description*</label>
            <textarea
              v-model="formData.description"
              placeholder="Enter description"
              :class="{
                'error-input': v$.formData.description.$invalid,
              }"
            ></textarea>
          </div>
          <p v-if="v$.formData.$invalid">Required field missing</p>
          <ButtonItem
            :disabled="v$.formData.$invalid"
            type="submit"
            text="Post"
            color="var(--primary-element-color)"
            class="button"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonItem from "@/components/ButtonItem.vue";
import useVuelidate from "@vuelidate/core";
import { required, integer } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  name: "CreateListing",
  components: {
    ButtonItem,
  },
  data() {
    return {
      formData: {
        streetName: "",
        houseNumber: "",
        numberAddition: "",
        zip: "",
        city: "",
        price: "",
        size: "",
        hasGarage: false,
        bedrooms: "",
        bathrooms: "",
        constructionYear: "",
        description: "",
        upload: "",
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      formData: {
        streetName: { required },
        houseNumber: { required },
        zip: { required },
        upload: { required },
        price: { required, integer },
        city: { required },
        size: { required, integer },
        hasGarage: { required },
        bedrooms: { required, integer },
        bathrooms: { required, integer },
        constructionYear: { required, integer },
        description: { required },
      },
    };
  },
  methods: {
    ...mapActions(["addNewListing", "uploadImage"]),

    async onSubmit() {
      if (!this.v$.formData.$invalid) {
        let houseId = await this.addNewListing(this.formData);
        this.$router.push({ path: "/details/" + `${houseId}` });
        this.formData = "";
      }
    },

    uploadImage(e) {
      let preview_image = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById("file_upload");
      preview.src = preview_image;

      let imageFormData = new FormData();
      imageFormData.append("image", e.target.files[0]);
      this.formData.upload = imageFormData;
    },
  },
};
</script>

<style scoped>
.new_listing_section {
  background-image: url("../assets/images/listing-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.listing_container {
  width: 80%;
  max-width: 100%;
  margin: auto;
  padding: 7em 2.5em;
  overflow: scroll;
}
h3 {
  font-family: var(--secondary-font);
  font-size: 22px;
  font-weight: bold;
}
.back {
  width: 20px;
  height: 20px;
}
.back_link {
  color: var(--primary-text-color);
  font-family: var(--secondary-font);
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.back_link_mobile {
  display: none;
}
.form_section {
  width: 40%;
}
form {
  margin-top: 2em;
}
.flex_items {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1.5em;
}
section {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.5em;
}

input,
textarea,
#select {
  font-family: var(--secondary-font);
  border: none;
  background-color: var(--primary-background);
  padding: 1.5em;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
}
label {
  font-family: var(--secondary-font);
  font-size: 14px;
  font-weight: 600;
}
textarea {
  padding-bottom: 6em;
}
.box {
  border: 2px dashed var(--secondary-text-color);
  stroke-width: 5;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.box_img {
  width: 50px;
  height: 50px;
}
.button {
  text-transform: uppercase;
  float: right;
  padding: 1em 5em;
}
.button:disabled {
  opacity: 0.5;
}
.error-input {
  border: 1px solid var(--primary-element-color);
  color: red;
}
p {
  color: var(--primary-element-color);
  font-family: var(--secondary-font);
  font-style: italic;
  font-size: 14px;
}
.image-upload > input {
  display: none;
}
@media (max-width: 1340px) {
  .form_section {
    width: 60%;
  }
}
@media (max-width: 996px) {
  .form_section {
    width: 70%;
  }
}
@media (max-width: 840px) {
  .back_link {
    display: none;
  }
  .back_link_mobile {
    color: var(--primary-text-color);
    font-family: var(--secondary-font);
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    gap: 30px;
    padding-top: 0;
    margin-bottom: 20px;
  }
  .form_section {
    width: 100%;
    margin: 0;
  }
  label {
    font-size: 12px;
  }
  input,
  textarea,
  #select {
    font-size: 12px;
  }
  .error-input {
    font-size: 12px;
  }
  h3 {
    display: none;
  }
  .button {
    width: 100%;
  }
  .listing_container {
    width: 90%;
    min-height: 1360px;
    padding: 1em;
  }
}
@media (max-width: 500px) {
  .listing_container {
    width: 100%;
    min-height: 1650px;
  }
}

@media (max-width: 430px) {
  section {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .listing_container {
    min-height: 1650px;
  }
}
</style>
