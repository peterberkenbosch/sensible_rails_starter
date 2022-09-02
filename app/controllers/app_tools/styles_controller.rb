class AppTools::StylesController < ApplicationController
  before_action :authenticate_admin!

  # layout "app_tools"
  def simple_tails
    render layout: "simple_tails"
  end

  def tailwindcss
  end
end
