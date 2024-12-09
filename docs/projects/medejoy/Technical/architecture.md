##  Database Structure

- **users** 👤
  - `id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`

- **raffles** 🎟️
  - `id`, `name`, `description`, `ballot_price`, `ballot_quantity`, `organizer_id`, `deadline_date`

- **ballots** 🛒
  - `id`, `raffle_id`, `user_id`, `ballot_number`, `created_at`

- **purchases** 💳
  - `id`, `ballot_id`, `user_id`, `created_at`

<hr></hr>

Use cases: [!image](../Assets/UseCase%20diagram.PNG)

<hr></hr>

ER diagram: [!image](../Assets/ER%20diagram.PNG)