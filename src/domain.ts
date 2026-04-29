import type { DomainConfig } from "./automation";

export const domainConfig: DomainConfig = {
  "slug": "08-ai-appointment-scheduling-agent",
  "title": "AI Appointment Scheduling Agent",
  "tagline": "Qualifies requests, matches availability, books slots, and sends reminders with no-show risk scoring.",
  "workflow": "Appointment scheduling automation",
  "audience": "Clinics, agencies, consultants, and home-service businesses",
  "itemNoun": "booking request",
  "itemPlural": "booking requests",
  "primaryAction": "Schedule appointment",
  "accent": "#dc2626",
  "businessGoal": "Book qualified appointments faster and reduce no-shows with smarter reminders.",
  "integrations": [
    "Google Calendar",
    "Calendly",
    "Twilio",
    "Gmail",
    "Airtable",
    "Zapier"
  ],
  "routes": [
    "Book next slot",
    "Qualification needed",
    "VIP scheduling",
    "Reschedule queue"
  ],
  "categories": [
    {
      "name": "Qualified booking",
      "keywords": [
        "book",
        "appointment",
        "available",
        "consultation"
      ],
      "route": "Book next slot",
      "boost": 16
    },
    {
      "name": "Needs qualification",
      "keywords": [
        "not sure",
        "question",
        "estimate",
        "maybe"
      ],
      "route": "Qualification needed",
      "boost": 8
    },
    {
      "name": "VIP request",
      "keywords": [
        "urgent",
        "executive",
        "vip",
        "today"
      ],
      "route": "VIP scheduling",
      "boost": 24
    },
    {
      "name": "Reschedule",
      "keywords": [
        "reschedule",
        "cancel",
        "missed",
        "another time"
      ],
      "route": "Reschedule queue",
      "boost": 18
    }
  ],
  "positiveKeywords": [
    "available",
    "confirmed",
    "book",
    "today",
    "consultation"
  ],
  "riskKeywords": [
    "missed",
    "cancel",
    "reschedule",
    "not sure",
    "late"
  ],
  "outputLabels": [
    "Booking summary",
    "Reminder copy",
    "Calendar payload"
  ],
  "sampleItems": [
    {
      "id": "appt-610",
      "title": "Urgent consultation request",
      "source": "Website chat",
      "customer": "Priya Shah",
      "owner": "Scheduling desk",
      "value": 500,
      "urgency": 91,
      "description": "Need an urgent consultation today if possible. I am available after 3pm and can confirm by SMS.",
      "tags": [
        "urgent",
        "today",
        "sms"
      ],
      "receivedAt": "2026-04-29T08:07:00Z"
    },
    {
      "id": "appt-611",
      "title": "Question before booking estimate",
      "source": "Form",
      "customer": "Liam Carter",
      "owner": "Scheduling desk",
      "value": 150,
      "urgency": 38,
      "description": "I am not sure which appointment type to book. Can someone ask qualification questions first?",
      "tags": [
        "question",
        "estimate"
      ],
      "receivedAt": "2026-04-29T09:17:00Z"
    },
    {
      "id": "appt-612",
      "title": "Reschedule missed appointment",
      "source": "SMS",
      "customer": "Dana Woods",
      "owner": "Scheduling desk",
      "value": 200,
      "urgency": 62,
      "description": "Sorry I missed the appointment. Can we reschedule for another time this week?",
      "tags": [
        "missed",
        "reschedule"
      ],
      "receivedAt": "2026-04-29T10:51:00Z"
    }
  ],
  "demo": {
    "beforeTitle": "Manual appointment scheduling automation",
    "beforeState": [
      "Booking requests arrive from Google Calendar, Calendly, Twilio and are reviewed one by one.",
      "The team copies details between tools, decides priority manually, and writes repetitive notes or replies from scratch.",
      "High-value or risky booking requests can sit in the same queue as low-value work, so follow-up quality depends on who notices first."
    ],
    "whatWeProvide": [
      "A deployable React and Express workflow app tailored to Clinics, agencies, consultants, and home-service businesses.",
      "An AI scoring and routing engine for booking requests, with deterministic fallback mode and optional live OpenAI Responses API review.",
      "Human-in-loop approval screens, generated drafts, audit-friendly timeline, and mock adapters for Google Calendar, Calendly, Twilio, Gmail, Airtable, Zapier.",
      "Production-ready handoff assets: Dockerfile, Render config, environment template, tests, and integration payload examples."
    ],
    "afterTitle": "Automated appointment scheduling automation",
    "afterState": [
      "Booking requests are classified, scored, routed to Book next slot, and prepared for review in seconds.",
      "The operator receives draft outputs, next-best actions, and integration payloads before anything is sent externally.",
      "Approved work is pushed to Google Calendar and Calendly, keeping the source workflow and downstream records aligned."
    ],
    "demoFlow": [
      "Open the dashboard and show the client the incoming booking requests queue.",
      "Select the highest-value sample booking request and explain the before state: manual review, copy/paste, and slow routing.",
      "Click \"Schedule appointment\" to run deterministic AI automation, or enable live OpenAI review if an API key is configured.",
      "Review the score, route, confidence, timeline, and generated outputs with the client.",
      "Click a mock integration button to show exactly what would be sent to Google Calendar, Zapier, Make, n8n, or the client tool stack.",
      "Close with the after state: faster response time, cleaner records, and a human approval lane for sensitive work."
    ],
    "successMetrics": [
      "Manual review steps reduced",
      "Average response time improved",
      "High-priority items routed faster",
      "Records updated consistently",
      "Human approval preserved for risky cases"
    ],
    "clientOffer": "I will replace the demo data and mock adapters with your real Google Calendar, Calendly, Twilio setup, connect the API credentials, tune the routing rules, and deploy the workflow for your team."
  }
};
