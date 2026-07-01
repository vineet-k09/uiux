# UIUX

## steps to init
1. npm i 
2. npm run dev
3. localhost:3000

## notes

npx create-next-app@latest .
npx shadcn@latest init

npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog


# not yet
npm install gsap

## Cloud Run Deployment (Strategy 1)

This project is configured for containerized deployment on Google Cloud Run using Next.js standalone outputs.

### Local Container Build test:
To test building and running the container locally:
```bash
docker build -t nextjs-frontend .
docker run -p 3000:3000 nextjs-frontend
```

### GitHub Actions CI/CD Deployment:
We have set up an automated CI/CD pipeline in [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml).

To activate it:
1. Create a Google Artifact Registry repository (Docker type) in your GCP project.
2. Setup either **Workload Identity Federation** (recommended) or a service account with the following roles:
   - `Storage Admin` (to push container images to Artifact Registry)
   - `Cloud Run Developer` (to deploy new revisions)
   - `Service Account User` (to bind the service account to Cloud Run)
3. Fill in the placeholder environment variables in [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml):
   - `PROJECT_ID`: Your GCP project ID
   - `GAR_LOCATION`: Artifact Registry region (e.g. `us-central1`)
   - `REPOSITORY`: Artifact Registry repository name
   - `SERVICE`: Cloud Run service name
   - `REGION`: Cloud Run service region (e.g. `us-central1`)
4. Push your changes to the `main` branch. GitHub Actions will trigger, build, and deploy.