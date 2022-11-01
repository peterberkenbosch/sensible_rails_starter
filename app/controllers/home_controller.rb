class HomeController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    expires_in 10.minutes
  end
end
