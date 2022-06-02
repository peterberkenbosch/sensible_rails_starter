FactoryBot.define do
  factory :user, class: "User" do
    email { Faker::Internet.email }
    password { "password" }

    after(:create) do |user|
      user.skip_confirmation!
    end

    trait :as_admin do
      after(:create) do |user|
        user.add_role(:admin)
      end
    end
  end
end
