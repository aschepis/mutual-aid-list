## Mutual Aid Request Submission

Thank you for contributing to the Mutual Aid List! Please fill out the information below.

### Request Information

**Name of Request:**
<!-- Short, descriptive name for the mutual aid need -->

**Description:**
<!-- Brief description of the mutual aid need -->

**Direct Link:**
<!-- Direct link to GoFundMe, fundraiser, or mutual aid request -->

**Location:**
<!-- Format: [City], [State Code] - Example: Boston, MA -->

**Tags:**
<!-- Comma-separated tags - Examples: housing, medical, food, emergency, family, etc. -->

**Created Date:**
<!-- Date the request was created (YYYY-MM-DD format) or leave blank for current date -->

---

### Checklist

Before submitting, please ensure:

- [ ] I have added a new JSON file to the `data/` directory **OR** updated `data/requests.json`
- [ ] The JSON file contains all required fields: `name`, `description`, `link`
- [ ] The `location` field follows the format: "[City], [State Code]"
- [ ] The `link` is a direct link to the mutual aid request
- [ ] All JSON syntax is valid (you can check at [jsonlint.com](https://jsonlint.com))
- [ ] The request is for someone in Massachusetts or New England
- [ ] The request respects the privacy and dignity of the person in need

### Example JSON Format

```json
{
  "name": "Family Needs Emergency Housing Support",
  "description": "Brief description of the mutual aid need and situation",
  "link": "https://gofundme.com/example",
  "location": "Boston, MA",
  "tags": ["housing", "emergency", "family"],
  "created_at": "2025-01-15T10:00:00Z",
  "updated_at": "2025-01-15T10:00:00Z"
}
```

### Additional Notes

<!-- Any additional context or information about this request -->

---

**By submitting this PR, I confirm that:**
- This is a legitimate mutual aid request
- I have permission to share this information publicly
- The link directs to a trusted mutual aid platform
