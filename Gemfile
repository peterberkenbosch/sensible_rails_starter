source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.3"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
# Full-stack web application framework. (https://rubyonrails.org)
gem "rails", "~> 7.0.3"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
# Sprockets Rails integration (https://github.com/rails/sprockets-rails)
gem "sprockets-rails"

# Use postgresql as the database for Active Record
# Pg is the Ruby interface to the PostgreSQL RDBMS (https://github.com/ged/ruby-pg)
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
# Puma is a simple, fast, threaded, and highly parallel HTTP 1.1 server for Ruby/Rack applications (https://puma.io)
gem "puma", "~> 5.0"

# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
# Bundle and transpile JavaScript in Rails with esbuild, rollup.js, or Webpack. (https://github.com/rails/jsbundling-rails)
gem "jsbundling-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
# The speed of a single-page web application without having to write any JavaScript. (https://github.com/hotwired/turbo-rails)
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
# A modest JavaScript framework for the HTML you already have. (https://stimulus.hotwired.dev)
gem "stimulus-rails"

# Bundle and process CSS [https://github.com/rails/cssbundling-rails]
# Bundle and process CSS with Tailwind, Bootstrap, PostCSS, Sass in Rails via Node.js. (https://github.com/rails/cssbundling-rails)
gem "cssbundling-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# A Ruby client library for Redis (https://github.com/redis/redis-rb)
gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# Timezone Data for TZInfo (https://tzinfo.github.io)
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
# Boot large ruby/rails apps faster (https://github.com/Shopify/bootsnap)
gem "bootsnap", require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Flexible authentication solution for Rails with Warden (https://github.com/heartcombo/devise)
gem "devise", "~> 4.8"

# Catch unsafe migrations in development (https://github.com/ankane/strong_migrations)
gem "strong_migrations"

# Easily generate fake data (https://github.com/faker-ruby/faker)
gem "faker"

gem "factory_bot_rails"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  # Debugging functionality for Ruby (https://github.com/ruby/debug)
  gem "debug", platforms: %i[mri mingw x64_mingw]
  # RSpec for Rails (https://github.com/rspec/rspec-rails)
  gem "rspec-rails"
  # the instafailing RSpec progress bar formatter (https://github.com/thekompanee/fuubar)
  gem "fuubar"

  # Code coverage for Ruby (https://github.com/simplecov-ruby/simplecov)
  gem "simplecov", require: false
  # Code coverage for JavaScript (
  # Ruby applications tests profiling tools (http://github.com/test-prof/test-prof)
  gem "test-prof"

  # sampling callstack-profiler for ruby 2.2+ (http://github.com/tmm1/stackprof)
  gem "stackprof", ">= 0.2.9", require: false
end

group :test do
  # Capybara aims to simplify the process of integration testing Rack applications, such as Rails, Sinatra or Merb (https://github.com/teamcapybara/capybara)
  gem "capybara"
  # Headless Chrome driver for Capybara (https://github.com/rubycdp/cuprite)
  gem "cuprite"
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  # A debugging tool for your Ruby on Rails applications. (https://github.com/rails/web-console)
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
  # Preview mail in browser instead of sending. (https://github.com/ryanb/letter_opener)
  gem "letter_opener"
  # Add comments to your Gemfile with each dependency's description. (https://github.com/ivantsepp/annotate_gem)
end

# Static code analysis, security and linting
group :development do
  # Alias for the standard gem, which has a standardrb binary (https://github.com/testdouble/standardrb)
  gem "standardrb"
  # Add comments to your Gemfile with each dependency's description. (https://github.com/ivantsepp/annotate_gem)
  gem "annotate_gem", require: false
  # Annotates Rails Models, routes, fixtures, and others based on the database schema. (https://github.com/ctran/annotate_models)
  gem "annotate"
  # Git hook manager (https://github.com/sds/overcommit)
  gem "overcommit", require: false
  # Patch-level verification for Bundler (https://github.com/rubysec/bundler-audit#readme)
  gem "bundler-audit", require: false
  # Security vulnerability scanner for Ruby on Rails. (https://brakemanscanner.org)
  gem "brakeman", require: false
  # A Rake task that helps you find the dead routes and actions for your Rails 3 app (https://github.com/amatsuda/traceroute)
  gem "traceroute"
  # a code metric tool for rails codes. (http://rails-bestpractices.com)
  gem "rails_best_practices"
end
