---
title: API Reference
---

Kirby Loop provides a RESTful API for managing comments and feedback. All endpoints include CSRF protection.

## Authentication

All API endpoints require authentication, controlled by the `moinframe.loop.public` configuration option:

- **Default (private)**: Only authenticated Kirby users can access the API
- **Public mode**: Anyone can access the API

## CSRF Protection

All API requests must include a valid CSRF token in the request header:

```javascript
fetch('/loop/comments/page-id', {
    headers: {
        'X-CSRF-Token': '<csrf-token>'
    }
});
```

## Base URL Structure

### Single Language Sites
```
/loop/comments/{pageId}
/loop/comment/new
/loop/comment/reply
/loop/comment/resolve
/loop/comment/unresolve
/loop/guest/name
```

### Multi-Language Sites
```
/{language}/loop/comments/{pageId}
/{language}/loop/comment/new
/{language}/loop/comment/reply
/{language}/loop/comment/resolve
/{language}/loop/comment/unresolve
/{language}/loop/guest/name
```

Where `{language}` is the language code (e.g., `en`, `de`).

## Endpoints

### GET /loop/comments/{pageId}

Retrieve all comments for a specific page.

**Parameters:**
- `pageId` (string): The page ID or 'home' for the homepage

**Response:**
```json
{
    "status": "ok",
    "comments": [
        {
            "id": 1,
            "author": "John Doe",
            "url": "https://example.com/page",
            "page": "page-uuid",
            "comment": "This needs to be updated",
            "selector": ".header h1",
            "selectorOffsetX": 10,
            "selectorOffsetY": 20,
            "pagePositionX": 150,
            "pagePositionY": 300,
            "timestamp": 1640995200,
            "lang": "en",
            "status": "OPEN",
            "replies": [
                {
                    "id": 1,
                    "author": "jane.smith",
                    "comment": "I'll fix this",
                    "parentId": 1,
                    "timestamp": 1640995800
                }
            ]
        }
    ]
}
```

**Error Responses:**
- `400`: Page not found
- `401`: Unauthorized (if authentication required)
- `403`: CSRF token invalid

### POST /loop/comment/new

Create a new comment on a page.

**Request Body:**
```json
{
    "comment": "This section needs clarification",
    "url": "https://example.com/page",
    "selector": ".content p:nth-child(3)",
    "selectorOffsetX": 15,
    "selectorOffsetY": 25,
    "pagePositionX": 200,
    "pagePositionY": 450,
    "pageId": "projects/project-alpha"
}
```

**Required Fields:**
- `comment` (string): The comment text (HTML stripped and sanitized)
- `url` (string): The full URL where the comment was made
- `selector` (string): CSS selector for the commented element
- `selectorOffsetX` (number): X offset within the selected element
- `selectorOffsetY` (number): Y offset within the selected element
- `pagePositionX` (number): X position on the page
- `pagePositionY` (number): Y position on the page
- `pageId` (string): Kirby page ID or 'home'

**Response:**
```json
{
    "status": "ok",
    "comment": {
        "id": 15,
        "author": "John Doe",
        "url": "https://example.com/page",
        "page": "page-uuid",
        "comment": "This section needs clarification",
        "selector": ".content p:nth-child(3)",
        "selectorOffsetX": 15,
        "selectorOffsetY": 25,
        "pagePositionX": 200,
        "pagePositionY": 450,
        "timestamp": 1640995200,
        "lang": "en",
        "status": "OPEN",
        "replies": []
    }
}
```

**Error Responses:**
- `400`: Missing required fields, invalid selector format, or invalid data
- `401`: Unauthorized
- `403`: CSRF token invalid or disabled
- `404`: Page not found

### POST /loop/comment/reply

Add a reply to an existing comment.

**Request Body:**
```json
{
    "comment": "I'll handle this update",
    "parentId": 15
}
```

**Required Fields:**
- `comment` (string): The reply text (HTML stripped and sanitized)
- `parentId` (number): ID of the parent comment

**Response:**
```json
{
    "status": "ok",
    "reply": {
        "id": 3,
        "author": "John Doe",
        "comment": "I'll handle this update",
        "parentId": 15,
        "timestamp": 1640995800
    }
}
```

**Error Responses:**
- `400`: Missing required fields
- `401`: Unauthorized
- `403`: CSRF token invalid or disabled

### POST /loop/comment/resolve

Mark a comment as resolved.

**Request Body:**
```json
{
    "id": 15
}
```

**Required Fields:**
- `id` (number): The comment ID to resolve

**Response:**
```json
{
    "status": "ok",
    "success": true
}
```

**Error Responses:**
- `400`: Missing comment ID
- `401`: Unauthorized
- `403`: CSRF token invalid or disabled

### POST /loop/comment/unresolve

Mark a resolved comment as unresolved.

**Request Body:**
```json
{
    "id": 15
}
```

**Required Fields:**
- `id` (number): The comment ID to unresolve

**Response:**
```json
{
    "status": "ok",
    "success": true
}
```

**Error Responses:**
- `400`: Missing comment ID
- `401`: Unauthorized
- `403`: CSRF token invalid or disabled

### POST /loop/guest/name

Set a guest name for non-authenticated users (when public mode is enabled).

**Request Body:**
```json
{
    "name": "John Doe"
}
```

**Required Fields:**
- `name` (string): The guest user's name

**Response:**
```json
{
    "status": "ok",
    "name": "John Doe"
}
```

**Error Responses:**
- `400`: Missing or empty name
- `401`: Unauthorized
- `403`: CSRF token invalid or disabled

## Data Models

### Comment Object

```typescript
interface Comment {
    id: number;
    author: string;           // Resolved display name (user name, email prefix, or guest name)
    url: string;             // Full URL where comment was made
    page: string;            // Page UUID
    comment: string;         // Sanitized comment text
    selector: string;        // CSS selector for target element
    selectorOffsetX: number; // X offset within element (float)
    selectorOffsetY: number; // Y offset within element (float)
    pagePositionX: number;   // X position on page (float)
    pagePositionY: number;   // Y position on page (float)
    timestamp: number;       // Unix timestamp
    lang: string;           // Language code
    status: string;          // Status: OPEN, RESOLVED
    replies: Reply[];        // Array of replies
}
```

### Reply Object

```typescript
interface Reply {
    id: number;
    author: string;     // Resolved display name (user name, email prefix, or guest name)
    comment: string;    // Sanitized reply text
    parentId: number;   // Parent comment ID
    timestamp: number;  // Unix timestamp
}
```

## Error Handling

The api endpoints return consistent error responses. For more details, switch on the debug mode in your Kirby Installation.

```json
{
    "status": "error",
    "message": "Human-readable error message",
    "code": "ERROR_CODE"  // Optional error code
}
```

### Common Error Codes

- `CSRF_INVALID`: CSRF token is missing or invalid
- `PAGE_NOT_FOUND`: Specified page doesn't exist
- `FIELD_REQUIRED`: Required field is missing
- `UNAUTHORIZED`: Authentication required but not provided
- `INVALID_SELECTOR`: Invalid selector format
- `INVALID_NAME`: Invalid guest name
- `DISABLED`: Tool is disabled
