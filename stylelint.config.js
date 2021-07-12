module.exports = {
    "extends": [
        "stylelint-config-standard"
    ],
    "plugins": [
        "stylelint-order"
    ],
    "rules": {
        indentation: 4,
        'order/properties-order': [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "display",
            "width",
            "height"
        ],
        'no-descending-specificity': null,
        'no-empty-source': null,
        'declaration-colon-newline-after': null,
        'font-family-no-missing-generic-family-keyword': null
    }
}
