# 🚀 AWS Amplify Web App Deployment using express

> Navigating AWS documentation is like trying to find a needle in a haystack, except the needle is a coherent sentence, and the haystack is on fire. 🔥

Welcome to the AWS Amplify Web App Deployment Example! This repository is designed to help you set up and deploy a server-side rendered (SSR) web app using AWS Amplify with JavaScript and Express. AWS documentation can be a bit tricky to navigate, especially when setting up a web app with AWS Amplify. This repo provides a minimal directory structure and essential commands to host a web app using Amplify, serving as a straightforward example for developers.

## 🗂 Directory Structure

To ensure smooth deployment and operation, organize your project directory as follows:

```
.
├─ compute/
│  ├─ default/
│     ├─node_modules/
│     ├─server.js
│     └─ package.json
├─ static/
│  └─ image.jpg
├─ deploy-manifest.json
└─ amplify.yml
```

* `compute/default/`: Contains all related ssr node files, including the Express server and node_modules/. Future updates to Amplify might support multiple compute environments for features like canary deployments, but for now, use only one named default.
* `static/`: Hosts all static files such as images, stylesheets, and text files.

## 🛠 Key Files

### `deploy-manifest.json`

This file provides configuration settings for AWS Amplify to correctly route requests.

#### computeResources

Defines compute environment configurations.

```{json}
{
  "computeResources": [
    {
      "name": "default",
      "runtime": "nodejs14.x",
      "entrypoint": "server.js" # Path relative to compute/default directory
    }
  ]
}
```

### `amplify.yml`

Overrides the default Amplify build settings and performs three main tasks:

1. Sets the Node.js version.
2. Installs Node.js libraries.
3. Moves the node_modules folder into the compute/default directory.

Think of it as a github action, gitlab cicd or code bild config file.

> [!TIP]
> Building will generate an artifact containing `compute/default/` and `static/` folders. Deployment will be done in a similar fashion to GitHub Pages.

> [!IMPORTANT]  
> When setting up AWS Amplify via the console, be sure to **enable SSR logs** for easier troubleshooting.

## 🛠 Troubleshooting

1. Deployment Logs: Check the deploy logs to identify where deployment might have failed.
2. Compute Environment Logs: Review logs in CloudWatch under the /aws/amplify prefix, followed by the app ID, for request-related issues.
3. Artifact Structure: Download and verify the structure of your artifact to ensure everything is in place.