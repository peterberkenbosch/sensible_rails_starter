class AppTools::SimpleTailsController < ApplicationController
  before_action :authenticate_admin!

  # layout "app_tools"
  def index
  end
end
