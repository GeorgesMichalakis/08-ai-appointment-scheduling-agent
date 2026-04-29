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
  ]
};
