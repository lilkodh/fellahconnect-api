# FellahConnect API – Software Conception

## 1. Project Overview

FellahConnect API is a backend application developed for the FellahConnect platform, a Moroccan AgriTech solution that enables farmers to manage their agricultural activities digitally.

The system allows farmers to:

- Manage agricultural parcels
- Record harvests
- Track market prices
- Publish sale offers
- Interact with an AI assistant powered by Gemini

The backend follows a RESTful architecture using Node.js, Express.js, PostgreSQL, and Sequelize ORM.

---

# 2. Technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Docker
- DBeaver
- Gemini API
- Pinecone
- Git & GitHub

---

# 3. Software Architecture

The project follows the MVC (Model-View-Controller) architecture.

```
Client
      │
      ▼
Routes
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Models
      │
      ▼
PostgreSQL
```

The AI Assistant is integrated as an independent service that communicates with Gemini and Pinecone.

---

# 4. Database Design

The database consists of the following entities:

- Users
- Farmers
- Parcels
- Products
- Harvests
- Markets
- Market Prices
- Sale Offers

The schema is implemented using Sequelize migrations.

---

# 5. Entity Relationships

- One User owns one Farmer profile.
- One Farmer owns many Parcels.
- One Parcel contains many Harvests.
- One Product can belong to many Harvests.
- One Market stores many Market Prices.
- One Product has many Market Prices.
- One Harvest can create many Sale Offers.
- One Market receives many Sale Offers.

---

# 6. Database Index Strategy

To improve database performance, indexes are applied to frequently queried columns.

Indexed columns include:

- farmers.userId
- parcels.farmerId
- harvests.parcelId
- harvests.productId
- market_prices.marketId
- market_prices.productId
- sale_offers.harvestId
- sale_offers.marketId

Primary Keys and UNIQUE constraints automatically create indexes.

---

# 7. AI Architecture

The AI Assistant is responsible for helping farmers interact with the platform using natural language.

The AI layer consists of:

- Gemini API
- Prompt Engineering
- AI Tools
- Pinecone Vector Database

The assistant will use function calling to execute backend actions while requesting confirmation before any write operation.

---

# 8. Project Structure

```
src/
│
├── config/
├── controllers/
├── middlewares/
├── migrations/
├── models/
├── prompts/
├── routes/
├── seeders/
├── services/
├── tools/
└── validations/
```

---

# 9. Version Control

Git Flow is used during development.

- main
- feature/authentication
- feature/farmer-module
- feature/product-module
- feature/ai-agent
- feature/ai-tools

Each developer works on a dedicated feature branch before creating a Pull Request.

---

# 10. Team Responsibilities

### Khalid

- Project Setup
- System Design
- Database Foundation
- AI Agent
- AI Tools
- Final Integration

### Sara

- Product Module
- Market Module
- Market Prices
- Seeders
- Documentation

### Ikram

- Farmer Module
- Parcel Module
- Harvest Module
- Associations
- Query Endpoints

### Houssame

- Authentication
- Authorization
- Middlewares
- Testing
- Project Support

---

# 11. Development Workflow

1. Pull the latest changes from the main branch.
2. Create a feature branch.
3. Implement the assigned story.
4. Test the feature locally.
5. Commit and push the changes.
6. Create a Pull Request.
7. Merge after review.

---

# 12. Future Enhancements

- AI recommendation engine
- Real-time market updates
- Weather integration
- Notification system
- Analytics dashboard