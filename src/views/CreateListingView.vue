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
            />
            <!-- error message -->
            <!-- <div class="input-errors" v-for="(error, index) of v$.formData.streetName.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div> -->
          </div>

          <section>
            <div class="flex_items">
              <label for="houseNumber">House Number*</label>
              <input
                type="text"
                v-model="formData.houseNumber"
                name="houseNumber"
                placeholder="Enter house number"
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
            />
          </div>

          <div class="flex_items">
            <label for="city">City*</label>
            <input
              type="text"
              v-model="formData.city"
              name="city"
              placeholder="e.g Utrecht"
            />
          </div>

          <!-- image -->
          <div class="flex_items">
            <div class="image-upload">
              <label for="file-input"
                >Upload Image (PNG OR JPG)*
                <div class="box image-upload">
                  <img
                    :src="require('../assets/images/upload.png')"
                    class="box_img"
                    @click="selectImage"
                  />
                </div>
              </label>

              <input
                id="file-input"
                type="file"
                name="image"
                accept=" .png, .jpg, .jpeg"
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
            />
          </div>

          <section>
            <div class="flex_items">
              <label for="size">Size*</label>
              <input
                type="text"
                v-model="formData.size"
                name="size"
                placeholder="e.g 60m2"
              />
            </div>

            <div class="flex_items">
              <label for="garage">Garage*</label>
              <select name="garage" v-model="formData.hasGarage" id="select">
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
                v-model="formData.bedrooms"
                name="bedrooms"
                placeholder="Enter amount"
              />
            </div>

            <div class="flex_items">
              <label for="bathrooms">Bathrooms*</label>
              <input
                type="text"
                v-model="formData.bathrooms"
                name="bathrooms"
                placeholder="Enter amount"
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
            />
          </div>

          <div class="flex_items">
            <label for="description">Description*</label>
            <textarea
              v-model="formData.description"
              placeholder="Enter description"
            ></textarea>
          </div>
          <ButtonItem
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
// import { required } from "@vuelidate/validators";
import { mapActions } from "vuex";
// import DetailsViewVue from "./DetailsView.vue";
export default {
  name: "CreateListing",
  components: {
    ButtonItem,
  },
  data() {
    return {
      isEditing: false,
      editItems: {},
      upload: "",
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
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  // validations(){
  //   return{
  //     formData:{
  //       streetName:{required},
  //     bedrooms:{required}
  //     }
  //   }
  // },
  methods: {
    ...mapActions(["addNewListing", "uploadImage"]),

    onSubmit() {
      // if (!this.v$.formData.$invalid) {
      //   this.addNewListing(this.formData);
      //   this.formData = "";
      // }
      this.addNewListing(this.formData);
      this.uploadImage(this.upload);
      this.$router.push({ path: "/details/:id" });
    },

    selectImage(e) {
      console.log(e);
      console.log(this.upload);
    },
  },

  // computed: {
  //   streetNameIsValid() {
  //     return !!this.formData.streetName;
  //   },
  //   bedroomsIsValid() {
  //     return (
  //       typeof this.formData.bedrooms === "number" &&
  //       this.formData.bedrooms > 1 &&
  //       this.formData.bedrooms < 10
  //     );
  //   },
  //   validation() {
  //     return this.streetNameIsValid && this.bedroomsIsValid;
  //   },
  // },
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
  /* height: 1400px; */
  margin: auto;
  padding: 7em 2.5em;
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
  font-family: var(--primary-font);
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
  border: var(--primary-element-color);
  background-color: var(--primary-background);
  padding: 1.5em;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
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
  width: 30px;
}
.button {
  text-transform: uppercase;
  float: right;
  padding: 1em 5em;
}
.error-input {
  border: red 1px;
  color: red;
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

@media (max-width: 400px) {
  section {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
