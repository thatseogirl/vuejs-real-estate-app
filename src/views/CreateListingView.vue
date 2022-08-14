<template>
  <FormComponent :house="formData" :isCreate="true" :id="id" />
</template>

<script>
import FormComponent from "@/components/pages/FormComponent.vue";
export default {
  name: "CreateListing",
  components: {
    FormComponent,
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
      id: null,
    };
  },
};
</script>
