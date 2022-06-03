require "system_helper"

describe "Log in", auth: false do
  let(:user) { build(:user, confirmed_at: nil) }

  it "expects email to be confirmed" do
    visit root_path
    click_on "Log in"

    expect(page).to have_text "Log in"
    within id: "new_user" do
      fill_in "Email", with: user.email
      fill_in "Password", with: user.password
      click_on "Log in"
    end

    expect(page).to have_text "You have to confirm your email address before continuing."
  end
end
