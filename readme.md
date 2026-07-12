# Hi, I'm Aravind 👋

I'm a MERN stack developer with 1.5 years of experience building and shipping full-stack web applications. I enjoy thinking through architecture carefully — not just making things work, but making them *hold up* under real conditions.

Currently open to product-focused roles in **Coimbatore** · **Chennai** · Remote.

📧 aravind.workzone@gmail.com · [Portfolio](https://aravind-mern.vercel.app) · [LinkedIn](https://linkedin.com/in/aravind-a-dev)

---

## Projects

### [arkalyn-kitty](https://arkalynkitty-fin.vercel.app) — Group Expense Manager

A group-based expense management system built on the MERN stack with real-time updates, role-based access control, and a pooled wallet model.

**Stack:** Node.js · Express · TypeScript · MongoDB · React · Tailwind CSS v4 · RTK Query · Socket.io · Resend

**Architecture decisions worth mentioning:**

- **Pooled wallet over debt-splitting** — most expense apps track who owes whom, which creates circular debt resolution problems. This system uses a shared pool instead: members contribute to a group balance, expenses deduct from it. The trade-off is intentional — simpler state, deterministic logic, no settlement complexity.
- **Auth middleware chain:** `verifyToken → loadGroup → authorizeRole` — each concern is a separate middleware so token validation, group resolution, and permission checks stay independent and composable.
- **Amounts stored in paise** — all monetary values are stored as integers in the database, converted to rupees only at the API boundary. Eliminates floating-point precision issues entirely.
- **Invite lifecycle with partial uniqueness index** — `PENDING → ACCEPTED / REJECTED`. A user can only have one outstanding invite per group (enforced via a partial index on `status: PENDING`), but can be re-invited after rejecting. One compound index handles both constraints cleanly.
- **Auto-generated displayId** (`Grp-26-001`) — generated via an atomic counter document on group creation, not a UUID. Human-readable and sortable by creation order.
- **Immutable expenses** — no PATCH endpoint by design. Corrections require delete + recreate, which keeps a clean audit trail and avoids partial-update ambiguity on financial records.

| Role | Capabilities |
|---|---|
| Member | Add expenses, view balance and history |
| Admin | All member actions + manage categories, delete any expense |
| Super Admin | All admin actions + manage member roles, delete group |

---

### [WorkZone](https://workzone-todo.vercel.app) — Goal-to-Task Planner SaaS

A productivity SaaS that turns yearly goals into structured daily routines, with AI-assisted generation and secure multi-device session management.

**Stack:** Node.js · Express · MongoDB · React · Tailwind CSS · RTK Query · Gemini API · Resend

**Architecture decisions worth mentioning:**

- **Refresh token rotation with reuse detection** — every successful refresh issues a new token and invalidates the previous one. If a used token is replayed, the entire session is invalidated immediately. Tokens are hashed before storage in MongoDB — raw tokens never persist.
- **3-device session cap** — sessions are tracked per device. A fourth login evicts the oldest active session. No separate device management UI needed at this stage; the constraint is enforced server-side.
- **Goal → Routine → Today pipeline** — tasks flow downward automatically. Routines linked to a goal sync into today's task list on each day boundary. The hierarchy is enforced at the data model level, not just the UI.
- **Gemini API for AI routine generation** — chose Gemini over other LLM providers because it has a free tier that works for a self-funded project at early stage. Prompt includes structured output constraints and fallback handling for malformed responses.
- **Email verification with hashed tokens** — verification tokens are SHA-256 hashed before storing. The raw token is sent once via email and never persisted. Expiry validated on the endpoint.

---

## Tech I Work With

```
Backend    Node.js · Express · TypeScript · MongoDB · REST APIs
Frontend   React · Tailwind CSS v4 · RTK Query
Auth       JWT · httpOnly cookies · rotating refresh tokens · RBAC
Tooling    Git · GitHub · Vercel · Render · Postman
```

I'd love to hear from you — whether it's a role, a collaboration, or just a conversation about something you're building.
