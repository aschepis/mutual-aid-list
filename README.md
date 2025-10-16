# Mutual Aid List

A directory of direct links to mutual aid needs (GoFundMe, fundraisers, etc.) in Massachusetts and New England. The focus is to connect people with individuals who need mutual aid, particularly those impacted by the federal government shutdown and the increasing impact of ICE raids in our communities.

**Live Site**: [https://aschepis.github.io/mutual-aid-list/](https://aschepis.github.io/mutual-aid-list/)

The site is modeled after [Operation Milkweed](https://operationmilkweed.org/).

## Features

- **Sortable**: Sort requests by newest, oldest, name, or location
- **Filterable**: Filter by location or tags
- **Responsive**: Clean, minimal design that works on all devices
- **Community-driven**: Anyone can add requests via pull request

## Contributing

We welcome contributions from the community! If you know someone who needs help, you can add their mutual aid request to this list.

### How to Add a Mutual Aid Request

1. **Fork this repository**

2. **Edit the data file**: Open `data/requests.json` and add a new entry to the array:

```json
{
  "name": "Short, descriptive name of the need",
  "description": "Brief description of the mutual aid need and situation",
  "link": "https://gofundme.com/example",
  "location": "City, MA",
  "tags": ["housing", "medical", "emergency"],
  "created_at": "2025-01-15T10:00:00Z",
  "updated_at": "2025-01-15T10:00:00Z"
}
```

3. **Submit a pull request**: Our automated checks will validate your submission

### Data Schema

Each mutual aid request must include:

| Field | Required | Format | Description |
|-------|----------|--------|-------------|
| `name` | ✅ Yes | String | Short, descriptive name for the mutual aid need |
| `description` | ✅ Yes | String | Brief description of the need |
| `link` | ✅ Yes | URL | Direct link to the mutual aid request (GoFundMe, etc.) |
| `location` | ⚠️ Recommended | String | Format: `"[City], [State Code]"` (e.g., `"Boston, MA"`) |
| `tags` | ⚠️ Recommended | Array | Tags like `["housing", "medical", "family"]` |
| `created_at` | Optional | ISO 8601 | Date created (defaults to current date if omitted) |
| `updated_at` | Optional | ISO 8601 | Date last updated (defaults to current date if omitted) |

### Example Tags

Common tags include:
- `housing`, `eviction`, `emergency`
- `medical`, `dental`, `health`, `cancer`
- `food`, `childcare`, `transportation`
- `family`, `veteran`, `disability`, `immigration`
- `federal-shutdown`, `funeral`

### Validation

When you submit a pull request, GitHub Actions will automatically:
- ✅ Validate JSON syntax
- ✅ Check for required fields (`name`, `description`, `link`)
- ✅ Verify location format if provided
- ✅ Ensure files are in the correct directory

### Questions?

Open an issue or reach out if you need help contributing!

## Local Development

To run the site locally:

```bash
# Clone the repository
git clone https://github.com/aschepis/mutual-aid-list.git
cd mutual-aid-list

# Start Hugo server
hugo server

# Site will be available at http://localhost:1313/mutual-aid-list/
```

## Built With

- [Hugo](https://gohugo.io/) - Static site generator
- Custom minimal theme
- GitHub Pages for hosting
- GitHub Actions for automated validation and deployment

## License

This project is open source and contributions are welcome.
