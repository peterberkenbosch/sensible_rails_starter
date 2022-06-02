require "system_helper"

describe "Log in", auth: false do
  it "I should sign" do
    visit root_path
    click_link "Log in"

    click_link "Sign up"

    within(class: "new_user") do
      within(id: "email_field") do
        fill_in :user_email, with: "user@example.com"
      end

      fill_in :user_password, with: "pass123"
      fill_in :user_password_confirmation, with: "pass123"

      click_on "Sign up"
    end

    within id: "flash_message" do
      expect(page).to have_text "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account."
    end
  end
end
