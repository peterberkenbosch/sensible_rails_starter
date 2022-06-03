require "system_helper"

describe "Log in", auth: false do
  let(:user) { create(:user) }

  it "expects successful log in" do
    visit root_path
    click_on "Log in"

    expect(page).to have_text "Log in"
    within id: "new_user" do
      fill_in "Email", with: user.email
      fill_in "Password", with: user.password
      click_on "Log in"
    end

    expect(page).to have_text "Signed in successfully."
  end
end
