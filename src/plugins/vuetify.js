import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  theme: {
    primary: "#FA8714",
    secondary: "#FF8F00",
    accent: "#A1887F",
    error: "#D50000",
    warning: "#7C4DFF",
    info: "#42A5F5",
    success: "#00E676",
    next: "#FBC02D"
  }
});
