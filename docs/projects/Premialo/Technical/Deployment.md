---
    title: Deployment
    description: Desplegamos rápido.
---

# **Deployment Guide for Premialo**

This guide outlines the steps to configure SSH access to your server and set up GitHub Actions for CI/CD deployment of the Premialo application.

---

## **Step 1: Connect to the Server via SSH**

### 1. **Open a terminal and use the following command to connect to your server:**

    ```bash
    ssh usuario@host
    ```

### 2. **Accept the SSH connection:**
    - When prompted, type `yes` to accept the connection.
    - Then, enter the password provided for the server.

### 3. **If you encounter an error similar to this:**

    ```
    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
    ```

### 4. **Resolve the issue by removing the existing SSH key:**
    - Navigate to the `.ssh` directory:
      ```bash
      cd .ssh
      ```
    - Remove the known hosts file:
      ```bash
      rm -r known_*
      ```
    - Repeat steps 1 and 2.

---

## **Step 2: Configure SSH Keys**

### 1. **Navigate to the `.ssh` directory:**
    - If the `.ssh` directory does not exist, create it:
      ```bash
      mkdir .ssh
      cd .ssh
      ```

---

## **Step 3: Generate an SSH Key**

### 1. **Generate a new SSH key using the following command:**

    ```bash
    ssh-keygen -t ed25519 -C 'example@example.com'
    ```

### 2. **Recommendation:**
    - Do not use a passphrase. Simply press **Enter** to accept the default values.

    This will generate two files:
    - `id_ed25519`: The private key.
    - `id_ed25519.pub`: The public key.

---

## **Step 4: Authorize the Public Key on the Server**

### 1. **Authorize the key using the following command (recommended):**

    ```bash
    ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@5.161.122.215
    ```

    **Note:** Replace `usuario` with your username and `5.161.122.215` with your server's IP.

### 2. **Verify the public key is saved in the `authorized_keys` file:**

    ```bash
    cat ~/.ssh/authorized_keys
    ```

### 3. **Manual Authorization (if needed):**
    - Copy the contents of your public key (`id_ed25519.pub`).
    - Navigate to the `.ssh` directory on the server and create the `authorized_keys` file if it does not exist:

      ```bash
      touch authorized_keys
      ```

    - Open the file with a text editor and paste the public key:

      ```bash
      nano authorized_keys
      ```

---

## **Step 5: Add the Public Key to GitHub**

### 1. **Copy the private key (without extra spaces):**
    
    ```bash
    cat ~/.ssh/id_ed25519
    ```

### 2. **Add the key to GitHub:**
    - Go to your profile picture on GitHub and select **Settings**.
    - Navigate to **SSH and GPG keys** or [click here](https://github.com/settings/keys).
    - Click **New SSH key**, assign a name, and paste the copied key.
    - Click **Add SSH key**.

---

## **Step 6: Configure GitHub on Your Server**

### 1. **Set up your GitHub credentials on the server:**

    ```bash
    git config --global user.name "github-username"
    git config --global user.email "example@example.com"
    ```

### 2. **Verify the connection with GitHub:**

    ```bash
    ssh -T git@github.com
    ```

    If successful, you will see a message like:

    ```bash
    Hi username! You've successfully authenticated, but GitHub does not provide shell access.
    ```

---

## **Step 7: Configure GitHub Actions**

### 1. **Add the necessary secrets to your repository:**
    - Go to your repository's **Settings** > **Secrets and variables** > **Actions**.
    - Click **New Repository Secret** and add the following:
      - **SERVER_HOST**: Your server's host.
      - **SERVER_USER**: Your SSH username.
      - **SERVER_SSH_KEY**: The private key (use `cat ~/.ssh/id_ed25519` to copy it).

2. **Set up the deployment workflow:**
    Create or edit the `.github/workflows/deploy.yml` file:

    ```yaml
    name: Deploy to Server

    on:
      push:
        branches:
          - main

    jobs:
      deploy:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout Code
          uses: actions/checkout@v3

        - name: Install Dependencies
          run: |
            composer install --no-dev --optimize-autoloader

        - name: Upload Files to Server
          uses: appleboy/scp-action@v0.1.0
          with:
            host: ${{ secrets.SERVER_HOST }}
            username: ${{ secrets.SERVER_USER }}
            key: ${{ secrets.SERVER_SSH_KEY }}
            source: "./"
            target: "${{ secrets.DEPLOY_PATH }}"

        - name: Run Deployment Commands
          uses: appleboy/ssh-action@v0.1.0
          with:
            host: ${{ secrets.SERVER_HOST }}
            username: ${{ secrets.SERVER_USER }}
            key: ${{ secrets.SERVER_SSH_KEY }}
            script: |
              cd ${{ secrets.DEPLOY_PATH }}
              php artisan migrate --force
              php artisan config:cache
              php artisan route:cache
              php artisan view:cache
    ```

3. **Commit and push the changes:**
    - The workflow will trigger automatically on a push to the `main` branch.

---

## **Step 8: Run the Workflow**

### 1. **Trigger the workflow:**
    - Go to the **Actions** tab in your repository.
    - Select the latest workflow run.
    - Click **Re-run all jobs** to execute the workflow.

### 2. **Verify successful execution:**
    - Check that all steps complete without errors.

---

## **Post-Deployment Checklist**

### 1. **Test the application:**
    - Access the application URL to ensure it works as expected.

### 2. **Monitor logs for errors:**
    - Check Laravel logs:

      ```bash
      tail -f storage/logs/laravel.log
      ```

3. **Backup:**
    - Always keep a backup of your `.env` file and database.

---

By following this guide, you can set up a robust CI/CD pipeline and ensure smooth deployment for the Premialo application.
