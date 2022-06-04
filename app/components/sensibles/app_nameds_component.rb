# frozen_string_literal: true

class Sensibles::AppNamedsComponent < ViewComponent::Base
  def initialize(title:, description:)
    @title = title
    @description = description
  end

end
