# Before / After Demo Script

## Demo Positioning

AI Appointment Scheduling Agent is a portfolio demo for Clinics, agencies, consultants, and home-service businesses. It shows how a manual appointment scheduling automation process becomes a deployable AI automation with human approval and real integration handoff points.

## Before

- Booking requests arrive from Google Calendar, Calendly, Twilio and are reviewed one by one.
- The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.
- High-value or risky booking requests can sit in the same queue as low-value work, so follow-up quality depends on who notices first.

## What We Provide

- A deployable React and Express workflow app tailored to Clinics, agencies, consultants, and home-service businesses.
- An AI scoring and routing engine for booking requests, with deterministic fallback mode and optional live OpenAI Responses API review.
- Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Google Calendar, Calendly, Twilio, Gmail, Airtable, Zapier.
- Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples.

## After

- Booking requests are classified, scored, routed to Book next slot, and prepared for review in seconds.
- The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.
- Approved work is pushed to Google Calendar and Calendly, keeping the source workflow and downstream records aligned.

## Demo Walkthrough

1. Open the dashboard and show the client the incoming booking requests queue.
2. Select the highest-value sample booking request and explain the before state: manual review, copy/paste, and slow routing.
3. Click "Schedule appointment" to run deterministic AI automation, or enable live OpenAI review if an API key is configured.
4. Review the score, route, confidence, timeline, and generated outputs with the client.
5. Click a mock integration button to show exactly what would be sent to Google Calendar, Zapier, Make, n8n, or the client tool stack.
6. Close with the after state: faster response time, cleaner records, and a human approval lane for sensitive work.

## Success Metrics To Discuss

- Manual review steps reduced
- Average response time improved
- High-priority items routed faster
- Records updated consistently
- Human approval preserved for risky cases

## Client Offer

I will replace the demo data and mock adapters with your real Google Calendar, Calendly, Twilio setup, connect the API credentials, tune the routing rules, and deploy the workflow for your team.

## Suggested Upwork Project Description

I will build a appointment scheduling automation automation that connects your tools, classifies incoming booking requests, drafts the needed outputs, routes work to the right owner, and keeps a human approval step for sensitive cases.

The deliverable includes a working dashboard, API endpoints, integration payloads, deployment setup, and documentation so your team can actually use and maintain the workflow.
