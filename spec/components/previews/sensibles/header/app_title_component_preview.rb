class Sensibles::Header::AppTitleComponentPreview < ViewComponent::Preview
  layout "previews/header"

  # The app name & description is set via
  #
  # `config/sensibles.yml`
  #
  #  or the following environment variables:
  #
  #   `SENSIBLES_APP_NAME`
  #
  #   `SENSIBLES_APP_DESCRIPTION`
  def with_default_title
    render Sensibles::Header::AppTitleComponent.new
  end

  # @param app_name text "Name of the app"
  # @param app_description text "Description of the app"
  def with_dynamic_title(app_name: "Some App", app_description: "Some description...")
    render Sensibles::Header::AppTitleComponent.new(app_name: app_name, app_description: app_description)
  end
end
