define([], () => {
  'use strict';

  class PageModule {
    test(){
      console.log('ABC');
      document.querySelector("#mydialog").open();
    }
  }
  
  return PageModule;
});
