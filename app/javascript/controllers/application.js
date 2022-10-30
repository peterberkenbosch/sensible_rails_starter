import { Application } from "@hotwired/stimulus"

import Appsignal from "@appsignal/javascript";
import { installErrorHandler } from "@appsignal/stimulus";

const appsignal = new Appsignal({
  key: "54d40083-f5e4-4105-a5bb-5bf78e1d9ade",
});


const application = Application.start()
installErrorHandler(appsignal, application);
const context = require.context("controllers", true, /_controller\.js$/);
application.load(definitionsFromContext(context));

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

