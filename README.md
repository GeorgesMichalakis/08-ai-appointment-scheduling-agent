# AI Appointment Scheduling Agent

Qualifies requests, matches availability, books slots, and sends reminders with no-show risk scoring.

## Client Value

Book qualified appointments faster and reduce no-shows with smarter reminders.

This is a deployable portfolio demo for Clinics, agencies, consultants, and home-service businesses. It shows a complete AI automation workflow: intake, deterministic scoring, AI-assisted drafting, human approval, and mock publishing to common business systems.

## Before / What We Provide / After

### Before

- Booking requests arrive from Google Calendar, Calendly, Twilio and are reviewed one by one.
- The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.
- High-value or risky booking requests can sit in the same queue as low-value work, so follow-up quality depends on who notices first.

### What We Provide

- A deployable React and Express workflow app tailored to Clinics, agencies, consultants, and home-service businesses.
- An AI scoring and routing engine for booking requests, with deterministic fallback mode and optional live OpenAI Responses API review.
- Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Google Calendar, Calendly, Twilio, Gmail, Airtable, Zapier.
- Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples.

### After

- Booking requests are classified, scored, routed to Book next slot, and prepared for review in seconds.
- The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.
- Approved work is pushed to Google Calendar and Calendly, keeping the source workflow and downstream records aligned.

See [BEFORE_AFTER_DEMO.md](./BEFORE_AFTER_DEMO.md) for a client-ready walkthrough script.

## Demo Features

- React operations dashboard for booking requests
- Express API with health, analysis, and publish endpoints
- OpenAI Responses API integration when `OPENAI_API_KEY` is configured
- Deterministic fallback mode so the demo works without paid API access
- Mock adapters for Google Calendar, Calendly, Twilio, Gmail, Airtable, Zapier
- Human-in-loop review controls for risky or high-priority items
- Vitest coverage for classification, scoring, and publish payload behavior
- Dockerfile and Render deploy configuration

## Local Setup

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:8787

## Production Build

```bash
npm run build
npm start
```

## Optional OpenAI Configuration

```bash
cp .env.example .env
export OPENAI_API_KEY="your_api_key"
export OPENAI_MODEL="gpt-5.2"
```

Without an API key, the app uses a deterministic demo engine so clients can still click through the workflow.

## Deployment

Render can use the included `render.yaml`.

Docker:

```bash
docker build -t 08-ai-appointment-scheduling-agent .
docker run -p 8787:8787 --env-file .env 08-ai-appointment-scheduling-agent
```

## Upwork Pitch

I can adapt this demo to your real stack by replacing the mock adapters with your CRM, inbox, spreadsheet, calendar, support desk, or ecommerce API. The build can start as a focused workflow automation and grow into a full internal tool.
