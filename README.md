# CineBook Interactive UI Blueprint

> A high-fidelity, interactive HTML/CSS prototype and design system for the CineBook cinema management platform.

This repository serves as the definitive frontend blueprint for CineBook. Built strictly with HTML5, Tailwind CSS, and Vanilla JavaScript, it transcends traditional static wireframes by offering a fully interactive, clickable prototype that establishes the exact layout, state management, and design system required for the final production build.

## Design Philosophy

The project adheres to a strict **Minimalist / Monochrome (Grayscale)** design system. 
- **Focus over Flash:** Stripping away unnecessary colors forces a focus on structural hierarchy, typography, and core user workflows.
- **High Contrast:** Ensures maximum legibility and a premium, analytical aesthetic.
- **Typography:** Uses `Inter` for primary interface elements and `Courier Prime` for mono-spaced data (e.g., ticket IDs, seat coordinates).
- **Icons:** Material Symbols Outlined.

## Key Features & UI Coverage

The blueprint provides 100% UI coverage for the CineBook ecosystem (28 interconnected screens), preparing the frontend for complex backend integrations.

### 1. Core Architecture (Concurrency & AI)
- **High-Concurrency Seat Booking:** UI designed to handle real-time seat status (Available, Selected, Occupied, Held) to pair with a Redis Redlock backend implementation.
- **AI Integration UI:** 
  - Semantic Search interface (ready for pgvector).
  - Floating RAG AI Assistant Chatbot widget.
  - Personalized Hybrid Recommendation feeds.

### 2. Role-Based Access Control (RBAC)
- **Customer Portal:** Movie discovery, AI search, booking flow, membership points, and ticket management.
- **Staff Portal:** QR ticket check-in, real-time cinema dashboards, and showtime management.
- **Admin Portal:** Global system monitoring, multi-branch management, and voucher CRUD operations.

### 3. Extended Business Logic
- Dynamic ticket pricing selection (Adult, Student, Child).
- Complex cancellation flows with refund policy modals.
- Strict age restriction warnings (T18 validation).
- Peer-to-peer user review and rating modal systems.

## Repository Structure

```text
├── demo.html                 # Interactive device simulator (Desktop, Laptop, Tablet, Mobile)
├── index.html                # Canvas Board providing a bird's-eye architectural view of all 28 screens
├── cinebook-shared.js        # Shared DOM injection script for global navigation consistency
└── wireframe_design_assistant/
    ├── 1_cinebook_home_page/
    ├── 2_cinebook_movie_list/
    ├── ... (28 screens total)
```

## Usage & Development

Since this prototype is built without heavy build tools or bundlers, it can be run directly in any modern browser.

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Open `demo.html` in your browser to view the interactive prototype with device simulation.
3. Open `index.html` to view the comprehensive Canvas Board layout.

### Next Steps for Production
This blueprint is designed to be immediately translated into a component-based frontend framework (e.g., React, Next.js, or Vue). Developers can extract the Tailwind utility classes directly from the `code.html` files to guarantee a 1:1 match with this design specification.

## License
MIT License
