# FellahConnect API

## 1. Project Overview

FellahConnect API is a backend application developed for the FellahConnect platform, a Moroccan AgriTech solution designed to help farmers manage their agricultural activities digitally.

The platform reduces farmers' dependence on intermediaries by providing tools to:

- Manage agricultural parcels
- Record harvests
- Track agricultural products
- Monitor market prices
- Publish sale offers
- Access agricultural knowledge through an AI assistant

The backend follows a RESTful API architecture built with Node.js, Express.js, PostgreSQL, and Sequelize ORM.

---

# 2. Technologies

## Backend

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Docker
- DBeaver

## Authentication

- JWT Authentication
- Role-Based Access Control (RBAC)

## Artificial Intelligence

- Groq AI
- Pinecone Vector Database
- Embedding Models
- AI Tool Calling Architecture

## Development Tools

- Git & GitHub
- Postman
- Scalar OpenAPI Documentation

---

# 3. Software Architecture

The project follows the MVC (Model-View-Controller) architecture.

---

# 4. Main Features

## Authentication

- User registration
- User login
- JWT token authentication
- Role-based permissions

Supported roles:

- ADMIN
- FARMER

---

## Agricultural Management

The API provides CRUD operations for:

- Farmers
- Parcels
- Products
- Harvests
- Markets
- Market Prices
- Sale Offers

---

# 5. Database Design

The database contains the following entities:

- Users
- Farmers
- Parcels
- Products
- Harvests
- Markets
- Market Prices
- Sale Offers

Database management is implemented using Sequelize migrations and seeders.

---

# 6. Entity Relationships

- One User owns one Farmer profile.
- One Farmer owns many Parcels.
- One Parcel contains many Harvests.
- One Product can belong to many Harvests.
- One Market contains many Market Prices.
- One Product has many Market Prices.
- One Harvest can generate Sale Offers.
- One Market receives Sale Offers.

---

# 7. AI Assistant Architecture

FellahConnect includes an AI assistant that allows farmers to interact with the platform using natural language.

The AI architecture includes:

- Groq LLM integration
- System prompt design
- Tool registry
- Multi-step reasoning loop
- Database actions through tools
- Pinecone semantic search

AI execution flow:

The AI system includes infinite loop protection using maximum iterations.

---

# 8. Available AI Tools

The AI assistant currently supports:

### Market Intelligence

- getBestMarketPrice

Find the best market price for agricultural products.

### Agricultural Data

- searchHarvest

Search farmer harvest information.

- getFarmerParcels

Retrieve farmer parcel information.

### Sale Management

- createSaleOffer

Create sale offers through the AI assistant.

- checkSaleOffer

Check existing sale offers.

### Knowledge Retrieval

- searchAgricultureKnowledge

Search agricultural knowledge using Pinecone semantic search.

---

# 9. Pinecone Integration

Pinecone is used as a vector database for agricultural knowledge retrieval.

Implemented features:

- Pinecone connection
- Vector index creation
- Agriculture knowledge dataset
- Knowledge seeder
- Semantic similarity search

The AI assistant can retrieve relevant agricultural information before responding.

---

# 10. Project Structure

---

# 11. Installation

Clone the repository:

```bash
git clone https://github.com/lilkodh/fellahconnect-api.git