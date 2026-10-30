# Study Grove free OSCE conversation service

The static hub already supports structured patient practice. This optional service adds AI question interpretation and evidence-based rubric suggestions. Patient responses always come from fixed case facts. AI does not invent clinical findings.

Use a Cloudflare **Workers Free** account. Do not enable Workers Paid, prepaid AI credits or another paid provider. Daily free AI quota is enforced by Cloudflare; exhaustion returns an error and the website continues in structured mode. No encounter transcripts are deliberately stored by this Worker; model/provider processing still occurs.

## Connect

1. Install/use Wrangler with a supported Node version and sign in: `npx wrangler login`.
2. From this folder set two secrets interactively: `npx wrangler secret put PERSONAL_PASSPHRASE`, then `npx wrangler secret put TOKEN_SECRET`. Use a long unique personal passphrase and a different long random token secret. Never put either in the repository or chat.
3. Deploy: `npx wrangler deploy`.
4. Open AHAD OSCE practice → Conversational AI connection. Enter the returned HTTPS Worker URL and your personal passphrase. The browser retains a one-hour session token only for that tab/session.
5. Check `/health`, then try one patient question and a completed-station debrief.

The service accepts only the configured frontend origins, signed sessions, known case IDs and bounded payloads. It rate-limits requests, validates fact IDs and requires exact learner evidence for AI rubric suggestions. CORS is an additional browser restriction, not authentication. Do not use this study tool for real patient information.

Case revisions: regenerate `osce-cases.json` from `study-grove-build/build_osce_cases.py` and copy the JSON here before redeployment. Keep the service folder outside the public static website. Structured fallback case facts are included in the educational static app; diagnosis hiding is a practice feature, not an anti-cheating boundary.
