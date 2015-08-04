module.exports = {
  // Modules
  modules: {
    // options: {
    //     banner: '$(function() {\'use strict\';',
    //     footer: '});'
    // },
    src: [
      '<%= project.src %>/scripts/modules/module-one.js'
    ],
    dest: '<%= project.src %>/scripts/modules/modules-combined.js'
  }
};
