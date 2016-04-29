/**
 * Main requireJS entry point
 *
 * Place the following in the head of your HTML document
 * <script data-main="scripts/main" src="scripts/vendor/require.js"></script>
 */

/* Config */

requirejs.config({
  baseUrl: './scripts',
  paths: {
    'jquery': 'vendor/jquery.min',
    'module-one': 'modules/module-one'
  }
});

/* App logic */

requirejs(['jquery', 'module-one'], function($, module_one) {
  if (window.jQuery) {
    console.log(jQuery.fn.jquery);
  }

  var message = module_one.getMessage();
  console.log(message);
});
