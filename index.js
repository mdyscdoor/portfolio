let hamMenu = new Vue({
  el:'#ham-menu',
  data: {
    isMenuOpen: false,
  },

  methods: {
    handleMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
    },
  }
});



let works = new Vue({
  el:'#works-wrapper',
  data: {
    isModalOpen: false,
    clickedNumber: null,
    url:'#',
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }

});
