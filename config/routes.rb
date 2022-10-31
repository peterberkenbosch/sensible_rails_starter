Rails.application.routes.draw do
  get "home/index"
  root "home#index"

  devise_for :users

  # Allows us to use link_to for session destroy
  devise_scope :user do
    get "/users/sign_out", as: "sign_out", to: "devise/sessions#destroy"
  end

  get "/health_check", to: ->(_) { [200, {}, ["timestamp:#{Time.now.to_i}"]] }

  ####################################
  # AppTools
  #####################################

  namespace :app_tools do
    resources :mains, only: [:index]
  end

  get "app_tools", to: "app_tools/mains#index"
  get "tools", to: "app_tools/mains#index"
  get "simple_tails", to: "app_tools/simple_tails#index"

  mount Lookbook::Engine, at: "/lookbook"
end
