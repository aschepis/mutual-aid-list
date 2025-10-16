# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based static site for listing mutual aid needs in Massachusetts and New England. The site connects people with individuals who need mutual aid, particularly those impacted by federal government shutdowns and ICE raids in communities. It is modeled after [Operation Milkweed](https://operationmilkweed.org/).

## Architecture

### Data-Driven Static Site
- Mutual aid requests are stored as JSON files in the `data/` directory (referred to as `_data` in README)
- Each mutual aid request can be an individual JSON file, or all requests can be in a single `mutual-aid-list.json` file
- Hugo processes these JSON files to generate the static site pages
- Site will be deployed to GitHub Pages using the `gh-pages` branch

### Data Schema
Each mutual aid entry must be a JSON object with:
- `name` (required): Short, descriptive name
- `description` (required): Short description of the need
- `link` (required): Direct link to the mutual aid request (GoFundMe, etc)
- `location`: Must be in format "[City], [State Code]"
- `tags`: Array of tags (categories, subcategories, or other relevant info)
- `created_at`: Date/time the request was created (defaults to current if omitted)
- `updated_at`: Date/time last updated (defaults to current if omitted)

## Development Commands

### Build and Serve
```bash
# Start Hugo development server with live reload
hugo server

# Build the site for production
hugo

# Build with drafts included
hugo -D
```

### Testing
The project requires GitHub Actions to validate pull requests:
- Validate JSON files are properly formatted
- Verify files are in the `data/` directory
- A pull request template needs to be created to guide contributions

## Site Requirements (In Development)

The site needs to implement:
1. Display list of mutual aid requests from the `data/` directory
2. Sorting capabilities: by name, location, date (newest/oldest)
3. Filtering: by tag and location
4. Clean, minimal design aesthetic

## Contribution Flow

Users contribute mutual aid links by:
1. Creating a new JSON file in `data/` directory with the required schema
2. Submitting a pull request
3. GitHub Actions validate the PR automatically
4. Upon merge, site rebuilds and deploys to GitHub Pages
