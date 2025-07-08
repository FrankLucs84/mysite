---
title: "Deploy automatico con GitHub Actions"
date: "2023-12-28"
excerpt: "Come configurare un workflow CI/CD completo per deployare automaticamente le tue applicazioni con GitHub Actions, testing e deployment su diverse piattaforme."
tags: ["DevOps", "CI/CD", "GitHub", "Automation", "Deploy"]
author: "Nome Cognome"
readTime: "15 min"
---

# Deploy automatico con GitHub Actions

GitHub Actions ha rivoluzionato il modo in cui gestiamo CI/CD nei nostri progetti. In questa guida vedremo come configurare un pipeline completo per il deploy automatico delle nostre applicazioni.

## Cos'è GitHub Actions

GitHub Actions è la piattaforma di **CI/CD nativa di GitHub** che permette di automatizzare workflow direttamente dal repository. È potente, flessibile e si integra perfettamente con l'ecosistema GitHub.

### Vantaggi principali:
- ✅ **Integrazione nativa** con GitHub
- ✅ **2000 minuti gratuiti** al mese per account pubblici
- ✅ **Marketplace ricco** di azioni precostruite
- ✅ **Matrix builds** per testare su più ambienti
- ✅ **Secrets management** sicuro

## Anatomia di un Workflow

Un workflow è definito in un file YAML nella cartella `.github/workflows/`:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

### Componenti chiave:
- **name**: Nome del workflow
- **on**: Eventi che triggereranno il workflow
- **jobs**: Lista dei lavori da eseguire
- **steps**: Singoli passi all'interno di un job

## Setup Base: Next.js App

Configuriamo un workflow completo per un'app Next.js:

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'

jobs:
  # Job 1: Testing e Linting
  test:
    name: Test & Lint
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run tests
        run: npm run test:ci
      
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  # Job 2: Build
  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
        env:
          NEXT_TELEMETRY_DISABLED: 1
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: .next/

  # Job 3: Deploy to Staging
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: [test, build]
    if: github.ref == 'refs/heads/develop'
    environment: staging
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: .next/
      
      - name: Deploy to Vercel Staging
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          scope: staging

  # Job 4: Deploy to Production
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [test, build]
    if: github.ref == 'refs/heads/main'
    environment: production
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: .next/
      
      - name: Deploy to Vercel Production
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-args: '--prod'
```

## Gestione dei Secrets

I secrets sono variabili sensibili che GitHub cripta automaticamente:

### Configurazione Secrets
1. Vai su **Settings** → **Secrets and variables** → **Actions**
2. Clicca **New repository secret**
3. Aggiungi i tuoi secrets:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_PROJECT_ID=your_project_id
VERCEL_ORG_ID=your_org_id
DATABASE_URL=your_database_url
API_SECRET_KEY=your_api_key
```

### Uso nei Workflow
```yaml
steps:
  - name: Deploy with secrets
    run: npm run deploy
    env:
      DATABASE_URL: ${{ secrets.DATABASE_URL }}
      API_KEY: ${{ secrets.API_SECRET_KEY }}
```

## Deploy su Diverse Piattaforme

### Vercel
```yaml
- name: Deploy to Vercel
  uses: vercel/action@v1
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-args: '--prod'
```

### Netlify
```yaml
- name: Deploy to Netlify
  uses: netlify/actions/build@master
  with:
    publish-dir: './dist'
    production-branch: main
    production-deploy: true
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### AWS S3 + CloudFront
```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Deploy to S3
  run: |
    aws s3 sync ./out s3://${{ secrets.S3_BUCKET }} --delete
    aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_ID }} --paths "/*"
```

### Docker + Container Registry
```yaml
- name: Build and push Docker image
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: |
      ${{ secrets.REGISTRY }}/myapp:latest
      ${{ secrets.REGISTRY }}/myapp:${{ github.sha }}
    build-args: |
      NODE_ENV=production
```

## Testing Automatizzato

### Unit Tests
```yaml
- name: Run unit tests
  run: npm run test:unit

- name: Run integration tests
  run: npm run test:integration

- name: Generate coverage report
  run: npm run test:coverage
```

### E2E Tests con Playwright
```yaml
- name: Install Playwright
  run: npx playwright install

- name: Run E2E tests
  run: npm run test:e2e

- name: Upload test results
  uses: actions/upload-artifact@v3
  if: failure()
  with:
    name: playwright-report
    path: playwright-report/
```

### Visual Regression Testing
```yaml
- name: Run visual tests
  uses: chromaui/action@v1
  with:
    token: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
    buildScriptName: build-storybook
```

## Database Migrations

Per applicazioni con database, possiamo automatizzare le migrazioni:

```yaml
migrate:
  name: Run Database Migrations
  runs-on: ubuntu-latest
  needs: test
  if: github.ref == 'refs/heads/main'
  
  steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run migrations
      run: npm run db:migrate
      env:
        DATABASE_URL: ${{ secrets.DATABASE_URL }}
    
    - name: Seed database (staging only)
      if: contains(github.ref, 'develop')
      run: npm run db:seed
      env:
        DATABASE_URL: ${{ secrets.STAGING_DATABASE_URL }}
```

## Monitoraggio e Notifiche

### Slack Notifications
```yaml
- name: Notify Slack on success
  if: success()
  uses: 8398a7/action-slack@v3
  with:
    status: success
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
    message: '✅ Deploy to production completed successfully!'

- name: Notify Slack on failure
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
    message: '❌ Deploy to production failed!'
```

### Email Notifications
```yaml
- name: Send email notification
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.gmail.com
    server_port: 587
    username: ${{ secrets.EMAIL_USERNAME }}
    password: ${{ secrets.EMAIL_PASSWORD }}
    subject: 'Deployment Status: ${{ job.status }}'
    to: team@company.com
    from: noreply@company.com
    body: |
      The deployment to production has ${{ job.status }}.
      
      Commit: ${{ github.sha }}
      Author: ${{ github.actor }}
      Branch: ${{ github.ref }}
```

## Conditional Deployments

### Feature Branch Previews
```yaml
deploy-preview:
  name: Deploy Preview
  runs-on: ubuntu-latest
  if: github.event_name == 'pull_request'
  
  steps:
    - name: Deploy preview environment
      run: |
        BRANCH_NAME=$(echo ${{ github.head_ref }} | sed 's/[^a-zA-Z0-9]/-/g')
        echo "Deploying to: https://$BRANCH_NAME.preview.myapp.com"
        # Deploy logic here
```

### Manual Approval
```yaml
deploy-production:
  name: Deploy to Production
  runs-on: ubuntu-latest
  environment: production  # Requires manual approval
  needs: [test, build]
  
  steps:
    - name: Deploy to production
      run: npm run deploy:prod
```

## Caching per Performance

```yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-

- name: Cache Next.js build
  uses: actions/cache@v3
  with:
    path: ${{ github.workspace }}/.next/cache
    key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}
```

## Security Best Practices

### 1. **Minimal Permissions**
```yaml
permissions:
  contents: read
  deployments: write
  pull-requests: write
```

### 2. **Dependency Scanning**
```yaml
- name: Run security audit
  run: npm audit --audit-level high

- name: Check for vulnerabilities
  uses: securecodewarrior/github-action-add-sarif@v1
  with:
    sarif-file: security-report.sarif
```

### 3. **SAST (Static Analysis)**
```yaml
- name: Run CodeQL Analysis
  uses: github/codeql-action/init@v2
  with:
    languages: javascript

- name: Perform CodeQL Analysis
  uses: github/codeql-action/analyze@v2
```

## Troubleshooting e Debug

### Debug Mode
```yaml
- name: Enable debug logging
  run: echo "ACTIONS_STEP_DEBUG=true" >> $GITHUB_ENV

- name: Debug info
  run: |
    echo "Runner OS: ${{ runner.os }}"
    echo "GitHub ref: ${{ github.ref }}"
    echo "Event name: ${{ github.event_name }}"
    env
```

### Artifacts per Debug
```yaml
- name: Upload logs on failure
  if: failure()
  uses: actions/upload-artifact@v3
  with:
    name: debug-logs
    path: |
      logs/
      *.log
```

## Workflow Template Completo

Ecco un template che puoi usare come base:

```yaml
name: Complete CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'

jobs:
  lint-and-test:
    name: Lint & Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    needs: lint-and-test
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-args: '--prod'
```

## Conclusioni

GitHub Actions offre un ecosistema potente per automatizzare completamente il processo di deployment. Le chiavi del successo sono:

1. **Inizia semplice** e aggiungi complessità gradualmente
2. **Usa il caching** per velocizzare i build
3. **Gestisci i secrets** in modo sicuro
4. **Monitora** e ricevi notifiche sui fallimenti
5. **Testa tutto** prima di deployare in produzione

Con una configurazione ben strutturata, potrai concentrarti sullo sviluppo mentre GitHub Actions si occupa di tutto il resto!

---

*Hai domande sulla configurazione di GitHub Actions? Condividi la tua esperienza o contattami sui social media!*