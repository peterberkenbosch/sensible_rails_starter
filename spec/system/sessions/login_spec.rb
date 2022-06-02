# frozen_string_literal: true

require "system_helper"

describe "Log in", auth: false do
  let!(:user) { create(:user) }

  it "I should login before visiting the workspace" do
    visit root_path

    click_on "Log in"

    expect(page).to have_text "Log in"

    # expect(page).to have_current_path(login_path)

    fill_in :user_email, with: user.email
    click_on "Log in"

    expect(page).to have_text "Demo Workspace"
    expect(page).to have_current_path(workspace_path(workspaces(:demo)))
  end
end
