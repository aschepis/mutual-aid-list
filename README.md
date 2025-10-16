# Mutual Aid List

This is a list of direct links to mutual aid needs (GoFundMe, etc) in
Massachusetts and New England. The focus of the list is to connect people with individuals who need mutual aid. This is driven by the federal government shutdown that is impacting many people across the country and also the increasing impact of ICE raids in our communities.

The site is modeled after [Operation Milkweed](https://operationmilkweed.org/).

Users can contribute links to mutual aid by creating a pull request on this repo. The pull request should be a new file in the `_data`. Ideally each mutual aid request is its own file, but this could be a single file called `mutual-aid-list.json` if Hugo is having trouble with the individual files. Each file should contain a JSON object with the following properties:

- `name`: The name of the mutual aid need
- `description`: A short description of the mutual aid need
- `link`: The direct link to the mutual aid need
- `location`: The location of the mutual aid need
- `tags`: An array of tags for the mutual aid need
- `created_at`: The date and time the mutual aid need was created
- `updated_at`: The date and time the mutual aid need was last updated

The `name` and `description` are required. The `link` is required. The `created_at` and `updated_at` are optional. If the `created_at` is not provided, it will be set to the current date and time. If the `updated_at` is not provided, it will be set to the current date and time.

The `name` should be a short, descriptive name for the mutual aid need. The `description` should be a short description of the mutual aid need. The `link` should be the direct link to the mutual aid need.

The `created_at` and `updated_at` are used to track the date and time the mutual aid need was created and last updated.

The `location` is the location of the mutual aid need. This must be in the form "[City], [State Code]". The `category` is the category of the mutual aid need. This can be a general category or a specific category. The `subcategory` is the subcategory of the mutual aid need. This can be a specific subcategory or a general subcategory.

`tags` is an array of tags for the mutual aid need. This could be a category, subcategory, or anything else that is relevant to the aid request.

Requirements:

- [ ] A pull request template that will be used to guide the creation of the pull request.
- [ ] Github actions to validate the pull request. The actions will check if the pull request is a valid JSON file and if the file is in the `_data` directory.
- [ ] built using Hugo and will be deployed to a GitHub Pages site using the `gh-pages` branch.
- [ ] Uses a clean, minimal design.
- [ ] A list of mutual aid requests based on the `_data` directory.
- [ ] sortable by name, location, date, newest/oldest
- [ ] filterable by tag, location
