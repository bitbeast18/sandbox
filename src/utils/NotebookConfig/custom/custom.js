/* eslint-disable */

require(["base/js/events", "base/js/promises", "base/js/namespace"], function(
  events,
  promises
) {

  promises.app_initialized.then(appname => {
    if (appname === "NotebookApp") {
      $("#menubar").hide();
      $("#header-container").hide();
      events.trigger("resize-header.Page");
    }
  });
});
