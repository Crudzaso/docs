## GitHub Guide

## GitHub Best Practices

### Workflow

1. **Create a new branch** for each new feature or fix:
   - Use the following command to create and switch to a new branch:
     ````bash
     git checkout -b feature/number-feature/new-feature
     ```
   - Example:
     ````bash
     git checkout -b feature/123/login-user
     ```

2. **Make changes and commits frequently**:
   - Break changes into small logical commits.
   - Write descriptive and concise commit messages:
     ````bash
     git commit -m “Brief description of changes made”.
     ```
   - Example:
     ````bash
     git commit -m “Added login form with validation”
     ```

3. **Update the branch regularly**:
   - Before making a *Pull Request (PR)*, synchronize your branch with the main branch to avoid conflicts:
     ````bash
     git pull origin main
     ```

4. **Create a Pull Request (PR)**:
   - Once the functionality is ready for review, perform a PR from your branch to the main branch (e.g., `main` or `develop`).
   - Be sure to provide a clear title and description of the PR.
   - Tag the appropriate reviewers.

---

### Using Issues

1. **Creating Issues**:
   - Whenever an issue is detected or new functionality is needed, create an issue in the repository.
   - Provide a detailed description:
     - What issue are you solving?
     - Steps to reproduce (if it is a bug).
     - Acceptance criteria (if it is a feature).

2. **Issue Assignment**:
   - Assign the issue to the corresponding person or team.
   - Use labels (*labels*) to categorize the issue (e.g., `bug`, `feature`, `enhancement`).

3. **Closing Issues:
   - An issue should be closed only when the related PR has been approved and merged.
   - Add a reference to the issue in the PR using:
     ````text
     Closes #<issue-number>
     ```
   - Example:
     ````text
     Closes #45
     ```

---

### Branch Names

Use a consistent and descriptive branch naming scheme. Example:
- **Feature branches**: `feature/<feature-number>/<description>`.
  - Example: `feature/123/add-carts-purchases`.
- Bugfix branches**: `bugfix/<numero-issue>/<description>` Example: `bugfix/45/<numero-issue>/<description>`
  - Example: `bugfix/456/arrange-buttons-login` **Bugfix branches**: `bugfix/<number-issue>/<description>`
- Hotfix branches**: `hotfix/<description>` Example: `hotfix/<numero-issue>/<description>`
  - Example: `hotfix/fix-rearrange-production`

---

### Code Review

1. **Review process**:
   - Reviews the proposed changes in the PR.
   - Add constructive comments and point out possible improvements.
   - Make sure the changes do not break existing functionality.

2. **RP Approval**:
   - Approve the PR if it meets team standards and does not conflict with the main branch.
   - Merge the PR after approval.

---

### Safety and Best Practices

1. **Avoid uploading sensitive information**:
   - Ensure that files with sensitive information (e.g., keys, tokens, private settings) are included in the `.gitignore` file.

2. **Use of the `.gitignore`** file:
   - Includes files and directories that should not be uploaded to the repository, such as installed dependencies, local configurations and generated files.

   Example of a basic `.gitignore` file:
