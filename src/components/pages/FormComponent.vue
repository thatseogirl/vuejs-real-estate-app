<template>
  <div class="new_listing_section">
    <div class="listing_container">
      <router-link to="/" class="back_link">
        <img :src="require('../../assets/images/back.png')" class="back" />Back
        to overview</router-link
      >
      <router-link to="/" class="back_link_mobile">
        <img :src="require('../../assets/images/back.png')" class="back" />
        {{ headerTitle }}</router-link
      >
      <div class="form_section">
        <h3>{{ headerTitle }}</h3>
        <form @submit.prevent="onSubmit">
          <div class="flex_items">
            <label for="streetName">Street name*</label>
            <input
              @blur="v$.formData.streetName.$touch"
              type="text"
              v-model="formData.streetName"
              name="streetName"
              placeholder="Enter the street name"
              :class="{
                'error-input': v$.formData.streetName.$error,
              }"
            />
          </div>

          <section>
            <div class="flex_items">
              <label for="houseNumber">House Number*</label>
              <input
                @blur="v$.formData.houseNumber.$touch"
                type="text"
                v-model="formData.houseNumber"
                name="houseNumber"
                placeholder="Enter house number"
                :class="{
                  'error-input': v$.formData.houseNumber.$error,
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
              @blur="v$.formData.zip.$touch"
              type="text"
              v-model="formData.zip"
              name="zip"
              placeholder="e.g 1000 AA"
              :class="{
                'error-input': v$.formData.zip.$error,
              }"
            />
          </div>

          <div class="flex_items">
            <label for="city">City*</label>
            <input
              @blur="v$.formData.city.$touch"
              type="text"
              v-model="formData.city"
              name="city"
              placeholder="e.g Utrecht"
              :class="{
                'error-input': v$.formData.city.$error,
              }"
            />
          </div>

          <!-- createListing image -->
          <div class="flex_items" v-if="isCreate">
            <div class="image-upload">
              <label for="file-input"
                >Upload Image (PNG OR JPG)*
                <div
                  class="box image-upload"
                  :class="{
                    'error-input': v$.formData.upload.$error,
                  }"
                >
                  <img
                    :src="require('../../assets/images/upload.png')"
                    class="box_img"
                    name="upload"
                    id="file_upload"
                    @change="uploadImage"
                  />
                </div>
              </label>

              <input
                @blur="v$.formData.image.$touch"
                id="file-input"
                type="file"
                name="upload"
                accept=" .png, .jpg, .jpeg"
                @change="uploadImage"
              />
            </div>
          </div>

          <!-- editListing image -->
          <div class="flex_items" v-if="!isCreate">
            <div class="image-upload">
              <label for="file-input"
                >Upload Image (PNG OR JPG)*
                <div
                  class="box image-upload"
                  :class="{
                    'error-input': v$.formData.upload.$error,
                  }"
                >
                  <img
                    :src="this.previewImage"
                    class="box_img"
                    name="upload"
                    id="file_upload"
                    @change="uploadImage"
                  />
                </div>
              </label>

              <input
                @blur="v$.formData.image.$touch"
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
              @blur="v$.formData.price.$touch"
              type="number"
              v-model.number="formData.price"
              name="price"
              placeholder="e.g €150.000"
              :class="{
                'error-input': v$.formData.price.$error,
              }"
            />
          </div>

          <section>
            <div class="flex_items">
              <label for="size">Size*</label>
              <input
                @blur="v$.formData.size.$touch"
                type="text"
                v-model.number="formData.size"
                name="size"
                placeholder="e.g 60m2"
                :class="{
                  'error-input': v$.formData.size.$error,
                }"
              />
            </div>
            <!-- createListing houseGarage -->
            <div class="flex_items" v-if="isCreate">
              <label for="garage">Garage*</label>
              <select
                style="cursor: pointer"
                @blur="v$.formData.hasGarage.$touch"
                name="garage"
                v-model="formData.hasGarage"
                id="select"
                :class="{
                  'error-input': v$.formData.hasGarage.$error,
                }"
              >
                <option value="" disabled>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <!-- editListing houseGarage -->
            <div class="flex_items" v-else-if="!isCreate">
              <label for="garage">Garage*</label>
              <select
                style="cursor: pointer"
                @blur="v$.formData.hasGarage.$touch"
                name="garage"
                v-model="formData.hasGarage"
                id="select"
                :class="{
                  'error-input': v$.formData.hasGarage.$error,
                }"
              >
                <option value="" disabled>Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </section>

          <section>
            <div class="flex_items">
              <label for="bedrooms">Bedrooms*</label>
              <input
                @blur="v$.formData.bedrooms.$touch"
                type="text"
                v-model.number="formData.bedrooms"
                name="bedrooms"
                placeholder="Enter amount"
                :class="{
                  'error-input': v$.formData.bedrooms.$error,
                }"
              />
            </div>

            <div class="flex_items">
              <label for="bathrooms">Bathrooms*</label>
              <input
                @blur="v$.formData.bathrooms.$touch"
                type="text"
                v-model.number="formData.bathrooms"
                name="bathrooms"
                placeholder="Enter amount"
                :class="{
                  'error-input': v$.formData.bathrooms.$error,
                }"
              />
            </div>
          </section>

          <div class="flex_items">
            <label for="constructionDate">Construction date*</label>
            <input
              @blur="v$.formData.constructionYear.$touch"
              type="text"
              v-model="formData.constructionYear"
              name="constructionYear"
              placeholder="e.g 1990"
              :class="{
                'error-input': v$.formData.constructionYear.$error,
              }"
            />
          </div>

          <div class="flex_items">
            <label for="description">Description*</label>
            <textarea
              @blur="v$.formData.description.$touch"
              v-model="formData.description"
              placeholder="Enter description"
              :class="{
                'error-input': v$.formData.description.$error,
              }"
            ></textarea>
          </div>
          <p v-if="v$.formData.$invalid">Required field missing</p>
          <ButtonItem
            :disabled="v$.formData.$invalid"
            type="submit"
            :text="isCreate ? 'Post' : 'Save'"
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
  name: "FormComponent",
  props: {
    house: Object,
    isCreate: Boolean,
    id: integer,
  },
  components: {
    ButtonItem,
  },
  data() {
    return {
      formData: this.house,
      previewImage: this.isCreate ? "" : this.house.image,
    };
  },
  computed: {
    headerTitle() {
      return this.isCreate ? "Create New Listing" : "Edit Listing";
    },
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
        upload: this.isCreate ? { required } : "",
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
    ...mapActions(["addNewListing", "uploadImage", "editListing"]),

    async onSubmit() {
      if (this.isCreate) {
        await this.submitNewListing();
      } else {
        await this.submitEditListing();
      }
    },
    async submitNewListing() {
      if (!this.v$.formData.$invalid) {
        let houseId = await this.addNewListing(this.formData);
        this.$router.push({ path: `/details/${houseId}` });
        this.formData = "";
      }
    },
    async submitEditListing() {
      const currentHouse = {};
      currentHouse.data = this.formData;
      currentHouse.id = this.id;
      let houseId = await this.editListing(currentHouse);
      this.$router.push({ path: `/details/${houseId}` });
    },

    uploadImage(e) {
      let preview_image = URL.createObjectURL(e.target.files[0]);
      let preview = document.getElementById("file_upload");
      preview.src = preview_image;
      this.previewImage = preview.src;

      let imageFormData = new FormData();
      imageFormData.append("image", e.target.files[0]);
      this.formData.upload = imageFormData;
      console.log(this.formData.hasGarage);
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.new_listing_section {
  background-image: url("../../assets/images/listing-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.listing_container {
  width: 80%;
  max-width: 100%;
  margin: auto;
  padding: 7em 2.5em;
}
h3 {
  font: bold 22px var(--secondary-font);
}
.back {
  width: 20px;
  height: 20px;
}
.back_link {
  color: var(--primary-text-color);
  font: 400 16px var(--secondary-font);
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
  font: 600 14px var(--secondary-font);
  border: none;
  background-color: var(--primary-background);
  padding: 1.5em;
  border-radius: 5px;
}
label {
  font: 600 14px var(--secondary-font);
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
  cursor: pointer;
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
  font: italic 14px var(--secondary-font);
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
    width: 80%;
  }
  .listing_container {
    padding: 8.5em 2.5em;
  }
}
@media (max-width: 840px) {
  .back_link {
    display: none;
  }
  .back_link_mobile {
    color: var(--primary-text-color);
    font: bold 22px var(--secondary-font);
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
    min-height: 1400px;
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
    min-height: 1700px;
  }
}
</style>
