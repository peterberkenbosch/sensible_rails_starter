Rails.application.routes.draw do
  # mount Avo::Engine, at: Avo.configuration.root_path

  authenticate :user do
    mount Avo::Engine => "/avo"
  end

  devise_for :users

  namespace :app_tools do
    get "styles/simple_tails"
    get "styles/tailwindcss"
  end

  get "home/index"
  root "home#index"

  # resources :pages, only: [:show]

  namespace :app_tools do
    resources :mains, only: [:index]
  end

  get "app_tools", to: "app_tools/mains#index"
  get "tools", to: "app_tools/mains#index"
  get "simple_tails", to: "app_tools/styles#simple_tails"

  get "/health_check", to: ->(_) { [200, {}, ["timestamp:#{Time.now.to_i}"]] }

  # if Rails.env.development?
  mount Lookbook::Engine, at: "/lookbook"
  # end

  devise_scope :user do
    get "/users/sign_out", as: "sign_out", to: "devise/sessions#destroy"
  end

end
