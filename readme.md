# Hi, I'm Aravind 👋

### Software Engineer | Full-Stack Developer

I'm a Software Engineer with ~2 years of professional experience building and maintaining business applications, with a focus on modern full-stack development using **TypeScript, React, Node.js, Express, and MongoDB**.

I enjoy designing systems that are not only functional, but also maintainable, secure, and reliable under real-world conditions.

Currently open to **Software Engineer, Full-Stack Developer, React Developer, and Node.js Developer** opportunities in **Chennai**.

📧 aravind.workzone@gmail.com  
🌐 [Portfolio](https://aravind-mern.vercel.app)  
💼 [LinkedIn](https://linkedin.com/in/aravind-a-dev)

---

## 🚀 Featured Projects

### [Arkalyn Kitty](https://arkalynkitty-fin.vercel.app)
**Group Expense Manager SaaS**

A group-based expense management platform built with the MERN stack. It uses a pooled-wallet model instead of traditional debt splitting, with role-based access control, real-time updates, invitations, and payment infrastructure.

**Tech Stack**

`React` `TypeScript` `Node.js` `Express` `MongoDB` `Tailwind CSS` `RTK Query` `Socket.IO` `Razorpay` `Resend`

#### Engineering Decisions

- **Pooled wallet model** — uses a shared group balance instead of tracking individual member-to-member debts. This keeps balance calculations deterministic and avoids debt-settlement complexity.

- **Layered authorization middleware** — authentication, group loading, and role authorization are separated into independent middleware layers:
  `verifyToken → loadGroup → authorizeRole`

- **Integer-based monetary values** — financial amounts are stored as integer paise rather than floating-point rupee values to avoid precision errors.

- **Invite lifecycle** — invitations follow:
  `PENDING → ACCEPTED / REJECTED`
  
  A partial unique index ensures that a user can have only one pending invitation for a group while still allowing re-invitation after rejection.

- **Atomic display IDs** — groups receive human-readable IDs such as `Grp-26-001` using an atomic counter instead of UUIDs.

- **Immutable expenses** — expenses cannot be edited after creation. Corrections use delete + recreate, keeping financial records simpler and auditable.

#### Access Control

| Role | Capabilities |
|---|---|
| **Member** | Add expenses, view balance and history |
| **Admin** | Member actions + manage categories + delete expenses |
| **Super Admin** | Admin actions + manage roles + delete group |

---

### [WorkZone](https://workzone-todo.vercel.app)
**Goal-to-Task Planner SaaS**

A productivity SaaS that converts long-term goals into structured routines and daily tasks, with AI-assisted routine generation and secure multi-device session management.

**Tech Stack**

`React` `Node.js` `Express` `MongoDB` `Tailwind CSS` `RTK Query` `Gemini API` `Resend`

#### Engineering Decisions

- **Refresh token rotation with reuse detection** — every refresh generates a new token and invalidates the previous one. Reuse of an invalidated token immediately terminates the affected session.

- **Hashed refresh tokens** — tokens are hashed before being stored in MongoDB, so raw refresh tokens are never persisted.

- **Three-device session limit** — sessions are tracked per device and the oldest active session is evicted when a fourth device logs in.

- **Goal → Routine → Today pipeline** — goals generate routines, and routines automatically feed the daily task list. The hierarchy is enforced at the data-model level.

- **AI routine generation** — Gemini API converts natural-language goals into structured routines using constrained prompts and fallback handling for malformed responses.

- **Secure email verification** — verification tokens are SHA-256 hashed before storage and expire after a defined period.

---

## 🛠️ Tech Stack

### Backend
`Node.js` · `Express` · `TypeScript` · `MongoDB` · `REST APIs`

### Frontend
`React` · `Tailwind CSS` · `Redux Toolkit` · `RTK Query`

### Authentication & Security
`JWT` · `HTTP-only Cookies` · `Refresh Token Rotation` · `RBAC`

### Database
`MongoDB` · `Oracle` · `PostgreSQL`

### Tools & Deployment
`Git` · `GitHub` · `Vercel` · `Render` · `Postman` · `MongoDB Atlas`

### Professional Experience
`PHP` · `JavaScript` · `Oracle`

---

## 💡 What I Like Building

- Full-stack SaaS applications
- REST APIs and backend services
- Authentication and authorization systems
- Database-driven applications
- Payment and financial workflows
- Scalable and maintainable application architecture

---

## 📫 Connect With Me

📧 **Email:** aravind.workzone@gmail.com  
🌐 **Portfolio:** [aravind-mern.vercel.app](https://aravind-mern.vercel.app)  
💼 **LinkedIn:** [linkedin.com/in/aravind-a-dev](https://linkedin.com/in/aravind-a-dev)

Open to opportunities, collaborations, and interesting engineering discussions.
