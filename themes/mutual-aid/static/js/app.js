// Mutual Aid List - Filtering and Sorting
(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const aidList = document.getElementById('aid-list');
        const locationFilter = document.getElementById('location-filter');
        const tagFilter = document.getElementById('tag-filter');
        const sortBy = document.getElementById('sort-by');
        const aidCards = Array.from(document.querySelectorAll('.aid-card'));

        if (!aidList || aidCards.length === 0) {
            return;
        }

        // Populate filter options
        populateFilters();

        // Add event listeners
        locationFilter.addEventListener('change', filterAndSort);
        tagFilter.addEventListener('change', filterAndSort);
        sortBy.addEventListener('change', filterAndSort);

        // Initialize
        filterAndSort();

        function populateFilters() {
            const locations = new Set();
            const tags = new Set();

            aidCards.forEach(card => {
                const location = card.dataset.location;
                const cardTags = card.dataset.tags;

                if (location) locations.add(location);

                if (cardTags) {
                    cardTags.split(',').forEach(tag => {
                        if (tag.trim()) tags.add(tag.trim());
                    });
                }
            });

            // Populate location filter
            Array.from(locations).sort().forEach(location => {
                const option = document.createElement('option');
                option.value = location;
                option.textContent = location;
                locationFilter.appendChild(option);
            });

            // Populate tag filter
            Array.from(tags).sort().forEach(tag => {
                const option = document.createElement('option');
                option.value = tag;
                option.textContent = tag;
                tagFilter.appendChild(option);
            });
        }

        function filterAndSort() {
            const selectedLocation = locationFilter.value;
            const selectedTag = tagFilter.value;
            const sortValue = sortBy.value;

            // Filter cards
            let visibleCards = aidCards.filter(card => {
                let show = true;

                // Location filter
                if (selectedLocation && card.dataset.location !== selectedLocation) {
                    show = false;
                }

                // Tag filter
                if (selectedTag) {
                    const cardTags = card.dataset.tags.split(',').map(t => t.trim());
                    if (!cardTags.includes(selectedTag)) {
                        show = false;
                    }
                }

                // Toggle visibility
                if (show) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }

                return show;
            });

            // Sort visible cards
            visibleCards.sort((a, b) => {
                switch (sortValue) {
                    case 'newest':
                        return new Date(b.dataset.created || 0) - new Date(a.dataset.created || 0);

                    case 'oldest':
                        return new Date(a.dataset.created || 0) - new Date(b.dataset.created || 0);

                    case 'name-asc':
                        return (a.dataset.name || '').localeCompare(b.dataset.name || '');

                    case 'name-desc':
                        return (b.dataset.name || '').localeCompare(a.dataset.name || '');

                    case 'location-asc':
                        return (a.dataset.location || '').localeCompare(b.dataset.location || '');

                    case 'location-desc':
                        return (b.dataset.location || '').localeCompare(a.dataset.location || '');

                    default:
                        return 0;
                }
            });

            // Re-append cards in sorted order
            visibleCards.forEach(card => {
                aidList.appendChild(card);
            });
        }
    });
})();
