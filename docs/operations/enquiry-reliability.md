# Enquiry reliability preview

The contact flow retains customer-entered data after a failed send and uses a stable submission key for an unchanged retry. A changed form or changed attachment content gets a new key. Fields are locked during sending to keep the visible form consistent with the submitted payload. No form content is written to browser storage.

The API checks the browser origin, multipart content type, declared size and actual streamed bytes before parsing. It allows four MiB of attachment data plus64KiB of form overhead, with the existing file-count, individual-size and PDF/JPEG/PNG signature checks retained. A hidden honeypot rejects simple automated fills. These checks are not a distributed rate limiter; a deliberate bot can still make direct requests. An exact hosting rate-limit rule remains a separate production configuration decision.

Provider calls use an identical JSON body and idempotency key for up to three attempts with six-second request timeouts. Network failures,429,5xx and concurrent-idempotency conflicts may retry. Other4xx errors stop. Long Retry-After instructions end the request rather than retrying early. No provider response body or customer details are logged. Resend retains idempotency keys for24hours; this is not permanent cross-device deduplication.

Business notification is accepted before an optional customer acknowledgement. Acknowledgement failure does not undo an accepted enquiry. Preview deployments still return503 before processing any enquiry and omit Google Analytics. Tests use synthetic data, intercepted browser requests and an injected fake provider; no additional real email was sent.

Validation: npm run test:delivery, affected Playwright enquiry/labour/guide/private-route tests, lint, build, types and desktop/mobile rendered inspection. The owner confirmed one specialist day is eight working hours at GBP300 with no VAT added. Travel charges and response-time promises remain unconfirmed.

Before production approval: settle the private-data migration boundary, review the exact protected revision, recheck the live base, set the modified quotation guide timestamp to the actual publication time, and review the hosting abuse-control proposal. No production promotion is authorized by this document.

Provider reference: https://resend.com/docs/dashboard/emails/idempotency-keys (checked26October2026).
