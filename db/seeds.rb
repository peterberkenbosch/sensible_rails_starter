# Seed example user
p User.where(email: "user@example.com")
  .first_or_create!(email: "user@example.com", password: "pass123", confirmed_at: Time.now.utc)

# Seed admin user
p User.where(email: "admin@example.com")
  .first_or_create!(email: "admin@example.com", password: "pass123", admin: true, confirmed_at: Time.now.utc)
