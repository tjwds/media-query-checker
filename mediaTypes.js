const mediaTypes = {
    'any-hover': ['none', 'hover'],
    'any-pointer': ['none', 'coarse', 'fine'],
    // TODO aspect-ration
    // TODO color
    'color-gamut': ['srgb', 'p3', 'rec2020'], // TODO … it's complicated.
    // TODO 'color-index'
    'display-mode': ['fullscreen', 'standalone', 'minimal-ui', 'browser'],
    'forced-colors': ['none', 'active'],
    'grid': ['zero', 'one'], // TODO this one is special
    'hover': ['none', 'hover'],
    'inverted-colors': ['none', 'inverted'],
    // TODO monochrome
    'orientation': ['portrait', 'landscape'],
    'overflow-block': ['none', 'scroll', 'optional-paged', 'paged'],
    'overflow-inline': ['none', 'scroll'],
    'pointer': ['none', 'fine', 'coarse'],
    'prefers-color-scheme': ['light', 'dark'],
    'prefers-contrast': ['no-preference', 'more', 'less'],
    'prefers-reduced-motion': ['no-preference', 'reduce'],
    'prefers-reduced-transparency': ['no-preference', 'reduce'],
    // TODO resolution
    'scan': ['interlace', 'progressive'],
    'scripting': ['none', 'initial-only', 'enabled'],
    'update': ['none', 'slow', 'fast'],
    // TODO width
};

module.exports = mediaTypes;
