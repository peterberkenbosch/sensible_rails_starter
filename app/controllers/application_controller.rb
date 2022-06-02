# :reek:MissingSafeMethod { exclude: [ authenticate_admin! ] }
class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def authenticate_admin!
    return true if current_user&.admin?
    redirect_to root_path, alert: "You do not have permission to access this page."
  end
end
