# GitHub Usage and Task Management

In this project, we use GitHub for version control and Azure DevOps for task management. Below are the guidelines for managing tasks, branches, and commits.

## Task Writing Guidelines
- **Be clear and concise**: Each task should have a clear description of what needs to be done, with steps if necessary.
- **Use Azure DevOps Boards**: We create tasks and assign them to team members using Azure DevOps Boards. Once a task is completed, the assignee closes it.
- **Prioritize tasks**: Tasks should be labeled by priority (e.g., High, Medium, Low) and be linked to the milestones.

## Branch Naming Conventions
- **Main branch**: Always use `main` for the production-ready code.
- **Feature branches**: Create a branch for each new feature or task. Name branches using the format: `feature/<task-name>` (e.g., `feature/add-payment-system`).
- **Bugfix branches**: For bug fixes, use the format `bugfix/<issue-name>` (e.g., `bugfix/fix-login-error`).

## Commit Guidelines
- **Commit frequency**: Commit frequently, especially when a logical unit of work is completed.
- **Commit messages**: Use clear, descriptive messages. Follow the format:
  - **Fix**: Fixes a bug or issue (e.g., `Fix login issue with password validation`).
  - **Add**: Adds a new feature or functionality (e.g., `Add user registration form`).
  - **Update**: Makes updates to existing code or features (e.g., `Update UI for the raffle page`).
