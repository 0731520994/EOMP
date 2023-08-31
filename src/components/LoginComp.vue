<script>
import FooterComp from '../components/FooterComp.vue';
import NavBarComp from '../components/NavbarComp.vue';
import LoginComp from '../components/LoginComp.vue'; 

export default {
  name: 'App',
  components: {
    NavBarComp,
    FooterComp,
    LoginComp 
  },
  data() {
    return {
      displayLoginForm: false,
      displayRegisterForm: false
    };
  },
  methods: {
    toggleForm(formType) {
      if (formType === "login") {
        this.displayLoginForm = !this.displayLoginForm;
        this.displayRegisterForm = false;
      } else if (formType === "register") {
        this.displayRegisterForm = !this.displayRegisterForm;
        this.displayLoginForm = false;
      }
    }
  }
};
</script>
