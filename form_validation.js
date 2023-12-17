var validation = Vue.createApp({
  data() {
    return {
      form_data: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        birthday: "",
        gender: "",
        message: "",
      },
      error: {},
    };
  },
  methods: {
    submitForm() {
      // console.log(this.form_data.first_name, typeof this.error.first_name);
      this.validate();
      // console.log(this.form_data.message);
      // console.log("pass:"+this.form_data.password);
      // console.log(this.form_data.gender);
      // console.log(this.form_data.birthday);
      // console.log(this.form_data.address);
    },

    validate() {
      if (this.form_data.first_name == "" || null) {
        this.error.first_name = "First name is required";
      }
      if (this.form_data.last_name == "" || null) {
        console.log(this.form_data.last_name);
        this.error.last_name = "Last name is required";
      }
      if (this.form_data.email == "" || null) {
        this.error.email = "Email is required";
      }
      if (this.form_data.password == "" || null) {
        this.error.password = "Password is required";
      }
      if (this.form_data.address == "" || null) {
        this.error.address = "Address is required";
      }
      if (this.form_data.birthday == "" || null) {
        this.error.birthday = "Birthday is required";
      }
      if (this.form_data.gender == "" || null) {
        this.error.gender = "Gender is required";
      }
      if (this.form_data.message == "" || null) {
        this.error.message = "Message is required";
      }
    },
  },
});

validation.mount("#valid");
